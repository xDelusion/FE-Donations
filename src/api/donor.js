import instance from ".";

const getDonors = async () => {
  const res = await instance.get("/donors");
  return res.data;
};

const getDonorById = async (donorId) => {
  const res = await instance.get(`/donors/${donorId}`);
  console.log(res);
  return res.data;
};

const addDonor = async (name) => {
  const res = await instance.post("/donors", name);
  return res.data;
};

export { getDonors, getDonorById, addDonor };
