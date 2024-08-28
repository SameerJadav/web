export const SITE = {
  description: "Software engineer.",
  url: "https://sameerjadav.vercel.app",
  image: "https://sameerjadav-og.vercel.app",
  author: "Sameer Jadav",
  twitterId: "@SameerJadav_",
  links: {
    twitter: "https://twitter.com/SameerJadav_",
    github: "https://github.com/SameerJadav",
    linkedin: "https://www.linkedin.com/in/sameerjadav",
    mail: "mailto:sameerjdav001@gmail.com",
  },
};

interface Project {
  title: string;
  description: string;
  live?: string;
  repo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "EnvParse",
    description:
      "Go package designed for efficiently parsing environment variables from .env files. It provides a straightforward and performant way to load environment variables into your Go applications.",
    live: "https://pkg.go.dev/github.com/SameerJadav/envparse",
    repo: "https://github.com/SameerJadav/envparse",
  },
  {
    title: "Fatality Studios",
    description:
      "Designed and developed high-performance music production website using Next.js, achieving perfect 100/100 PageSpeed scores despite heavy media content.",
    live: "https://fatalitystudios.com",
  },
  {
    title: "Keyper",
    description:
      "CLI tool for effortlessly managing your environment variables. Save environment variables locally and retrieve them with just one command. Built using only the standard libraries of Go.",
    repo: "https://github.com/SameerJadav/keyper",
  },
  {
    title: "Guestbook",
    description:
      "A modern, performant, and accessible web application. Built using Next.js 14, this app uses server-side rendering to deliver content swiftly, ensuring a seamless experience.",
    live: "https://guestbook-sam.vercel.app",
    repo: "https://github.com/SameerJadav/guestbook",
  },
];
