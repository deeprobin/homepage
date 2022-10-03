<script lang="ts">
  import {
    ContextMenu,
    ContextMenuOption,
    ContextMenuGroup,
  } from "carbon-components-svelte";

  import { Language as LanguageIcon } from "carbon-icons-svelte";
  import type { State } from "../../state";

  export let state: State;
</script>

<ContextMenu>
  <ContextMenuOption labelText="Test" />
  <ContextMenuOption indented labelText="Switch language" icon={LanguageIcon}>
    <ContextMenuGroup labelText="Language">
      {#each state.allLanguages as lang}
        <ContextMenuOption
          labelText={lang?.getByKey("translatedName")}
          on:click={() => {
            let pathName = state.astro.url.pathname;
            let langIndex = pathName.indexOf("/");
            let languageRemovedPath = pathName.substring(langIndex + 1);
            window.location.href = "/" + lang + "/" + languageRemovedPath;
          }}
        />
      {/each}
    </ContextMenuGroup>
  </ContextMenuOption>
</ContextMenu>
