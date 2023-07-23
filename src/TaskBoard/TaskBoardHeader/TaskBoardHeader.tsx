import styles from './TaskBoardHeader.module.scss';
import TaskBoardHeaderReportButton from './TaskBoardHeaderReportButton';
import TaskBoardHeaderDatePicker from './TaskBoardHeaderDatePicker';

export default function TaskBoardHeader() {
  return (
    <div className={styles['header-card']}>
      <TaskBoardHeaderReportButton />
      <TaskBoardHeaderDatePicker />
      <div style={{ flexGrow: 1 }}></div>
      {/*<Textarea placeholder="Your comment" maxRows={1} />*/}
      hey
    </div>
  );
}
