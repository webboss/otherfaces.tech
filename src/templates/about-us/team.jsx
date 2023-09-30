import ctl from "@netlify/classnames-template-literals";

import React from "react";

import { Text } from "components";
import Container from "components/container";

export const Team = ({ teamData }) => {
  const groupedData = Object.fromEntries(
    teamData.reduce(
      (data, m) => data.set(m.role, [...(data.get(m.role) || []), m]),
      new Map()
    )
  );

  const teams = Object.keys(groupedData);

  return (
    <Container className={containerStyle}>
      <Text variant="h5" color="red" className="md:mb-4" isPrimary>
        OFTIAN'S
      </Text>
      <Text weight="500" variant="h2">
        Meet our Team
      </Text>
      <section className={teamSectionStyle}>
        {teams.map((team, index) => (
          <div key={`team-${index}`}>
            <Text weight="500" variant="h4" className={teamNameStyle}>
              {team}
            </Text>
            {groupedData[team].map((member, memberIndex) => (
              <Text
                variant="h5"
                weight="400"
                className="mb-2 md:mb-3 capitalize"
                key={`team-${index}-member-${memberIndex}`}
              >
                {member.title}
              </Text>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
};

const containerStyle = ctl(`
  mt-[-200px]
  md:flex
  flex-col
  md:items-center
  md:justify-center
`);

const teamSectionStyle = ctl(`
  grid
  md:grid-cols-2
  md:gap-x-40
  md:gap-y-10
  gap-y-5
  md:mt-20
  mt-10
  mb-28
  md:mb-40
`);

const teamNameStyle = ctl(`
  gradient-blue-to-red
  !text-transparent
  bg-clip-text
  mb-2
  md:mb-3
  inline-block
`);
