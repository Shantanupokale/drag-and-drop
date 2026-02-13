// dndbox.jsx
import React, { useRef, useState } from "react";

const intialstate = {
  Todo: [
    "read book",
    "write code",
    "drink water",
    "clean desk",
    "watch tutorial",
  ],

  InProgress: [
    "working on dnd project",
    "learning nodejs",
    "building small feature",
  ],

  Completed: [
    "js course lectures",
    "setting-up project",
    "installed dependencies",
    "created project folder",
    "finished small task",
  ],
};
const DndBox = () => {
  const [data, setData] = useState(intialstate);

  const dragItem = useRef();
  const dragColumn = useRef();

  const handleDragStart = (e, idx, column) => {
    dragItem.current = idx;
    dragColumn.current = column;
    e.target.style.opacity = "0.5";
    console.log(dragItem);
    console.log(dragColumn);
  };
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetcolumn) => {
    const item = dragItem.current;
    const sourcecolumn = dragColumn.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourcecolumn] = newData[sourcecolumn].filter(
        (_, idx) => idx !== item,
      );
      newData[targetcolumn] = [
        ...newData[targetcolumn],
        prev[sourcecolumn][item],
      ];
      return newData;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex flex-row justify-around  ">
      {Object.keys(data).map((column) => {
        return (
<div
  className="mt-8 py-8 px-4 sm:px-8 border border-black bg-gray-200  w-80 min-h-[400px] rounded-lg shadow-md"
            onDrop={(e) => handleDrop(e, column)}
            onDragOver={handleDragOver}
          >
            <h1 className="text-2xl p-2 font-semibold text-center">{column}</h1>
            {data[column].map((item, idx) => {
              return (
                <div
                  className={`border p-4 mb-1 text-center rounded-md ${ column === "Todo" ? "bg-white"  : column === "InProgress"  ? "bg-yellow-200" : "bg-green-300" }`}
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, idx, column)}
                  onDragEnd={handleDragEnd}
                  draggable
                >
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
