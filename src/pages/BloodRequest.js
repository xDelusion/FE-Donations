import React from "react";
import { BloodRequestInfo } from "../components/BloodRequestInfo";
import RecipientProfile from "../components/BloodRequest/RecipientProfile";
import DonateCard from "../components/DonateCard";
import DonateCardDetails from "../components/BloodRequest/DonateCardDetails";
import NavBar from "../components/Navbar";

const BloodRequest = () => {
  const recipients = {};
  return (
    <div>
      <NavBar />
      <div className="min-w-screen  min-h-screen   bg-gray-100 p-[30px] flex flex-col">
        <RecipientProfile />

        <div className="mb-[100px] text-[35px] font-bold justify-center ">
          Donors wants to donate to this Recipient
        </div>
        <DonateCardDetails />

        {/* <div className="mt-[100px]">SPACE</div> */}
      </div>
    </div>
  );
};

export default BloodRequest;
