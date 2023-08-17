import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      name: "jacint",
      isDone: true,
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    loadTasks: (_currentState, action: PayloadAction<Task[]>): TaskState => ({
      tasks: action.payload,
    }),

    deleteTask: (currentState, action: PayloadAction<number>): TaskState => ({
      tasks: currentState.tasks.filter((task) => task.id !== action.payload),
    }),

    addTask: (currentState, action: PayloadAction<Task>): TaskState => {
      const newTask = [...currentState.tasks];
      newTask.push(action.payload);
      return { tasks: newTask };
    },
  },
});

export const tasksReducer = taskSlice.reducer;
export const {
  loadTasks: loadTasksActionCreator,
  deleteTask: deleteTaskActionCreator,
  addTask: addTaskActionCreator,
} = taskSlice.actions;
