import { Link } from "@kobalte/core";
import "./style.scss";
import { JSX, Show, splitProps } from "solid-js";
import { ArrowRight } from "lucide-solid";

export interface BlockProps extends JSX.HTMLAttributes<HTMLElement> {
    comment?: string;
    title?: string;
    children?: JSX.Element | JSX.Element[] | string;
    rightContainer?: JSX.Element | JSX.Element[] | string;
    button?: string;
    href: string;
    rtl?: boolean;
}

export const Block = (props: BlockProps) => {
    const [localProps, otherProps] = splitProps(props, ["href", "children", "button", "class", "comment", "title"])

    let blockContents = <div class="block-contents">
        <div>
            <div class="block-comment">{localProps.comment}</div>
            <h2 class="block-title">{localProps.title}</h2>
            <div class="block-children">{localProps.children}</div>
        </div>
        <Link.Root class="block-button" href={localProps.href} title={localProps.button ?? ""} rel="prefetch" target="_blank">
            <div>{localProps.button}</div>
            <ArrowRight size={20} />
        </Link.Root>
    </div>;

    let imageContainer = <div class="block-image-container">
        {props.rightContainer}
    </div>;

    return <section class={`block${localProps.class ? ` ${localProps.class}` : ""}`} {...otherProps}>
        <Show when={props.rtl} fallback={<>
            {blockContents}
            {imageContainer}
        </>}>
            {imageContainer}
            {blockContents}
        </Show>
    </section>;
}
