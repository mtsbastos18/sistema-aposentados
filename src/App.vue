<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Sistema Aposentados</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/usuarios">Usuarios</router-link></li>
          <li><router-link to="/associados">Associados</router-link></li>
          
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/usuarios">Usuarios</router-link></li>
        <li><router-link to="/associados">Associados</router-link></li>
    </ul>
    <router-view/>
  </div>
  
</template>

<style>
nav{
      background-color: #26a69a;
}
nav .nav-wrapper {
    width: 70%;
    margin: auto;
}
</style>
