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
};