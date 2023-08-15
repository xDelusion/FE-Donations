import React from "react";
import Svgs from "./Svgs/arrow";
import { useNavigate } from "react-router-dom";

const RowCard = ({
  index,
  donorSerialNo,
  voluntaryDonations,
  donationRequests,
  bloodType,
  urgent,
  recipient,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="">
        <th className="text-center align-middle relative">{index}</th>
        <td className="text-center align-middle">{donorSerialNo}</td>
        <td className="text-center align-middle">{donationRequests}</td>
        <td className="text-center align-middle">{bloodType}</td>
        <td className="text-center align-middle">
          <div className="flex items-center justify-center mt-2">
            <button
              type="button"
              onClick={() => {
                navigate(`/recipientID/${recipient._id}`);
              }}
              className="focus:outline-none text-white bg-gray-700 hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-white"
            >
              <Svgs />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowCard;
