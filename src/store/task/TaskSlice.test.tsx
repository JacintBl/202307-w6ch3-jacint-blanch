import { loadTasksActionCreator, tasksReducer } from "./TaskSlice";
import { TaskState } from "./types";

describe("Given a tasksReducer reducer", () => {
  describe("When it receives a load tasks action with two tasks", () => {
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

    test("Then it should return a new state with the received two tasks", () => {
      const initialState: TaskState = {
        tasks: [],
      };

      const loadTasksAction = loadTasksActionCreator(tasksMock);

      const newTaskState = tasksReducer(initialState, loadTasksAction);

      expect(newTaskState.tasks).toEqual(tasksMock);
    });
  });
});
