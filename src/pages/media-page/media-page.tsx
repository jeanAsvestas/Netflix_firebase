import { AxiosResponse } from 'axios';
import { useKeycloak } from '@react-keycloak/web';

import { useState } from 'react';
import firstObjectService from '../../services/first-service';
import tokenService from '../../services/token-service';
import {
  Asset,
  AssetTypes,
  Building,
  Floor,
} from '../../components/pb-component3/pb-component3';
import { Collapsilbe_List } from '../../components/collapsible-list/collapsible-list';

interface ListItems {
  id: string;
  display: string;
}
export const Media_Page = () => {
  const { keycloak } = useKeycloak();
  const [xPbAppId, setXPbAppId] = useState<string>('');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [types, setTypes] = useState<AssetTypes[]>([]);
  const [listItems, setListItems] = useState<ListItems[]>([]);
  const [listItemType, setListItemType] = useState<string>('');
  const postTheAssets = async (appId: string) => {
    const token = tokenService.getToken();
    try {
      if (token) {
        const res: AxiosResponse = await firstObjectService.postFirstObject(
          appId
        );
        setAssets(res.data.assets);
        setBuildings(res.data.buildings);
        setFloors(res.data.floors);
        setTypes(res.data.types);
        console.log(res.data.assets);
        console.log(res.data.buildings);
        console.log(res.data.floors);
        console.log(res.data.types);
      } else {
        keycloak.login();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const showTheAssets = () => {
    console.log(assets);
    setListItems(assets);
    setListItemType('Asset');
  };
  const showTheBuildinds = () => {
    console.log(buildings);
    setListItems(buildings);
    setListItemType('Building');
  };
  const showTheFloors = () => {
    console.log(floors);
    setListItems(floors);
    setListItemType('Floor');
  };
  const showTheAssetTypes = () => {
    console.log(types);
    setListItems(types);
    setListItemType('AssetType');
  };

  return (
    <>
      <input
        onChange={(e) => {
          setXPbAppId(e.target.value);
        }}
        type="text"
        placeholder="X-PB-App-Id"
      />
      <button onClick={() => postTheAssets(xPbAppId)}>
        Get assets with post
      </button>
      <button onClick={() => showTheAssets()}>Show Assets</button>
      <button onClick={() => showTheBuildinds()}>Show Buildinds</button>
      <button onClick={() => showTheFloors()}>Show Floors</button>
      <button onClick={() => showTheAssetTypes()}>Show AssetTypes</button>
      <Collapsilbe_List listItems={listItems} listItemType={listItemType} />
    </>
  );
};
