import moment from "moment";
import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="w-full">
      <div className="card bg-gray-200 text-black  flex flex-col justify-start mt-[5%] shadow-2xl">
        <div className="card-body flex flex-col items-start">
          <div className="flex justify-between">
            <div>
              <img
                src="https://www.svgrepo.com/show/111896/avatar.svg"
                className="w-[42%] rounded-full ml-[30%]"
              />
              <div className="">
                <p className="mt-[10%] font-bold">{data?.name}</p>
                <p className="mt-[2%] font-semibold">
                  {moment(data?.dob).format("MMM Do YY")}
                </p>
                <p className="mt-[10%] font-medium">Blood Type</p>
                <p className="mt-[2%]">{data?.bloodType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
