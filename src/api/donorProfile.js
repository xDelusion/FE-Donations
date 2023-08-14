import instance from ".";

const getDonorById = async (donorId) => {
  const res = await instance.get(`/donors/${donorId}`);
  console.log(res);
  return res.data;
};

export { getDonorById };
