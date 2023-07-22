import { PropsWithChildren } from 'react';
import { Text as MantineText, TextProps as MantineTextProps } from '@mantine/core';
import cx from 'classnames';

import styles from './Text.module.scss';

interface TextProps {
  color?: 'blue' | 'red' | 'green' | 'gray' | 'dark';
  size?: MantineTextProps['fz'];
  weight?: MantineTextProps['weight'];
}

export default function Text({ size = 'md', color = 'dark', weight = 500, children }: PropsWithChildren<TextProps>) {
  return (
    <MantineText
      className={cx({
        [styles[`text--${color}`]]: color,
      })}
      fz={size}
      w={weight}
    >
      {children}
    </MantineText>
  );
}
