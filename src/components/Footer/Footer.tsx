import { Link } from "@kobalte/core";
import "./style.scss";
import { DotIcon, GithubIcon, LeafIcon, LinkedinIcon, TwitterIcon } from "lucide-solid";
import { SiXing, SiStackoverflow } from 'solid-icons/si'

export const Footer = () => <footer>
    <div>
        <div><a href="https://lindnerit.io/" target="_blank" rel="noopener"><img src="/images/lindnerit_white.svg" alt="Lindner IT Branding" height="50" width="124" /></a></div>
    </div>
    <div>
        <nav class="footer-nav">
            <div><Link.Root href="https://lindnerit.io/legal-details" title="Legal details">Legal details</Link.Root></div>
            <div><DotIcon size={16} /></div>
            <div><Link.Root href="https://lindnerit.io/privacy-policy" title="Privacy policy">Privacy policy</Link.Root></div>
        </nav>
        <div class="copyright-notice">&copy; Copyright Robin Lindner 2023 - All rights reserved.</div>
        <div class="substainability-notice"><LeafIcon size={10} />&nbsp;This website is CO<sub>2</sub> neutral</div>
    </div>
    <div class="social-media">
        <Link.Root href="https://www.linkedin.com/in/deeprobin/" title="LinkedIn" target="_blank" rel="noopener noreferer"><LinkedinIcon /></Link.Root>
        <Link.Root href="https://www.xing.com/profile/Robin_Lindner10/" title="XING" target="_blank" rel="noopener noreferer"><SiXing /></Link.Root>
        <Link.Root href="https://twitter.com/_DeepRobin" title="Twitter" target="_blank" rel="noopener noreferer"><TwitterIcon /></Link.Root>
        <Link.Root href="https://github.com/deeprobin" title="Github" target="_blank" rel="noopener"><GithubIcon /></Link.Root>
        <Link.Root href="https://stackoverflow.com/users/7600021/robin-lindner" title="Stackoverflow" target="_blank" rel="noopener noreferer"><SiStackoverflow /></Link.Root>
    </div>
</footer>