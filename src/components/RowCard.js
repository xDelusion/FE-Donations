import React from "react";
import Svg from "../components/Svg";

const RowCard = ({
  index,
  donorSerialNo,
  voluntaryDonations,
  donationRequests,
  bloodType,
  urgent,
}) => {
  return (
    <>
      <tr className="">
        <th className="text-center align-middle relative">{index}</th>
        <td className="text-center align-middle">{donorSerialNo}</td>
        <td className="text-center align-middle">{voluntaryDonations}</td>
        <td className="text-center align-middle">{donationRequests}</td>
        <td className="text-center align-middle">{bloodType}</td>
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
    </>
  );
};

export default RowCard;
