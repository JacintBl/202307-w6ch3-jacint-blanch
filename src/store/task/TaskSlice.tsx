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
  },
});

export const tasksReducer = taskSlice.reducer;
export const { loadTasks: loadTasksActionCreator } = taskSlice.actions;