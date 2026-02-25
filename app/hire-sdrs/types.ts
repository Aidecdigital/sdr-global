export type EngagementModel = {
  icon: string;
  title: string;
  description: string;
  theme: 'blue' | 'purple';
  highlighted: boolean;
  price: string;
  priceSub: string;
  buttonText: string;
  bestFor: string[];
  included: string[];
  commitment: string;
  pricing?: {
    subscription: string;
    setupFee?: string;
    customOptions?: string[];
    notes?: string;
  };
};

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