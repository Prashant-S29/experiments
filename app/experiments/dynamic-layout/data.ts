import { AppIcon, ComponentsIcon, NotesIcon } from '@/icons';
import { IconType } from 'react-icons';

export const MenuItem: {
  title: string;
  icon: IconType;
}[] = [
  {
    title: 'Apps',
    icon: AppIcon,
  },
  {
    title: 'Components',
    icon: ComponentsIcon,
  },
  {
    title: 'Notes',
    icon: NotesIcon,
  },
];

export const NotesData = [
  {
    title: 'Feedback using Slack',
    data: 'May, 2024',
  },
  {
    title: 'Feedback using GitHub',
    data: 'June, 2024',
  },
  {
    title: 'Feedback using Email',
    data: 'July, 2024',
  },
];
