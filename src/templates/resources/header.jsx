import React from "react";
import Container from "components/container";
import { Text } from "components";

export const ResourcesHeader = () => {
  return (
    <header>
      <Container className="py-[124px] text-center max-w-[1000px]">
        <Text variant="h2">
          All Available resources are for you to kick-start your journey
        </Text>
        <div className="max-w-[800px] mx-auto mt-4">
          <Text variant="p18">
            Like you, our path to tech wasn’t straight but yours doesn’t have to
            be like that.
          </Text>
        </div>
      </Container>
    </header>
  );
};
