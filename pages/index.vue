<template>
  <div class="home">
    <div class="container">
      <img class="avatar" src="@/assets/avatar.webp" alt="Avatar: Robin Lindner" />
      <h1>Robin Lindner</h1>
      <div class="subtitle">Software-Developer</div>

      <div class="property">
        <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
        <span>Bad Mergentheim, Deutschland</span>
      </div>
      <div class="property">
        <font-awesome-icon :icon="['far', 'building']" />
        <span>Würth Industrie Service GmbH &amp; Co. KG</span>
      </div>
      <div class="property">
        <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
        <span>robin@deeprobin.de</span>
      </div>

      <div class="social-media">
        <a v-for="item of this.getSocialMedia()" :key="item.url" :href="item.url" target="_blank">
          <font-awesome-icon :icon="['fab', item.icon]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  head: {
    title: "DeepRobin.DE",
    meta: [
      {
        property: "og:title",
        content: "DeepRobin.DE: Robin Lindner - Software-Entwickler"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:locale",
        content: "de_DE"
      },
      {
        property: "og:description",
        content: "Die offizielle Homepage von Robin Lindner - Rust, Vue, JVM & .NET Entwickler"
      },
      {
        property: "og:site_name",
        content: "DeepRobin.DE"
      },
      {
        property: "og:url",
        content: "https://deeprobin.de/"
      },
      {
        property: "og:image",
        content: "https://deeprobin.de/img/wallpaper1280.jpg"
      },
      {
        property: "og:image:secure_url",
        content: "https://deeprobin.de/img/wallpaper1280.jpg"
      },
      {
        property: "og:image:alt",
        content: "Der OpenGraph Banner von Robin Lindner."
      }
    ]
  },
  data: {
    jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "Robin Lindner",
        "url": "https://deeprobin.de/",
        "sameAs": "https://deeprobin.de/",
        "mainEntity": "https://deeprobin.de/",
        "author": {
          "@type": "Person",
          "name": "Robin Lindner"
        },
        "publisher": {
          "@type": "Person",
          "name": "Robin Lindner",
          "logo": {
            "@type": "ImageObject",
            "url": "https://deeprobin.de/img/avatar.jpg"
          }
        },
        "datePublished": "2020-07-31T15:39:02Z",
        "image": "https://deeprobin.de/img/avatar.jpg",
        "headline": "Softwareentwickler"
      }
    }
  },
  components: {},
  methods: {
    getSocialMedia() {
      return [
        {
          icon: "linkedin",
          url: "https://www.linkedin.com/in/deeprobin/"
        },
        {
          icon: "github",
          url: "https://github.com/deeprobin"
        },
        {
          icon: "gitlab",
          url: "https://gitlab.com/deeprobin"
        },
        {
          icon: "stack-overflow",
          url: "https://stackoverflow.com/users/7600021/robin-lindner"
        },
        {
          icon: "codepen",
          url: "https://codepen.io/DeepRobin/"
        },
        {
          icon: "twitter",
          url: "https://twitter.com/_DeepRobin/"
        }
      ];
    }
  }
};
</script>
<!-- Image by <a href="https://pixabay.com/users/MustangJoe-2162920/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1236581">MustangJoe</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1236581">Pixabay</a> -->
<style lang="scss" scoped>
$name-size: 24px;
$subtitle-size: 22px;

.home {
  // positioning
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  // appearance
  display: flex;
  position: absolute;

  // alignment
  align-items: center;
  justify-content: center;

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
        height: 15vh;
      }
    }

    h1 {
      margin-top: 8px;
      font-weight: 400;
      font-size: $name-size;
    }

    .subtitle {
      font-size: $subtitle-size;
      font-weight: 100;
      font-variant: small-caps;
      margin-bottom: 24px;
    }

    .property {
      text-align: left;
      width: 85%;
      margin: auto;

      .icon {
        width: 16px;
      }

      span {
        margin-left: 12px;
      }
    }

    .social-media {
      margin-top: 12px;
      a {
        display: inline-flex;
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