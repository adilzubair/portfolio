import "./SkillsMarquee.css";
import { 
  SiGo, 
  SiPython, 
  SiJavascript, 
  SiC, 
  SiPostgresql, 
  SiFastapi, 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiMongodb, 
  SiRabbitmq, 
  SiAmazonaws, 
  SiDocker, 
  SiGit, 
  SiGithubactions, 
  SiKubernetes, 
  SiLinux 
} from "react-icons/si";

const skillsData = [
  { id: 1, icon: SiGo, title: "Go", color: "#00ADD8" },
  { id: 2, icon: SiPython, title: "Python", color: "#3776AB" },
  { id: 3, icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
  { id: 4, icon: SiC, title: "C", color: "#A8B9CC" },
  { id: 5, icon: SiPostgresql, title: "SQL", color: "#336791" },
  { id: 6, icon: SiFastapi, title: "FastAPI", color: "#009688" },
  { id: 7, icon: SiNodedotjs, title: "Node.js", color: "#339933" },
  { id: 8, icon: SiReact, title: "React.js", color: "#61DAFB" },
  { id: 9, icon: SiNextdotjs, title: "Next.js", color: "#000000" },
  { id: 10, icon: SiPostgresql, title: "PostgreSQL", color: "#336791" },
  { id: 11, icon: SiMongodb, title: "MongoDB", color: "#47A248" },
  { id: 12, icon: SiRabbitmq, title: "RabbitMQ", color: "#FF6600" },
  { id: 13, icon: SiAmazonaws, title: "AWS", color: "#232F3E" },
  { id: 14, icon: SiDocker, title: "Docker", color: "#2496ED" },
  { id: 15, icon: SiGit, title: "Git", color: "#F05032" },
  { id: 16, icon: SiGithubactions, title: "GitHub Actions", color: "#2088FF" },
  { id: 17, icon: SiKubernetes, title: "Kubernetes", color: "#326CE5" },
  { id: 18, icon: SiLinux, title: "Linux CLI", color: "#FCC624" },
];

function SkillsMarquee() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-5 flex animate-marquee whitespace-nowrap">
        {skillsData.map(({ id, icon: Icon, title, color }) => (
          <div
            key={id}
            className="skill--box flex items-center justify-center p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 bg-black mx-2 transition-transform hover:scale-110"
          >
            <Icon
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ color: color }}
              title={title}
            />
          </div>
        ))}
      </div>
      <div className="absolute flex top-0 py-5 animate-marquee2 whitespace-nowrap">
        {skillsData.map(({ id, icon: Icon, title, color }) => (
          <div
            key={id}
            className="skill--box flex items-center justify-center p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-blue-50 mx-2 transition-transform hover:scale-110"
          >
            <Icon
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ color: color }}
              title={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsMarquee;
