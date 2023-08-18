import { useAppSelector } from "../../store";
import TaskCard from "../TaskCard/Card";

const TaskList = (): React.ReactElement => {
  const tasks = useAppSelector((state) => state.taskState.tasks);

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li key={task.name}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
