import { Button as MantineButton } from '@mantine/core';

type Props = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: Props) {
  return (
    <MantineButton variant="outline" onClick={onClick}>
      {text}
    </MantineButton>
  );
}
