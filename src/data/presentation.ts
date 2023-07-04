type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "romeroespinoza.fp@gmail.com",
  title: "Hi, I’m Fredy 👋",
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/refpx_",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/refpx",
    },
    {
      label: "Github",
      link: "https://github.com/refpx",
    },
  ],
};

export default presentation;
