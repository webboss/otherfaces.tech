import { Text } from "components/text";
import React from "react";
import { ArticlePreview } from "./article-preview";

const ArticlePreviewList = ({ heading, articles }) => {
  return (
    <section className="mt-[120px]">
      {heading && <Text variant="h4" value={heading} className="mb-[40px]" />}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 ">
        {articles.map((article, index) => {
          return (
            <ArticlePreview key={`featured-article-${index}`} {...article} />
          );
        })}
      </div>
    </section>
  );
};

export { ArticlePreviewList };
