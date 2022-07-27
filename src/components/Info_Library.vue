<template>
  <v-container fluid>
    <v-card height="70" flat></v-card>
    <v-row justify="center">
      <v-col            
            cols="12"
            sm="12"
            md="12"
            lg="12"
          >
      <v-card flat>
        <v-card-title >
          <span class="text-h4" >{{ issue_data.name }}</span>          
        </v-card-title>        

        <v-card-text> {{ issue_data.support }}</v-card-text>
        <v-divider class="mx-4"></v-divider>
      

        <v-card-title>
          <span class="text-h5">CVEs</span>
        </v-card-title>
        
      
        <v-simple-table  >    
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Version
          </th>
          <th class="text-left">
            Información
          </th>
          <th class="text-left">
            Fecha
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in issue_data.cves"
          :key="item.name"
        >
          <td>{{ item.name }}
            
          </td>
          <td>{{ item.version }}</td>
          <td>{{ item.info }}</td>
          <td>
             <input type="hidden" :id="item.name" :value="item.name" />
            <v-btn
            @click="copy(item.name)"
            dark
            color="blue darken-3"
            class="ml-1"            
          >
            <v-icon >
                  mdi-content-copy
                </v-icon>
          </v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      
         

        <v-divider class="mx-4"></v-divider>
        <div v-if="issue_data.info_end">
        <v-card-title>
          <span class="text-h5">Fecha</span>
        </v-card-title>

        <v-card-text >
          <v-btn
          @click="goDates(issue_data.info_end)">
          + Info
            </v-btn>
          
        </v-card-text>
        </div>

       

       
      </v-card>

     
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["issue_data"],
  data() {
    return {
      dialog: false,
      tab: null,
    };
  },
  methods: {
    copy(item) {
        
      let testingCodeToCopy = document.querySelector("#"+item);
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        this.dialog = document.execCommand('copy');
      } catch (err) {
        alert("Oops, unable to copy");
      }
      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    goDates(date){
      window.open(date);
    }
  },
  created() {
    setTimeout(() => {
      this.dialog = false;
    }, 4000);
  },
};
</script>