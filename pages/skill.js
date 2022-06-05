import { DataHead, Footer, Header, Menu } from "../components";
import { skills } from "../utils/skills";

export default function Skill() {
  return (
    <div className="max-w-4xl mx-auto font-mono">
      <DataHead title="Skill" />
      <Menu />
      <main className="px-5 lg:mx-20 flex flex-col">
        <Header title="skill 🚀" className="text-center mt-7 mb-10" />
        <div>
          {skills.map((skill, index) => {
            const { title, subtitle } = skill;
            return (
              <div key={index} className="my-5">
                <div className="font-bold text-lg">{title}</div>
                <div className="italic">{subtitle}</div>
              </div>
            );
          })}
        </div>
        <Footer className="mt-auto" />;
      </main>
    </div>
  );
}
