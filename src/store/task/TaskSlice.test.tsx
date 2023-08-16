import {
  deleteTaskActionCreator,
  loadTasksActionCreator,
  tasksReducer,
} from "./TaskSlice";
import { TaskState } from "./types";

describe("Given a tasksReducer reducer", () => {
  const tasksMock = [
    {
      id: 1,
      name: "juan",
      isDone: true,
    },
    {
      id: 2,
      name: "ramon",
      isDone: false,
    },
  ];
  describe("When it receives a load tasks action with two tasks", () => {
    test("Then it should return a new state with the received two tasks", () => {
      const initialState: TaskState = {
        tasks: [],
      };

      const loadTasksAction = loadTasksActionCreator(tasksMock);

      const newTaskState = tasksReducer(initialState, loadTasksAction);

      expect(newTaskState.tasks).toEqual(tasksMock);
    });

    describe("When it receives a state with two tasks and a delete task action with id 2", () => {
      test("Then it should return a new state without the task with an id 2", () => {
        const currentTaskState: TaskState = {
          tasks: tasksMock,
        };
        const taskToDeleteId = 2;
        const taskToDelete = tasksMock.find(
          (task) => task.id === taskToDeleteId,
        )!;

        const deleteTaskAction = deleteTaskActionCreator(taskToDelete?.id);

        const newTaskState = tasksReducer(currentTaskState, deleteTaskAction);

        expect(newTaskState.tasks).not.toContain(tasksMock[1]);
      });
    });
  });
});
