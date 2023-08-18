import { useAppDispatch } from "../../store";
import { loadTasksActionCreator } from "../../store/task/TaskSlice";
import mockedTasks from "../../tasksData";
import CardList from "../TaskList/CardList";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadTasksActionCreator(mockedTasks));

  return (
    <div>
      <h1>Complete Tasks</h1>
      <CardList />
    </div>
  );
};

export default App;
