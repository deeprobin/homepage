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
        id="particles-js"
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

html {
  height: 100%;
  width: 100%;
}

body {
  background: url('./assets/wallpaper1920.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  margin: 0;
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
  z-index: 6;
}

#nav {
  padding: 30px;
  z-index: 10;
  position: relative;
  font-weight: 700;
}

#footer {
  z-index: 10;
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

::-moz-selection, ::selection {
  background: #9b59b6;
}

#particles-js {
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 5;
}

</style>
