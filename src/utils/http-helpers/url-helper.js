export const attachParams = (baseUrl, params) => {
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  return url;
};

export const getAllTransactionsUrl = (baseUrl, params = null) => {
  let url = `${baseUrl}`;
  if (params) {
    return attachParams(url, params);
  }
};
