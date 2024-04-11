import type { Meta, StoryObj } from '@storybook/angular';

import { argsToTemplate } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { LayoutComponent } from './layout.component';
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<LayoutComponent> = {
  title: 'test',
  component: LayoutComponent,
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<LayoutComponent>;

export const Default: Story = {
  args: {
    test: {
      id: '1',
      title: 'test',
      state: 'test_INBOX',
    },
  },
};

// export const Pinned: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };