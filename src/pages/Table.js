import React, { useState } from "react";
import RowCard from "../components/RowCard";
import { getDonors } from "../api/list";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipients } from "../api/recipient";

import Svg from "../components/Svg";

const Table = () => {
  const [query, setQuery] = useState("");
  const [dropDown, setDropDown] = useState("");
  const { data: recipients, error } = useQuery({
    queryKey: ["recipients"],
    queryFn: () => getAllRecipients(),
  });

  console.log(query);
  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl ..."> </p>
        <p className="text-5xl ...">Recipients</p>
        <p className="text-5xl ..."> </p>
        <div className="overflow-x-auto">
          <input onChange={(e) => setQuery(e.target.value)}></input>
          <select
            onChange={(e) => {
              setDropDown(e.target.value);
            }}
          >
            <option value={"A+"}>A+</option>
            <option value={"A-"}>A-</option>
            <option value={"B+"}>B+</option>
            <option value={"B-"}>B-</option>
            <option value={"AB+"}>AB+</option>
            <option value={"AB-"}>AB-</option>
            <option value={"O+"}>O+</option>
            <option value={"O-"}>O-</option>
          </select>
          <table className="table w-[45%] mx-auto rounded-lg mb-32 mt-9">
            {/* head */}
            <thead className="bg-red-600 text-2xl">
              <tr className="text-zinc-50">
                <th></th>
                <th className="text-center align-middle">Name</th>
                <th className="text-center align-middle">
                  Voluntary Donations
                </th>
                <th className="text-center align-middle">Donation Requests</th>
                <th className="text-center align-middle">Blood Types</th>
                <th className="text-center align-middle">Set Appointment</th>
              </tr>
            </thead>
            <tr className="bg-white">
              <th className="text-center align-middle relative">index</th>
              <td className="text-center align-middle">donorSerialNo</td>
              <td className="text-center align-middle">voluntaryDonations</td>
              <td className="text-center align-middle">donationRequests</td>
              <td className="text-center align-middle">bloodType</td>
              <td className="text-center align-middle">
                <div className="flex items-center justify-center mt-2">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-gray-700 hover:bg-green-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-green-700"
                  >
                    <Svg />
                  </button>
                </div>
              </td>
            </tr>
            {/* row 1 */}
            {recipients
              ?.filter((r) => r.bloodType.includes(dropDown))
              ?.filter((r) =>
                r.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((recipient, index) => {
                console.log(recipient);
                return (
                  <tbody className="bg-white" key={index}>
                    <RowCard
                      index={index}
                      donorSerialNo={recipient.name}
                      voluntaryDonations={0}
                      donationRequests={recipient.donor_id.length}
                      bloodType={recipient.bloodType}
                      urgent={recipient.urgent}
                    />
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
