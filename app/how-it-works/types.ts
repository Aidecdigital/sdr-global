export type ProcessStepData = {
  step: number;
  title: string;
  description: string;
  details: {
    title: string;
    items: string[];
  };
  timeline: {
    title: string;
    description: string;
  };
  checklist: {
    icon: string;
    title: string;
    items: string[];
  };
  theme: {
    stepBg: string;
    timelineBg: string;
    timelineTitle: string;
    timelineText: string;
  };
};