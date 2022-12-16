<template>
  <v-container fluid>
    <v-card height="50" flat></v-card>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-card>
          <v-toolbar color="purple lighten-2" dark>
            <v-toolbar-title>Guía de Phishing</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left> mdi-numeric-1-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-2-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-3-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-4-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-5-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-6-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-7-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-8-box-outline </v-icon>
            </v-tab>
            <v-tab>
              <v-icon left> mdi-numeric-9-box-outline </v-icon>
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Definición de campaña </v-card-title>
                <v-card-text>
                  <p>
                    En ocasiones el cliente tiene ideas sobre como quiere
                    realizar la campaña, en otras se debe construir desde cero.
                    Algunas de las más comunes pueden ser:
                  </p>
                  <ul>
                    <li>Actualizar la contraseña.</li>
                    <li>
                      Actividad inusual detectada en la cuenta del usuario,
                      confirmación de identidad.
                    </li>
                    <li>
                      Participar en el sorteo de algún artículo, se pueden tener
                      en cuenta días especiales en el país del cliente.
                    </li>
                    <li>
                      Inscripción para plataformas de descuentos o beneficios.
                    </li>
                    <li>
                      Formulario para participar en prueba piloto de trabajo de
                      4 días a la semana.
                    </li>
                  </ul>
                  <br />

                  <p>
                    Dependiendo la idea definida se puede crear una imagen para
                    tener una mayor credibilidad, en especial en el caso de
                    sorteos.
                  </p>
                  <p>
                    Luego se definen los dominios o subdominio propuesta para el
                    cliente, para esto se puede utilizar la herramienta
                    <a
                      href="https://github.com/urbanadventurer/urlcrazy"
                      target="_blank"
                      >Urlcrazy</a
                    >. Cuando se encuentra un dominio apropiado es importante
                    buscar que este disponible para la compra. Tambien se define
                    el sender de la campaña que puede ser el mismo con el que
                    normalmente los empleados reciben comunicados.
                  </p>
                  <p>
                    Se envia al cliente el flujo que se piensa utilizar en la
                    campaña para obtener la configuración o cambios
                    correspondientes.
                  </p>
                  <b>Plantilla para enviar propuesta:</b>
                  <v-alert
  border="left"
  color="teal darken-1"
  dense
  outlined
  type="info"
>ADECUAR A LA NECESIDAD DE LA CAMPAÑA


<p>
  <br>
Estimado, de acuerdo a lo conversado en la meeting de hace unos momentos envio la información sobre los avances para la realización de la campaña de Phishing.

Se pensó en la realización de (IDEA DEL PHISHING) que cuente con una fecha lí­mite para participar. Tomamos como ejemplo los emails provistos para idear lo siguiente:
El email consistirá¡ de una imagen como cuerpo del mismo. El asunto será: <span>"(ASUNTO)"</span>
</p>
Imagen en el email:
<br>
 <span>(INSERTAR IMAGEN DEL CUERPO DEL MAIL)</span>
<br>
Sitio a clonar:
<br>
 <span> (INSERTAR IMAGEN DEL LOGIN CLONADO)</span>

<p>
El dominio a comprar podría ser:
</p>
<ul>
  <li><span>(OPCIÓN DOMINIO 1)</span></li>
    <li><span>(OPCIÓN DOMINIO 2)</span></li>

</ul>
<p>
Con dicho dominio, se utilizará¡ como sender de la campaña, a la dirección de correo:
</p>
<ul>
  <li><span>(NOMBRE SENDER) (SENDER@MIDOMINIO.COM)</span></li>
    <li><span>(NOMBRE SENDER) (SENDER@MIDOMINIO.COM)</span></li>

</ul>
<p>
Siendo una posible URL a utilizar en el email, la siguiente:
</p>
<ul>
  <li><span>(URL DEL LOGIN)</span></li>
</ul>

<p>
  <br>
La siguiente imagen muestra la redireccion final luego de ingresar las credenciales:

<span> (IMAGEN DE MENSAJE FINAL) </span>
</p>
<p>
Si están de acuerdo con la propuesta, procederemos a la compra del dominio indicado y a la configuración del servidor para así poder realizar una prueba hacia algún mail de <span>(CLIENTE)</span> para corroborar que llega de manera exitosa y puedan ingresar al sitio clonado sin inconvenientes.
<br>
Cualquier duda o consulta quedo a su disposición!
<br>
Saludos,
</p>
</v-alert>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Desarrollo de landing </v-card-title>
                <v-card-text>
                  <p>
                    Se realiza el login del cliente, en caso de que sea un login
                    de microsoft es importante eliminar cualquier referencia de
                    microsoft, modificar los nombres de css, recursos o imagenes
                    para disminuir el riesgo de bloqueo de dominio. Dirigirse a
                    <a href="#/phishing">Bloqueo de Dominio!</a>
                  </p>
                  <p>
                    Tambien se realiza el html del mensaje posterior a cuando el
                    usuario ingresa las credenciales, para disminuir el riesgo
                    de que los empleados lo detecten como phishing. Por ejemplo:
                    Muchas gracias por participar o proximamente se enviaran los
                    cupones de descuento o cualquier mensaje segun la idea
                    seleccionada para la campaña
                  </p>
                  <b> Ingreso al droplet: </b>
                  <p>
                    Para acceder al droplet se utiliza la ip asignada para el
                    proyecto, desde putty en Host Name se ingresa la ip y
                    dependera como fue configurado para su ingreso se puede
                    utilizar la key desde Connection > SSH > Auth y en 'private
                    key for authentication' se carga el archivo de la llave. Una
                    vez dentro se ingresa con el usuario root
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Instalación de Gophish </v-card-title>
                <v-card-text>
                  <ol>
                    <li>
                      Descargar el release de
                      <a
                        href="https://github.com/gophish/gophish/releases/"
                        target="_blank"
                        >Github</a
                      >
                    </li>
                    <li>Descomprimir el archivo zip dentro del droplet</li>
                    <li>
                      Dentro de la carpeta descomprimida se encuentra el
                      ejecutable gophish, lo más comodo es ejecutarlo en tmux o
                      otro proceso para continuar usando el droplet. En los logs
                      de salida al momento de ejecutar se muestra la password
                      para acceder al gophish.
                    </li>
                    <li>
                      Gophish se ejecuta en el puerto 3333, para acceder de
                      forma local se debe configurar el putty click derecho >
                      Change Settings > Connection > SSH > Tunnels
                    </li>
                    <v-img
                      max-height="350"
                      max-width="350"
                      src="../assets/putty1.png"
                    ></v-img>
                    <p>
                      Una vez se realizan los cambios se da click en Add > Apply
                      y ya se puede acceder desde el navegador de la maquina
                      local
                    </p>
                    <li>
                      Dentro del navegador se muestra un login de Gophish, el
                      cual solicita contraseña, esta primera contraseña esta en
                      los logs de gophish cuando se ejecuto. Una vez se ingresa
                      solicita el cambio de contraseña y ya es posible acceder a
                      gophish.
                    </li>
                  </ol>
                  <p></p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Configuración de Dominio </v-card-title>
                <v-card-text>
                  <p>
                    Una vez se tiene comprado el dominio, ingresar a la cuenta de mailjet para realizar la configuración del dominio y el sender,
                    los registros que se deben agregar son:
                  </p>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Tipo</th>
                          <th class="text-left">Nombre</th>
                          <th class="text-left">Valor</th>
                          <th class="text-left">Comentario</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in regis" :key="item.id">
                          <td>{{ item.type }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.value }}</td>
                          <td>{{ item.comment }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <b>Importante:</b><p>Los cambios en registros A pueden tardar aproximadamente 10 minutos, los TXT 5 minutos. Si despues de este tiempo los registros no se evidencian, estan mal configurados,
                    esto puede ser porque algunos administrador de DNS en lugar de @ utilizan el dominio. Esto significa que los registros deben tener la siguiente forma: nombre.midominio.com
                  </p>
                  <p>Para verificar que registros tiene el dominio se pueden ver <a href="https://toolbox.googleapps.com/apps/dig/#TXT/">aquí</a></p>
                  <p>Por ejemplo:
                    <br>
                    mailjet._domainkey.<b>midominio.com</b>
                  </p>
                  <p>La siguiente imagen es un ejemplo de como se ven los registros:</p>
                  <v-img max-height="600"
                      max-width="600" src="../assets/dominio.png"></v-img>
                  <br>
                  <p>Para validar que los registros han quedado bien configurados dentro de la cuenta de mailjet en "Manage sender addresses" es posible visualizar los dominios agregados junto a su estado
                se da click en Validate <p>
                
                <v-img max-height="600"
                      max-width="600" src="../assets/validate.png"></v-img>
                  <br>
                  <p>Para validar el registro de autenticación se da click en Check now. Luego se muestra la pantalla para verificar el DKIM y SPF haciendo click en Refresh se actualizaran. Cuando todas las validaciones esten correctas
                    desde Gophish en Sending Profile se crea el sender profile para verificarm la configuración.
                  </p>

                  
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Configuración de Gophish </v-card-title>
                <v-card-text>
                  <ol>
                    <li><b>Sending Profile:</b>
                    <br> 
                    Para crear el sender se agrega la info del perfil. 
                    <br>
                    <u>SMTP From:</u> se ingresa asi: Nombre Sender <span>&lt;</span>nombre@midominio.com<span>&gt;</span>
                    <br>
                     <u>Host:</u> es el de mailjet siempre con el puerto 587
                    <v-img max-height="500"
                      max-width="500" src="../assets/pro.png"></v-img>
                      Para las credenciales del usuario se debe conseguir en el perfil de mailjet en: Configurar mi SMTP > Recuperar credenciales de API.
                      <br>
                      La clave de api corresponde al username. La clave secreta se debe regenerar en caso de que no se tenga guardada.
                      <v-img max-height="200"
                      max-width="500" src="../assets/mailjet.png"></v-img>
                      Para verificar que este correctamente configurado se envia el email de test.
                      <br>
                      <u>Importante:</u> las pruebas se deben realizar con un correo externo, ya que por politicas internas no es posible ver correos de otros dominios no autorizados.
                      Se puede hacer la prueba con un gmail pero se debe tener en cuenta que si el correo tiene una imagen esta no se renderiza correctamente, solo en outlook se veo bien.
                    </li>
                    <li><b>Landing Page:</b>
                    <br>
                    Se agrega el nombre, la pagina construida en html, se marca la casilla de Capture submitted Data y Capture passwords dependiendo de la decisión del cliente.
                    Para el redirect se puede utilizar el mensaje de participacion o se envia al login original del cliente. Para más info sobre como debe estar el formulario de login y capturar las credenciales dirigirse a la sección <a href="#/phishing">GoPhish</a> 
                    <br>
                    Todos los archivos como css, imagenes deben estar guardados dentro del server en la ruta gophish > static > endpoint
                    <v-img max-height="600"
                      max-width="500" src="../assets/landing.png"></v-img>
                    <br>
                    En el recuadro rojo se ve la ruta de como se deben traer los archivos guardados en el server.
                    </li>
                    <li><b>Email template:</b>
                    <br>
                    El Envelope sender es el usuario que se ve como remitente al momento de enviar el correo, normalmente se usa el mismo que el configurado en el sender profile. Se agrega el Subject y para el cuerpo se agrega desde la pestaña de HTML
                    ya sea solo texto o imagen se hace en html para mayor facilidad y se marca la casilla de Add Tracking Image. Al momento de agregar el html es importante eliminar el traking que realiza mailjet sobre las imagenes, para esto se agrega la propiedad rel="notrack" sobre las etiquetas de img
                    esto se puede ver en el codigo de la sección <a href="#/phishing">Imagen en Cuerpo</a> Este codigo se usa en caso de que el unico contenido del mensaje sea una imagen, para el caso de un mensaje con texto, se puede guardar el html de un ejemplo enviado por el cliente para modificarlo o hacer de cero, pero siempre eliminando el track de mailjet
                    </li>
                    <li><b>Users and Groups:</b>
                    <br>
                    Desde esta pestaña es posible agregar los usuarios a los que se enviara el correo, se crea el grupo de test al cual se agregan las cuentas que el cliente quiere para validar la campaña. Se crea tambien el grupo de empleados para estos es mas comodo importarlos, se descarga el template CSV y se agregan las cuentas, para utilizar el mailjet gratuito se crean grupos de maximo 190 dado que cada cuenta gratis puede enviar maximo 200 por hora o dependiendo de si la cuenta tiene alguna restricción puede ser menor la cantidad disponible de correos
                    </li>
                  </ol>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Instalación de Certificado</v-card-title>
                <v-card-text>
                  <p>
                    Dirigirse a la sección de <a href="#/phishing">Certbot</a>
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Creación de Campaña</v-card-title>
                <v-card-text>
                  <p>
                    Para crear la campaña se selecciona el email y el landing creado, se utiliza la URL definida en el paso 1, se escoje un perfil y el grupo a quien se detina la campaña.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Pruebas de Cliente</v-card-title>
                <v-card-text>
                  <p>
                    Una vez se tiene todo configurado se envia la prueba al cliente para validar que este llegando correctamente, es importante tener en cuenta el tema del bloqueo de dominio, si una ip de Microsoft accede, tardaría poco en bloquearse esto para el caso de que el login sea una copia de microsoft
                    Una vez esta todo ok, se envia la campaña y se esperan los resultados.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Finalización de Campaña</v-card-title>
                <v-card-text>
                  <p>
                    Cuando ya se termina la campaña se exportan los resultados, tanto el Results como el Raw Events. Para realizar el repo se utiliza la información de Raw Events, es importante organizar los datos como eliminar duplicados y asegurar que los valores tengan sentido, en algunos casos se reportan Clicked pero no open, por lo que se debe agregar los open para que tenga la información mas certera posible.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  data() {
    return {
      regis: [
          {
            id:1,
            type: 'A',
            name: '@',
            value:'IP',
            comment:''
          },
          {
            id:2,
            type: 'A',
            name: '<subdomain>',
            value:'IP',
            comment:'En caso de que se tenga un sudominio se debe agregar este registro, si el se tiene el subdominio login.midominio.com el name corresponde a login'
          },
          {
            id:3,
            type: 'CNAME',
            name: 'www',
            value:'<dominio>',
            comment:'En caso de que el dominio tenga wwww'
          },
          {
            id:4,
            type: 'TXT',
            name: 'mailjet._....',
            value:'<...>',
            comment:'Este registro corresponde al paso #1 de validación del dominio con mailjet, el nombre y el valor de este dependen del valor que les asigne mailjet'
          },
          {
            id:5,
            type: 'TXT',
            name: '@',
            value:'<Configuracion SPF>',
            comment:'Este registro corresponde al paso #2 de autenticación de dominio dentro de mailjet '
          },
          {
            id:6,
            type: 'TXT',
            name: 'mailjet._domainkey',
            value:'<Configuración DKIM>',
            comment:'Este registro corresponde al paso #2 de autenticación de dominio dentro de mailjet'
          },

      ],
    };
  },
};
</script>
