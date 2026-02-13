// dndbox.jsx
import React, { useState } from "react";

const intialstate = {
  Todo: ["read book", "write code", "drink water", "fix merge requests"],
  InProgress: ["working on dnd project", "learning nodejs"],
  Completed: ["js course lectures", "setting-up project"],
};

const DndBox = () => {
  const [data, newData] = useState(intialstate);

  return (
    <div className=" flex flex-row justify-around  ">
      {Object.keys(data).map((columns) => {
        return (
          <div className=" mt-8 py-8  px-4 sm:px-8 border border-black bg-gray-200 ">
            <h1 className="text-2xl p-2 font-semibold text-center">{columns}</h1>
            {data[columns].map((item, idx) => {
              return (
                <div className="border p-4 mb-1 bg-white text-center" key={idx}>
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DndBox;
