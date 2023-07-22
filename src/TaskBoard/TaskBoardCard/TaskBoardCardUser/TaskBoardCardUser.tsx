import styles from './TaskBoardCardUser.module.scss';
import Text from '../../../ui/Text/Text';
const user = {
  id: 0,
  name: 'Bill Gates',
  bio: 'Chairman of Microsof',
};

export default function TaskBoardCardUser() {
  return (
    <div className={styles['main']}>
      <div className={styles['imageDiv']}>
        <img className={styles['image']} src="/assets/userImage.jpg" />
      </div>
      <div style={{}}>
        <Text weight={590}>{user.name}</Text>
        <Text size={12} color="gray" weight={400}>
          {user.bio}
        </Text>
      </div>
    </div>
  );
}
