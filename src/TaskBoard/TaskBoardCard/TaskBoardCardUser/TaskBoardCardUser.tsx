import { Flex, Avatar } from '@mantine/core';

import Text from '../../../ui/Text/Text';
import { User } from '../../../globalTypes';

interface TaskBoardCardUserProps {
  user: User;
}

export default function TaskBoardCardUser({ user }: TaskBoardCardUserProps) {
  return (
    <Flex gap="sm">
      <Avatar src="/assets/userImage.jpg" size="md" radius="xl" alt="user avatar" />
      <Flex direction="column">
        <Text weight={590}>{user.name}</Text>
        <Text size={12} color="gray" weight={400}>
          {user.bio}
        </Text>
      </Flex>
    </Flex>
  );
}
