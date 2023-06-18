'use client'
import SingleTask from "./single-tasks";
import { useTaskStore } from "../store/store";
import { Task } from "../types/common";

type Props = {};

export default function TaskInfo({}: Props) {
  const {allTask} = useTaskStore();

  return (
    <div className="lg:w-[38%]  bg-gray-400 p-8 rounded-[6px] h-[73%] overflow-y-scroll ">
      <div>
        <ul>
          {allTask.map((singleTask: Task) => {
            return <SingleTask key={singleTask.id} task={singleTask} />;
          })}
        </ul>
      </div>
    </div>
  );
}
