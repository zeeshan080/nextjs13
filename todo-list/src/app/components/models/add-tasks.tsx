import React from "react";

type Props = {};

export default function AddTask({}: Props) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen z-20 bg-black/40">
      <div className="relative  w-[50%] bg-white">
        <h1>ADD TASK</h1>
        <form className="flex flex-col p-5 rounded-[6px]">
            <label>Task</label>
          <input placeholder="Enter Task" />
          <input type="date" />
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
}
