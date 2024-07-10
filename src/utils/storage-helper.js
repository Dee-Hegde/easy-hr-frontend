export const setSessinStorage = (key, value) => {
  sessionStorage.setItem(key, value);
};
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};
export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
export const removeSSItem = (key) => {
  sessionStorage.removeItem(key);
};
export const clearStorage = () => {
  sessionStorage.clear();
  localStorage.clear();
};
