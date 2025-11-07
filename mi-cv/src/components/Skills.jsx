import ProgressBar from "./Progressbar";

import SkillItem from "./SkillItem";
import htmlIcon from "../assets/logos/html_logo.png";
import cssIcon from "../assets/logos/css_logo.png";
import jsIcon from "../assets/logos/javascript_logo.png";

export default function Skills() {
    return (
        <div
            id="skills"
            className="flex flex-col m-8 mt-14 text-start items-center"
        >
            <h2 className="font-game text-3xl">SKILLS</h2>

            <div className="my-5 w-full">
                <h2 className="font-spacemono font-bold text-2xl mb-4">
                    IMAGEN
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center mx-6 lg:mx-36">
                    <SkillItem icon={htmlIcon} alt={"HTML"} level={75} />
                    <SkillItem icon={cssIcon} alt={"CSS"} level={65} />
                    <SkillItem icon={jsIcon} alt={"HTML"} level={100} />
                    <SkillItem icon={htmlIcon} alt={"HTML"} level={25} />
                    <SkillItem icon={htmlIcon} alt={"HTML"} level={45} />
                    <SkillItem icon={htmlIcon} alt={"HTML"} level={50} />
                    <SkillItem icon={htmlIcon} alt={"HTML"} level={50} />
                </div>
            </div>
        </div>
    );
}
