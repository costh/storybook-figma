import { Button as MantineButton } from '@mantine/core';

type Props = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: Props) {
  return <MantineButton onClick={onClick}>{text}</MantineButton>;
}
