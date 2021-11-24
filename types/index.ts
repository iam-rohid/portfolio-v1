import { BlogType } from "./blog-type";

export type MenuItemType = {
  name: string;
  href: string;
  subMenu?: MenuType;
};
export type MenuType = MenuItemType[];
export type CategoryType = {
  name: string;
  slug: string;
  blog?: BlogType[];
};
