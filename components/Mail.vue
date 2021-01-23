<template>
  <a class="mail" v-if="isLink()" :href="getMailto()">
      @
  </a>
  <span class="mail" v-else>
      @
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Mail extends Vue {
    @Prop()
    private readonly mail!: string;

    @Prop({ default: false })
    private readonly link!: boolean


    getMailto() {
        return this.mail;
    }

    isLink() {
        return this.link
    }
}
</script>

<style>
.mail::before {
    content: 'robin';
    margin-right: -3px;
}

.mail::after {
    content: 'deeprobin.de';
    margin-left: -3px;
}
</style>