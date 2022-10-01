function getAccessToken() {
  return localStorage.getItem("Access_token");
}
function setAccessToken(token) {
  const strToken = JSON.stringify(token);
  localStorage.setItem("Access_token", strToken);
}
function removeAcessToken() {
  localStorage.removeItem("Access_token");
}

export { getAccessToken, setAccessToken, removeAcessToken };
