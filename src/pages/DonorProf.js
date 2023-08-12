import React from "react";

const DonorProf = () => {
  return (
    <div>
      <div className="card w-[35%] bg-white text-black rounded-2xl">
        <div className="card-body flex flex-col items-start">
          <div className="flex justify-between">
            <div>
              <img
                src="https://www.svgrepo.com/show/111896/avatar.svg"
                className="w-[42%] rounded-full ml-[30%]"
              />
              <div className="">
                <p className="mt-[10%]">FirstN LastN</p>
                <p className="mt-[2%]">dd/mm/yyyy</p>
                <p className="mt-[10%]">Email</p>
                <p className="mt-[2%]">email@email.com</p>
              </div>
            </div>
            <div className="">
              <p className="mt-[10%]">No. of Donation</p>
              <p className="mt-[2%]">7</p>
              <p className="mt-[23%]">Recent Donation</p>
              <p className="mt-[2%]">dd/mm/yyyy</p>
              <p className="mt-[23%]">Blood Type</p>
              <p className="mt-[2%]">B+</p>
              <p className="mt-[23%]">Phone No.</p>
              <p className="mt-[2%]">+965 00000000</p>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          {/* <button className="btn">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default DonorProf;
