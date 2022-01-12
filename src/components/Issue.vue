<template>
  <v-container fluid>
    <v-card height="70" flat></v-card>
    <v-row justify="center" class="mx-0">
      <v-card flat>
        <v-card-title>
          <span class="text-h2">{{ issue_data.name }}</span>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>

        <v-card-title>
          <span class="text-h5">Tipo</span>
        </v-card-title>

        <v-card-text>{{ issue_data.type }}</v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>
          <span class="text-h5">Información</span>
        </v-card-title>

        <v-card-title>        
          <v-tabs v-model="tab" background-color="indigo lighten-2" grow dark>
            <v-tab> Observación </v-tab>
            <v-tab> Impacto </v-tab>
            <v-tab> Recomendación </v-tab>
          </v-tabs>        
        </v-card-title>

        <v-card-title>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat min-width=500>
              <v-alert
                :value="dialog"
                width="150"
                dense
                shaped
                outlined
                type="success"
                >Copiado!</v-alert
              >
              <v-card-actions>
                <v-icon @click="copyTestingCode('observation')">
                  mdi-content-copy
                </v-icon>
              </v-card-actions>
              <v-card-text >
                {{ issue_data.observation }}
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
              <!-- IMPACTO -->
            <v-card flat min-width=500>
              <v-alert
                :value="dialog"
                width="150"
                dense
                shaped
                outlined
                type="success"
                >Copiado!</v-alert
              >
              <v-card-actions>
                <v-icon  @click="copyTestingCode('impact')">
                  mdi-content-copy
                </v-icon>
              </v-card-actions>
              <v-card-text >
                {{ issue_data.impact}}
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
              <!-- RECOMENDACIÓN -->
            <v-card flat min-width=500>
              <v-alert
                :value="dialog"
                width="150"
                dense
                shaped
                outlined
                type="success"
                >Copiado!</v-alert
              >
              
              <v-card-actions>
                <v-icon  @click="copyTestingCode('recomend')"> mdi-content-copy </v-icon>
              </v-card-actions>
              <v-card-text> 
                {{ issue_data.recommendation}}

             </v-card-text>
            </v-card>
          </v-tab-item>          
        </v-tabs-items>
        </v-card-title>        

        <v-divider class="mx-4"></v-divider>

        <v-card-title>
          <span class="text-h5">Nivel de Riesgo</span>
        </v-card-title>

        <v-card-text>
          {{ issue_data.severity }}
        </v-card-text>
      </v-card>

      <div class="testing-code">
          <input type="hidden" id="observation" :value="issue_data.observation" />
          <input type="hidden" id="impact" :value="issue_data.impact" />
          <input type="hidden" id="recomend" :value="issue_data.recommendation" />
    </div>

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
    copyTestingCode(item) {
        
      let testingCodeToCopy = document.querySelector("#"+item);
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        this.dialog = document.execCommand("copy");
      } catch (err) {
        alert("Oops, unable to copy");
      }
      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
  created() {
    setTimeout(() => {
      this.dialog = false;
    }, 4000);
  },
};
</script>