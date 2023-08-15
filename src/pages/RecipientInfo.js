import React, { useState } from "react";
import DonorReqCard from "../components/DonorReqCard";
import ProfileCard from "../components/ProfileCard";
import TableHeader_2 from "../components/TableHeader_2";
import Navbar from "../components/Navbar";
import RowCard from "../components/RowCard";
import { useQuery } from "@tanstack/react-query";
import { getDonors } from "../api/donor";
import { useParams } from "react-router-dom";
import { getRecipientById } from "../api/bloodRequest";

const RecipientInfo = () => {
  const [query, setQuery] = useState("");
  const { _id } = useParams();
  console.log(_id);
  const { data } = useQuery({
    queryKey: ["recipient", _id],
    queryFn: () => {
      return getRecipientById(_id);
    },
  });
  console.log(data);
  return (
    <div className="bg-white h-screen flex flex-col">
      <Navbar />

      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex justify-center items-center gap-32">
            <ProfileCard data={data} />
            <div>
              <p className=" font-bold text-black text-2xl ">Donors Requests</p>
              <div className="ml-8  top-[10px]  overflow-scroll w-[150%] h-[400px]">
                <TableHeader_2 data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientInfo;
