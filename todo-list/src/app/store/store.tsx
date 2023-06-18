import { create } from "zustand";
import { Task } from "../types/common";
import { taskData } from "../data";

type ModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type TaskStore = {
    allTask: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id:string) => void;
    updateTask: (task:Task,id:string) => void;
  };

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useTaskStore = create<TaskStore>((set) => ({
    allTask: taskData,
    addTask: (newTask: Task) => {
        set((state) => ({
          allTask: [...state.allTask, newTask],
        }));
      },
    deleteTask: (id) => set({ allTask: taskData.filter((task)=> task.id === id) }),
    updateTask: (newTask: Task,id:string) => {
        const taskInfo  = taskData.filter((task)=> task.id === id)
        if(taskInfo){
        set((state) => ({
          allTask: [...state.allTask, newTask],
        }));
        }
      },
  }));