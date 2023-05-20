import type { JSX } from "solid-js";
import "./style.scss";
import { HoverCard } from "@kobalte/core";

export interface SkillProps {
    icon: JSX.Element;
    title: JSX.Element | JSX.Element[] | string;
    children: JSX.Element | JSX.Element[] | string;
}

export const Skill = (props: SkillProps) => <div class="skill">
    <HoverCard.Root>
        <HoverCard.Trigger class="skill-root">
            <div class="skill-icon">{props.icon}</div>
            <div class="skill-title">{props.title}</div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content class="skill-hover">
                <HoverCard.Arrow />
                <h3>{props.title}</h3>
                <div class="skill-children">{props.children}</div>
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
</div>