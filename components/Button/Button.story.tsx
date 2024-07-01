import { ButtonV2 } from './Button';

export default {
  title: 'Example/Button',
  component: ButtonV2,
  args: {
    text: 'Click me',
  },
};

export const ButtonFilled = {
  args: {
    variant: 'filled',
    text: 'Cool button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/oFo0e3cw7fcLfFmhb6NrGv/POC---Storybook-integration?node-id=63-152&t=3i1i3nvmRglz8YJV-4',
    },
  },
};

export const ButtonOutline = {
  component: ButtonV2,
  args: {
    text: 'Cool button',
    variant: 'outline',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/oFo0e3cw7fcLfFmhb6NrGv/POC---Storybook-integration?node-id=63-153&t=3i1i3nvmRglz8YJV-4',
    },
  },
};
