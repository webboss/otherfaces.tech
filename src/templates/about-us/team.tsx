import ctl from "@netlify/classnames-template-literals";

import React from "react";

import { Text } from "components";
import Container from "components/container";

export interface TeamData {
  teamData: {
    [key: string]: {
      name: string;
    }[];
  };
}
export const Team = ({ teamData }: TeamData) => {
  const teams = Object.keys(teamData);

  return (
    <Container className={containerStyle}>
      <React.Fragment>
        <Text
          variant="h5"
          value={"OFTIAN'S"}
          color="red"
          className="md:mb-4"
          isPrimary
        />

        <Text weight="500" value={"Meet our Team"} variant="h2" />

        <section className={teamSectionStyle}>
          {teams.map((team, index) => (
            <div key={`team-${index}`}>
              <Text
                weight="500"
                variant="h4"
                className={teamNameStyle}
                value={team}
              />

              {teamData[team].map((member, memberIndex) => (
                <Text
                  variant="h5"
                  weight="400"
                  className="mb-2 md:mb-3 capitalize"
                  key={`team-${index}-member-${memberIndex}`}
                  value={member.name}
                />
              ))}
            </div>
          ))}
        </section>
      </React.Fragment>
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
