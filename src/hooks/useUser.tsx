import usersStore from '../../users.json';
import { User } from '../globalTypes';

export default function useUser(userId: number): User | undefined {
  const user = usersStore.find((user) => user.id === userId);
  return user;
}
