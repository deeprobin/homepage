<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view id="view"/>
    <div id="footer">
      <router-link to="/legal-details">Impressum</router-link> |
      <router-link to="/privacy-policy">Datenschutzerklärung</router-link>
    </div>
    <vue-particles
        class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap');

$link-active: #3498db;
$particles-z-index: 5;
$view-z-index: 6;
$nav-z-index: 10;

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  background: url('./assets/wallpaper1920.webp');
  background-size: cover;
  background-position: center;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}

#view {
  z-index: $view-z-index;
}

#nav {
  padding: 30px;
  z-index: $nav-z-index;
  position: relative;
  font-weight: 700;
}

#footer {
  z-index: $nav-z-index;
  position: fixed;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: auto;
  bottom: 0;
}

#nav, #footer {
  a {
    color: white;

    &.router-link-exact-active {
      color: $link-active;
    }
  }
}

.particles {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  display: flex;
  position: absolute;
  z-index: $particles-z-index;
  
  align-items: center;
  justify-content: center;
}

::-moz-selection, ::selection {
  background: #9b59b6;
}

</style>
