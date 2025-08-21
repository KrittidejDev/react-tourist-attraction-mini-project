import React from "react";
import { TravelCard } from "../Cards/TravelCard";

export const CardListWidget = ({ data, onClickTag }) => {
  console.log("card data", data);

  return (
    <div className="w-full max-w-6xl flex flex-col gap-y-6  ">
      {data &&
        data.map((e) => (
          <div key={e.id}>
            <TravelCard data={e} onClickTag={onClickTag} />
          </div>
        ))}
    </div>
  );
};
