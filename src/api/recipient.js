import instance from ".";

const addRecipient = async (data) => {
  const res = await instance.post("/", data);
  return res.data;
};

const getAllRecipients = async () => {
  const res = await instance.get("/");
  return res.data;
};

export { addRecipient, getAllRecipients };
