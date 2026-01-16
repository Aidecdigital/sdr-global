export type CaseStudyResult = {
  value: string;
  label: string;
  color: string;
};

export type CaseStudy = {
  id: string;
  initials: string;
  initialsBg: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  clientBackground: string;
  problem: string;
  solution: string;
  results: CaseStudyResult[];
  quote: string;
  quoteAuthor: string;
};

export type SummaryStat = {
  value: string;
  label: string;
  sub: string;
  color: string;
};

export type MethodologyItem = {
  icon: string;
  title: string;
  description: string;
};

export type IndustryApp = {
  icon: string;
  title: string;
  description: string;
};