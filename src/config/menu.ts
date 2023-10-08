interface MenuItem {
  title: string;
  to?: string;
  href?: { url: string };
  navbar?: boolean;
}

type MenuList = MenuItem[];

const menuList: MenuList = [
  {
    title: "Stories",
    to: "/stories",
    navbar: true,
  },
  {
    title: "About us",
    to: "/about-us",
    navbar: true,
  },
  {
    title: "Resources",
    to: "/resources",
    navbar: true,
  },
  {
    title: "Roadmaps",
    to: "/roadmaps",
    navbar: true,
  },
  {
    title: "Get Merch",
    href: { url: "https://paystack.shop/other-faces-of-tech" },
    navbar: true,
  },
  {
    title: "Donate",
    to: "/donate",
    navbar: true,
  },
  {
    title: "Privacy Policy",
    to: "/privacy-policy",
  },
];

export default menuList;
