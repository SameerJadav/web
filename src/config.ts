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
  {
    title: "Personal Website",
    description:
      "My personal website, featuring interactive blogs and a bunch of cool stuff. Built with Astro.",
    live: SITE.url,
    repo: "https://github.com/SameerJadav/web",
  },
  {
    title: "Fatality Studios",
    description:
      "Music production studio site. The most aesthetically pleasing site that I have ever made. Built with Next.js 14.",
    live: "https://fatalitystudios.com",
  },
];
