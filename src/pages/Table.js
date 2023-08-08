import React from "react";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-[55%] mx-auto">
          {/* head */}
          <thead className="bg-red-500">
            <tr className="text-zinc-50">
              <th></th>
              <th>Serial No.</th>
              <th>Voluntary Donations</th>
              <th>Donation Requests</th>
              <th>Blood Types</th>
              <th>
                <button>BloodType</button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>57481496</td>
              <td>4</td>
              <td>7</td>
              <td>B+</td>
              <button>BloodType</button>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>29768341</td>
              <td>2</td>
              <td>5</td>
              <td>A-</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>96174385</td>
              <td>7</td>
              <td>13</td>
              <td>O+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
