import { useAppDispatch } from "../../store";
import { loadTasksActionCreator } from "../../store/task/TaskSlice";
import { Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({
  task: { id, name, isDone },
}: TaskCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadTasksActionCreator);

  return (
    <article>
      <div>
        <h2>{name}</h2>
        <div>{isDone && <p>✔️</p>}</div>
        <button key={id}>Delete</button>
        <button>Done</button>
      </div>
    </article>
  );
};

export default TaskCard;
