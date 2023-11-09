import { Text, Button } from "components";
import { ImageWithMock } from "components/image-with-mock";
import React from "react";

export const ArticlePreviewLarge = ({ title, role, slug, featuredImage }) => {
  return (
    <section className="grid grid-cols-12 gap-3 md:text-left text-center">
      <div className="gradient-blue-to-red p-[1px] md:col-span-5  rounded col-span-12 ">
        <div className=" overflow-hidden relative">
          <div className="absolute bg-gradient-to-t rounded filter mix-blend-multiply from-black to-white  z-10 opacity-80   left-0 right-0 top-0 w-full h-full" />

          <ImageWithMock
            image={featuredImage}
            className="rounded md:h-[516px] h-[356px]"
          />
        </div>
      </div>
      <div></div>
      <div className="md:col-span-5 col-span-12 flex flex-col justify-center">
        <div>
          <Text variant="h2">{title}</Text>
          <Text variant="p18" value={role} className=" mt-1 mb-4 " />

          <Button
            href={`/story/${slug}`}
            variant="alternative"
            size="large"
            text="Read Story"
          />
        </div>
      </div>
    </section>
  );
};
