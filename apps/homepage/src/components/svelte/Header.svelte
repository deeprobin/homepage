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
  import { LogoGithub, LogoLinkedin, LogoTwitter } from "carbon-icons-svelte";
  import type { State } from "../../state";

  export let state: State;
  let language = state.language!;
</script>

<Header
  href={"/" + language.identifier}
  company="Robin Lindner"
  platformName="deeprobin.de"
>
  <slot name="skip-to-content">
    <SkipToContent />
  </slot>
  <HeaderNav>
    <HeaderNavMenu
      href={"/" + language.identifier + "/projects"}
      text={language?.getByKey("projects")}
    >
      <HeaderNavItem
        href={"/" + language.identifier + "/projects/featured"}
        text={language?.getByKey("projects.featured")}
      />
      <HeaderNavItem
        href={"/" + language.identifier + "/projects/side-projects"}
        text={language?.getByKey("projects.sideProjects")}
      />
    </HeaderNavMenu>
    <HeaderNavMenu
      href={"/" + language.identifier + "/blog"}
      text={language?.getByKey("blog")}
    >
      <HeaderNavItem
        href={"/" + language.identifier + "/blog/announcements"}
        text={language?.getByKey("blog.announcements.name")}
      />
      <HeaderNavItem
        href={"/" + language.identifier + "/blog/software"}
        text="Software"
      />
      <HeaderNavItem
        href={"/" + language.identifier + "/blog/finance"}
        text="Finance"
      />
    </HeaderNavMenu>
    <HeaderNavItem
      href={"/" + language.identifier + "/shop"}
      text={language?.getByKey("shop")}
    />
    <HeaderNavItem
      href={"/" + language.identifier + "/contact"}
      text={language?.getByKey("contact")}
    />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderNavItem
      href={"/" + language.identifier + "/legal-details"}
      text={language?.getByKey("legalDetails")}
    />
    <HeaderNavItem
      href={"/" + language.identifier + "/privacy-policy"}
      text={language?.getByKey("privacyPolicy")}
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
