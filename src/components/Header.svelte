<script lang="ts">
  import {
    Header,
    HeaderUtilities,
    HeaderNavMenu,
    SkipToContent,
    HeaderNav,
    HeaderNavItem,
    HeaderActionLink,
  } from "carbon-components-svelte";
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import type { Language } from "../localization/language";

  export let language: Language;
</script>

<Header
  href="/{language.identifier}"
  company="Robin Lindner"
  platformName="deeprobin.de"
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavMenu text="Projects">
      <HeaderNavItem
        href="/{language.identifier}/projects/featured"
        text="Featured"
      />
      <HeaderNavItem
        href="/{language.identifier}/projects/side-projects"
        text="Side projects"
      />
    </HeaderNavMenu>
    <HeaderNavMenu href="/{language.identifier}/blog" text="Blog">
      <HeaderNavItem
        href="/{language.identifier}/blog/announcements"
        text="Announcements"
      />
      <HeaderNavItem
        href="/{language.identifier}/blog/software"
        text="Software"
      />
      <HeaderNavItem
        href="/{language.identifier}/blog/finance"
        text="Finance"
      />
    </HeaderNavMenu>
    <HeaderNavItem href="/{language.identifier}/shop" text="Shop" />
    <HeaderNavItem href="/{language.identifier}/contact" text="Contact" />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderNavItem
      href="/{language.identifier}/legal-details"
      text="Legal details"
    />
    <HeaderNavItem
      href="/{language.identifier}/privacy-policy"
      text="Privacy policy"
    />
    <HeaderActionLink
      aria-label="Github"
      icon={LogoGithub}
      href="https://github.com/deeprobin"
    />
    <HeaderActionLink
      aria-label="LinkedIn"
      icon={LogoLinkedin}
      href="https://www.linkedin.com/in/deeprobin/"
    />
    <HeaderActionLink
      aria-label="Twitter"
      icon={LogoTwitter}
      href="https://twitter.com/_DeepRobin"
    />
  </HeaderUtilities>
</Header>
