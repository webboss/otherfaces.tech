import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ImageWithMock = ({ image, alt = "", className }) => {
  const imageGatsbyImageData =
    image?.node?.localFile?.childImageSharp?.gatsbyImageData;
  const imageIsMock = imageGatsbyImageData === "mock";
  return (
    <React.Fragment>
      {imageIsMock ? (
        <StaticImage
          src="../../assets/images/mock.jpg"
          className={className}
          alt={alt}
        />
      ) : (
        <GatsbyImage
          image={imageGatsbyImageData}
          className={className}
          alt={alt}
        />
      )}
    </React.Fragment>
  );
};
