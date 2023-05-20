import type { JSX } from "solid-js";
import "./style.scss";

export interface TechnologyProps {
    icon: JSX.Element | JSX.Element[] | string;
    href: string;
    name: JSX.Element | JSX.Element[] | string;
}

export const Technology = (props: TechnologyProps) => <a href={props.href} target="_blank" rel="noopener noreferrer" class="technology">
    <div class="technology-icon">{props.icon}</div>
    <div class="technology-name">{props.name}</div>
</a>