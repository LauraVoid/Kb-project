<template>
<v-container fluid>
    <v-card height="70" flat></v-card>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-simple-table  >    
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Información
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.info }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
import items from './../../data/tls.js'
  export default {
    data () {
      return {
        items:items,
        
      }
    },
  }
</script>