import React, { useState } from "react";
import Appointment from "./Appointment";
import Svgs from "./Svgs/calendar";

const TableHeader_2 = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <table className="table rounded-2xl mb-32 mt-9 overflow-hidden">
          {/* head */}
          <thead className="bg-red-500 text-xl">
            <tr className="text-zinc-50">
              <th className="font-normal">#</th>
              <th className="text-left align-middle min-w-[200px] font-light">
                Name
              </th>
              <th className="text-center align-middle font-light">
                Schedule an Appointment
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {data?.donor_id?.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>

                  <td className="flex justify-center w-[90%]">
                    <button
                      className="focus:outline-none text-white bg-gray-700 hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-white"
                      onClick={() => {
                        // the user should go here
                        setShow(user);
                      }}
                    >
                      <Svgs />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {show && (
        <div className="absolute inset-0 bg-black/90 flex justify-center items-center ">
          <div className="w-full h-full " onClick={() => setShow(false)}></div>
          <div className="z-[100000] absolute">
            <Appointment data={show} setShow={setShow} />
          </div>
        </div>
      )}
    </>
  );
};

export default TableHeader_2;
