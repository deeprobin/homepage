<script lang="ts">
  import {
    Content,
    Grid,
    Row,
    Column,
    InlineNotification,
  } from "carbon-components-svelte";

  import type { State } from "../../state";
  export let state: State;
</script>

<Content>
  <Grid>
    <Row>
      <Column>
        <noscript>
          <InlineNotification hideCloseButton kind="warning">
            <strong slot="title">
              {state.language?.getByKey("warning")}:
            </strong>
            <strong slot="subtitle">
              {state.language?.getByKey("javascriptNotEnabled")}
            </strong>
          </InlineNotification>
        </noscript>
        <article>
          <slot />
        </article>
      </Column>
    </Row>
  </Grid>
</Content>
