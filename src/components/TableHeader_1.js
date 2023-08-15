import React from "react";

const TableHeader_1 = () => {
  return (
    <div>
      <thead className="bg-red-600 text-2xl">
        <tr className="text-zinc-50">
          <th></th>
          <th className="text-center align-middle">Name</th>
          <th className="text-center align-middle">Voluntary Donations</th>
          <th className="text-center align-middle">Donation Requests</th>
          <th className="text-center align-middle">Blood Types</th>
          <th className="text-center align-middle">Set Appointment</th>
        </tr>
      </thead>
    </div>
  );
};

export default TableHeader_1;
