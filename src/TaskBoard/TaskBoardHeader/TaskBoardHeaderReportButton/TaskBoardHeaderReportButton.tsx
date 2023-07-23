import Button from '../../../ui/Button/Button';
import styles from './TaskBoardHeader.module.scss';
export default function TaskBoardHeaderReportButton() {
  return (
    <div>
      <Button variant="primary" onClick={() => {}}>
        <div className={styles['header-card']}>hey</div>
      </Button>
    </div>
  );
}
