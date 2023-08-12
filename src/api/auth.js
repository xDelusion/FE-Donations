import instance from ".";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token);

  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/auth/register/admin", userInfo);
  storeToken(data.token);
  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
};

export { login, register, checkToken, logout };
