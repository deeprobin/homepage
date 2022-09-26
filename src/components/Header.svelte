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
</script>

<Header href="/" company="Robin Lindner" platformName="deeprobin.de">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavMenu text="Projects">
      <HeaderNavItem href="/projects/featured" text="Featured" />
      <HeaderNavItem href="/projects/side-projects" text="Side projects" />
    </HeaderNavMenu>
    <HeaderNavMenu href="/blog" text="Blog">
      <HeaderNavItem href="/blog/announcements" text="Announcements" />
      <HeaderNavItem href="/blog/software" text="Software" />
      <HeaderNavItem href="/blog/finance" text="Finance" />
    </HeaderNavMenu>
    <HeaderNavItem href="/services" text="Services" />
    <HeaderNavItem href="/shop" text="Shop" />
    <HeaderNavItem href="/contact" text="Contact" />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderNavItem href="/legal-details" text="Legal details" />
    <HeaderNavItem href="/privacy-policy" text="Privacy policy" />
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
