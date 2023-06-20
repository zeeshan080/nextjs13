import { create } from "zustand";
import { Task } from "../types/common";
import { taskData } from "../data";

type ModalStore = {
  isOpen: boolean;
  data: any;
  openModal: (data: {
    id: string;
    title: string;
    date: string;
    btnName: string;
  }) => void;
  closeModal: () => void;
};

type TaskStore = {
  allTask: Task[];
  page: string;
  query: string;
  filterTask: Task[];
  searchText: (query: string) => void;
  getAllTasks: ()=> void;
  currentTask: () => void;
  completedTask: () => void;
  changePage: (page: string) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: { title: string; date: string }, id: string) => void;
  toggleStatus: (id: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  data: { title: "", date: "" },
  openModal: (data: { title: string; date: string }) => {
    set({ isOpen: true, data });
  },
  closeModal: () => set({ isOpen: false }),
}));

export const useTaskStore = create<TaskStore>((set, get) => ({
  allTask: taskData,
  filterTask: [],
  query: "",
  page: "all tasks",
  searchText: (query: string) => {
    const allTasks = get().filterTask;
    const filterTask = allTasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    set({ filterTask, query });
  },
  getAllTasks: ()=> {
    set((state) => ({
        filterTask: state.allTask
      }));
  },
  currentTask: () => {
    set((state) => ({
      filterTask: state.allTask.filter(
        (task) =>
          new Date(task.date).toDateString() === new Date().toDateString()
      ),
    }));
  },
  completedTask: () => {
    set((state) => ({
      filterTask: state.allTask.filter((task) => task.status === true),
    }));
  },
  addTask: (newTask: Task) => {
    set((state) => ({
      allTask: [...state.allTask, newTask],
    }));
  },
  deleteTask: (id) =>
    set((state) => ({
      allTask: state.allTask.filter((task) => task.id !== id),
    })),
  updateTask: (newTask: { title: string; date: string }, id: string) => {
    set((state) => ({
      allTask: state.allTask.map((task) => {
        if (task.id === id) {
          task.title = newTask.title;
          task.date = newTask.date;
        }
        return task;
      }),
    }));
  },
  toggleStatus: (id: string) => {
    set((state) => ({
      allTask: state.allTask.map((task) => {
        task.id === id ? (task.status = !task.status) : "";
        return task;
      }),
    }));
  },
  changePage: (page: string) => set({ page }),
}));
