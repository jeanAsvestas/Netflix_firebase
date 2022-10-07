import Keycloak, { KeycloakConfig } from 'keycloak-js';

//has to change structure for error handling. Types forced to work.
const config = () => {
  if (process.env.REACT_APP_KEYCLOAK_SERVER === 'local') {
    const config = {
      url: process.env.REACT_APP_OAUTH2_LOCAL_URL,
      realm: process.env.REACT_APP_OAUTH2_LOCAL_REALM,
      clientId: process.env.REACT_APP_OAUTH2_LOCAL_CLIENTID,
    };
    return config;
  }
  if (process.env.REACT_APP_KEYCLOAK_SERVER === 'remote') {
    const config = {
      url: process.env.REACT_APP_OAUTH2_REMOTE_URL,
      realm: process.env.REACT_APP_OAUTH2_REMOTE_REALM,
      clientId: process.env.REACT_APP_OAUTH2_REMOTE_CLIENTID,
    };
    return config;
  }
};
const keycloak = new Keycloak(config() as KeycloakConfig);

export default keycloak;
