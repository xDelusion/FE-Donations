import React, { useState } from "react";
import { getDonorById } from "../api/donorProfile";
import { useQuery } from "@tanstack/react-query";

const DonorProf = () => {
  const {
    data: donor_req_id,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["donor_req_id", "donorId"],
    queryFn: () => getDonorById("donorId"),
  });
  // const data = [
  //   {
  //     question: "HELLO WORLD",
  //     answer: "HELLO HI",
  //   },
  //   {
  //     question: "HELLO WORLD",
  //     answer: "HELLO HI",
  //   },
  //   {
  //     question: "HELLO WORLD",
  //     answer: "HELLO HI",
  //   },
  //   {
  //     question: "HELLO WORLD",
  //     answer: "HELLO HI",
  //   },
  // ];

  // };

  return (
    <div className="min-w-screen  min-h-screen   bg-gray-100 p-[30px] flex flex-col">
      <div className="w- h-[70vh] rounded-[12px] bg-white flex flex-col overflow-hidden p-[30px]">
        <div className=" w-full h-full flex">
          <div className="w-full ">
            <img
              className="rounded-[100%]  w-[200px] h-[200px] object-scale-fill"
              src={
                "data:image/jpeg;base64,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"
              }
            />
          </div>
          <div className="w-[100%] h-[90%]  bg-[#D9D9D9]  ">
            <div className=" w-full h-full flex flex-col justify-center items-start">
              <div className="flex justify-around w-full text-left ">
                <h4> Matching Blood Types</h4>
                <h4>{donor_req_id.matchingTypes}</h4>
              </div>
              <div className="flex justify-around w-full">
                <div className="text-[30px]">{donor_req_id.noOfBloodBags}</div>
                <div className="text-[30px]">{donor_req_id.createdAt}</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full">
          <div
            className="Rectangle 39909 w-[100%] h-[100%]  bg-[#D9D9D9] flex justify-center items-center "
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div className="flex flex-col gap-5">
              <div>{`Name: ${donor_req_id.name}`} </div>
              <div>{`DOB: ${donor_req_id.dob}`}</div>
              <div>Hospital:Blood Bank</div>
            </div>

            <div className="flex flex-col gap-5">
              <div>{`CivilID: ${donor_req_id.civilid}`}</div>
              <div>{`Mobile: ${donor_req_id.phone}`}</div>
              <div>{`Last Donation: ${donor_req_id.lastDonation}`} </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>{`Blood Type: ${donor_req_id.bloodType}`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px] text-[35px] font-bold justify-center ">
        Questions
      </div>

      <div className="w- h-[70vh] rounded-[12px] bg-white flex flex-col overflow-hidden p-[30px]">
        {/* WHEN THERE IS DATA SHOW THEM HERE */}
        {donor_req_id?.QA}
        {/* {data.map((q) => {
                  return (
                    <div className="border border-black rounded-md">
                      {q.question}
                      <div>{q.answer}</div>
                    </div>
                  );
                })} */}
      </div>

      <div>
        <button
          className="w-[173px] h-[37.2px] left-[552.14px] top-[674.03px] bg-red-900"
          onClick={handleClick}
        >
          Confirm Donation
        </button>
      </div>
    </div>
  );
};

export default DonorProf;
