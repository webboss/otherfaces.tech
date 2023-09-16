import React from "react";
import TwitterIcon from "assets/images/svgs/twitter.svg";
import MailIcon from "assets/images/svgs/mail.svg";
import LinkedInIcon from "assets/images/svgs/linkedin.svg";
import FacebookIcon from "assets/images/svgs/facebook.svg";

const Share = ({ title }) => {
  const prefix = "Read";
  const suffix = "'s story via @OtherFaces_Tech";
  const text = `${prefix} ${title} ${suffix}`;
  return (
    <ul className="flex md:max-w-[200px] max-w-[160px] justify-between md:mb-8 mb-6 md:mt-6 mt-4">
      {icons.map(({ Icon, share, isLink }) => {
        return (
          <a
            href={isLink ? share(text) : "#"}
            onClick={() => (!isLink ? share(text) : null)}
            className="hover:opacity-70"
          >
            <Icon />
          </a>
        );
      })}
    </ul>
  );
};

export default Share;
// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined";

export const url = isBrowser ? document.location : "";
export const popupWindow = link => {
  if (isBrowser) {
    window.open(link, "popup", "width=600,height=600");
  }
};

const icons = [
  {
    Icon: TwitterIcon,
    share: title =>
      popupWindow(`https://twitter.com/share?text=${title}&url=${url}`),
  },
  {
    Icon: MailIcon,
    share: title => `mailto: ?subject=${title}&body=${url}`,
    isLink: true,
  },
  {
    Icon: LinkedInIcon,
    share: title =>
      popupWindow(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
      ),
  },
  {
    Icon: FacebookIcon,
    share: title =>
      popupWindow(
        `https://www.facebook.com/sharer.php?u=${url}&p[title]=${title}`
      ),
  },
];
