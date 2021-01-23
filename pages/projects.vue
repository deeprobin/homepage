<template>
  <div class="projects">
    <div class="container">
      <h1>Projekte</h1>

      <h2>Allgemeine Projekte</h2>
      <div class="project">
        <img src="~/assets/unknown.png" />
        <div>
          <p class="project-name">Cliff (W.I.P)</p>
          <div class="project-description">
            Ein auf der Programmiersprache Rust aufbauendes
            Datenbankmanagementsystem
          </div>
        </div>
      </div>
      <div class="project">
        <img src="~/assets/unknown.png" />
        <div>
          <p class="project-name">bruteforce-rs</p>
          <div class="project-description">
            Eine Softwarebibliothek für die Programmiersprache Rust, welche zur
            performanten Generierung von Zeichenfolgen dienen um diese für eine
            Bruteforce-Attacke zu verwenden. Diese Bibliothek wurde lediglich
            zum Pentesting geschrieben.
          </div>
          <div class="project-link-section">
            <a href="https://github.com/deeprobin/bruteforce-rs" target="_blank"
              >GitHub</a
            >
          </div>
        </div>
      </div>

      <h2>Internetseiten</h2>
      <div class="project">
        <img src="~/assets/chaosolymp.png" />
        <div>
          <p class="project-name">ChaosOlymp.DE</p>
          <div class="project-description">
            Eine Website eines Minecraft-Servernetzwerkes, welche Vue in
            Verbindung mit Nuxt.js auf TypeScript-Basis als Frontend nutzt. Als
            Backend wird eine Kombination aus Rust und Kotlin genutzt.
          </div>
          <div class="project-link-section">
            <a href="https://chaosolymp.de/" target="_blank"
              >In neuem Tab öffnen</a
            >
          </div>
        </div>
      </div>

      <h2>Minecraft-Projekte</h2>
      <div class="project">
        <img class="pixelated" src="~/assets/ruby_mod.png" />
        <div>
          <p class="project-name">Robins Ruby Mod</p>
          <div class="project-description">
            Eine Minecraft-Modifikation, welche den wertvollen Rubin in das
            Spiel bringt. Auch um Rubinwerkzeuge und -waffen ist gesorgt.
          </div>
          <div class="project-link-section">
            <a
              href="https://www.curseforge.com/minecraft/mc-mods/robins-ruby-mod"
              >CurseForge</a
            >&nbsp;
            <a href="https://www.planetminecraft.com/mod/robins-ruby-mod/"
              >Planet Minecraft</a
            >
          </div>
        </div>
      </div>
      <div class="project">
        <img class="pixelated" src="~/assets/amethyst_mod.png" />
        <div>
          <p class="project-name">Robins Amethyst Mod</p>
          <div class="project-description">
            Eine Minecraft-Modifikation, welche die violette Varietät des
            Quarzes in seiner purpurnen Pracht inklusive Werkzeuge und Waffen in
            das Spiel bringt.
          </div>
          <div class="project-link-section">
            <a
              href="https://www.curseforge.com/minecraft/mc-mods/robins-amethyst-mod"
              target="_blank"
              >CurseForge</a
            >&nbsp;
            <a
              href="https://www.planetminecraft.com/mod/robins-amethyst-mod/"
              target="_blank"
              >Planet Minecraft</a
            >
          </div>
        </div>
      </div>
      <div class="project">
        <img class="pixelated" src="~/assets/emerald_mod.png" />
        <div>
          <p class="project-name">Robins Emerald Mod</p>
          <div class="project-description">
            Eine Minecraft-Modifikation, welche die aktuelle Implementierung von
            Smaragden erweitert, wie durch Werkzeuge &amp; Waffen.
          </div>
          <div class="project-link-section">
            <a
              href="https://www.curseforge.com/minecraft/mc-mods/the-emerald-mod-fabric"
              target="_blank"
              >CurseForge</a
            >&nbsp;
            <a
              href="https://www.planetminecraft.com/mod/robins-emerald-mod/"
              target="_blank"
              >Planet Minecraft</a
            >
          </div>
        </div>
      </div>
      <div class="project">
        <img src="~/assets/earny.png" />
        <div>
          <p class="project-name">Earny</p>
          <div class="project-description">
            Eine Bukkit, BungeeCord, Sponge &amp; Velocity Erweiterung, welche
            Chatnachrichten mit monetarisierten Links ersetzt.
          </div>
          <div class="project-link-section">
            <a
              href="https://www.curseforge.com/minecraft/bukkit-plugins/earny"
              target="_blank"
              >CurseForge</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'DeepRobin.DE - Projekte',
    meta: [
      {
        hid: 'title',
        property: 'title',
        content: 'DeepRobin.DE: Projekte',
      },
      {
        hid: 'description',
        property: 'description',
        content: 'Auf dieser Seite befinden sich meine aktuellen Projekte.',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DeepRobin.DE: Projekte',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'de_DE',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Auf dieser Seite befinden sich meine aktuellen Projekte.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'DeepRobin.DE',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://deeprobin.de/projects/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://deeprobin.de/img/wallpaper1280.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://deeprobin.de/img/wallpaper1280.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Der OpenGraph Banner von Robin Lindner.',
      },
    ],
  },
}
</script>
<style lang="scss" scoped>
.projects {
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
    text-align: left;
    width: 90vw;
    max-height: 75vh;

    padding: 12px;
    border-radius: 2px;

    background-color: rgba(236, 240, 241, 0.8);
    color: black;

    overflow: auto;
  }
}

.project {
  border-radius: 4px;
  display: flex;
  background-color: white;
  padding: 8px;
  margin-bottom: 8px;

  & > img {
    height: 96px;
    width: 96px;
    border-radius: 4px;
    margin-right: 12px;

    &.pixelated {
      image-rendering: pixelated;
    }
  }

  .project-name {
    font-weight: 700;
  }

  .project-description {
    font-size: 14px;
  }

  .project-link-section {
    font-size: 12px;

    a:link {
      color: gray;
    }

    a:visited {
      color: rgb(107, 107, 107);
    }
  }
}
</style>