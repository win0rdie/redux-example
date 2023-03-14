import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import css from './TaskList.module.css';

export const TaskList = () => {
  const data = useSelector(state => state.tasks);
  return (
    <ul className={css.list}>
      {data.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
