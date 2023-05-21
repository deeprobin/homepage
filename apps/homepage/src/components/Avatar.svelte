<script>
  import {
    ImageLoader,
    InlineNotification,
    SkeletonPlaceholder,
  } from "carbon-components-svelte";
</script>

<ImageLoader src="/avatar.webp" ratio="1x1">
  <svelte:fragment slot="loading">
    <SkeletonPlaceholder />
  </svelte:fragment>
  <svelte:fragment slot="error"
    ><InlineNotification
      title="Error:"
      subtitle="Cannot load image"
    /></svelte:fragment
  >
</ImageLoader>
