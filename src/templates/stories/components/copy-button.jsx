import React, { useState } from "react";
import CopyIcon from "assets/images/svgs/copy.svg";

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyLink = async () => {
    await navigator.clipboard.writeText(document.location);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <button
      onClick={copyLink}
      className="flex items-center min-w-[120px] hover:opacity-70 "
    >
      <CopyIcon />
      <span className="inline-block ml-4 ">
        {" "}
        {isCopied ? "Copied!" : "Copy Link"}
      </span>
    </button>
  );
};

export default CopyButton;
