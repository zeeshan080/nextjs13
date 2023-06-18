import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Task } from "../types/common";

type Props = {
    task: Task
};

export default function SingleTask({task}: Props) {
  return (
    <li className="flex items-center justify-between gap-5 bg-white shadow-lg py-4 px-5 mb-3 rounded-[5px] snap-y">
      <input type="checkbox" className="w-[5%]" />
      <h3 className="text-slate-950 text-[12px] w-[90%]">
        {task.title}
      </h3>
      <button className="w-[5%] hover:scale-110">
        <MdDeleteOutline className="w-[20px] h-[20px] fill-[#991b1b]" />
      </button>
    </li>
  );
}
