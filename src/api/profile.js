import instance from ".";

const getMe = async () => {
  const res = await instance.get("/auth/me");
  return res.data;
};

export { getMe };
