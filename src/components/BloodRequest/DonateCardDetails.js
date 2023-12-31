import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import DonorDetail from "../ProfileCard";

const DonateCardDetails = ({
  donerDetails = {
    name: "Noura Alhamdan",
  },
}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="w-full h-[20vh]  bg-white rounded-[12px] flex p-4 justify-between">
        <div className="w-[49%] h-full  flex justify-between items-center">
          <div className="w-[49%] h-[60%] border border-red-700  rounded-lg flex justify-center items-center">
            <p className="text-[20px]">{donerDetails.name}</p>
          </div>
          <div className="w-[49%] h-[60%] border border-red-700 rounded-lg  flex justify-center items-center  ">
            <button className="text-[20px]" onClick={DonorDetail}>
              Donor Details
            </button>
          </div>
        </div>

        <div className="w-[49%] h-full  flex justify-between ">
          <div className="w-[40%] h-full  flex items-center">
            <div className="w-[100%] h-[60%] border border-red-700 rounded-lg  flex justify-center items-center   ">
              <p className="text-[20px]">
                {moment(value).format("YYYY MM DD")}
              </p>
            </div>
          </div>
          <div className="w-[20%] h-full  flex items-center">
            {/* <Calendar /> */}
            <svg
              onClick={() => setShowCalender(true)}
              width="122"
              height="88"
              viewBox="0 0 122 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className=" ml-auto mr-auto cursor-pointer"
            >
              <rect
                width="121.395"
                height="87.3108"
                rx="8"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_57_920"
                    transform="matrix(0.00104167 0 0 0.00144832 0 -0.195191)"
                  />
                </pattern>
                <image
                  id="image0_57_920"
                  width="960"
                  height="960"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div className="w-[40%] h-full  flex items-center">
            <div className="w-[100%] h-[60%] border border-red-800 bg-red-700 rounded-lg  flex justify-center items-center   ">
              <button className="text-[20px]" onClick={() => {}}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCalender && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center ">
          <div className="w-[40vw] h-[60vh] bg-white rounded-2xl flex justify-center items-center  flex-col relative">
            <Calendar onChange={onChange} value={value} />
            <div className="flex gap-3 absolute bottom-3 right-3">
              {/* <button
                className="w-[90px] border border-black rounded-md bg-red-300"
                onClick={() => setShowCalender(false)}
              >
                Close
              </button> */}
              <button
                className="w-[90px] border border-black rounded-md bg-gray-300 "
                onClick={() => setShowCalender(false)}
                {...{ disabled: false }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

{
  /* <div className=" w-[357px] h-[53px] left-[91px] top-[666px] bg-[#FFFFFF] border-solid-[#9D0303] "> */
}
{
  /* {user.name} */
}
{
  /* </div> */
}

{
  /* <button */
}
// className=" w-[173px] h-[37.2px] left-[552.14px] top-[674.03px] bg-[#FFFFFF] border-solid-[#9D0303] absolute"
// onClick={DonorDetail}
// >
{
  /* {" "}
Doner Details{" "}
</button> */
}

{
  /* <DatePicker
className=" w-[137px] h-[37.2px] left-[847px] top-[672.85px]"
selected={selectedDate}
onChange={onChange}
dateFormat="MM/dd/yyyy"
/> */
}
{
  /* <button onClick={url(calander)}> </button> */
}
{
  /* <button className="w-[] h-[] left-[] top-[] bg-red-900"> Save </button> */
}
export default DonateCardDetails;
