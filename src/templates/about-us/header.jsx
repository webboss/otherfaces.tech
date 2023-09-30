import React from "react";
import ReactRotatingText from "react-rotating-text";

import { Text } from "components";
import Container from "components/container";

export const AboutUsHeader = () => {
  return (
    <header className="text-primary-100 text-center min-h-[40vh] pt-12 flex-col flex items-center justify-center">
      <Container>
        <Text variant="h1" weight="500">
          We are{" "}
          <ReactRotatingText
            pause={1000}
            typingInterval={50}
            deletingInterval={50}
            items={roles}
          />
        </Text>

        <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
          <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
            Like you, our path to tech wasn’t straight but yours doesn’t have to
            be like that.
          </Text>
        </div>
      </Container>
    </header>
  );
};

const roles = ["Managers", "Engineers", "Designers", "3D Artists", "Writers"];
