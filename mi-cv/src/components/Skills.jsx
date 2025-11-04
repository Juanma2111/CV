import ProgressBar from "./Progressbar";

export default function Skills() {
    return (
        <div
            id="skills"
            className="flex flex-col m-8 mt-14 text-start items-center"
        >
            <h2 className="font-game text-3xl">SKILLS</h2>

            <div className="mt-3 w-full">
                <h2 className="font-spacemono">FrontEnd</h2>
                <ProgressBar label={"HTML"} level={100} />
                <ProgressBar label={"CSS"} level={50} />
            </div>
        </div>
    );
}
