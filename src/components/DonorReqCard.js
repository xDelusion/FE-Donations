import React from "react";
import { Link } from "react-router-dom";

const DonorReqCard = () => {
  return (
    <div>
      <Link to="/">
        <div className="bg-[#0CBEB3] h-14 flex-wrap mt-2 rounded-full  flex border-white border-4">
          <div className="drop-shadow-md bg-[#69B23D] h-full w-[55%] flex-wrap  rounded-full justify-center items-center flex text-black">
            donor.name
          </div>
          <div className="justify-center items-center flex text-black w-[40%]">
            donateReq.date
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonorReqCard;
