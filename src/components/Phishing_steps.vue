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
                  <p>Por ejemplo:
                    <br>
                    mailjet._domainkey.<b>midominio.com</b>
                  </p>
                  <p>La siguiente imagen es un ejemplo de como se ven los registros:</p>
                  <v-img max-height="600"
                      max-width="600" src="../assets/dominio.png"></v-img>
                  
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Configuración de Gophish </v-card-title>
                <v-card-text>
                  <p>
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Instalación de Certificado</v-card-title>
                <v-card-text>
                  <p>
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Creación de Campaña</v-card-title>
                <v-card-text>
                  <p>
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Pruebas de Cliente</v-card-title>
                <v-card-text>
                  <p>
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-title> Finalización de Campaña</v-card-title>
                <v-card-text>
                  <p>
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
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
