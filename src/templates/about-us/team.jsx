import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

import { Text } from "components";
import Container from "components/container";

export const Team = () => {
  return (
    <Container className="mt-[-200px]">
      <Text variant="h3">Meet our Team</Text>
      <section className={teamSectionStyle}>
        {team.map((member, index) => {
          return <TeamMember {...member} key={`team-member-${index}`} />;
        })}
      </section>
    </Container>
  );
};

const TeamMember = props => {
  const { fullname, role, image } = props;

  return (
    <div>
      <div className={teamImageWrapperStyle}>
        {image ? (
          image
        ) : (
          <StaticImage
            alt="Otherfaces of Tech"
            src="../assets/images/portrait.png"
            className={teamImageStyle}
          />
        )}
      </div>

      <div className="mt-4 text-center">
        <Text variant="h5" isPrimary>
          {fullname}
        </Text>
        <Text variant="p14">{role}</Text>
      </div>
    </div>
  );
};

const teamSectionStyle = ctl(`
grid
lg:grid-cols-4
md:grid-cols-3
grid-cols-2
md:gap-x-8
gap-x-4
md:gap-y-16
gap-y-8
md:pt-[80px]
pt-[32px]
md:pb-[131px]
pb-[65px]
`);

const teamImageWrapperStyle = ctl(`
w-[80%]
mx-auto
gradient-blue-to-red
md:p-1
p-[2px]
rounded-full
`);

const teamImageStyle = ctl(` 
h-[226px]
md:h-[320px]
rounded-full
grayscale
`);

const team = [
  {
    fullname: "Aremu Oluwagbamila",
    role: "Engineering Lead",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/oluwagbamila-smog-aremu-585240129/",
      twitter: "https://twitter.com/aremu_smog",
    },

    image: (
      <StaticImage
        alt="Aremu Oluwagbamila"
        src="../../assets/images/team/aremu-oluwagbamila.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Alao Ifeoluwa",
    role: "Creative Director",
    socials: {
      linkedin: "https://www.linkedin.com/in/thealaoifeoluwa/",
      twitter: "https://twitter.com/thealaoifeoluwa",
    },
    image: (
      <StaticImage
        alt="Alao Ifeoluwa"
        src="../../assets/images/team/alao-ifeoluwa.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Akinwoye Dolapo",
    role: "Product Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/akinwoye-dolapo-190123196/",
      twitter: "https://twitter.com/dolapoakinwoye",
    },

    image: (
      <StaticImage
        alt="Akinwoye Dolapo"
        src="../../assets/images/team/akinwoye-dolapo.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Adeniran Simisola",
    role: "Product Designer",
    socials: {
      linkedin: "https://www.linkedin.com/in/simisoladeniran/",
      twitter: "https://twitter.com/simshotit",
    },
    image: (
      <StaticImage
        alt="Adeniran Simisola"
        src="../../assets/images/team/adeniran-simisola.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Afolabi Praise",
    role: "Graphic/Motion Designer",
    socials: {
      linkedin: "https://www.linkedin.com/in/folabipraise/",
      twitter: "https://twitter.com/folabipraise/",
    },
    image: (
      <StaticImage
        alt="Afolabi Praise"
        src="../../assets/images/team/afolabi-praise.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Akobi Tomiwa",
    role: "Legal",
    image: (
      <StaticImage
        alt="Akobi Tomiwa"
        src="../../assets/images/team/akobi-tomiwa.jpg"
        className={teamImageStyle}
      />
    ),
    socials: {
      twitter: "https://twitter.com/tomiwa_dan",
    },
  },
  {
    fullname: "Osunkoya Oluwadamilola",
    role: "Community Manager",
    image: (
      <StaticImage
        alt="Osunkoya Oluwadamilola"
        src="../../assets/images/team/osunkoya-oluwadamilola.jpg"
        className={teamImageStyle}
      />
    ),
    socials: {
      twitter: "https://twitter.com/enioluwadalola",
    },
  },
  {
    fullname: "Alao Michael",
    role: "3D Artist",
    socials: {
      linkedin: "https://www.linkedin.com/in/michael-alao-9ba354248",
      twitter: "https://twitter.com/Mickolo1A",
    },
    image: (
      <StaticImage
        alt="Alao Michael"
        src="../../assets/images/team/alao-michael.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Ajiboye Ebenezer",
    role: "Cinematographer",
    socials: {
      twitter: "twitter.com/ajiboyeebenezer",
    },
    image: (
      <StaticImage
        alt="Ajiboye Ebenezer"
        src="../../assets/images/team/ajiboye-ebenezer.jpg"
        className={teamImageStyle}
      />
    ),
  },
];
