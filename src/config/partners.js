import React from "react";
import WebBossLogo from "svgs/partners/web-boss.svg";
import BigiBrandLogo from "svgs/partners/bigibrand.svg";
import DearDesignerLogo from "svgs/partners/deardesigner.svg";
import PerxelsLogo from "svgs/partners/perxels.svg";

const partners = [
  {
    name: "web boss",
    Logo: WebBossLogo,
    href: { url: "https://webboss.tech" },
  },
  {
    name: "BigiBrand",
    Logo: BigiBrandLogo,
    href: { url: "https://bigibrand.com" },
  },
  {
    name: "DearDesigner",
    Logo: DearDesignerLogo,
    href: { url: "https://deardesigner.xyz" },
  },
  {
    name: "Perxels",
    Logo: PerxelsLogo,
    href: { url: "https://www.perxels.com/" },
  },
];

export { partners };
