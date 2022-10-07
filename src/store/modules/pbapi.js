// import Keycloak from 'keycloak-js';

/*
keycloak-js

properties:
===========
token

methods:
========
init
login
createLoginUrl
logout
createLogoutUrl
register
createRegisterUrl
accountManagement
createAccountUrl
hasRealmRole
hasResourceRole
loadUserProfile
isTokenExpired
updateToken
clearToken

callback:
=========
onReady(authenticated) - Called when the adapter is initialized.
onAuthSuccess - Called when a user is successfully authenticated.
onAuthError - Called if there was an error during authentication.
onAuthRefreshSuccess - Called when the token is refreshed.
onAuthRefreshError - Called if there was an error while trying to refresh the token.
onAuthLogout - Called if the user is logged out (will only be called if the session status iframe is enabled, or in Cordova mode).
onTokenExpired - Called when the access token is expired. If a refresh token is available the token can be refreshed with updateToken, or in cases where it is not (that is, with implicit flow) you can redirect to login screen to obtain a new access token.
*/
// export default {
//   namespaced: true,
//   state: () => ({
//     keycloak: new Keycloak({
//       realm: process.env.REACT_APP_OAUTH2_REALM,
//       clientId: process.env.REACT_APP_OAUTH2_CLIENTID,
//       url: process.env.REACT_APP_OAUTH2_URL,
//     }),
//     username: null,
//     password: null,
//     basicAuth: process.env.REACT_APP_BASIC_AUTH.toLowerCase() == 'true',
//   }),
//   getters: {
//     authorization: (state) =>
//       state.basicAuth
//         ? 'Basic ' + btoa(state.username + ':' + state.password)
//         : `Bearer ${state.keycloak.token}`,
//   },
//   mutations: {
//     basicCredential(state, credential) {
//       state.username = credential.username;
//       state.password = credential.password;
//     },
//   },
// };
