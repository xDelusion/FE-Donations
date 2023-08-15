import React, { useState } from "react";
import RowCard from "../components/RowCard";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipients } from "../api/recipient";
import Navbar from "../components/Navbar";
import Svg from "../components/Svgs";

const Table = () => {
  const [query, setQuery] = useState("");
  const [dropDown, setDropDown] = useState("");
  const { data: recipients, error } = useQuery({
    queryKey: ["recipients"],
    queryFn: () => getAllRecipients(),
  });

  console.log(query);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl ..."> </p>
        <p className="text-5xl text-black ...">Recipients</p>
        <p className="text-5xl ..."> </p>
        <div className="overflow-x-auto rounded-lg">
          <div className="flex justify-between ">
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-l-2 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 border-r-0 dark:bg-gray-200 dark:border-l-gray-400  dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
            ></input>
            <select
              className="rounded-r-lg bg-slate-300 text-black border border-gray-400 border-l-0"
              onChange={(e) => {
                setDropDown(e.target.value);
              }}
              placeholder="Blood Type"
            >
              <option value="" disabled selected>
                Blood Type
              </option>

              <option className="text-center" value={"A+"}>
                A+
              </option>
              <option className="text-center" value={"A-"}>
                A-
              </option>
              <option className="text-center" value={"B+"}>
                B+
              </option>
              <option className="text-center" value={"B-"}>
                B-
              </option>
              <option className="text-center" value={"AB+"}>
                AB+
              </option>
              <option className="text-center" value={"AB-"}>
                AB-
              </option>
              <option className="text-center" value={"O+"}>
                O+
              </option>
              <option className="text-center" value={"O-"}>
                O-
              </option>
            </select>
          </div>
          <table className="table rounded-2xl mb-32 mt-9 overflow-hidden shadow-xl">
            {/* head */}
            <thead className="bg-red-600 text-lg">
              <tr className="text-zinc-50">
                <th className="shadow-2xl">#</th>
                <th className="text-center align-middle font-normal">Name</th>
                <th className="text-center align-middle font-normal">
                  Voluntary Donations
                </th>
                <th className="text-center align-middle font-normal">
                  Donation Requests
                </th>
                <th className="text-center align-middle font-normal">
                  Blood Types
                </th>
                <th className="text-center align-middle font-normal">
                  Set Appointment
                </th>
              </tr>
            </thead>

            {/* row 1 */}

            {recipients &&
              recipients
                .filter((r) => {
                  if (dropDown && r.bloodType) {
                    return r.bloodType.includes(dropDown);
                  }
                  return true; // Include all if dropDown is not selected or bloodType is undefined
                })
                .filter((r) => {
                  if (query && r.name) {
                    return r.name.toLowerCase().includes(query.toLowerCase());
                  }
                  return true; // Include all if query is not provided or name is undefined
                })
                .map((recipient, index) => {
                  console.log(recipient);
                  return (
                    <tbody className="bg-zinc-100 text-black" key={index}>
                      <RowCard
                        index={index}
                        donorSerialNo={recipient.name}
                        voluntaryDonations={0}
                        donationRequests={recipient.donor_id.length}
                        bloodType={recipient.bloodType}
                        urgent={recipient.urgent}
                        recipient={recipient}
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
