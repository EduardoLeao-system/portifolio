export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  color: string;
  icon?: string;
  skills?: string[];
  progress?: number;
}
