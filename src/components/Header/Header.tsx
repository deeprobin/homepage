import { Image } from "@kobalte/core";
import "./style.scss";

export const Header = () => <header>
    <a href="/" rel="prefetch" class="branding">
        <Image.Root class="avatar">
            <Image.Img class="avatar_image" src="/images/favicon-64.webp" alt="Robin Lindner" height="64" width="64" />
            <Image.Fallback class="avatar_fallback">RL</Image.Fallback>
        </Image.Root>
        <div class="word-brand">
            <div class="name">Robin Lindner</div>
            <div class="slogan">From Imagination to Implementation</div>
        </div>
    </a>
    <nav class="menu">
        <ul>
            <li><a href="/#me">Me</a></li>
            <li><a href="/#company">Company</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="mailto:info@lindnerit.io?subject=Contact%20Robin%20Lindner">Contact</a></li>
        </ul>
    </nav>
</header>