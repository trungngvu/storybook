import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Status, Undone, Done } from "./Status";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "BattechCMR/Status",
  component: Status,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    percentage: { control: "percentage" },
  },
} as ComponentMeta<typeof Status>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const StatusTemplate: ComponentStory<typeof Status> = (args) => (
  <Status {...args} />
);

export const Primary = StatusTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Undo: ComponentStory<typeof Undone> = () => <Undone />;

export const Do: ComponentStory<typeof Done> = () => <Done />;
