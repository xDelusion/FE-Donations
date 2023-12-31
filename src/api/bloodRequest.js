import instance from "./index";

const getRecipientById = async (id) => {
  const res = await instance.get(`/recipient/${id}`);
  return res.data;
};

export { getRecipientById };
