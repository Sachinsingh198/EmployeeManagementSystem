import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />

      <div>
        <form
          className="flex w-full flex-wrap items-start justify-between bg-[#1c1c1c] p-8 rounded-xl"
        >
          <div className="w-1/2 pr-4">
            <div className="mb-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-400 text-gray-400"
                type="date"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-1/2 pl-4 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              cols={30}
              rows={10}
            ></textarea>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-10">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
