import React from "react";
import { Text } from "components";
import Container from "components/container";
import { Link, graphql, useStaticQuery } from "gatsby";

export const Resources = () => {
  const allCategoryQuery = useStaticQuery(graphql`
    query {
      allWpCategory(limit: 6, filter: { description: { ne: null } }) {
        nodes {
          name
          description
        }
      }
      allWpResource {
        totalCount
      }
    }
  `);

  const allCategory = allCategoryQuery.allWpCategory.nodes;

  const noOfResources = allCategoryQuery.allWpResource.totalCount;

  return (
    <section className="text-center">
      <Container>
        <Text variant="h2">Resources to kickstart your career</Text>

        <Text variant="p18" className="max-w-[719px] mx-auto mt-[54px]">
          Getting helpful and useful resources to kickstart your non-coding
          career in tech can be hard. This why we have curated{" "}
          <b>{noOfResources}+</b>
          resources to help you get started.
        </Text>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
          {allCategory
            .sort((a, b) => a.comingSoon - b.comingSoon)
            .map(roadmap => {
              const { name } = roadmap;

              const key = name.replace(/\s/g, "-").toLowerCase();
              return <FeaturedRoadMap {...roadmap} key={key} sectionId={key} />;
            })}
        </div>
      </Container>
    </section>
  );
};

const FeaturedRoadMap = ({ name, description, sectionId, comingSoon }) => {
  return (
    <Link to={`/resources#${sectionId}`} className="group">
      <div className="text-left py-7 px-6 bg-opacity-5 rounded-[15px] relative bg-white border-2  border-transparent group-hover:border-white/10 transition-all h-full duration-300">
        <Text variant="h4" color="peach" className=" mb-2">
          {name}
        </Text>
        <Text variant="p18">{description}</Text>
        {comingSoon && (
          <div className="absolute w-full h-full bg-black bg-opacity-50 left-0 top-0 flex items-center justify-center">
            <Text
              variant="p18"
              as="span"
              className="inline-block bg-blue-700 rounded-lg px-2"
            >
              Coming Soon
            </Text>
          </div>
        )}
      </div>
    </Link>
  );
};
