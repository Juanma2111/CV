import ProgressBar from "./Progressbar";

import SkillItem from "./SkillItem";

{
    /* LOGOS */
}
import htmlIcon from "../assets/logos/html_logo.png";
import cssIcon from "../assets/logos/css_logo.png";
import jsIcon from "../assets/logos/javascript_logo.png";
import reactIcon from "../assets/logos/react_logo.png";
import gitIcon from "../assets/logos/git_logo.png";
import tailwindIcon from "../assets/logos/tailwind_logo.png";
import bootstrapIcon from "../assets/logos/bootstrap_logo.png";
import aspnetIcon from "../assets/logos/aspnet_logo.png";
import mysqlIcon from "../assets/logos/mysql_logo.png";
import csharpIcon from "../assets/logos/csharp-logo.png";
import phpIcon from "../assets/logos/php_logo.png";
import restapiIcon from "../assets/logos/restapi_logo.png";
import wordpressIcon from "../assets/logos/wordpress_logo.png";
import responsiveIcon from "../assets/logos/responsive_logo.png";
import nodeIcon from "../assets/logos/node_logo.png";

export default function Skills() {
    return (
        <div className="my-5 w-full">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center mx-6 lg:mx-36">
                <SkillItem icon={jsIcon} alt={"JavaScript"} level={80} />
                <SkillItem icon={htmlIcon} alt={"HTML"} level={80} />
                <SkillItem icon={cssIcon} alt={"CSS"} level={80} />
                <SkillItem icon={reactIcon} alt={"React"} level={65} />
                <SkillItem icon={mysqlIcon} alt={"MySQL"} level={50} />
                <SkillItem icon={aspnetIcon} alt={"ASP.NET"} level={40} />
                <SkillItem icon={csharpIcon} alt={"C#"} level={40} />
                <SkillItem icon={phpIcon} alt={"PHP"} level={35} />
                <SkillItem icon={restapiIcon} alt={"REST API"} level={75} />
                <SkillItem
                    icon={responsiveIcon}
                    alt={"Responsive"}
                    level={85}
                />
                <SkillItem icon={nodeIcon} alt={"Node.js"} level={70} />

                <SkillItem icon={tailwindIcon} alt={"TailwindCSS"} level={85} />
                <SkillItem icon={bootstrapIcon} alt={"Bootstrap"} level={80} />
                <SkillItem icon={gitIcon} alt={"Git"} level={75} />
                <SkillItem icon={wordpressIcon} alt={"Wordpress"} level={75} />
            </div>
        </div>
    );
}
