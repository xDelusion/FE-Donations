import React from "react";
import RowCard from "../components/RowCard";

const Table2 = () => {
  return (
    <div>
      <p className="text-5xl ..."> </p>
      <p className="text-5xl ...">Matching Donors</p>
      <p className="text-5xl ..."> </p>
      <div className="overflow-x-auto">
        <table className="table w-[45%] mx-auto rounded-lg overflow-hidden">
          {/* head */}
          <thead className="bg-red-500">
            <tr className="text-zinc-50">
              <th></th>
              <th class="text-center align-middle">Name</th>
              <th class="text-center align-middle">Blood Type</th>
              <th class="text-center align-middle">Donation Requests</th>
              <th class="text-center align-middle">Blood Types</th>
              <th class="text-center align-middle">Set Appointment</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <RowCard
              index="1"
              donorSerialNo="57481496"
              voluntaryDonations="4"
              donationRequests="7"
              bloodType="B+"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
