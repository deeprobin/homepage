<script lang="ts">
  import { Content, Grid, Row, Column } from "carbon-components-svelte";
  import type { Language } from "../localization/language";
  import Header from "./Header.svelte";
  export let language: Language;
</script>

<Header {language} />

<Content>
  <Grid>
    <Row>
      <Column>
        <slot />
      </Column>
    </Row>
  </Grid>
</Content>
