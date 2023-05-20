import { Block } from "../Block/Block";
import type { JSX } from "solid-js";
import "./style.scss";

export interface VitaBlockProps {
    children: JSX.Element | JSX.Element[] | string;
}

export const VitaBlock = (props: VitaBlockProps) => <Block
    class="vita-block"
    comment="My life"
    title="Vita"
    button="Uncover my Story"
    href="/vita"
    rtl={true}
    rightContainer={props.children}
>
    <p>
        Trace the journey of Robin Lindner, an ambitious software developer and entrepreneur, committed to leaving his unique footprint in the ever-evolving IT industry.
    </p>
</Block>