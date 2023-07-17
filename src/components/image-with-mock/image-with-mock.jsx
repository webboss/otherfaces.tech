import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ImageWithMock = ({ image, ...imageProps }) => {
  const imageGatsbyImageData =
    image?.node?.localFile?.childImageSharp?.gatsbyImageData;
  const imageIsMock = imageGatsbyImageData === "mock";
  return (
    <React.Fragment>
      {imageIsMock ? (
        <StaticImage src="../../assets/images/mock.jpeg" {...imageProps} />
      ) : (
        <GatsbyImage image={imageGatsbyImageData} {...imageProps} />
      )}
    </React.Fragment>
  );
};
