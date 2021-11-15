export type BlogType = {
  slug: string;
  title: string;
  createdAt: string;
  coverPhoto: {
    url: string;
  };
  excerpt: string;
  body?: string;
  createdBy: UserType;
  category: Category;
  tags: TagType[];
};

export type Category = {
  id: string;
  slug: string;
  title: string;
};

export type TagType = {
  slug: string;
  name: string;
  foregroundColor?: {
    css: string;
    rgba?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
  backgroundColor?: {
    css: string;
    rgba?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
};

export type UserType = {
  id: string;
  name: string;
  picture: string;
};
