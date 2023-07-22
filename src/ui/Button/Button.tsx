import { PropsWithChildren } from 'react';
import { Button as MantineButton } from '@mantine/core';

interface ButtonProps {
  variant: 'primary';
  onClick: () => void;
}

export default function Button({ children }: PropsWithChildren<ButtonProps>) {
  return <MantineButton>{children}</MantineButton>;
}
