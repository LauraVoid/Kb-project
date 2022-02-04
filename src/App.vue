<template>
  <v-app>
    
    <div class="app-container">
    <header class="app-header">
    <v-app-bar
      app
      absolute
      dense
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
        <v-tab                               
          to="/"
          width="100"
          text
        >
        <v-icon>mdi-home</v-icon></v-tab >

        <v-tab                               
          to="/english"
          width="100"
          text
        >Inglés</v-tab >

        <v-tab                             
          to="/spanish"
          width="100"
          text
        >Español</v-tab >

        <v-tab                             
          to="/phishing"
          width="100"
          text
        >Phishing</v-tab >

      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div>
        <v-tab                               
          to="/login"
          width="100"
          text
        >
        <v-icon>mdi-account</v-icon></v-tab >

      </div>

      <v-spacer></v-spacer>      
    </v-app-bar>
     </header>
    </div>
    <div class="content">
          <router-view></router-view>
    </div>
    
    

     
  </v-app>
</template>

<script>


export default {
  name: 'App',

  

  data: () => ({
    //
  }),
};
</script>
