import { Technology } from "../Technology/Techonology";
import "./style.scss";
import { SiAstro, SiSolid, SiTypescript, SiRust, SiCsharp } from 'solid-icons/si'

export const Technologies = () => <div class="technologies">
    <Technology icon={<SiAstro />} href="https://astro.build/" name="Astro" />
    <Technology icon={<SiSolid />} href="https://www.solidjs.com/" name="Solid.JS" />
    <Technology icon={<SiTypescript />} href="https://www.typescriptlang.org/" name="TypeScript" />
    <Technology icon={<SiRust />} href="https://www.rust-lang.org/" name="Rust" />
    <Technology icon={<SiCsharp />} href="https://dotnet.microsoft.com/en-us/" name="C#" />
</div>