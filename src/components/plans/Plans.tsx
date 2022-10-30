import './Plans.scss';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
  addDoc,
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore';
import { selectUser } from '../../app/store/userReducer';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

// import { QuerySnapshot } from '@firebase/firestore/dist/lite';

interface ProductsInterface {
  active?: boolean;
  description?: string;
  images?: string[];
  name?: string;
  role?: string | null;
  tax_code?: string | null;
  prices: PricesInterface;
}

interface PricesInterface {
  priceId: string;
  priceData: DocumentData;
}

interface SubscriptionInterface {
  role: string;
  current_period_start: number;
  current_period_end: number;
}

export const Plans = () => {
  const [products, setProducts] = useState<{
    [key: string]: ProductsInterface;
  }>();
  const user = useSelector(selectUser);
  const [subscription, setSubscription] =
    useState<SubscriptionInterface | null>(null);

  useEffect(() => {
    async function getActiveProduct() {
      const q = query(collection(db, 'products'), where('active', '==', true));
      const products: { [key: string]: ProductsInterface } = {};
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (product) => {
        // console.log(product.id);
        products[product.id] = product.data() as ProductsInterface;
        const qPrice = query(collection(product.ref, 'prices'));
        const priceSnapshot = await getDocs(qPrice);
        priceSnapshot.forEach((price) => {
          products[product.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    }
    getActiveProduct();
  }, []);

  useEffect(() => {
    async function getActiveSubscription() {
      if (user) {
        const custRef = doc(db, 'customers', user.id);
        console.log(custRef.id);
        const subsRef = collection(custRef, 'subscriptions');

        const q = query(subsRef, where('status', '==', 'active'));
        const activeRef = await getDocs(q);
        console.log(activeRef);
        activeRef.forEach((doc) => {
          setSubscription({
            role: doc.data().role,
            current_period_start: doc.data().current_period_start.seconds,
            current_period_end: doc.data().current_period_end.seconds,
          });
        });
        console.log('test');
      }
    }
    getActiveSubscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const loadCheckout = async (priceId: string) => {
    if (user) {
      const custRef = doc(db, 'customers', user.id);
      console.log(custRef);
      const sesRef = collection(custRef, 'checkout_sessions');

      const sessionRef = await addDoc(sesRef, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
      console.log(sessionRef);
      onSnapshot(sessionRef, async (d: DocumentSnapshot<DocumentData>) => {
        const { sessionId, error } = d.data() as DocumentData;
        if (error) {
          // const { error } = d.data();
          alert(`An error occured: ${error.message}`);
        }
        if (sessionId) {
          const stripe = await loadStripe(
            'pk_test_51LwOZsJzcZCvpZLLwzxCGmywyCwtGOS1NF3CjiIvTUAHT8PiVWVUBwENPYoPjNufnZAREmVFehSxxZlukugXpAdc00etHQxSx6'
          );
          stripe?.redirectToCheckout({ sessionId });
        }
      });
    }
  };

  return (
    <div className="plans-container">
      {subscription && (
        <p>{`Renewal date: ${new Date(
          subscription.current_period_end * 1000
        ).toLocaleDateString()}`}</p>
      )}

      {products &&
        Object.entries(products).map(([productId, productData]) => {
          let isActiveSubscription = false;
          if (subscription) {
            if (productData.name?.toLowerCase().includes(subscription.role)) {
              isActiveSubscription = true;
            }
          }
          return (
            <div className="plans-container__plan" key={productId}>
              <div className="plans-container__infor">
                <h5>{productData.name}</h5>
                <h5>{productData.description}</h5>
              </div>
              {isActiveSubscription ? (
                <span className="plans-container__current-package">
                  Current Package
                </span>
              ) : (
                <button
                  onClick={() => loadCheckout(productData.prices.priceId)}
                >
                  Subscribe
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
};
