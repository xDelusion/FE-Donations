import React, { useState } from "react";
import DatePicker from "react-datepicker";

const DonateCard = () => {
  const [selectedDate, setselectedDate] = useState(null);
  const onChange = (selectedDate) => {
    setselectedDate(selectedDate);
  };
  const showDatepicker = () => {};

  return (
    <div
      className="w-[1325px] h-[113px] left-[53px] top-[1208px] bg-white rounded-[12px]"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className=" w-[357px] h-[53px] left-[91px] top-[666px] bg-[#FFFFFF] border-solid-[#9D0303] ">
        {/* {user.name} */}
      </div>

      <button
        className=" w-[173px] h-[37.2px] left-[552.14px] top-[674.03px] bg-[#FFFFFF] border-solid-[#9D0303] absolute"
        // onClick={DonorDetail}
      >
        Doner Details
      </button>

      <DatePicker
        className=" w-[137px] h-[37.2px] left-[847px] top-[672.85px]"
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
      />
      {/* <button onClick={url(calander)}> </button> */}
      <button className="w-[] h-[] left-[] top-[] bg-red-900"> Save </button>
    </div>
  );
};

export default DonateCard;
