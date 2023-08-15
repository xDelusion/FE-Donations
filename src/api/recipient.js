import instance from ".";

const addRecipient = async (data) => {
  console.log("data", data);
  const res = await instance.post("/recipient", data);
  return res.data;
};

const getAllRecipients = async () => {
  const res = await instance.get("/recipient");
  return res.data;
};

export { addRecipient, getAllRecipients };
