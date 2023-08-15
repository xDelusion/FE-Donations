import React, { useState } from "react";
import RowCard from "./RowCard";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipients } from "../api/recipient";

const DonorLists = () => {
  const [query, setQuery] = useState("");

  const { data: recipients, error } = useQuery({
    queryKey: ["recipients"],
    queryFn: () => getAllRecipients(),
  });

  return (
    <div className="flex justify-around rounded-xl">
      <table className="table w-[25%] mb-32 rounded-xl overflow-hidden">
        {/* head */}
        <thead className="bg-red-500">
          <tr className="text-zinc-50">
            <th></th>
            <th className="text-center align-middle">Name</th>
            <th className="text-center align-middle">Voluntary Donations</th>
            <th className="text-center align-middle">
              Donation to this Recipient
            </th>
            <th className="text-center align-middle">Blood Type</th>
            <th className="text-center align-middle">Set Appointment</th>
          </tr>
        </thead>
        {/* row 1 */}
        {recipients
          ?.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
          .map((recipient, index) => {
            console.log(recipient);
            return (
              <tbody className="bg-white">
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
      <table className="table w-[25%] mb-32 rounded-xl overflow-hidden">
        {/* head */}
        <thead className="bg-red-500">
          <tr className="text-zinc-50">
            <th></th>
            <th className="text-center align-middle">Name</th>
            <th className="text-center align-middle">Voluntary Donations</th>
            <th className="text-center align-middle">
              Donation to this Recipient
            </th>
            <th className="text-center align-middle">Blood Type</th>
            <th className="text-center align-middle">Set Appointment</th>
          </tr>
        </thead>
        {/* row 1 */}
        {recipients
          ?.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
          .map((recipient, index) => {
            console.log(recipient);
            return (
              <tbody className="bg-white">
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
  );
};

export default DonorLists;
