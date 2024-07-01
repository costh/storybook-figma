import { CardV2 } from './card';

export default {
  title: 'Example/Cards',
  component: CardV2,
  args: {
    ctaText: 'Click me hehe',
    line1: 'Million Dollar Card',
    line2: 'Trust me bro',
  },
};

export const Card = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/oFo0e3cw7fcLfFmhb6NrGv/POC---Storybook-integration?node-id=63-281&t=3i1i3nvmRglz8YJV-4',
    },
  },
};
