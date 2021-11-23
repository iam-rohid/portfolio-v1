import { MenuType } from "../../types";

export const menu: MenuType = [
  {
    name: "Latest",
    href: "/latest",
  },
  {
    name: "Blogs",
    href: "/blogs",
    subMenu: [
      {
        name: "React.js",
        href: "/blogs/react-js",
      },

      {
        name: "Next.js",
        href: "/blogs/next-js",
      },
      {
        name: "React Native",
        href: "/blogs/react-native",
      },
      {
        name: "React.js",
        href: "/blogs/react-js",
      },

      {
        name: "Next.js",
        href: "/blogs/next-js",
      },
      {
        name: "React Native",
        href: "/blogs/react-native",
      },
    ],
  },
  {
    name: "Tutorials",
    href: "/tutorials",
    subMenu: [
      {
        name: "React.js",
        href: "/tutorials/react-js",
      },
      {
        name: "Next.js",
        href: "/tutorials/next-js",
      },
      {
        name: "React Native",
        href: "/tutorials/react-native",
      },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Daily",
    href: "/daily",
  },
];
