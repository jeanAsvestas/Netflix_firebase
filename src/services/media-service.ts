import axiosBearer from './axiosBearer';

const url = 'http://149.81.180.82:8080/api/rest2/protected/media/2021_09/';
type Methods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

const getMediaFile = (entiryId: string, entityType: string) => {
  const res = axiosBearer.get(`${url}${entityType}/${entiryId}`, {});
  return res;
};

const deleteMediaFile = (entityId: string, entityType: string) => {
  const res = axiosBearer.delete(`${url}${entityType}/${entityId}`, {});
  return res;
};

const addEditMediaFile = (
  method: Methods,
  entiryId: string,
  entityType: string,
  mediaDisplayid: string,
  entityImgFile: FormData // will try type string as well
) => {
  const res = axiosBearer[method](
    `${url}${entityType}/${entiryId}/${mediaDisplayid}`,
    entityImgFile,
    {}
  );
  return res;
};

export const mediaService = {
  getMediaFile,
  addEditMediaFile,
  deleteMediaFile,
};
