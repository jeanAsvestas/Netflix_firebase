import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import './i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
