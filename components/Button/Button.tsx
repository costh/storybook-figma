import { Button as MantineButton } from '@mantine/core';

type Props = {
  text: string;
  onClick?: () => void;
  variant: 'outline' | 'filled';
};

export function ButtonV2({ text, onClick, variant = 'filled' }: Props) {
  return (
    <MantineButton onClick={onClick} variant={variant}>
      {text}
    </MantineButton>
  );
}
