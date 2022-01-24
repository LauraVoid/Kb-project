<template>
  <v-container fluid>
      <v-card
    height="70"
    flat
    ></v-card>
    <v-card elevation="2"
        class="mx-auto"
        max-width="800"
        outlined
        shaped>
       

    <v-card-title>
      GoPhish
    </v-card-title>

    <v-card-subtitle>
      Toolkit
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showGo = !showGo"
      >
        <v-icon>{{ showGo ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showGo">
        <v-divider></v-divider>

        <v-card-text >
        <div ><a href="https://github.com/gophish/gophish/releases/" target="_blank">Release:</a> enlace de github</div> 
        <div><a href="https://docs.getgophish.com/user-guide/template-reference" target="_blank">Reference: </a> variables para el template</div> 
        <div><a href="https://docs.getgophish.com/user-guide/documentation/landing-pages" target="_blank">Landing Pages: </a> docs gophish</div> 
        <div><a href=" https://documentation.mailjet.com/hc/en-us/articles/360042751854-How-to-exclude-a-link-from-being-tracked-when-click-tracking-is-enabled-" target="_blank">Tracker: </a>mailjet</div> 
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
    <v-card
    height="50"
    flat
    ></v-card>

    <v-card elevation="2"
        class="mx-auto"
        max-width="800"
        outlined
        shaped>        

    <v-card-title>
      CERTBOT
    </v-card-title>

    <v-card-subtitle>
      Certificado para landing page
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showCert = !showCert"
      >
        <v-icon>{{ showCert ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showCert">
        <v-divider></v-divider>

        <v-card-text >
        <div ><a href="https://certbot.eff.org/lets-encrypt/" target="_blank">Certbot instructions</a></div> 
        <div>Generar certificado: </div> 
        <div>certbot certonly --manual --preferred-challenges=dns --email ( EMAIL) --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d *.(DOMAIN)</div>
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>


    <v-card
    height="50"
    flat
    ></v-card>

    <v-card elevation="2"
        class="mx-auto"
        max-width="800"
        outlined
        shaped>        

    <v-card-title>
      Varios
    </v-card-title>

    <v-card-subtitle>
      Herramientas
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showTools = !showTools"
      >
        <v-icon>{{ showTools ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showTools">
        <v-divider></v-divider>

        <v-card-text >
        <div ><a href="https://github.com/urbanadventurer/urlcrazy" target="_blank">Urlcrazy: </a> Permutación de dominios</div> 
        <div><a href="https://www.base64-image.de/" target="_blank">Imagen64: </a>Generar la imagen en base 64 </div> 
        <div><a href="https://tmuxcheatsheet.com/" target="_blank">Tmux: </a>Cheat sheet tmux</div>
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>

    <v-card
    height="50"
    flat
    ></v-card>

    <v-card elevation="2"
        class="mx-auto"
        max-width="800"
        outlined
        shaped>        

    <v-card-title>
      Imagen en cuerpo
    </v-card-title>

    <v-card-subtitle>
      Codigo del email con imagen como cuerpo
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showCode = !showCode"
      >
        <v-icon>{{ showCode ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showCode">
        <v-divider></v-divider>

        <v-card-text >
        <div >
            
               <div><span>&lt;html&gt;</span></div> 
               <div><span>&lt;body&gt;</span></div> 
               <div><span>&lt;a href=&quot;{ {.URL}}&quot; rel="notrack"&gt;</span></div> 
               <div><span>&lt;img src="" /&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span>&lt;br&gt;</span></div> 
               <div><span> &lt;p&gt; &lt;img src="{ {.TrackingURL}}" rel="notrack"/&gt; &lt;/p&gt;</span></div> 
               <div><span>&lt;/body&gt;</span></div> 
               <div><span>&lt;/html&gt;</span></div> 
            
        </div> 
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
         showGo: true,
         showCert: true,
         showTools: true,
         showCode: true,
    };
  },
};
</script>