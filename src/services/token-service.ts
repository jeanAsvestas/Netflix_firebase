const getToken = () => {
  const token = sessionStorage.getItem('pb-kc-token');
  return token;
};

const tokenService = {
  getToken,
};

export default tokenService;
