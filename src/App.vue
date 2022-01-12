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
          to="/english"
          width="100"
          text
        >Inglés</v-tab >

        <v-tab                             
          to="/spanish"
          width="100"
          text
        >Español</v-tab >

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
