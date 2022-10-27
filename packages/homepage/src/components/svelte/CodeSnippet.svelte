<script lang="ts">
  import { CodeSnippet } from "carbon-components-svelte";
  export let code: string;
  export let inline: boolean = false;

  let type: "single" | "inline" | "multi" = inline
    ? "inline"
    : code.includes("\n")
    ? "multi"
    : "single";
</script>

<CodeSnippet bind:code bind:type />
