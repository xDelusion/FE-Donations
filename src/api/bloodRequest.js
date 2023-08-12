import instance from "./index";

const getRecipientById = async (id) => {
  const res = await instance.get(`/recipients/${id}`);
  return res.data;
};

export { getRecipientById };
