export type Metric = {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: number[];
};

export type ChannelPerformance = {
  id: string;
  platform: string;
  handle: string;
  growth: number;
  engagementRate: number;
  conversions: number;
  postingCadence: string;
};

export type ScheduledPost = {
  id: string;
  platform: string;
  date: string;
  time: string;
  campaign: string;
  status: "approved" | "draft" | "needs-review" | "published";
};

export type Campaign = {
  id: string;
  name: string;
  objective: string;
  stage: "Discover" | "Design" | "Launch" | "Optimize";
  conversionLift: number;
  budget: string;
  owner: string;
};

export type Persona = {
  id: string;
  name: string;
  description: string;
  motivations: string[];
  painPoints: string[];
  channels: string[];
};

export type ContentIdea = {
  platform: string;
  hook: string;
  narrative: string;
  cta: string;
  tone: string;
  recommendedTags: string[];
};
