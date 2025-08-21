import React from "react";

export const HeaderWidget = ({ value, onSearch }) => {
  const _handleSearch = (e) => {
    let text = e.target.value;
    onSearch(text);
  };

  return (
    <div className="w-full max-w-6xl mt-24 ">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">
        เที่ยวไหนดี
      </h1>
      <div className="w-full ">
        <div className="w-full flex flex-col mb-8">
          <div className=" text-sm text-black mb-2">ค้นหาที่เที่ยว</div>
          <input
            className="w-full text-center p-3  border-b-2 border-b-gray-400 focus:border-b-blue-500 focus:outline-none"
            name="search"
            value={value}
            placeholder={"หาที่เที่ยวแล้วไปกัน..."}
            onChange={_handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
