export type ProjectType = {
  slug: string;
  title: string;
  completedAt: string;
  excerpt?: string;
  body?: string;
  coverPhoto: {
    url: string;
  };
  liveLink?: string;
  sourceLink?: string;
};
