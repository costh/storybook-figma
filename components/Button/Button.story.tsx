import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    text: 'Click me',
  },
};

export const ButtonFigma = {
  args: {
    text: 'Cool button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FoFo0e3cw7fcLfFmhb6NrGv%2FPOC---Storybook-integration%3Fnode-id%3D1-95%26t%3DXRfqh8IVfJeMOrgI-1',
    },
  },
};

// export const ButtonFigspec = {
//   args: {
//     text: 'Cool button',
//   },
//   parameters: {
//     design: {
//       type: 'figspec',
//       accessToken: <token>
//       url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FoFo0e3cw7fcLfFmhb6NrGv%2FPOC---Storybook-integration%3Fnode-id%3D1-95%26t%3DXRfqh8IVfJeMOrgI-1',
//     },
//   },
// };
