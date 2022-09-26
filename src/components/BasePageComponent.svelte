<script lang="ts">
  import { Content, Grid, Row, Column } from "carbon-components-svelte";
  import Header from "./Header.svelte";
</script>

<Header />

<Content>
  <Grid>
    <Row>
      <Column>
        <slot />
      </Column>
    </Row>
  </Grid>
</Content>
