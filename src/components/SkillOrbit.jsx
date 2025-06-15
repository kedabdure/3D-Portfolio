import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  NextJs,
  ReactJs,
  NodeJs,
  Typescript,
  Javascript,
  Jira,
  Git,
  Jest,
  MaterialUi,
  Notion,
  Python,
  Redux,
  Tailwind,
  Trello,
  Postgresql,
  Mysql,
  Mongodb,
  Firebase
} from "@/icons";

export function SkillsOrbit() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Inner Orbit: Tools */}
      <OrbitingCircles iconSize={40} radius={160} speed={1.5}>
        <Jira width={40} height={40} />
        <Git width={40} height={40} />
        <Jest width={40} height={40} />
        <Notion width={40} height={40} />
        <Trello width={40} height={40} />
      </OrbitingCircles>
      {/* Middle Orbit: Programming Languages */}
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Typescript width={30} height={30} />
        <Javascript width={30} height={30} />
        <Python width={30} height={30} />
        <NodeJs width={30} height={30} />
      </OrbitingCircles>
      {/* Outer Orbit: Frameworks & Databases */}
      <OrbitingCircles iconSize={55} radius={240} speed={0.8}>
        <NextJs width={45} height={45} />
        <ReactJs width={45} height={45} />
        <Redux width={45} height={45} />
        <Tailwind width={45} height={45} />
        <MaterialUi width={45} height={45} />
        <Mongodb width={45} height={45} />
        <Mysql width={45} height={45} />
        <Postgresql width={45} height={45} />
        <Firebase width={45} height={45} />
      </OrbitingCircles>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Skills
      </span>
    </div>
  );
}