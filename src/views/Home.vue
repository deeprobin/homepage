<template>
  <div class="home">
    <div class="container">
      <img class="avatar" src="@/assets/avatar.jpg" alt="Avatar: Robin Lindner"/>
      <div class="name">Robin Lindner</div>
      <div class="subtitle">Software-Developer</div>

      <div class="location">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span>Bad Mergentheim, Deutschland</span>
        </div>
      <!--<div class="company">
        <font-awesome-icon :icon="['far', 'building']" />
        <span>Würth Industrie Service GmbH &amp; Co. KG</span>
      </div>-->
      <div class="mail">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span>robin@deeprobin.de</span>
      </div>

      <div class="social-media">
        <span @click="openUrl('https://www.linkedin.com/in/deeprobin/')">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </span>
        <span @click="openUrl('https://github.com/deeprobin')">
          <font-awesome-icon :icon="['fab', 'github']" />
        </span>
        <span @click="openUrl('https://gitlab.com/deeprobin')">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
        </span>
        <span @click="openUrl('https://stackoverflow.com/users/7600021/robin-lindner')">
          <font-awesome-icon :icon="['fab', 'stack-overflow']" />
        </span>
        <span @click="openUrl('https://codepen.io/DeepRobin/')">
          <font-awesome-icon :icon="['fab', 'codepen']" />
        </span>
        <span @click="openUrl('https://twitter.com/_DeepRobin')">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    openUrl(url) {
      const win = window.open(url, '_blank');
      win.focus();
    }
  },
  computed: {
    getSocialMedia() {
      return [
        {
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/deeprobin/',
        },
        {
          icon: ['fab', 'github'],
          url: 'https://github.com/deeprobin',
        },
        {
          icon: ['fab', 'gitlab'],
          url: 'https://gitlab.com/deeprobin',
        },
        {
          icon: ['fab', 'stack-overflow'],
          url: 'https://stackoverflow.com/users/7600021/robin-lindner',
        },
        {
          icon: ['fab', 'codepen'],
          url: 'https://codepen.io/DeepRobin/',
        },
        {
          icon: ['fab', 'twitter'],
          url: 'https://twitter.com/_DeepRobin/',
        },
      ]
    }
  }
}
</script>
<!-- Image by <a href="https://pixabay.com/users/MustangJoe-2162920/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1236581">MustangJoe</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1236581">Pixabay</a> -->
<style lang="scss" scoped>
.home {
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;

  .container {
    width: 384px;
    @media (max-width: 768px) {
      width: 90vw;
    }

    @media (max-height: 500px) {
      max-height: 250px;
    }

    padding-top: 24px;
    padding-bottom: 24px;
    
    background-color: rgba(236, 240, 241, 0.8);
    color: black;
    border-radius: 2px;

    .avatar {
      height: 150px;
      margin: auto;
      margin-top: 12px;
      border-radius: 50%;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;

      @media (max-height: 500px) {
        height: 75px;
      }
    }

    .name {
      margin-top: 8px;
      font-weight: 400;
      font-size: 24px;
    }

    .subtitle {
      font-size: 22px;
      font-weight: 100;
      font-variant: small-caps;
      margin-bottom: 24px;
    }

    .location, .company, .mail {
      text-align: left;
      width: 85%;
      margin: auto;

      & > span {
        margin-left: 12px;
      }
    }

    .social-media {
      & > span {
        display: inline-flex;
        margin-top: 12px;
        margin-left: 2px;
        margin-right: 2px;
        padding: 12px;
        color: #7f8c8d;
        border-radius: 50%;
        border-color: #7f8c8d;
        border-style: solid;
        border-width: 2px;
        transition: all 200ms;
        cursor: pointer;

        &:hover {
          color: #2c3e50;
          border-color: #2c3e50;
        }

        svg {
          width: 16px;
        }
      }
    }
  }
}
</style>