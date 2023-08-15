import React, { useState } from "react";
import Appointment from "./Appointment";

const TableHeader_2 = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <table className="table rounded-2xl mb-32 mt-9 overflow-hidden">
          {/* head */}
          <thead className="bg-red-600 text-xl">
            <tr className="text-zinc-50">
              <th></th>
              <th className="text-center align-middle">Name</th>
              <th className="text-center align-middle"> </th>
              <th className="text-center align-middle"> </th>
              <th className="text-center align-middle">
                Schedule an Appointment       
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.donor_id?.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => {
                        // the user should go here
                        setShow(user);
                      }}
                    >
                      Book Appointment
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
