import { Card, Text } from '@mantine/core';
import { ButtonV2 } from '../Button/Button';

export function CardV2({
  ctaText,
  line1,
  line2,
}: {
  ctaText: string;
  line1: string;
  line2: string;
}) {
  return (
    <Card shadow="sm" padding="xl" component="a">
      <Text fw={500} size="lg" mt="md">
        {line1}
      </Text>

      <Text mt="xs" c="dimmed" size="sm" mb={20}>
        {line2}
      </Text>

      <ButtonV2 text={ctaText} variant="outline"/>
    </Card>
  );
}
