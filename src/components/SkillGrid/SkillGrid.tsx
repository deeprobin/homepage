import { BookOpenCheckIcon, BoxesIcon, CalendarRangeIcon, CodeIcon, PaintBucket, UsersIcon } from "lucide-solid";
import { Skill } from "../Skill/Skill";
import "./style.scss";

export const SkillGrid = () => <section class="skill-grid">
    <Skill icon={<CodeIcon size={24} />} title="Software development">
        As a passionate software developer, I have extensive knowledge in various programming languages and technologies. I focus on creating scalable and maintainable solutions that integrate seamlessly with existing systems.
    </Skill>
    <Skill icon={<BoxesIcon size={24} />} title="Software architecture">As an adept software architect, I excel at creating high-level design choices and dictating technical standards, including software coding standards, tools, and platforms. I work to ensure each piece of system interconnects seamlessly and functions efficiently.</Skill>
    <Skill icon={<PaintBucket size={24} />} title="Web Design">Balancing aesthetic sensibility with technical functionality, I design user-friendly and visually appealing websites. I employ responsive design principles to ensure optimal viewing experience across various devices</Skill>
    <Skill icon={<CalendarRangeIcon size={24} />} title="Project management">Experienced in overseeing software development projects from conception to delivery. I am skilled in Agile methodologies, ensuring efficiency and adaptability throughout the project lifecycle. I focus on maintaining excellent communication and meeting all project milestones on time.</Skill>
    <Skill icon={<BookOpenCheckIcon size={24} />} title="Accounting">Proficient in managing financial transactions and keeping comprehensive financial records. I have a sound understanding of accounting principles and software, ensuring accuracy in all financial aspects of a business.</Skill>
    <Skill icon={<UsersIcon size={24} />} title="Team Working">I believe collaboration is key to successful projects. I have experience leading and being a part of diverse teams. I excel in fostering a collaborative environment, ensuring open communication and mutual respect among team members.</Skill>
</section>