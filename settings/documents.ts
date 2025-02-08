import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "High-level Overview",
        href: "/overview",
      },
      {
        title: "Prerequisites",
        href: "/prerequisites",
      },
      {
        title: "Course Curriculum",
        href: "/curriculum",
      },
      {
        title: "Setup",
        href: "/setup",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Part I: Storing Data",
    href: "/course/part1",
    heading: "Course Contents",
    items: [
      {
        title: "Creating Data Source",
        href: "/datasource",
      },
    ],
  },
  {
    title: "Part II: Manipulating Data",
    href: "/course/part2",
    items: [
      {
        title: "Communicating with Datasource",
        href: "/communicating_with_datasource",
      },
    ],
  },
  {
    title: "Part III: Building Backend",
    href: "/course/part3",
    items: [
      {
        title: "The Node Runtime",
        href: "/the_node_runtime",
      },
    ],
  },
  {
    title: "Part IV: Consuming Backend",
    href: "/course/part4",
    items: [
      {
        title: "Communicating With Backend",
        href: "/communicating_with_backend",
      },
    ],
  },
  {
    title: "Part V: Building Frontend",
    href: "/course/part5",
    items: [
      {
        title: "The Old-fashioned React",
        href: "/the_old_fashioned-react",
      },
    ],
  },
  {
    title: "Part VI: Testing",
    href: "/course/part6",
    items: [
      {
        title: "Testing your Endpoints",
        href: "/testing",
      },
    ],
  },
  {
    title: "Part VII: Deployment",
    href: "/course/part7",
    items: [
      {
        title: "Making it Alive",
        href: "/making_it_alive",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "JavaScript",
    href: "/programming/javascript",
    heading: "Programming Knowledge",
    items: [
      {
        title: "ES6 Syntax",
        href: "/es6",
      },
    ],
  },
  {
    title: "TypeScript",
    href: "/programming/typescript",
    items: [
      {
        title: "Types",
        href: "/types",
      },
    ],
  },
  {
    title: "React",
    href: "/programming/react",
    items: [
      {
        title: "React Hooks",
        href: "/hooks",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Git & GitHub",
    href: "/tooling/git_github",
    heading: "Tooling",
    items: [
      {
        title: "Version Control",
        href: "/version_control",
      },
    ],
  },
  {
    title: "Prisma",
    href: "/tooling/prisma",
    items: [
      {
        title: "What are Object-Relation-Mappers?",
        href: "/orms",
      },
    ],
  },
  {
    title: "TailwindCSS",
    href: "/tooling/tailwind",
    items: [
      {
        title: "The Magic Behind TailwindCSS",
        href: "/the_magic_behind_tailwind",
      },
    ],
  },
  {
    title: "Docker",
    href: "/tooling/docker",
    items: [
      {
        title: "Containerisation",
        href: "/containerisation",
      },
    ],
  },
  {
    title: "Kubernetes",
    href: "/tooling/kubernetes",
    items: [
      {
        title: "Kubernetes Engines",
        href: "/kubernetes_engines",
      },
    ],
  },
]
