let base_URL = 'http://localhost:8080/api/v1';

export const appURL = {
  login: `${base_URL}/user/login`,
  getAllUser: `${base_URL}/user`,
  
};
Object.freeze(appURL);
