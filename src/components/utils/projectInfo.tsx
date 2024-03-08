import Image from "next/image";

export type URL = {
  name: string;
  href: string;
};

type ProjectInfo = {
  key: string;
  name: string;
  prevIcon?: JSX.Element;
  description: string;
  icon?: JSX.Element;
  img: string;
  domain?: string;
  stack: string[];
  source?: URL;
  website?: URL;
  video?: string;
  title: string;
  emoji?: string;
  paragraphs: {
    [key: string]: string;
  };
  tags?: string[];
  progress: "Building" | "Shipped";
};

// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();

// Add entries to the Map
projectInfo.set("bunnybonanza", {
  key: "bunnybonanza",
  name: "Bunny Bonanza",
  progress: "Building",
  tags: ["Deep Reinforcement Learning", "3D Game"],
  icon: (
    <Image
      width={100}
      height={100}
      src={"/coin.webp"}
      alt="bunny bonanza logo"
    />
  ) as JSX.Element,
  prevIcon: (
    <Image width={32} height={32} src={"/coin.webp"} alt="bunny bonanza logo" />
  ) as JSX.Element,
  description:
    "3D game that uses deep reinforcement learning to train a bunny to collect fruits and avoid bombs and holographic tiles.",
  img: "/coin.webp",
  video: "https://images.codefoli.com/bunnybonanza.mp4",
  stack: [
    "Tensorflow.js",
    "Pinecone Vector DB",
    "React Three Fiber",
    "Next.js",
  ],
  title: "Bunny Bonanza",
  paragraphs: {
    "1": "Bunny Bonanza is a 3D environment that uses deep reinforcement learning to train a bunny to collect fruits and avoid bombs and holographic tiles. The site is built using React Three Fiber and Next.js, and the deep reinforcement learning model is built using Tensorflow.js.",

    "2": "The website is designed to be a fun and interactive way to learn about deep reinforcement learning and how it can be used to train agents to perform tasks in a 3D environment. The website is currently in development and will be released later this eyar.",
  },
});
projectInfo.set("brainrotjs", {
  key: "brainrotjs",
  name: "Brainrot.JS",
  progress: "Shipped",
  domain: "brainrotjs.com",
  tags: ["Machine Learning", "Procedural Video Generation"],
  icon: (
    <Image
      width={100}
      height={100}
      src={"https://images.smart.wtf/brainrot.png"}
      alt="brainrot logo"
    />
  ) as JSX.Element,
  description:
    "3D game that uses deep reinforcement learning to train a bunny to collect fruits and avoid bombs and holographic tiles.",
  img: "https://images.smart.wtf/brainrot.png",
  video: "https://images.smart.wtf/brainrotjs.mp4",
  stack: ["PyTorch", "Next.js", "Eleven Labs", "Remotion", "AWS", "OpenAI"],
  title: "Brainrot.JS",
  website: { name: "brainrotjs.com", href: "https://brainrotjs.com" },
  paragraphs: {
    "1": "Brainrot.js does a lot in the background, but abstracts all away from the user so we can say it 'simply generates a short form video from celebrities of your choice who discuss a topic of your choice'. The videos are generated just from a single topic, and a choice of two narrators, and within 2 minutes, your completely custom video is created!",
    "2": "A brief on how I built it: It is quite complicated but I will try my best to explain in brief. The interface (https://brainrotjs.com) is built with nextjs, tailwind, typescript, and tRPC. It is the interface. We then have the backend... Brace yourself haha. So we need something to store the users requests to generate in an ordered fashion such. We use MySQL DB for this. We then have a Docker Container on a EC2 instance working as a polling function. This is the brains. It invokes OpenAI API to create the transcript, runs a custom inference model built in PyTorch to generate the subtitles for the video at a word-by-word level, posts them in separate SRT files, concats the audio file into a single audio.mp3. The inference model is run with flask, and the polling is a javascript file that infinitely loops. We then merge all this together in remotion. We render our remotion project in 200 separate serverless lambda functions which in parallel fashion render the video and then concat it together. We then host the video on s3, and upload the link to s3. the database is polled on the users end waiting for this link.",
  },
});
projectInfo.set("smartwtf", {
  key: "smartwtf",
  name: "Smart.wtf",
  progress: "Building",
  domain: "smart.wtf",
  tags: ["Learning Platform", "AI"],
  icon: (
    <Image
      width={100}
      height={100}
      src={"https://images.codefoli.com/smartwtf.png"}
      alt="smartwtf logo"
    />
  ) as JSX.Element,
  prevIcon: (
    <Image
      width={32}
      height={32}
      src={"https://images.codefoli.com/smartwtf.png"}
      alt="smartwtf logo"
    />
  ) as JSX.Element,
  description:
    "AI first learning platform designed to make the learning process fun, intuitive, and absurd.",
  img: "https://images.codefoli.com/smart.png",
  video: "https://images.codefoli.com/smartwtfdemo.mp4",
  stack: ["TypeScript", "Next.js", "tRPC", "Clerk", "MySQL", "Tailwind.css"],
  website: { name: "smart.wtf", href: "https://smart.wtf" },
  title: "Smart.wtf",
  paragraphs: {
    "1": "Smart.wtf is an online learning platform that combines AI with lesson interactivity to deliver a memorable and educational experience to the user.",

    "2": " The platform is designed to help students learn and retain information more effectively by using a combination of humor, interactivity and absurdity to boost retention and memorability.",
  },
});

// projectInfo.set("deepstar", {
//   key: "deepstar",
//   name: "Deep Star",
//   tags: ["Deep Learning Framework"],
//   prevIcon: (
//     <Image width={32} height={32} src={"/deepstar.png"} alt="deepstar logo" />
//   ),
//   icon: (
//     <Image
//       width={100}
//       height={100}
//       className="my-3  rounded-lg border-opacity-50"
//       src={"/deepstar.png"}
//       alt="deepstar logo"
//     />
//   ),
//   description:
//     "Deep learning framework with a PyTorch-like API designed to make Deep Learning topics more students new to Deep Learning",
//   progress: "Building",
//   img: "/deepstar.png",
//   stack: ["Python", "NumPy", "PyTorch"],
//   source: {
//     name: "noahgsolomon/DeepStar",
//     href: "https://github.com/noahgsolomon/DeepStar",
//   },
//   title: "Deep Star",
//   paragraphs: {
//     "1": "Deep Star is a simpler framework to use for those new to Deep Learning and interested in understanding the underlying mechanics. It is being built both to deepen my own understanding of the deep learning ecosystem at a fundamental level, and to hopefully give back to help others get started in ML the right way (hands on).",
//   },
// });

projectInfo.set("codefoli", {
  key: "codefoli",
  name: "Codefoli",
  domain: "codefoli.com",
  tags: ["Website Builder"],
  emoji: "☁️",
  icon: (
    <Image
      width={148}
      height={148}
      className="my-3  rounded-lg border-opacity-50"
      src={"https://images.codefoli.com/codefolilogo.png"}
      alt="codefoli logo"
    />
  ),
  description:
    "Portfolio websites built and hosted for developers who have better things to do.",
  progress: "Shipped",
  img: "https://images.codefoli.com/codefolilogo.png",
  video: "https://images.codefoli.com/codefolivideo.mp4",
  stack: ["AWS", "React", "TypeScript", "Tailwind.css"],
  source: {
    name: "noahgsolomon/codefoli",
    href: "https://github.com/noahgsolomon/codefoli",
  },
  website: { name: "codefoli", href: "https://codefoli.com" },
  title: "Codefoli",
  paragraphs: {
    "1": "Building portfolio websites for developers who have better things to do. Codefoli is a platform that allows developers to build and deploy a portfolio website in minutes. Whether you are coming in with your own domain, or would just like to deploy through a subdomain (e.g. elonmusk.codefoli.com), our infrastructure is efficient enough to offer this for $0!.",
  },
});

projectInfo.set("investingyellow", {
  key: "investingyellow",
  name: "Investing Yellow",
  domain: "investingyellow.com",
  tags: ["Finance", "AI"],
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/investingyellow.png"}
      alt="mr burns"
    />
  ),
  video: "/investingyellow.mp4",
  prevIcon: (
    <Image
      width={32}
      height={32}
      className="my-3 rounded-lg border-opacity-50"
      src={"/investingyellow.png"}
      alt="mr burns"
    />
  ),
  description:
    "Hear about your finances through the lens of your favorite characters",
  progress: "Shipped",
  img: "/mrburns.png",
  stack: ["OpenAI", "React", "TypeScript", "Tailwind.css"],
  source: {
    name: "noahgsolomon/InvestingYellow",
    href: "https://github.com/noahgsolomon/InvestingYellow",
  },
  website: { name: "Investing Yellow", href: "https://investingyellow.com" },
  title: "I.Y.",
  paragraphs: {
    "1": "Financial app that connects to bank and investment accounts, like Wells Fargo or Robinhood, using Plaid. It provides a straightforward display of spending and investments with a donut graph and a transaction list. The app uses AI to analyze financial data, offering personalized investment advice and categorizing users based on their spending habits.",
    "2": "The app features a social platform for financial discussions, using characters like Ned Flanders and Lisa Simpson for interaction. It includes a leaderboard ranking users based on their financial management, as assessed by the app’s AI. This encourages users to improve their financial standing, aligning with the goal of moving towards a financially secure future.",
  },
});

projectInfo.set("graphzila", {
  key: "graphzila",
  name: "Graphzila",
  domain: "graphzila.com",
  tags: ["Knowledge Graph", "AI"],
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/graphzila.png"}
      alt="graphzila"
    />
  ),
  video: "/graphzila.mp4",
  emoji: "🔥",
  description: "Learn about your favorite topics through knowledge graphs.",
  progress: "Shipped",
  img: "/graphzila.png",
  stack: ["OpenAI", "React", "TypeScript", "Tailwind.css"],
  source: {
    name: "noahgsolomon/Graphzila",
    href: "https://github.com/noahgsolomon/Graphzila",
  },
  website: { name: "Graphzila", href: "https://graphzila.com" },
  title: "Graphzila",
  paragraphs: {
    "1": "Knowledge graph generator powered by OpenAI's GPT-4. Takes an input of the concept/topic, and spits out a knowledge graph with edges specifying relations and nodes specifying different topics related to the searched topic, or a sub-topic.",
  },
});

export default projectInfo;
