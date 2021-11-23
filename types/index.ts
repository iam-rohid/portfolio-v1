export type MenuItemType = {
  name: string;
  href: string;
  subMenu?: MenuType;
};
export type MenuType = MenuItemType[];
