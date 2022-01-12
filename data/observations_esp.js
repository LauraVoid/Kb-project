export default [
    {
     type: "WEBAPP",
     name: "<Archivos/Recursos/Páginas/Documentos> sensibles accesibles anónimamente",
     observation: "Se ha observado que es posible acceder a <archivos/recursos/páginas/documentos> sin mediar autenticación y obtener información sensible de manera anónima. <LISTAR RECURSOS AFECTADOS>",
     impact: "Sin los apropiados controles de acceso que protejan a los <archivos/recursos/páginas/documentos> afectados, cualquier individuo malicioso podría acceder a los mismos, constituyendo una mayor superficie de ataque y proveyendo oportunidades para la exposición de información sensible, que podría ser de utilidad para la planificación y ejecución de ataques de mayor impacto.",
     recommendation: "Se recomienda analizar y modificar el control de acceso a los <archivos/recursos/páginas/documentos> afectados, para garantizar que no puedan ser accedidos por usuarios no autorizados. Además, se recomienda revisar el diseño e implementación de todos los controles de acceso, para asegurar que las restricciones de acceso a los recursos de la misma se encuentran alineadas con los requerimientos del negocio. Para más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/552.html (enlace con contenido en Inglés)",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Acceso a consola administrativa mediante contraseñas triviales",
     observation: "Durante el análisis realizado, Deloitte ha identificado un recurso, el cual se encuentra publicando en internet su recurso de administración asociado. <SI NO PIDE CREDENCIALES: Además, se ha identificado que dicha consola de administración permite el acceso administrativo sin necesidad de autenticarse.> URL Afectada:",
     impact: "El acceso autenticado a consolas de administración permite a usuarios malintencionados modificar configuraciones en los equipos y obtener acceso a información sensible del sistema. Adicionalmente, el usuario malintencionado podría comprometer el equipo utilizándolo como punto de partida para ataques hacia otras redes.",
     recommendation: "Se recomienda establecer el uso de contraseñas complejas para todos los usuarios que cuenten con privilegios de acceso a los recursos de administración. Asimismo, se recomienda modificar la configuración de los equipos afectados, permitiendo que las consolas de administración mencionadas puedan ser accedidas únicamente desde equipos autorizados alojados en la red interna o en una red DMZ de la Compañía.nLas consolas de administración no deberían poder ser accedidas a través de internet. En casos en que sea necesario su acceso remoto, el mismo debería encontrarse limitado a aquellas direcciones IP que correspondan al personal autorizado.nDe la misma forma, puede también optarse por conectarse al servicio de administración a través de una VPN (Virtual Private Network).",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "WEBAPP",
     name: "Acceso a Consola Administrativa Mediante Credenciales Débiles",
     observation: "Durante el análisis realizado, se ha identificado una consola de administración del servidor de aplicaciones JBoss, la cual puede ser accedida usando credenciales por defecto del producto, obteniendo acceso con máximos privilegios. Además, se ha identificado otras consolas del mismo producto que permite el acceso administrativo sin necesidad de autenticarse.nnLa URL de la consola administrativa accesible con una credencial trivial es:nhttp://192.168.218.92:8080/admin-console/nnLas URLs de las consola accesibles sin mediar autenticación son:nhttp://192.168.218.92:8080/jmx-console/nhttp://192.168.218.92:8080/web-console/",
     impact: "El acceso autenticado a consolas de administración permite a usuarios malintencionado modificar configuraciones en los equipos y obtener acceso a información sensible del sistema. Adicionalmente, el usuario malintencionado podría comprometer completamente el equipo y posteriormente utilizarlo como punto de partida para ataques hacia otras redes.nVale destacar que el servicio de JBoss, al ser contenedor de aplicaciones, el acceso administrativo no autorizado, brinda a un usuario malintencionado la posibilidad de ejecutar aplicaciones maliciosas con el objetivo de tomar control del servidor. Como por ejemplo la ejecución remota de una aplicación que ejecute comandos de sistema operativo.",
     recommendation: "Se recomienda analizar la posibilidad de  establecer el uso de contraseñas complejas para todos los usuarios que cuenten con privilegios de acceso a los recursos de administración.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Acceso a funcionalidades sin requerir autenticación",
     observation: "Se ha observado que existen web services con funcionalidades que pueden ser accedidas sin mediar mecanismos de autenticación, mientras se conozcan las URLs. Los web services que han sido identificados como afectados se listan a continuación:",
     impact: "Las observaciones identificadas podrían permitir a un usuario malintencionado, acceder a información sin haberse autenticado previamente, pudiendo de esta forma recopilar información interna de las empresas y a partir de esta planificar un ataque enfocado. Además un usuario malintencionado, podría borrar números Sub-GLN sin haberse autenticado. Asimismo, debe considerarse que otras operaciones derivadas de las funcionalidades afectadas, podrían presentar similares debilidades.",
     recommendation: "Se recomienda modificar el código fuente de la aplicación para garantizar que todas las funcionalidades privadas o que formen parte de un flujo de operación, puedan ser accedidas únicamente por usuarios que se encuentren autenticados y con los privilegios adecuados.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Acceso a Información sensible de otros clientes",
     observation: "Se ha observado que los archivos obtenidos por los clientes a través del menú de descarga de archivos correspondiente a la funcionalidad de “Tarjetas de crédito”, son depositados en una carpeta del servidor WEB y pueden ser accedidos desde internet por cualquier persona que posea un usuario  con acceso al aplicativo y conozca el nombre de dichos archivos. NOTA: Cabe destacar que <CLIENTE> tiene como objetivo agregar resúmenes de cuenta de otros prestadores de tarjeta de créditos adicionales a los existentes.nnURL afectada de ejemplo:nhttps://EXAMPLE.com.ar/UserExtractPDF.aspx?uid=065076084067124084065082074069084065083032068069032067082069068073084079124077067095082069083085077069078124077097115116101114067097114100032071114117112111032049049124056055051051055124065049048048049057051066046077068066124050048049050045048052045049057nnSe ha observado que los nombres de los archivos tienen la siguiente composición:nn[06507608406712408406508207406908406508303206806903206708206906807308407912407706709508206908308507706907812407709711511610111406709711410003207111411711211103204904912405605505]n[1051055]n[12406504904804804905705106604607706806612405004804905004504805204504905[7].<pdf> nDel análisis realizado sobre los mismos se observa que el siguiente patrón podría cumplirse:nnPrimer bloque: ConstantenSegundo bloque: Números aleatorios de 1 a 7 cifrasnTercer bloque: ConstantenCuarto bloque: Número aleatorio de 1 cifra",
     impact: "La debilidad observada posibilita que los archivos obtenidos por los clientes, los cuales contienen información sensible (cuentas, fechas, tipo de transacción, montos asociados, etc.), puedan ser visualizados por otro usuario del sistema que conozca la url afectada de ejemplo. Esta información puede ser usada en forma no autorizada, difundida en forma masiva o accedida por los mismos clientes y/o personal afectado de los clientes, impactando negativamente en la imagen de la Entidad.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de que los archivos mencionados no sean almacenados en disco, sino que se generen en memoria y luego sean enviados al usuario.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Acceso a Línea de Comandos",
     observation: "Se han identificado 27 cuentas de usuario con acceso a la línea de comandos (shell), entre las cuales se encuentran cuentas genéricas o de servicio. ",
     impact: "La seguridad del sistema podría verse debilitada por el acceso de usuarios finales o no autorizados a la línea de comandos, los cuales tendrían la posibilidad de ejecutar comandos sensibles.",
     recommendation: "Se recomienda analizar la posibilidad de restringir el acceso a la línea de comando (shell), únicamente a los administradores del sistema o a usuarios que requieran dichos privilegios en función del rol que desempeñan en la Entidad. Las cuentas de usuarios finales, cuentas genéricas y/o cuentas de aplicación deberían tener restringido el acceso a la línea de comando.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Acceso a LOGs anónimamente",
     observation: "Se ha observado que los archivos de LOGs identificados se encuentran depositados en una carpeta pública del servidor web y pueden ser visualizados por cualquier persona con acceso al servicio web, sin necesidad de estar autenticado en el mismo. URLs afectadas:",
     impact: "El tener acceso a los archivos de LOGs, podría permitirle a un usuario malintencionado poseer un mejor entendimiento de la infraestructura que soporta las aplicaciones de <CLIENTE> con el fin de poder realizar ataques focalizados sobre la misma.",
     recommendation: "Se recomienda reubicar dichos LOGs o aplicar permisos de acceso restrictivos para asegurar que puedan ser accedidos y consultados únicamente por personal y usuarios autorizados.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso a recursos compartidos sin requerir autenticación",
     observation: "Como resultado del análisis de los recursos asociados al dominio RNPCR, se ha detectado que existen equipos los cuales comparten unidades o carpetas de red sin requerir credenciales de acceso. Vale destacar que dichos equipos fueron hallados como consecuencia del análisis de la seguridad del dominio RNPCR, y no se han ejecutado pruebas sobre los mismos.",
     impact: "Los sistemas identificados con permisos de lectura/escritura permiten a usuarios maliciosos afectar la confidencialidad, integridad y/o disponibilidad de la información almacenada en los recursos.",
     recommendation: "Se recomienda limitar los permisos de acceso a las carpetas compartidas afectadas, así como también el acceso a los datos almacenados en las mismas.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Acceso a servidor HTTP Proxy de forma anónima",
     observation: "Se ha observado que el recurso afectado podría ser utilizado como servidor proxy por un usuario malintencionado en forma anónima.nEsto es, mediante la configuración del recurso afectado como servidor proxy en un navegador, es posible acceder al portal web que se encuentra albergado en un servidor interno.",
     impact: "un usuario malintencionado con elevados conocimientos técnicos podría intentar sobrepasar la configuración actual del recurso afectado con el fin de acceder a otros servicios web ocultando su dirección IP real, mediante la suplantación de la misma por la que se encuentre asignada al recurso identificado. Esto se debe a que las consultas HTTP del usuario malintencionado aparentarían provenir del recurso afectado.",
     recommendation: "Se recomienda modificar la configuración del recurso afectado de forma tal que se impida la utilización del mismo como servidor proxy en forma anónima.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso administrativo a impresoras",
     observation: "Fue posible acceder a múltiples impresoras con privilegios administrativos. Entre otras, se puede acceder a:",
     impact: "Existe la posibilidad de que un usuario malintencionado obtenga acceso a las impresoras y desde allí a información sensible.",
     recommendation: "Se recomienda implementar un mecanismo de autenticación con contraseñas no triviales para limitar el acceso al personal que lo requiere.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / INTERNO",
     name: "Acceso administrativo al sistema de monitoreo",
     observation: "Se identificó una interfaz de administración para el sistema de cámaras de vigilancia del banco, la cual puede ser accedida por medio de credenciales por defecto.",
     impact: "Un usuario malicioso con acceso administrativo al sistema de cámaras de vigilancia podría aprovechar dicho acceso para generar ataques de penetración física a locaciones restringidas del banco, además de comprometer la disponibilidad del mismo durante un ataque físico.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que permitan acceder a recursos críticos de negocio, como ser el sistema de cámaras de vigilancia.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "INTERNO",
     name: "Acceso administrativo mediante credenciales por defecto",
     observation: "Se pudo identificar que existe un servidor que brinda acceso a una página de administración, la cual cuenta con usuario y contraseña de administración configurados por defecto.",
     impact: "Es posible que un usuario malintencionado acceda a las páginas de administración utilizando usuarios por defecto que son de conocimiento público. En caso de que un usuario malintencionado logre validarse en dicho recurso, es posible que realice operaciones administrativas que pueden comprometer el recurso afectado.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de eliminar los usuarios por defecto a fin de evitar posibles inconvenientes a futuro en caso de surgir una nueva vulnerabilidad o en su defecto se deberá analizar la posibilidad de modificar las contraseñas por defecto de los usuarios con privilegios de administración.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Acceso administrativo mediante usuarios por defecto",
     observation: "Se pudo identificar que el  servidor <XXXX> posee la consola administración, la cual cuenta con usuario estándar y su respectiva contraseña por defecto.nLa URL afectada es:nhttp://EJEMPLO.comnUser : system nPassword : ******",
     impact: "Es posible que un usuario malintencionado acceda a paginas de administración utilizando usuarios por defecto que son de conocimiento 'publico'. En caso de que un usuario malintencionado logre validarse en dicho recurso, es posible que realice operaciones administrativas que pueden comprometer el recurso afectado.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, y además en los casos en que sea posible renombrarlos, en particular para aquellos que cuenten con máximos privilegios o que permitan acceder a recursos críticos de negocio.  En segundo lugar analizar la posibilidad de limitar los privilegios de los usuarios con acceso al recurso aplicando una política de 'Mínimos Privilegios'.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso administrativo mediante usuarios por defecto",
     observation: "Se pudo identificar que existe un servidor que brinda acceso a una página de administración, la cual cuenta con usuario y contraseña de administración configurado por defecto.",
     impact: "Es posible que un usuario malintencionado acceda a las paginas de administración utilizando usuarios por defecto que son de conocimiento publico. En caso de que un usuario malintencionado logre validarse en dicho recurso, es posible que realice operaciones administrativas que pueden comprometer el recurso afectado.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de eliminar los usuarios por defecto a fin de evitar posibles inconvenientes a futuro en caso de surgir una nueva vulnerabilidad o en su defecto se deberá analizar la posibilidad de modificar las contraseñas por defecto de los usuarios con privilegios de administración.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso administrativo mediante usuarios trivial o en blanco",
     observation: "Se pudo identificar que existen consolas de administración las cuales cuentan con usuarios estándares con sus contraseñas por defecto o en blanco. A continuación se listan los recursos afectados:",
     impact: "Un potencial usuario malintencionado o usuario malicioso podría comprometer la disponibilidad de los equipos afectados o la confidencialidad e integridad de la información transmitida.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados, o que permitan acceder a recursos críticos de negocio.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "VOIP",
     name: "Acceso al menú de aplicaciones",
     observation: "Deloitte ha identificado que es posible acceder al menú de aplicaciones denlos teléfonos VoIP, el cual contiene información de configuración, listado denllamadas recibidas, perdidas y realizadas, etc. Adicionalmente, se hanobservado que para ciertas opciones de configuración, es posible ingresar alnmenú administrativo presionando las teclas “**#”.",
     impact: "Un usuario malintencionado o atacante que obtiene acceso físico a losndispositivos, podría acceder al menú de aplicaciones para enumerarninformación sensible sobre la infraestructura de VoIP (por ejemplo,ndirecciones IP de Call Managers, servidores TFTP, dirección MAC delndispositivo, etc.) y ejecutar ataques adicionales sobre la misma.nAdicionalmente, el acceso al menú administrativo podría permitir al atacantenmodificar valores de la configuración del dispositivo (por ejemplo, la adminnVLAN).",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar políticas ynprocedimientos de uso adecuado de dispositivos VoIP que requieran el cierrende sesión en dispositivos desatendidos. Además, se recomienda restringir elnacceso al menú administrativo.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Acceso anónimo a bases de Notes",
     observation: "Se verificó que existen bases notes accesible sin necesidad de proporcionar usuario y contraseña.nEstas bases presentan información de configuración de los servidores web.nnLas URLs afectadas son:nhttp://ejemplo/domcfg.nsf",
     impact: "Estas bases permiten obtener información sobre los formularios y bases utilizadas para el acceso de los usuarios a la aplicación y de error publicados en las bases.",
     recommendation: "Se recomienda proteger la base afectada, solicitando al usuario que proporcione sus credenciales para acceder a la misma ante un requerimiento de acceso.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Acceso anónimo a carpetas compartidas",
     observation: "Como resultado del análisis de los recursos de la red interna, se ha detectado que existen equipos los cuales comparten unidades o carpetas de red sin requerir credenciales de acceso. ",
     impact: "Los sistemas identificados con permisos de lectura permiten a usuarios maliciosos afectar la confidencialidad de la información almacenada en los recursos.",
     recommendation: "Se recomienda limitar los permisos de acceso a las carpetas compartidas afectadas, así como también el acceso a los datos almacenados en las mismas.n",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso Anónimo a Equipo de Comunicación",
     observation: "Como resultado del análisis de los recursos de la red interna, se ha detectado un equipo de comunicación al cual se le pueden realizar cambios a su configuración de manera anónima con privilegios de administrador.",
     impact: "Los sistemas identificados con permisos de administrador permiten a usuarios maliciosos afectar la confidencialidad de la información almacenada en los recursos y la capacidad de realizar configuraciones que afecten a la compañía.",
     recommendation: "Se recomienda limitar los permisos de acceso y configuración a los equipos de la compañía, así como también el acceso a los datos almacenados en las mismas.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso Anónimo a Impresora Multifuncional",
     observation: "Como resultado del análisis de los recursos de la red interna, se ha detectado un equipo al cual se le pueden realizar cambios a su configuración de manera anónima con privilegios de administrador.",
     impact: "Los sistemas identificados con permisos de administrador permiten a usuarios maliciosos afectar la confidencialidad de la información almacenada en los recursos y la capacidad de realizar configuraciones que afecten a la compañía.",
     recommendation: "Se recomienda limitar los permisos de acceso y configuración a los equipos de la compañía, así como también el acceso a los datos almacenados en las mismas.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso anónimo a servidor de LDAP",
     observation: "Se verificó que existe un servidor de LDAP accesible sin necesidad de autenticarse con un usuario y contraseña válidos. Asimismo, dicho servidor de directorios posee permisos para que cualquier persona en forma anónima pueda conocer el esquema utilizado y la información contenida.",
     impact: "Este servidor de directorios permite obtener información  sobre los usuarios, grupos y direcciones de correo, la cual podría ser utilizada por un usuario malicioso para focalizar ataques de mayor impacto sobre la red interna, o para otros fines como spam.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de proteger el servidor de directorios mediante reglas de acceso al equipo o en el mismo servidor de directorios, denegándole el acceso a cualquier recurso o usuario que no necesite acceder al esquema o a la información contenida en el directorio.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / INTERNO",
     name: "Acceso anónimo de lectura a servidor FTP",
     observation: "Se ha identificado un servidor con el servicio FTP habilitado y aceptando conexiones anónimas permitiendo la lectura de datos.",
     impact: "Cualquier usuario de la red puede acceder al servicio FTP mencionado. Los usuarios pueden leer información disponible y potencialmente explotar vulnerabilidades asociadas con el servicio FTP con el objetivo de ganar acceso al host afectado.",
     recommendation: "Se recomienda eliminar aquellos servicios innecesarios del servidor. En caso en que el servicio FTP sea necesario, implementar apropiadas medidas de seguridad, limitando el acceso únicamente a personal autorizado. Además, se recomienda analizar la posibilidad de modificar las credenciales actualmente configuradas, asegurando que las mismas cumplan con la complejidad requerida según las políticas de contraseñas empleadas en la empresa.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / INTERNO",
     name: "Acceso anónimo de lectura y escritura a servidor FTP",
     observation: "Se ha identificado un servidor con el servicio FTP habilitado y aceptando conexiones anónimas, permitiendo la lectura y escritura de datos. Por ejemplo, se encontraron credenciales de acceso a bases de datos productivas. ",
     impact: "Cualquier usuario de la red puede acceder al servicio FTP mencionado. Los usuarios pueden subir archivos, leer información disponible y de esta forma, maximizar la ventana de ataque, accediendo a las distintas bases de datos disponibles.",
     recommendation: "Se recomienda eliminar aquellos servicios innecesarios del servidor. En caso en que el servicio FTP sea necesario, implementar apropiadas medidas de seguridad, limitando el acceso únicamente a personal autorizado. Además, se recomienda analizar la posibilidad de modificar las credenciales actualmente configuradas, asegurando que las mismas cumplan con la complejidad requerida según las políticas de contraseñas empleadas en la empresa.",
     severity: "ALTO",
     complex: "MEDIO"
    },
    {
     type: "INTERNO",
     name: "Acceso anónimo de lectura y escritura en shares",
     observation: "Se ha observado que existen shares que permiten el acceso anónimo, mediante el usuario GUEST, tanto de lectura como de escritura. En particular, Se ha observado que algunos de los shares afectados poseen información sensible.",
     impact: "El acceso anónimo a archivos podría permitir que un usuario malintencionado obtenga información potencialmente sensible, como credenciales, información de la infraestructura y de la organización. Además, la posibilidad de tener acceso READ / WRITE podría permitir afectar la integridad de dicha información.",
     recommendation: "Se recomienda analizar la posibilidad de remover los permisos READ/WRITE para usuarios del tipo GUEST en los shares afectados. En caso de ser requerido por motivos de negocio, se recomienda analizar la posibilidad de remover aquellos archivos que posean información potencialmente sensible para restringir acceso a los mismos.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso directo a la base de datos",
     observation: "Se identificó que la cuenta de usuario utilizada para acceder a la aplicación, no se encuentra restricta para acceder a la base de datos en forma directa a través de algún query analyzer, como ser SQL*Plus.",
     impact: "La falta de controles o filtros de conexión (ACLs) a la base de datos podría permitir que un usuario intente acceder a la misma en forma directa, evadiendo así los controles efectuados sobre los datos en la aplicación. Esto podría provocar cambios accidentales o forzados sobre los datos.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de filtrar el acceso directo a la base de datos solo a través de los servidores o estaciones de trabajo que lo requieran.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Acceso directo a la base de datos",
     observation: "Se ha observado que la aplicación de escritorio realiza consultas a la base de datos utilizando el método HTTP POST. Además, se ha identificado que para realizar dichas consultas no es necesario proveer credenciales de acceso o identificadores de sesión.nPor ejemplo, es posible enumerar los nombres de usuario de los administradores de la aplicación realizando la siguiente consulta:nxml=<?xml version=1.0 encoding=utf-8?><rdm_request><magic>12345678</magic><aplicativo>ADMINTRA</aplicativo><operacion>sql</operacion><usuario></usuario><password></password><sql>SELECT aco_login FROM acordadr WHERE aco_habilitado=1 AND aco_admin>0</sql><campos_text>0</campos_text><campo_text1></campo_text1><campo_text2></campo_text2><campo_text3></campo_text3></rdm_request>",
     impact: "Un usuario malicioso con acceso al recurso afectado podría intentar obtener acceso o modificar información sensible almacenada en la base de datos o ejecutar comandos. Adicionalmente, el usuario malintencionado podría comprometer el equipo utilizándolo como punto de partida para realizar ataques adicionales sobre otros recursos de <CLIENTE>.",
     recommendation: "En primer lugar, se recomienda implementar un mecanismo de autenticación y autorización que requiera el envío de credenciales o identificadores de sesión para acceder a recursos de la aplicación. En segundo lugar, se recomienda parametrizar las consultas de manera tal que se ofusque información potencialmente sensible sobre la base de datos que soporta la aplicación (nombres de tablas, campos, etc.). Adicionalmente, se recomienda analizar la posibilidad de asegurar programáticamente que se realice una apropiada validación de todos los parámetros con el fin de prevenir posibles ataques de inyección SQL.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "VOIP",
     name: "Acceso no autenticado a la red VoIP",
     observation: "Se ha observado que no parecieran existir controles que impidan que unnequipo o sistema no autorizado se conecte a la red VoIP (VLAN XXX –nIP: X.X.X.X/X).",
     impact: "Un atacante que obtiene acceso físico a algún puerto que provea acceso a lanred VoIP de <CLIENTE> (VLAN XXX – X.X.X.X/X), ya seanconectándose a un puerto “vivo” o desconectando un dispositivo de VoIP,npodría obtener una dirección de IP válida y conectividad a la red. Dichanconectividad podría ser utilizada para realizar ataques adicionales sobre laninfraestructura de <CLIENTE>.",
     recommendation: "Se recomienda analizar la posibilidad técnica de implementar el estándarnIEEE 802.1X de manera tal que los dispositivos de VoIP (por ejemplo, losnteléfonos Cisco 7911) deban autenticarse para poder acceder a la red.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "ATM",
     name: "Acceso no autorizado al interior del cajero",
     observation: "Las cerraduras utilizadas en algunos paneles son de fácil apertura mediante la utilización de ganzúas.  Las cerraduras afectadas son las siguientes:n- <ATM MODELO: Panel posterior y cartucho de notas.> - <ATM MODELO: Panel posterior y panel frontal.>",
     impact: "La utilización de cerraduras que puedan ser fácilmente forzadas reduce la seguridad física de los cajeros, potencialmente exponiendo el acceso a las consolas de administración.",
     recommendation: "Se recomienda analizar la posibilidad de utilizar cerraduras más robustas que las provistas por los fabricantes, a fin de mantener un nivel de seguridad física acorde con las mejores prácticas.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Acceso remoto sin autenticación (VNC)",
     observation: "El protocolo VNC permite acceder de manera remota a un servidor o estación de trabajo y operar de la misma forma en la que lo haría un usuario localmente, ya sea mediante la interfaz gráfica del sistema operativo o su consola de comandos. <SI APLICA: Este acceso se ha conseguido tras evadir el mecanismo de autenticación mediante la explotación de la vulnerabilidad XXX>",
     impact: "El acceso a los recursos identificados a través del protocolo VNC sin autenticación, permite que individuos maliciosos puedan obtener información sensible de esos equipos, ya sea mediante capturas de pantallas, grabación de videos o bien tomando control de los mismos en caso de encontrar sesiones desatendidas.",
     recommendation: "<SI APLICA: Se recomienda analizar la posibilidad la posibilidad de actualizar el la herramienta de acceso remoto VNC a una versión mas actualizada que no sea susceptible a esta vulnerabilidad.> Se recomienda modificar la configuración del servicio VNC instalado en los recursos afectados de manera tal que deba proporcionarse una contraseña alineada con la política de contraseñas de la compañía. ",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Actualización de Seguridad de SQL",
     observation: "Se ha observado que existen actualizaciones de seguridad de la base de datos, que no se encuentran instaladas en los recursos afectados. Los recursos afectados cuentan con el Service Pack 3 instalado, mientras que la ultima versión disponible es la 4.",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema.",
     recommendation: "En los servidores afectados se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para las bases de datos.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Actualizaciones de seguridad",
     observation: "Se ha observado que la base de datos analizada no cuenta con las últimas actualizaciones de seguridad instaladas.nA saber, la versión instalada actualmente es:n- Motor: 9.00.4053.00",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema. Algunas de las actualizaciones de seguridad faltantes resultan esenciales para mitigar vulnerabilidades críticas en  la base de datos.",
     recommendation: "Se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para la base de datos.",
     severity: "ALTO",
     complex: null
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Actualizaciones de seguridad",
     observation: "Se observa que la versión del firmware utilizado en el dispositivo analizado, PIX Version 6.3(5), podría presentar una vulnerabilidad de denegación de servicio conocida y que podría ser explotada por un usuario malintencionado remoto.nnLa vulnerabilidad detectada está dada por:n- CVE-2005-3774nnPara más información dirigirse a:nhttp://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2005-3774",
     impact: "Un usuario malintencionado podría comprometer con mayor facilidad los equipos desactualizados. La versión de software utilizada presenta una vulnerabilidad de riesgo medio y los detalles de las misma, como así también su explotación, puede ser encontrado en internet. A partir de ello, podría recibir ataques del tipo DoS (Denial of Service) que pueden obtenerse de terceros, o bien ser desarrollados por el usuario malintencionado.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de aplicar las medidas de seguridad recomendadas por el fabricante.nnPara más información dirigirse a:nn- http://www.cisco.com/warp/public/707/cisco-sr-20051128-pix.shtml",
     severity: "MEDIO",
     complex: "-"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Actualizaciones de seguridad",
     observation: "Se ha observado que existen actualizaciones de seguridad del sistema operativo que no se encuentran instaladas en los recursos afectados. Las actualizaciones pendientes de instalación se encuentran detalladas en la página siguiente.",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema. Algunas de las actualizaciones de seguridad faltantes resultan esenciales para mitigar vulnerabilidades críticas en  el sistema operativo.",
     recommendation: "Se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para el sistema operativo.",
     severity: "ALTO",
     complex: "-"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Actualizaciones de Seguridad",
     observation: "Se ha observado que la base de datos analizada no cuenta con las últimas actualizaciones de seguridad instaladas. A saber, las versiones instaladas actualmente son:nMotor: 10.2.0.4.0nListener: 10.2.0.4.0nnAsimismo. las últimas versiones disponibles por el proveedor son:nMotor: 10.2.0.5nListener: 10.2.0.5",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema. Algunas de las actualizaciones de seguridad faltantes resultan esenciales para mitigar vulnerabilidades críticas en  la base de datos.",
     recommendation: "Se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para la base de datos y el servicio de Listener.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Actualizaciones de seguridad faltantes – O.S.",
     observation: "Se ha observado que existen actualizaciones de seguridad del sistema operativo que no se encuentran instaladas en el recurso afectado. A saber las mismas son:",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema. Algunas de las actualizaciones de seguridad faltantes resultan esenciales para mitigar vulnerabilidades críticas en  el sistema operativo. ",
     recommendation: "Se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para el sistema operativo.",
     severity: "ALTO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Administración de Roles – Rol Resource",
     observation: "Como resultado del análisis de privilegios asignados a usuarios del sistema, se observó que los siguientes usuarios poseen el rol crítico RESOURCE asignado:nLOGSTDBY_ADMINISTRATORnOTPnEl rol RESOURCE cuenta con los siguientes privilegios críticos asignados:n-CREATE CLUSTERn-CREATE INDEXTYPEn-CREATE OPERATORn-CREATE PROCEDUREn-CREATE SEQUENCEn-CREATE TABLEn-CREATE TRIGGERn-CREATE TYPE",
     impact: "Privilegios mayores a los necesarios incrementa el riesgo de accesos no autorizados a recursos críticos del sistema (datos o funciones). Asimismo, la situación mencionada posibilita la materialización del riesgo de ocurrencias de denegaciones o degradaciones en el servicio prestado por la base de datos.",
     recommendation: "Analizar la factibilidad de quitar la asignación del rol RESOURCE a los usuarios de la base de datos que no realizan tareas de administración. Asimismo, se recomienda analizar la posibilidad de restringir los privilegios asignados a roles/ usuarios tomando como base el principio del menor privilegio.n",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "WEBAPP",
     name: "Afectación de la disponibilidad del servicio web",
     observation: "Como consecuencia de las pruebas automáticas ejecutadas, se han detectado problemas de configuración en el módulo de RSA asociado a la aplicación, los cuales generaban múltiples errores. nnDichas notificaciones generaban una alerta que concluía afectando la disponibilidad del “Application Pool” del servicio Web IIS que soporta la Banca en Línea. nnEsta debilidad fue detectada por personal de Deloitte analizando los eventos de auditoría disponibles en el equipo que soportaba la aplicación correspondiente.",
     impact: "La debilidad anteriormente expuesta permitiría a un usuario malintencionado, por medio del empleo de herramientas automáticas disponibles en internet, afectar la disponibilidad de la banca en línea.nnAnte este tipo de ataques se podrían presentar las siguientes consecuencias:nn Afectación de los ingresos la Entidad en los momentos en los cuales la disponibilidad se vea afectada.n Afectación de la imagen de la Entidad.",
     recommendation: "Se recomienda analizar la posibilidad de actualizar el módulo de RSA asociado a la aplicación, instalando la última versión disponible.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Almacenamiento inseguro de contraseñas",
     observation: "Las contraseñas de los usuarios locales y del dominio definidos en el dominio <CLIENTE>, son almacenadas tanto en formato LANMAN como en formato NTLM.nPor ejemplo, se observa que los hash de las credenciales de los usuarios del host “<CLIENTE>203” son almacenadas usando LANMAN:",
     impact: "El método LANMAN utilizado dispone de un mecanismo débil de cifrado de claves, posibilitando la decodificación de las contraseñas de los usuarios por medio de ataques de fuerza bruta.",
     recommendation: "Se recomienda considerar la posibilidad de establecer lineamientos de seguridad para el adecuado resguardo de claves de Windows. Dichos lineamientos deberían contemplar utilizar únicamente el método de almacenamiento NTLM v2 para el cifrado de contraseñas locales y de dominio.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Almacenamiento inseguro de contraseñas",
     observation: "Se ha observado que existen contraseñas de usuarios locales y de dominio pertenecientes a recursos de <XX> que son almacenadas en formato LANMAN.",
     impact: "El método LANMAN utilizado dispone de un mecanismo débil de cifrado de claves, posibilitando la decodificación de las contraseñas de los usuarios por medio de ataques de fuerza bruta. Esto podría permitir que un usuario malintencionado obtenga credenciales válidas para acceder a un sistema.",
     recommendation: "Se recomienda analizar la posibilidad de establecer lineamientos de seguridad para el adecuado resguardo de claves de Windows. Dichos lineamientos deberían contemplar utilizar únicamente el método de almacenamiento NTLM v2 para el cifrado de contraseñas locales y de dominio.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Analizador de consultas habilitado a nivel de aplicación",
     observation: "Se ha observado que, a través de la utilización de los wildcards “:” y “&” se puede acceder en algunos forms de consultas de la aplicación Stealth al analizador de consultas query/where, el cual brinda la posibilidad de ejecutar consultas en forma directa sobre la base de datos mediante ataques de inyección SQL.",
     impact: "La habilitación de la herramienta query/where podría permitir a un usuario malintencionado ejecutar comandos en forma directa sobre la base de datos, evitando así los posibles controles existentes a nivel de aplicación como por ejemplo controles de longitud, de tipo de caracteres, entre otros.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de deshabilitar el uso de la herramienta query/where sobre la aplicación Stealth.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Antivirus no detectado en el servidor web",
     observation: "Fue observado que la aplicación aparentemente no chequea por la presencia de virus en los archivos adjuntos en <FUNCIÓN>. Por la respuesta satisfactoria obtenida del servidor web, se puede inferir que el archivo de prueba utilizado no fue detectado.",
     impact: "Si un archivo infectado es subido al servidor web, los usuarios que puedan recibir los mensajes enviados por los clientes podrían estar expuestos a distinta clase de riesgos. Entre estos riesgos se incluye la ejecución de código remoto en el equipo del usuario.",
     recommendation: "Se recomienda que <CLIENTE> revea si existe un antivirus o agente de antivirus instalado en el servidor web afectado. En caso de que exista uno instalado se deberá analizar si el archivo de prueba fue detectado efectivamente, de lo contrario se deberán implementar los cambios necesarios para detectar adecuadamente la presencia de virus en los adjuntos a los mensajes enviados a la entidad. De igual forma, una vez instalado o si ya hay un antivirus instalado, se debe actualizar, asegurándose de que la versión del archivo de definición de virus sea el más reciente para dicho antivirus. Finalmente, se debe generar una política (si no la hay) sobre la revisión de los registros de acceso para detectar intentos de infección.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO/INTERNO",
     name: "Apache server-status expone información sensible del sistema",
     observation: "El módulo de Apache 'server-status' se encuentra habilitado en el recurso afectado, permitiendo la exposición de información sensible relacionada con el funcionamiento del servidor.nLa siguiente captura de pantalla muestra que el módulo afectado expone información como la versión del software y el tiempo de actividad del servidor.n",
     impact: "La recolección de información es, usualmente, el primer paso para realizar un ataque. La exposición de información le provee a un individuo malicioso un mayor conocimiento acerca de la infraestructura y podría ser aprovechada para la planificación de ataques externos sobre los recursos de Interbanking. Adicionalmente, el conocimiento acerca de las versiones de las plataformas utilizadas, le permitiría a un individuo malicioso ejecutar ataques específicos para el software utilizado, incrementando la probabilidad de éxito en los mismos.",
     recommendation: "Se recomienda considerar quitar o bloquear el acceso a la funcionalidad de server-status a usuarios externos, así como también la revisión de todo el contenido web en el servidor para identificar cualquier otra página, servlet, o función indebida expuesta a Internet. Adicionalmente, se recomienda actualizar los estándares de seguridad en el desarrollo y puesta en producción de servicios, de manera tal que contemple los riesgos asociados a la exposición de información sensible acerca de la infraestructura interna, tales como nombres de hosts, direcciones IPs, versiones de software, path internos y nombres de usuarios.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Aplicación de monitoreo accesible anónimamente",
     observation: "Se ha observado la existencia de aplicaciones de monitoreo accesibles de manera anónima a través de las siguientes URLs: <completar con las URLs afectadas>.",
     impact: "Las aplicaciones de monitoreo brindan información adicional sobre la infraestructura a la que dan seguimiento. Si la aplicación no requiere autenticación, la misma podría ser accedida de manera remota y anónima por un individuo malicioso para obtener información sensible. La información sensible obtenida, podría ser utilizada para planificar y focalizar ataques a los recursos de la compañía.",
     recommendation: "Se recomienda analizar la posibilidad de implementar un mecanismo de autenticación que valide la identidad de los usuarios que acceden a la aplicación de monitoreo y restringir el acceso a la misma únicamente a través de direcciones IP autorizadas.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/306.html (enlance con contenido en Inglés)",
     severity: "MEDIO",
     complex: "BAJO"
    },
    {
     type: "WEBAPP",
     name: "Archivos de prueba y desarrollo publicados en producción",
     observation: "Se han observado númerosos archivos de desarrollo, prueba o resguardo publicados en producción, los cuales no son requeridos para el normal funcionamiento de las aplicaciones.",
     impact: "La observación identificada podría permitir a un usuario malintencionado externo o usuario malintencionado sin conocimientos técnicos, acceder a fragmentos del código fuente de la aplicación o a funciones no homologadas publicadas en internet. Los archivos mencionados permiten, entre otras cosas:n- Acceder a código fuente;n- Utilizar funciones no homologadas de la aplicación. ",
     recommendation: "Se recomienda efectuar un análisis detallado de todos los archivos que se encuentran publicados en internet, evaluar cuáles son indispensables para el funcionamiento de la aplicación y eliminar aquellos que no sean requeridos, como por ejemplo los archivos de resguardo.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Archivos Log almacenados en el mismo medio que la aplicación",
     observation: "Se ha observado que los archivos de logs generados por el aplicativo se almacenan en el mismo recurso  donde se encuentra alojada la aplicación.",
     impact: "Si los archivos de logs son almacenados en el mismo recurso, puede aumentar el riesgo de generar una denegación de servicios, si el espacio designado para estos archivos se completa. Además, si el sistema es comprometido, un usuario malintencionado podría acceder a estos archivos de logs y modificarlos, con intenciones de ocultar sus actividades en el sistema.",
     recommendation: "Se recomienda considerar almacenar los archivos de logs en un recurso distinto al que se utiliza para almacenar la aplicación.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Ataque de Clickjacking posible",
     observation: "Se ha observado que <la aplicación / las aplicaciones> no parece(n) incluir ninguna protección anti-Clickjacking, lo que permitiría que la aplicación web afectada sea cargada a través de objetos del tipo frame / iframe.",
     impact: "La falta de una protección anti-clickjacking podría forzar al navegador del usuario a cargar un sitio web incluido dentro de las etiquetas <frame> o <iframe>. Esto podría proveerle a un individuo malicioso la capacidad de aplicar técnicas de ingeniería social contra usuarios legítimos de la aplicación, induciéndolos a realizar un 'click' sobre el contenido malicioso, con el fin de intentar obtener sus credenciales u otra información de sesión que le permita obtener acceso no autorizado a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de incluir el encabezado X-Frame-Options para prevenir los ataques de Clickjacking. Además, se recomienda considerar la investigación de mecanismos que impidan que la aplicación se cargue a través de objetos del tipo frame o iframe externos, asegurando que el comportamiento apropiado de la aplicación no se vea afectado.nPara información adicional, por favor referirse al siguiente enlace:n• http://cwe.mitre.org/data/definitions/103.html (Contenido en inglés).n",
     severity: "INFORMATIVO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Ataque de fuerza bruta sobre contraseñas",
     observation: "Se identificó que los números de cuentas de las empresas son vulnerables a un ataque de fuerza bruta sobre la contraseña, sin límites de intentos, debido a una inadecuada configuración del bloqueo de cuentas. URL afectada:",
     impact: "Un usuario malintencionado podría intentar ejecutar un ataque de fuerza bruta dirigido contra una empresa en particular (si tuviese conocimiento del número de tarjeta de dicha empresa). En dicho escenario, el porcentaje de efectividad pareciera ser muy alto debido a la reducida cantidad de posibles valores de la contraseña (desde 0000 a 9999).",
     recommendation: "Se recomienda analizar la posibilidad de modificar la funcionalidad de bloqueo de cuentas por intentos de acceso fallidos en el lado del servidor, y mitigar así la posibilidad de realización de ataques de fuerza bruta.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Auscencia de control de referer ",
     observation: "El servidor afectado no cuenta con medios para identificar cuando se solicitan recursos desde otros dominios. <Adicionalmente, la imagen de verificación utilizada en el proceso de login carece de dicho control y es posible obtener la imagen de verificación asignada a un determinado usuario.>",
     impact: "Si el servidor no verifica que al solicitar recursos, la petición sea originada desde el mismo dominio mediante el análisis de la cabecera “Referer”, un usuario malicioso podría solicitarlos desde sitios ajenos a <CLIENTE> con la finalidad de realizar un ataque de ingeniería social con mayor precisión. ",
     recommendation: "Se recomienda analizar si la ausencia de un control de referer es necesaria para el negocio, en caso de no serla, se recomienda implementar un control global de referer en el servidor, con el fin de evitar que los recursos del servidor sean solicitados por otros dominios ajenos a <CLIENTE>. <Adicionalmente, se recomienda mantener un control estricto en las funcionalidades encargadas del login, con el fin de dificultar la creación de una página de phishing.>",
     severity: "INFORMATIVO/BAJO (si el login tiene imagen de verificación)",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Ausencia de botón de cierre de sesión",
     observation: "Se identificó que la aplicación afectada no cuenta con un mecanismo que asegure que las sesiones de usuarios son finalizadas e invalidadas.",
     impact: "Al no contar con un mecanismo para el cierre de sesión, un usuario malicioso podría aprovechar dicha vulnerabilidad para recuperar la sesión de un usuario válido y obtener acceso a información confidencial, realizar transferencias, etc.",
     recommendation: "Se recomienda realizar un análisis a nivel código fuente de la aplicación, e implementar un mecanismo de cierre de sesión que finalice la sesión del lado del servidor e imposibilite la utilización de funcionalidades privadas luego de su ejecución.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "MÓVIL",
     name: "Ausencia de detección de jailbreak",
     observation: "La aplicación <APLICACION> no verifica si el iPhone se encuentra en estado de Jailbreak.nEn las siguientes capturas de pantallas se muestra la aplicación “Cydia” instalada en el dispositivo y la aplicación <APLICACION> ejecutándose sin detectar el dispositivo en estado de Jailbreak:n",
     impact: "Si un iPhone se encuentra en estado de Jailbreak y una aplicación no lo detecta, podría ejecutarse dicha aplicación en un entorno inseguro. El proceso de Jailbreak, rompe la cadena original de ejecución de aplicaciones en sandbox de Apple, permitiendo que un usuario malintencionado intente eludir los controles de seguridad con la intención de ganar acceso al dispositivo vía conexiones como SSH. Esto puede ser aprovechado para acceder a información sensible como la almacenada en el directorio de la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de modificar la aplicación afectada a fin de asegurar que ante el intento de ejecutarla en un iPhone en estado de Jailbreak, se muestre un mensaje indicando que la aplicación no puede ser ejecutada y evitar la ejecución de la misma.",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Autenticación HTTP Basic habilitada",
     observation: "Se ha observado la utilización del mecanismo de autenticación HTTP Basic en los siguientes recursos: <COMPLETAR>",
     impact: "El mecanismo de autenticación HTTP Basic no permite la implementación de mecanismos de seguridad tales como autenticación de dos factores, controles CAPTCHA o teclados virtuales, los cuales dificultan la ejecución de ataques de adivinación de contraseñas por parte de individuos maliciosos. Además, la característica de autocompletado de credenciales no puede ser deshabilitada, por lo cual los navegadores que la soportan y están configurados para recordar los usuarios y sus contraseñas (normalmente por defecto), las almacenarán en el cache. Si un individuo malicioso obtuviera acceso a la computadora de la víctima en la cual las credenciales han sido guardadas, podría recuperarlas desde el cache del navegador y usarlas para obtener acceso a la aplicación.",
     recommendation: "Se recomienda analizar si la autenticación del tipo HTTP Basic es requerida por motivos de negocio. De lo contrario, se recomienda deshabilitarla y reemplazarla por un mecanismo de autenticación basado en formularios HTML, cuyo parámetro Autocomplete se encuentre deshabilitado. Además, se recomienda considerar la utilización de mecanismos de seguridad adicionales tales como autenticación de dos factores, mecanismos anti-scripting CAPTCHA y/o teclados virtuales, y proveer un mensaje de advertencia de autenticación.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WIRELESS",
     name: "Autenticación Wireless a través de Pre-shared Key",
     observation: "Se identificó que la red Wireless <XXXX>, se encuentra autenticando usuarios a través de una Pre-Shared Key (PSK).nLos recursos afectados son: <Agregar ANEXO o Listado de los APs afectados con BSSID, SSID y CIFRADO.> ",
     impact: "Debido a vulnerabilidades de diseño en los protocolos WPA/WPA2, es posible obtener el hash correspondiente a la PSK, la cual podría ser llegar a ser descifrada si la complejidad de la misma no fuera la adecuada.",
     recommendation: "Deloitte recomienda evaluar la utilización de esquemas de autenticación del tipo “Enterprise”, que permitan que cada usuario que se conecte a la red ingrese sus propias credenciales de manera que sea plausible auditar tanto accesos como acciones. De no ser posible, se recomienda utilizar claves con complejidad en su composición (caracteres especiales, longitud mínima de 12 caracteres) e implementar un proceso de rotación de claves que sea ejecutado cada 3 meses. ",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Autenticaciones simultáneas permitidas",
     observation: "Se ha observado que es posible autenticarse en la aplicación de manera simultánea, desde dos direcciones IP diferentes, utilizando la misma cuenta de usuario.",
     impact: "La posibilidad de acceder simultáneamente desde dos diferentes direcciones IPs, usando el mismo conjunto de credenciales válidas, proporciona la capacidad a un individuo malicioso de utilizar la aplicación al mismo tiempo que el usuario legitimo sin ser detectado",
     recommendation: "Se debe considerar la posibilidad de revisar los requisitos de negocio y funcionales para determinar si el inicio de sesiones simultáneo debe ser soportado por la aplicación. De no ser requerido, las nuevas sesiones deben invalidar las anteriores, de modo que si una nueva sesión es iniciada desde otra dirección IP, la sesión inicial sea finalizada e indicar que tal vez exista actividad en la cuenta desde otra ubicación. Además, se debe considerar la posibilidad de revisar la política de inicio de sesiones simultáneo aplicada al resto de las aplicaciones web publicadas, con el fin de lograr consistencia. La asociación de direcciones IPs a cada sesión iniciada es un método para ayudar a resolver este riesgonPara información adicional, por favor referirse al siguiente enlace:n• http://cwe.mitre.org/data/definitions/724.html (Contenido en inglés).n",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Autocomplete no declarado",
     observation: "Se ha observado que el atributo autocomplete no se encuentra deshabilitado para el campo de contraseña en el formulario de autenticación. nNota: Actualizaciones recientes en los navegadores más populares (como las nuevas versiones de Chrome, Firefox, e Internet Explorer) han cambiado su comportamiento en relación a la forma en la que funciona el Autocomplete, ignorando esta funcionalidad por completo y ofreciendo recordar las contraseñas, inclusive en los casos en los que se ha deshabilitado mediante el código HTML. De todas formas, navegadores desactualizados pueden no ser afectados por estas actualizaciones y no ignorar esta funcionalidad, por lo que de todas formas es recomendable deshabilitar dicha función.n",
     impact: "Los navegadores, por defecto, proponen al usuario almacenar sus credenciales. De esta manera, las credenciales de los usuarios que lo acepten quedarían almacenadas, lo cual podría permitirle a un individuo malicioso que obtenga acceso al equipo (estación de trabajo, terminales compartidas y/o terminales de uso público, obtener las credenciales, y acceder de manera no autorizada a la aplicación, suplantando la identidad de las víctimas. <INCLUIR SOLO SI HAY XSS>Además, las credenciales de usuario almacenadas en el navegador podrían ser obtenidas por un individuo malicioso remoto que explotara de manera exitosa la vulnerabilidad de Cross-site Scripting.",
     recommendation: "Se recomienda modificar el código HTML del componente de autenticación, de manera tal que el atributo autocomplete sea deshabilitado de los campos de contraseña.nPara más información, por favor, visite los siguientes enlaces: http://msdn.microsoft.com/en-us/library/ms533032(v=vs.85).aspx y https://www.owasp.org/index.php/Testing_for_Vulnerable_Remember_Password_and_Pwd_Reset_(OWASP-AT-006) (enlaces con contenido en Inglés) ",
     severity: "INFORMATIVO/BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Backdoor de desarrollo en ambientes de test y producción",
     observation: "Durante el desarrollo de las pruebas, se encontró que existe una debilidad en el esquema de autenticación que permite iniciar sesion con el usuario <NOMBRE> sin ingresar ningún tipo de credenciales. La existencia de dicha debilidad se comprobó adicionalmente en el ambiente de producción.",
     impact: "Dicho usuario posee diferentes permisos en el ambiente de test y en el ambiente de producción, teniendo en este ultimo privilegios incluso mas elevados que en el anterior.nEn uno de los ambientes, producción, el usuario es administrador de seguridad y puede, mediante otra funcionalidad de la aplicación, ejecutar sentencias SQL aleatorias.nEn el otro ambiente, test, el usuario no es administrador de seguridad y solo puede ejecutar consultas SQL de tipo SELECT.nEn ambos ambientes, el usuario posee privilegios de escritura sobre ciertas carpetas utilizando otra funcionalidad de la aplicación.",
     recommendation: "Backdoors dejados para el desarrollo de las aplicaciones deben ser removidas cuando la aplicación deja el ambiente de desarrollo. Los ambientes de Test y Producción deben correr la misma versión de la aplicación, sobre la misma plataforma y con una configuración lo mas idéntica posible.nAdicionalmente todos los ambientes deben encontrarse separados.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Bases de datos con parches de seguridad faltantes",
     observation: "Como resultado del análisis de los servicios activos, se ha identificado una estación de trabajo en la cual se está ejecutando el servicio de base de datos DB2. Dicho servicio presenta parches de seguridad críticos faltantes. Sus CVE asociados son listados a continuación: CVE-2008-2154, CVE-2008-3852, CVE-2008-3854, CVE-2008-3855, CVE-2008-3856, CVE-2008-3857, CVE-2008-6821.",
     impact: "Un usuario malicioso podría comprometer con mayor facilidad los servidores desactualizados. Las versiones de software utilizadas presentan debilidades de riesgo medio-alto y los detalles de las mismas, como así también su explotación, pueden ser hallados en internet. A partir de ello, podría recibir ataques con exploits y DoS (Denial of Service), que pueden obtenerse de terceros, o bien ser desarrollados por el usuario malintencionado.",
     recommendation: "Se recomienda analizar la posibilidad de actualizar las versiones o aplicar los últimos parches de seguridad tanto a nivel del sistema operativo como de los servicios que brindan los equipos.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Bases de datos configuradas con credenciales por defecto",
     observation: "Se ha observado que existen bases de datos configuradas con credenciales por defecto.",
     impact: "El uso de usuarios y contraseñas por defecto en bases de datos podría permitir que un usuario malintencionado logre acceso a las mismas, comprometiendo la integridad, confidencialidad y disponibilidad de la información almacenada. En particular, cuentas con privilegios elevados (como la mencionada cuenta “sa” para Microsoft SQL Server), suelen ser unos de los primeros puntos de ataque para intentar obtener acceso no autorizado a la infraestructura.",
     recommendation: "Se recomienda analizar la posibilidad de desactivar los usuarios por defecto, en caso de no ser requeridos por razones de negocio. En caso contrario, se recomienda modificar el valor de las contraseñas asociadas, asegurando que las mismas cumplan con la complejidad requerida según las políticas de contraseñas empleadas en la empresa. Además, se recomienda analizar la posibilidad de realizar auditorías periódicamente sobre los usuarios activos para identificar cuentas por defecto y / o con contraseñas potencialmente débiles.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Bloqueo de cuentas inexistente",
     observation: "Se ha observado que es posible ingresar contraseñas inválidas múltiples veces sin que la cuenta sea bloqueada. NOTA: Se realizaron 15 intentos consecutivos de contraseñas incorrectas para la misma cuenta (nombre de usuario: “a”).",
     impact: "Si una cuenta no es bloqueada después de un número determinado de intentos de contraseña incorrectos, la misma podría ser comprometida por un usuario malintencionado, a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda analizar la posibilidad de bloquear las cuentas después de un determinado número de ingresos de contraseña incorrectos, usualmente definido entre 3 y 5 intentos. Asimismo, las cuentas que se bloqueen deberían ser automáticamente desbloqueadas luego de un corto periodo de tiempo para prevenir potenciales ataques de denegación de servicio.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Bypass de autenticación",
     observation: "Es posible saltear la fase de autenticación de las páginas <URLs> indirectamente utilizando en la página de registro el RUT de un cliente existente.nnCabe destacar que durante las pruebas, esta vulnerabilidad fue explotada exitosamente obteniendo así información de otros usuarios de las aplicaciones web afectadas.",
     impact: "Aprovechando la vulnerabilidad, es posible ver datos del usuario real que corresponde a ese RUT, ver el importe y datos de su última compra y los últimos números de la tarjeta de crédito usados para dicha compra.",
     recommendation: "Se recomienda verificar el proceso de alta de los usuarios a fin de que no sea posible dar de alta nuevamente usuarios que existan en el sistema.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "MÓVIL",
     name: "Captura de pantalla no desactivada para todas las funciones de entrada de datos",
     observation: "La funcionalidad de Android para la captura de pantalla, no fue deshabilitada para las funciones que requieren la entrada de datos por parte del usuario en la aplicación Giros. En particular, fue posible obtener la captura de pantalla con cada uno de los caracteres provistos por el usuario en cada una de las siguientes funcionalidades:",
     impact: "Un individuo malicioso podría utilizar aplicaciones de Android maliciosas diseñadas para monitorear la actividad de ingreso de datos en los dispositivos móviles. Si tiene éxito, podría ser posible obtener capturas de pantalla de cada uno de los caracteres provistos por el usuario antes de ser ofuscados por la aplicación. En particular, un individuo malicioso, podría obtener la contraseña completa y número de línea del usuario que podrían utilizarse para obtener acceso no autorizado a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar la funcionalidad de Android de captura de pantalla en las funciones afectadas. Adicionalmente, se recomienda asegurar que la antedicha funcionalidad de captura de pantalla se encuentra deshabilitada en todas las funciones que requieran la entrada de datos por parte del usuario o bien puedan mostrar información potencialmente sensible.",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "EXTERNO",
     name: "Certificado SSL inválido",
     observation: "Se ha observado que los navegadores reportan el certificado SSL utilizado por el servidor web de la aplicación, como inválido. Esto se debe a que <el certificado SSL es auto-firmado, es decir que no ha sido emitido por una autoridad reconocida (CA).> o <el certificado SSL se encuentra vencido desde el <COMPLETAR FECHA>> o <el certificado ha sido firmado usando un algoritmo que se considera inseguro. Particularmente, el/los recursos afectados han sido firmados por medio del algortimo SHA1.>",
     impact: "El uso de certificados inválidos origina que los navegadores emitan un mensaje de error cada vez que los clientes establecen una conexión segura con el servidor. De esta manera, un mensaje de error es presentado a los usuarios del servicio, requiriendo su aceptación antes de poder acceder al sitio web. Sin embargo, cuando esto sucede de manera frecuente, los usuarios se acostumbran al mensaje de error generado e ignoran los detalles particulares del origen del mismo. Así, un individuo malicioso podría realizar un ataque del tipo Man-In-The-Middle, con el objeto de interceptar la comunicación entre el usuario y el servidor web, utilizando para ello un certificado SSL fraudulento generado por el mismo. En tal situación, la probabilidad de que el usuario legítimo de la aplicación ignore el error presentado se incrementa considerablemente, y de igual manera la probabilidad de que el individuo malicioso tenga éxito en su ataque y obtenga información sensible, tal como las credenciales.",
     recommendation: "Se recomienda considerar la posibilidad de <adquirir un certificado SSL expedido por una autoridad confiable (CA) de Internet> o <renovar el certificado SSL vencido>. Además, se recomienda revisar y modificar, si es necesario, la política de renovación de certificados SSL de manera tal de asegurar que los mismos sean renovados antes de la fecha de vencimiento establecida. Finalmente, se recomienda asegurar que los certificados renovados incluyan el uso del algoritmo SHA256, en lugar de SHA1.nPara más información, por favor, visite los siguientes enlaces: http://cwe.mitre.org/data/definitions/295.html y http://cwe.mitre.org/data/definitions/298.html (enlaces con contenido en Inglés)",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Código perteneciente a otra empresa o  grupo",
     observation: "Se ha observado que el código fuente afectado contiene información que pareciera corresponder a otra empresa o grupo llamada “Produbanco”.",
     impact: "Presentar información que corresponde a otra Compañía, podría afectar la imagen de la Entidad o generar desconfianza en los usuarios de la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de remover del código de la aplicación toda información que se encuentre asociada a otra empresa.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Compatibilidad con protocolo SSH v1",
     observation: "Se identificó que los servicios afectados soportan SSH v1, el cual se encuentra obsoleto y contiene vulnerabilidades. Este protocolo no es criptográficamente seguro y por ello no debe ser utilizado.",
     impact: "Un atacante con acceso al canal encriptado SSH podría insertar bloques encriptados, los cuales al desencriptarse ejecutarían comandos arbitrarios en el servidor SSH. Las consecuencias de las vulnerabilidades presentes en SSH v1 incluyen, entre otras, comunicación comprometida y acceso root shell al host del sistema.",
     recommendation: "Un atacante podría aprovechar esta versión de SSH para obtener acceso no autorizado. Se recomienda analizar la posibilidad de reconfigurar los servidores SSH para aceptar únicamente conexiones SSH v2 y asegurar esta consistencia para otros servidores SSH que se encuentren en el ambiente. Adicionalmente, se recomienda analizar la posibilidad de rever los requerimientos para el uso del servicio SSH en los servicios afectados y, de no ser requeridos, deshabilitarlos. O <Se recomienda analizar la reconfiguración de los servidores SSH para aceptar únicamente conexiones SSHv2 y asegurar esta consistencia cuando se construyan sistemas de este tipo>",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Compiladores instalados en el ambiente de producción",
     observation: "Se identificó la presencia de compiladores en al menos un servidor de producción.",
     impact: "La situación expuesta precedentemente genera un incumplimiento de las disposiciones del Ente Regulador (B.C.R.A.), expuestas en la Comunicación “A” 4609.",
     recommendation: "Se recomienda analizar la presencia de software no autorizado en equipos del ambiente de producción y como parte de dicho análisis remover todo software no autorizado detectado.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "VOIP",
     name: "Comunicación no cifrada",
     observation: "Deloitte identificó que los dispositivos VoIP relevados (E.J. Teléfonos Cisco 7911)nno se encuentran soportando la opción de seguridad de “Llamada cifrada”.",
     impact: "Un usuario malicioso o atacante externo con acceso al canal de comunicaciones podría escuchar y grabar conversaciones telefónicas realizadas utilizando la red VoIP.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar la función de seguridad “Llamada cifrada”, que permita cifrar los datos de las llamadas telefónicas y prevenir el acceso no autorizado a las mismas.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Comunicación no cifrada",
     observation: "Se ha observado la existencia de servicios que presentan riesgos de seguridad debido a que no utilizan un canal de comunicación cifrado. Los servicios identificados son: <FTP, TELNET, SNMPv1, rLogin, rsh, HTTP> <SI SOLO SE IDENTIFICO HTTP>Se ha observado que el servidor permite el envío de información sensible, como credenciales de aplicación, sobre un canal no cifrado (es decir, sin la utilización de SSL/TLS), exponiendo las credenciales a ser interceptadas y/o robadas. <EN CASO DE FORZAR EL HTTP>Se ha observado que, si bien el servidor Web soporta la utilización de un canal cifrado (HTTPS), éste no es forzado al ingresar a la aplicación.",
     impact: "El uso de canales de comunicación cifrados impide que un individuo malicioso con acceso al medio de comunicación pueda observar el contenido original de la información transmitida. Puesto que los <dispositivos/aplicaciones> afectadas no fuerzan la utilización de cifrado, la información se transmite en texto plano, permitiéndole a un individuo malicioso con acceso al medio <SI EXTERNO>interceptar información sensible, robar credenciales o comprometer los servicios afectados realizando ataques de red externos. <SI INTERNO>generar ataques de red internos para comprometer los servicios afectados, tales como envenenamiento 'ARP poisoning' en conjunto con técnicas del tipo 'Main-in-The-Middle' (MiTM).",
     recommendation: "Se recomienda analizar si los servicios de comunicación no cifrados son requeridos por el negocio. Si no son requeridos, se recomienda deshabilitarlos y reemplazarlos por las versiones seguras de los protocolos afectados. <SI TELNET/RLOGIN>Telnet y rlogin podrían ser reemplazados por SSH. <SI SNMPv1>SNMPv1 podría ser reemplazado por SNMPv3. <SI FTP>FTP podría ser reemplazado por SFTP. <SI HTTP>En el caso de HTTP, se recomienda analizar y modificar la configuración de los servicios web de manera tal que las páginas que transmiten credenciales de usuario y/o cualquier otra información sensible sean únicamente accesibles a través de canales seguros (tal como SSL/TLS). Además, SSL/TLS debe ser configurado de manera tal de forzar un nivel de cifrado de 128 bits o superior. También, se debe asegurar que los certificados SSL utilizados tengan el nombre de host adecuado, no estén expirados, y sean emitidos por una autoridad confiable (CA) para prevenir ataques del tipo Man-in-The-Middle (MiTM). Además, las cookies de sesión utilizadas por la aplicación web deberán ser configuradas utilizando el atributo 'secure'. Finalmente, se recomienda considerar la posibilidad de requerir a los usuarios de la aplicación que modifiquen las contraseñas utilizadas, puesto que las mismas podrían haber sido comprometidas.nPara más información, por favor, visite los siguientes enlaces: http://cwe.mitre.org/data/definitions/319.html, http://cwe.mitre.org/data/definitions/523.html (enlace con contenido en Inglés)",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / INTERNO",
     name: "Comunidad SNMP por defecto",
     observation: "El dispositivo afectado se encuentra configurado para responder a consultas SNMP de comunidades por defecto. La comunidad por defecto detectada es “public”.",
     impact: "El servicio SNMP permite obtener información valiosa de las versiones, servicios disponibles y configuraciones relativas al software y hardware. Adicionalmente, la comunidad SNMP de lectura/escritura puede ser utilizada para modificar la configuración de los dispositivos de comunicación, así como también, obtener privilegios administrativos sobre otros dispositivos.",
     recommendation: "Se recomienda analizar si el protocolo SNMP es requerido por el negocio. De no ser requerido, se recomienda considerar deshabilitarlo. En el caso de que el protocolo SNMP sea requerido, se recomienda considerar el uso de una comunidad segura.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / INTERNO",
     name: "Comunidad SNMP trivial",
     observation: "Los dispositivos afectados se encuentran configurados para responder a consultas SNMP de comunidades publicas y privadas triviales.",
     impact: "El servicio SNMP permite obtener información valiosa de las versiones, servicios disponibles y configuraciones relativas al software y hardware. Adicionalmente, la comunidad SNMP de lectura/escritura puede ser utilizada para modificar la configuración de los dispositivos de comunicación, así como también, obtener privilegios administrativos sobre otros dispositivos.",
     recommendation: "Se recomienda analizar si el protocolo SNMP es requerido por el negocio. De no ser requerido, se recomienda considerar deshabilitarlo. En el caso de que el protocolo SNMP sea requerido, se recomienda evitar que el servicio SNMP responda a nombres de comunidad triviales.nnPara ampliar la información ver el siguiente link:nnhttp://www.cisco.com/warp/public/707/cisco-sa-20010227-ios-snmp-ilmi.shtml",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO",
     name: "Configuración de sendmail",
     observation: "La configuración del servicio de sendmail posee valores diferentes a los recomendados: No se posee configurados los valores “novrfy” y “noexpn” en el parámetro “Privacyoptions”, los cuales permitirían evitar la utilización de los comandos propios VRFY y EXPN (entre otros).nnLos servidores afectados se listan a continuación:",
     impact: "Errores en la configuración del servicio sendmail incrementa el riesgo de ataques de denegación de servicio, de accesos no autorizados por la ejecución de comandos críticos y puede comprometer la información enviada por correo.  En particular existe la posibilidad que usuarios no autorizados a través de la ejecución de comandos obtengan información de las cuentas del sistema.",
     recommendation: "Se recomienda analizar la posibilidad de configurar el parámetro de privacidad de sendmail (confPRIVACY_FLAGS) de modo que no permita la ejecución de comandos sendmail inseguros:ndefine(`confPRIVACY_FLAGS',`goaway')dnlnDe este modo, se deshabilitarían diversos comandos SMTP, tales como EXPN y VRFY, los cuales pudieran ser utilizados para revelar los nombres de usuarios locales a un potencial spammer. ",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "VOIP",
     name: "Configuración de teléfonos VoIP accesible anónimamente",
     observation: "Se ha identificado que es posible acceder anónimamente a la configuraciónnde teléfonos VoIP vía Web",
     impact: "Un usuario malintencionado o atacante que obtiene acceso a la red VoIPnpodría acceder a la configuración de los recursos afectados para enumerarninformación sensible sobre la infraestructura de VoIP (por ejemplo,ndirecciones IP de Call Managers, servidores TFTP, dirección MAC delndispositivo, etc.) y ejecutar ataques adicionales sobre la misma.",
     recommendation: "Se recomienda dar de baja los servicios que no sean requeridos por razonesntécnicas o del negocio. De no ser posible dar de baja el servicio web, senrecomienda analizar la posibilidad técnica y operativa de modificar lanconfiguración de los equipos afectados y / o las reglas de acceso a nivel denred (ACLs), permitiendo que dicha información pueda ser accedidanúnicamente desde equipos autorizados alojados en una red administrativa.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Configuración del servicio NTP",
     observation: "Como resultado del análisis de la configuración del dispositivo, Se ha observado que no se encuentra configurado para el mismo un servidor de sincronización de tiempo (servidor NTP).",
     impact: "Debido a la falta de un servidor de sincronización de hora (servidor NTP), se requiere un mayor esfuerzo para asegurar que los diferentes equipos de la red mantengan sincronizados sus relojes internos. En caso que alguno de los equipos quedara de-sincronizado respecto al resto, se incrementaría la complejidad de  las tareas de análisis y correlación de eventos de seguridad registrados en las pistas de auditoría (LOGs).",
     recommendation: "Se recomienda analizar la posibilidad de implementar un servidor de sincronización de hora en la red (en un equipo distinto al firewall), y luego sincronizar el resto de los dispositivos con dicho servidor. nPara el caso del Firewall bajo análisis, la configuración mencionada se logra a través de la implementación de los siguientes parámetros: nn- ntp authenticaten- ntp trusted-key key-idn- ntp authentication-key key-id md5 key-stringn- ntp server ip-address key key-id",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "ATM",
     name: "Configuración insegura de BIOS",
     observation: "La configuración del BIOS no se encuentra protegida con contraseña. A continuación se detallan los recursos afectados:n- <Diebold Opteva 564>: < El acceso a la configuración del BIOS no se encuentra protegida por contraseña. Sin embargo, no se permite bootear por otro dispositivo que no sea el disco duro.> - <NCR SelfServ 26>: < El acceso a la configuración del BIOS no se encuentra protegida por contraseña. El sistema permite bootear por otros dispositivos una vez que se cambió el orden de booteo.> - <NCR SelfServ 32>:< Posee una contraseña trivial para acceder al BIOS.>",
     impact: "Un individuo malicioso podría modificar la configuración de BIOS y arrancar el sistema con herramientas que le permitan obtener acceso completo al disco duro, lo que resulta en la capacidad de leer, borrar o modificar archivos sensibles.",
     recommendation: "Se recomienda analizar la posibilidad de implementar mecanismos más robustos de configuración del BIOS como parte del proceso de despliegue de cajeros. Ademá, <CLIENTE> debería considerar configurar el BIOS para sólo permitir el arranque desde el disco duro, el arranque desde la unidad de disquete, unidad de CD-ROM u otros dispositivos USB deben ser desactivados. Finalmente, el BIOS del sistema debe ser protegido con una contraseña segura que se cambie periódicamente. Dependiendo de los requisitos de mantenimiento, puede ser aconsejable utilizar un BIOS que permita dos niveles de contraseñas: una para el acceso general al BIOS, y una segunda contraseña que se utiliza para realizar modificaciones al iniciar el sistema.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Configuración insegura de la aplicación del cajero",
     observation: "Se ha observado que la aplicación del cajero NCR no se ejecuta automáticamente al iniciar Windows.",
     impact: "Un atacante podría aprovechar un reinicio del cajero o forzar uno para conseguir acceso administrativo a Windows, desde el panel frontal del mismo, permitiendo acceso total al sistema operativo y a archivos de configuración.",
     recommendation: "Se recomienda analizar la posibilidad de restructurar el arranque de la aplicación del cajero a fin de que la misma se inicie en forma automática al loguearse el usuario, evitando dejar expuesto el sistema operativo.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "MÓVIL",
     name: "Configuración insegura del archivo de configuración AndroidManifest",
     observation: "Se ha observado que el archivo AndroidManifest.xml está configurado con valores que difieren de las mejores prácticas de la industria. En particular, los parámetros 'android:allowBackup' y “android:debuggable” se encuentra configurado como “true”. <Por default, el parametro 'android:allowBackup' es TRUE, por lo que debe estar seteado como false>",
     impact: "Si el parámetro “android:allowBackup” <se encuentra configurado como "+true+"/no se encuentra configurado>, un atacante malicioso podría intentar acceder a información potencialmente sensible de la aplicación, mediante la utilización de la función adb backup, cuando el mismo se encuentre activo. Adicionalmente, si el parámetro android:debuggable” es configurado con el valor “true” en el archivo de configuración AndroidManifest.xml, podría permitir que la aplicación sea depurable y dar lugar a la fuga de datos.",
     recommendation: "Se recomienda cambiar la configuración actual de los parámetros afectados por “false”, a fin de cumplir con la mejor práctica recomendada por la industria. Además, se recomienda asegurar que dicha configuración se encuentre alineada con los estándares definidos por <CLIENTE>.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Consola de administración web",
     observation: "El servicio de administración web del dispositivo permite el inicio de sesiones SSL utilizando mecanismos de cifrado débiles, como ser SSLv2 y SSLv3 o TLS con cifrado menor a 128 bits.",
     impact: "Un usuario malintencionado con elevados conocimientos técnicos podría intentar bajar el nivel de cifrado del canal de comunicaciones y posteriormente intentar visualizar datos sensibles.",
     recommendation: "Se recomienda configurar el servicio Web para que sólo permita TLS o SSL v3 con cifrado de 128 bits o superior y que no sea posible modificar el nivel de cifrado requerido por el mismo.nPara el caso del Firewall bajo análisis, la configuración mencionada se logra a través de la implementación de los siguientes parámetros:nn- ssl server-version {sslv3-only | tlsv1-only}n- ssl encryption {3des-sha1 | aes128-sha1 | aes256-sha1}",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "EXTERNO",
     name: "Consola SQL accesible desde internet",
     observation: "Se ha verificado que el recurso afectado publica una consola SQL sin autenticación en internet.nRecurso afectado:",
     impact: "El acceso sin autenticación a la consola SQL permitiría a usuarios malintencionados o usuarios maliciosos modificar configuraciones en los equipos, obtener acceso a información sensible del sistema o ejecutar comandos. nAdicionalmente, el usuario malintencionado podría comprometer el equipo utilizándolo como punto de partida para ataques hacia otras redes.",
     recommendation: "Se recomienda modificar la configuración del equipo afectado, permitiendo que la consola de administración mencionada pueda ser accedida únicamente desde equipos autorizados alojados en la red interna o en una red DMZ de la Compañía. Las consolas de administración no deberían poder ser accedidas a través de internet. En caso en que sea necesario su acceso remoto, es importante comprobar que su uso esta adecuadamente limitado a direcciones IP que correspondan al personal autorizado y en condiciones seguras. De la misma forma, puede también optarse por conectarse al servicio de administración a través de una VPN (Virtual Private Network).",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "VOIP",
     name: "Consolas de administración accesibles desde la red VoIP",
     observation: "Durante el análisis realizado se identificó que los recursos listados disponennde un servicio de administración (E.J. Cisco Unified Call Manager) accesiblendesde la red VoIP (E.J. VLAN 407).",
     impact: "Un usuario malintencionado o atacante que obtiene acceso a la red VoIPnpodría ejecutar ataques de adivinación de contraseñas contra las consolasnadministrativas del <VENDOR>  Call Manager (E.J. Cisco Call manager). Si el ataque es exitoso, el accesonautenticado a esta consola administrativa podría permitir a usuarios malnintencionados modificar configuraciones en los equipos de telefonía IP ynobtener acceso a información sensible. Adicionalmente, el usuario malnintencionado podría comprometer el equipo utilizándolo como punto denpartida para ataques hacia otras redes.",
     recommendation: "Se recomienda analizar la posibilidad técnica y operativa de modificar lanconfiguración de los equipos afectados y / o las reglas de acceso a nivel denred (ACLs), permitiendo que las consolas de administración puedan sernaccedidas únicamente desde equipos autorizados alojados en una rednadministrativa.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Consolas de Apache Tomcat configuradas con credenciales por defecto",
     observation: "Se ha observado consolas de Apache Tomcat configuradas con credenciales por defecto.",
     impact: "Consolas de Apache Tomcat configuradas con credenciales por defecto podrían permitir que un usuario malintencionado acceda al sistema y logre obtener información sensible. Además, por los privilegios asociados, suelen ser uno de los primeros puntos de ataque. Asimismo, un usuario malintencionado podría utilizar las consolas accedidas para correr comandos del sistema operativo e intentar comprometer el sistema, como crear usuarios locales, que podrían tener privilegios administrativos en caso de tratarse de un sistema Windows. Obtener un usuario válido en el sistema puede ser de utilidad para lograr ataques de mayor envergadura, como intentar escalar privilegios dentro de la estructura de la red interna.",
     recommendation: "Se recomienda analizar la posibilidad de modificar las credenciales actualmente configuradas, asegurando que las mismas cumplan con la complejidad requerida según las políticas de contraseñas empleadas en la empresa. Además, se recomienda analizar si es requerido, por razones de negocio, que las consolas de Apache Tomcat puedan ser accedidas desde la red interna local y considerar restringir su acceso solo para ciertas IPs.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO",
     name: "Consultas DNS recursivas a dominios externos habilitada",
     observation: "Se ha observado que el servidor DNS permite a cualquier usuario desde Internet, realizar consultas DNS recursivas sobre dominios para los cuales el servidor no es responsable.",
     impact: "Al permitir consultas DNS recursivas sobre dominios desde cualquier dirección IP, el servidor podría ser utilizado por un individuo malicioso para conducir ataques de amplificación DNS en contra de objetivos ajenos a la compañía ubicados en Internet. Si el servidor DNS de la compañía es utilizado para tal fin, <nombre_del_cliente> podría experimentar una disminución en la calidad del servicio.",
     recommendation: "Se recomienda restringir el acceso recursivo a los servidores de DNS afectados, a sólo aquellos hosts internos de la organización que lo requieran por razones de negocio. Además, se recomienda actualizar los estándares de seguridad de configuración y puesta en producción de servidores de DNS, de manera tal que contemple los riesgos asociados a la permisividad de consultas recursivas por parte de cualquier host desde Internet. Para más información, por favor, visite el siguiente enlace: http://www.us-cert.gov/ncas/alerts/TA13-088A (enlace con contenido en Inglés)",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Contraseña por defecto",
     observation: "Como resultado del análisis de contraseñas de cuentas de usuario sobre el dispositivo evaluado, se observa que si bien el dispositivo posee configurada una contraseña para el acceso al dispositivo en 'modo usuario', la misma es la contraseña por defecto definida por el fabricante.",
     impact: "El uso de contraseñas por defecto podría ser aprovechada por un usuario malintencionado para ganar acceso al dispositivo afectado y posteriormente intentar elevar sus privilegios de acceso sobre el mismo.",
     recommendation: "Se recomienda cambiar todas las contraseñas por defecto de todos los dispositivos de IT previo a su puesta en producción. Asimismo, recomendamos almacenar esta nueva contraseña en un sistema de gestión de contraseñas que controle y registre el uso de las mismas. En el caso que la organización no cuente con este software, como alternativa recomendamos almacenar las contraseñas en sobres cerrados y guardados bajo llave para ser usados sólo en caso de emergencia.",
     severity: "MEDIO",
     complex: "-"
    },
    {
     type: "INTERNO",
     name: "Contraseña trivial en consolas de administración remota",
     observation: "Se identificaron equipos en la red local que cuentan con un servicio de administración remota (VNC) activo, el cual es accesible mediante el uso de una contraseña trivial.",
     impact: "El acceso a los equipos podría verse comprometido debido a que se esta utilizando una contraseña trivial.nEl riesgo se incrementa debido a que un usuario malintencionado puede observar la pantalla del usuario físico del equipo, pudiendo además obtener capturas de pantalla e incluso grabar en video toda la sesión.",
     recommendation: "Se recomienda analizar la posibilidad técnica de no hacer uso de estos mecanismos de acceso remoto al equipo, o bien definir e implementar contraseñas complejas para todos los recursos de la infraestructura:nnLongitud mínima de caracteres: 8 nCantidad mínima de caracteres alfanuméricos: 4nCantidad mínima de caracteres numéricos: 2nCantidad mínima de otros caracteres: 2",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseña trivial en equipo de comunicaciones",
     observation: "Se identificó un equipo de comunicaciones con una contraseña trivial por defecto. Adicionalmente la misma contraseña permite la administración total de dicho equipo.",
     impact: "Un potencial usuario malintencionado o usuario malicioso podría realizar ataques de fuerza bruta o adivinación de contraseñas sobre los equipos afectados, a fin de obtener privilegios de administración sobre los mismos, y comprometer la disponibilidad de dichos equipos o la confidencialidad e integridad de la información transmitida.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados. nPor otra parte recomendamos resguardar en sobre cerrado las contraseñas de identificadores de usuario no personalizados, ya sean de “Emergencia” o de “Servicio”.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Contraseñas basada en diccionarios",
     observation: "Como resultado del análisis de contraseñas de cuentas de usuario sobre el dispositivo evaluado, se observa que si bien el dispositivo posee configurada una contraseña para el acceso al dispositivo en 'modo usuario', la misma es trivial y está basada en palabras de diccionarios.  nnContraseña del 'modo usuario':nn- passwd 2KFQnbNIdI.2KYOU encryptednnLa contraseña del hash anterior es 'cisco'.",
     impact: "La utilización de contraseñas débiles podría ser aprovechada por un usuario malintencionado para ganar acceso al dispositivo afectado. ",
     recommendation: "Se recomienda implementar una política de contraseñas que contemple al menos los siguientes puntos:n- Longitud mínima de caracteres: 8n- Cantidad mínima de caracteres alfanuméricos: 4n- Cantidad mínima de caracteres numéricos: 2n- Cantidad mínima de otros caracteres: 2",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "INTERNO",
     name: "Contraseñas de Administración Compartidas",
     observation: "Fueron detectadas númerosas cuentas de administradores Unix cuyas contraseñas eran compartidas en múltiples servidores.",
     impact: "Si uno de los recursos afectados presenta una vulnerabilidad que permitiera a un usuario malintencionado obtener la contraseña del administrador, también se encontrarían comprometidos aquellos servidores que comparten la contraseña.",
     recommendation: "Se recomienda que sean utilizadas contraseñas distintas y complejas para todos los administradores del equipamiento utilizado (estaciones de trabajo, servidores, firewalls, etc.). ",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "ATM",
     name: "Contraseñas de Administración Compartidas",
     observation: "Fue encontrada una cuenta de operador cuya contraseña es compartida en múltiples cajeros del mismo proveedor:",
     impact: "Si uno de los recursos afectados presenta una vulnerabilidad que permitiera a un individuo malicioso obtener la contraseña del administrador, también se encontrarían comprometidos aquellos cajeros que comparten la misma.",
     recommendation: "Se recomienda que sean utilizadas contraseñas distintas y complejas para los usuarios de mantenimiento de los cajeros. Y analizar la posibilidad de la aplicación de una correcta política de contraseñas, la cual se extienda uniformemente sobre la entidad.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas de administración local compartidas en entorno Windows",
     observation: "Se ha observado el usuario “Administrator” cuyo valor de contraseña se repite reiteradas veces dentro del entorno Windows.",
     impact: "Si alguno de los recursos afectados presentase una vulnerabilidad que permita a un usuario malintencionado obtener la contraseña del administrador, también se encontrarían comprometidos aquellos servidores que comparten la contraseña.",
     recommendation: "Se recomienda analizar la posibilidad de que sean utilizadas contraseñas distintas y complejas para los administradores locales dentro de la infraestructura del <CLIENTE> (como estaciones de trabajo, servidores, firewalls, etc.) o de implementar un sistema de administración de contraseñas, como “Password Safe”.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas de administradores de dominio que no han sido modificadas acorde a las mejores prácticas",
     observation: "Se ha observado que existen cuentas de usuario con permisos de administradores de dominio cuyas contraseñas no han sido modificadas por períodos mayores a los recomendados por las mejores prácticas.",
     impact: "Los usuarios sin caducidad de la contraseña podrían ser vulnerables a ataques, tales como adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda analizar la posibilidad de establecer una política de expiración de contraseñas uniforme que alcance tanto cuentas locales como de dominio, a excepción de las cuentas de servicio, las cuales deberán estar debidamente documentadas con un responsable asignado. Para ello, puede activarse la opción 'Enforce password expiration'.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Contraseñas enviadas en texto plano",
     observation: "Se identificó que al utilizar la funcionalidad de creación de cuentas de usuario en la aplicación afectada, la contraseña inicial asociada a la cuenta es enviada en texto plano en un correo electrónico dirigido usuario. La URL afectada es:",
     impact: "Enviar correos con las credenciales de acceso a los usuarios, ya no se considera una práctica aceptada en los estándares actuales de seguridad web. Adicionalmente, si las contraseñas son enviadas en texto plano, un usuario malintencionado que tenga acceso al canal de comunicación podría capturar dichas credenciales.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar una funcionalidad Web de “Activación de usuario”, enviándole al mismo un link en lugar de la contraseña en texto plano por correo. Dicha funcionalidad debería estar acompañada de un mecanismo del tipo “pregunta secreta” que mitigue el riesgo de que un usuario malintencionado obtenga el link y lo utilice antes que el usuario válido.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas nulas en equipos Windows",
     observation: "Se identificaron estaciones de trabajo de <CLIENTE>, las cuales tienen activa la cuenta “orion” con privilegios de Administrador local, y a la cual no se le ha asignado una contraseña (Contraseña en blanco).nnLa utilización de dichos usuarios con su correspondiente contraseña en blanco, permite la administración total de los equipos afectados, ya sea:n- En forma remota a través de la consola VNC: En 3 de los casos observados.n- En forma local: En 3 de los casos restantes, debido a que existen políticas de seguridad aplicadas que limitan el acceso remoto.",
     impact: "Un potencial usuario malintencionado o usuario malicioso podría realizar ataques de fuerza bruta o adivinación de contraseñas sobre los equipos afectados, a fin de obtener privilegios de administración sobre los mismos, y comprometer la disponibilidad de dichos equipos o la confidencialidad e integridad de la información almacenada en los mismos.nnFinalmente debe considerarse que la exposición de cualquiera de los recursos en una infraestructura Windows integrada como la de la Entidad, podría permitir la “Escalada de Privilegios” y el compromiso de todos los recursos tecnológicos que la componen.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados.nPor otra parte recomendamos resguardar en sobre cerrado las contraseñas de identificadores de usuario no personalizados, ya sean de “Emergencia” o de “Servicio”. nAsimismo, para definir las contraseñas recomendamos considerar los valores mínimos que se detallan a continuación:n-Longitud mínima de caracteres: 8 n-Cantidad mínima de caracteres alfanuméricos: 4n-Cantidad mínima de caracteres numéricos: 2n-Cantidad mínima de otros caracteres: 2",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas nulas o triviales en bases de datos",
     observation: "Se han identificado dos motores de bases de datos, cuyo usuario de máximos privilegios creado por defecto en la instalación, usuario “SA”, tiene asignada una contraseña de acceso nula o trivial.",
     impact: "Un potencial usuario malintencionado o usuario malicioso podría realizar ataques de fuerza bruta o adivinación de contraseñas sobre los motores de bases de datos afectados, a fin de obtener privilegios de administración sobre los mismos, y comprometer la disponibilidad de dichos equipos o la confidencialidad e integridad de la información almacenada en los mismos.nAsimismo, en caso que la base de datos se encuentre configurada por defecto, dichos privilegios pueden ser utilizados para comprometer el sistema operativo y obtener control total del servidor.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados.nPor otra parte recomendamos resguardar en sobre cerrado las contraseñas de identificadores de usuario no personalizados, ya sean de “Emergencia” o de “Servicio”.nnAsimismo, para definir las contraseñas recomendamos considerar los valores mínimos que se detallan a continuación:nn-Longitud mínima de caracteres: 8 n-Cantidad mínima de caracteres alfanuméricos: 4n-Cantidad mínima de caracteres numéricos: 2n-Cantidad mínima de otros caracteres: 2",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas triviales en consola de monitoreo digital",
     observation: "Fue posible obtener acceso administrativo a servidores de monitoreo y grabación digital, mediante la utilización de usuarios y contraseñas triviales o por defecto.",
     impact: "El acceso a este tipo de dispositivos podría utilizarse para causar indisponibilidad en el servicio de grabación, o bien, para obtener información sensible respecto de la estructura interna y de los puntos exactos que están siendo monitoreados.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los recursos de la infraestructura:nLongitud mínima de caracteres: 8 nCantidad mínima de caracteres alfanuméricos: 4nCantidad mínima de caracteres numéricos: 2nCantidad mínima de otros caracteres: 2",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Contraseñas triviales o inexistentes en base de datos",
     observation: "Sobre los recursos afectados se identificó la cuenta “sa” con una contraseña trivial por defecto. Adicionalmente dichas contraseña permitían el acceso a la administración total del recurso afectado.",
     impact: "La existencia de cuentas de usuario por defecto (creadas durante el proceso de instalación), con sus correspondientes contraseñas por defecto, incrementan el riesgo que usuarios no autorizados utilicen dichas cuentas para acceder de manera sencilla a la base de datos, comprometiendo la integridad, confidencialidad y disponibilidad de la información contenida en la misma.",
     recommendation: "Se recomienda cambiar sus contraseñas, y habilitar un esquema de registro de actividades y monitoreo de las acciones efectuadas por las cuentas mencionadas, a fin de detectar usos no autorizados de las mismas.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "INTERNO",
     name: "Contraseñas triviales o inexistentes en equipos de comunicaciones",
     observation: "Se identificaron equipos de comunicaciones con una contraseña trivial por defecto. Adicionalmente la misma contraseña permite la administración total de dicho equipo.",
     impact: "El acceso a los equipos de comunicaciones podría verse comprometido debido a que se está utilizando la contraseña por defecto, conocida por todas las personas con conocimientos técnicos en la materia. Asimismo el riesgo se incrementa teniendo en cuenta que la misma contraseña permite ser utilizada para acceder a la administración completa del equipo, lo cual permitiría afectar las comunicaciones y comprometer equipos adicionales ubicados en la red interna.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los recursos de la infraestructura.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "WEBAPP",
     name: "Control CAPTCHA potencialmente susceptible a ataques automatizados",
     observation: "Se ha observado que cada CAPTCHA generado para el formulario “xxxxx”, en la siguiente URL: Se encuentra vinculado a una URL que genera una imagen distinta para el mismo texto codificado cada vez que se ingresa a la misma. Esta característica, sumada a debilidades en el esquema de diseño de las imágenes, permite la repetición de la generación de la imagen del CAPTCHA en el lado del usuario, para potencialmente facilitar su interpretación automatizada. URL afectada:",
     impact: "Al tener posibilidad de acceso a distintas imágenes correspondientes al mismo texto codificado y por debilidades en el esquema de diseño, un usuario malintencionado podría utilizar programas y/o scripts automatizados para acceder a distintas versiones gráficas del CAPTCHA presentado y, estadísticamente, lograr su interpretación automatizada. De esta forma, podría evitar el control adicional provisto por el CAPTCHA y lograr realizar consultas automatizadas y repetitivas sobre los formularios, las cuales podrían eventualmente derivar en denegación de servicio o afectar servicios internos.",
     recommendation: "Se recomienda analizar la posibilidad de remplazar los controles actuales mediante la implementación de controles CAPTCHA ya existentes (por ejemplo: ReCAPTCHA), que no permitan generar más de una versión gráfica de los textos a evaluar, y que adicionalmente aseguren su aceptación y adaptación a los requerimientos propios del negocio.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Control de sesiones establecidas en el dispositivo",
     observation: "A partir del análisis de las restricciones establecidas sobre las sesiones de administración, se observa que no se encuentra configurada la desconexión de sesiones inactivas tras un período de inactividad, para las conexiones establecidas a través de la consola. A saber, el parámetro console timeout posee asignado el valor 0.",
     impact: "Usuarios no autorizados podrían aprovechar sesiones abiertas que hayan quedado desatendidas para ganar acceso al dispositivo.",
     recommendation: "Se recomienda establecer un tiempo máximo de inactividad, a partir del cual se desconectan sesiones que permanezcan inactivas, a partir de la configuración del siguiente comando:n- console timeout = 30 ",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "ROUTERS",
     name: "Control de sesiones establecidas en el dispositivo",
     observation: "A partir del análisis de las restricciones establecidas sobre las sesiones de administración, se observa que no se encuentra  configurada la desconexión de sesiones inactivas tras un período de inactividad, para las conexiones establecidas a través de la consola.nA saber, los siguientes parámetros no se encuentran configurados en los dispositivos: nip ssh timeout nip ssh authentication-retries nexec-timeout",
     impact: "Usuarios no autorizados podrían aprovechar sesiones abiertas que hayan quedado desatendidas para ganar acceso al dispositivo.",
     recommendation: "Se recomienda establecer un tiempo máximo de inactividad, a partir del cual se desconectan sesiones que permanezcan inactivas, a partir de la configuración del siguiente comando:nn-   ip ssh timeout = 120 segundosnip ssh authentication-retries = 3 reintentosnexec-timeout para cada 'línea' (VTY o consola).",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Cookie de sesión compartida con otras aplicaciones",
     observation: "Se ha observado que la cookie de sesión que se obtiene al autenticarse en la aplicación afectada, es establecida por la aplicación, utilizando el atributo 'domain' con el valor '.deloitte.com.br'.",
     impact: "Cuando la cookie de sesión se establece utilizando un dominio de mayor nivel (deloitte.com.br), la cookie podría ser enviada a cualquier subdominio de '.deloitte.com.br' que un usuario válido visitara. Como resultado, existe un mayor número de hosts con los cuales la cookie de sesión podría ser compartida. Esto podría incrementar la posibilidad de que la cookie de sesión perteneciente a la aplicación afectada sea comprometida si otro host del dominio ha sido atacado de manera exitosa.",
     recommendation: "Se recomienda considerar utilizar un valor adecuado del atributo 'domain' y 'path' de la cookie de sesión, de tal manera que sólo sea enviada al host donde la aplicación reside y en la ruta donde la aplicación se encuentra funcionando dentro del servidor Web. Además, debe asegurarse de que los requerimientos de negocio y funcionales no se ven afectados con este cambio.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Cookie no protegida por el atributo HttpOnly",
     observation: "Se ha observado que la cookie se sesión de la aplicación no está protegida por el atributo “HttpOnly”. Este atributo se utiliza para indicarle al navegador que la cookie no sea accedida por código Javascript.",
     impact: "La usencia del atributo “HttpOnly”, en la configuración de una cookie en el navegador, podría permitirle a un individuo malicioso que lograra explotar de manera exitosa una potencial vulnerabilidad de Cross-site Scripting, capturar la sesión de un usuario autenticado y posteriormente utilizarla para acceder a la aplicación.",
     recommendation: "Se recomienda modificar la configuración de la aplicación de manera tal que la cookie de sesión no pueda ser accedida a través de código Javascript. Para ello, la configuración de la cookie en el navegador del usuario debe llevar el atributo “HttpOnly”. nPara más información, por favor, visite el siguiente enlace: nhttps://www.owasp.org/index.php/HttpOnly (enlaces con contenido en Inglés)",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Cookie no protegida por el atributo secure",
     observation: "Se ha observado que la cookie se sesión de la aplicación no está protegida por el atributo “secure”. Este atributo se utiliza para indicarle al navegador que sólo envíe la cookie a través de un canal cifrado.",
     impact: "La ausencia del atributo “secure”, en la configuración de cookies en el navegador, podría permitirle a un individuo malicioso intentar capturar la sesión de un usuario autenticado, y posteriormente utilizarla para acceder a la aplicación en nombre de la víctima.",
     recommendation: "Se recomienda modificar la configuración de la aplicación de manera tal que la cookie de sesión se transmita únicamente a través de un canal cifrado. Para ello, la configuración de la cookie en el navegador del usuario debe llevar el atributo “secure”. nPara más información, por favor, visite el siguiente enlace: nhttp://cwe.mitre.org/data/definitions/614.html (enlaces con contenido en Inglés) <SI APLICA, INCLUIR> http://msdn.microsoft.com/es-es/library/ms228262(v=vs.80).aspx",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Credenciales almacenadas en la base de datos en texto plano",
     observation: "Se identificó que las credenciales están almacenadas en texto plano, dentro de la base de datos.",
     impact: "Las credenciales almacenadas en texto plano, pueden ser aprovechadas por un atacante, con el objetivo de realizar ataques enfocados, como obtener acceso sin autorización a las aplicaciones. Además, las credenciales almacenadas en texto plano son más susceptibles a ataques automatizados.",
     recommendation: "Se recomienda asegurar que las credenciales no estén almacenadas en texto plano en la base de datos. Esto puede lograrse, asegurando que el cifrado se realice antes de almacenar información potencialmente sensible en las bases de datos afectadas, implementando un control criptográfico para cada contraseña de usuario, utilizando técnicas de Salt aleatorias.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Credenciales almacenadas en texto plano",
     observation: "Se ha observado que existen credenciales almacenadas en texto plano, que pueden ser observadas en distintos archivos dentro de las carpetas para los recursos afectados.",
     impact: "Los archivos que contienen credenciales son buscados por usuarios malintencionados para intentar acceder a los sistemas de la infraestructura. Obtener acceso a estas credenciales podría comprometer la integridad, confidencialidad y/o disponibilidad de la información almacenada. Además, obtener acceso a una cuenta en el sistema puede ser el primer paso para lograr intentar escalar privilegios tanto locales como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad de asegurar que los archivos que contengan credenciales u otra información sensible, sean removidos o, en caso de ser requeridos por razones de negocio, protegidos por controles criptográficos.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "ATM",
     name: "Credenciales en texto plano",
     observation: "Existen credenciales en texto plano almacenadas en distintos archivos dentro de los cajeros. Estas credenciales incluyen usuarios y contraseñas de Windows. A continuación se detallan las credenciales encontradas:n- <MODELO ATM>: <credenciales encontradas, ejemplo: Credenciales de acceso a Windows en archivos REG y credenciales de acceso al servicio FTP en un archivo XML.> - <MODELO ATM>: <credenciales encontradas, ejemplo 2: Credenciales de acceso a Windows en archivos REG; Credenciales de acceso a la aplicación NCR APTRA™ Advance NDC en un archivo REG, y credenciales de la consola del supervisor en un archivo STR.> ",
     impact: "Archivos con credenciales en texto plano son buscados por individuos maliciosos para intentar acceder a los sistemas de los cajeros. Obtener acceso a una cuenta puede comprometer la información almacenada.",
     recommendation: "Se recomienda analizar la posibilidad de remover los archivos que contengan credenciales u otra información sensible. En caso de ser requeridos por razones de negocio, se recomienda protegerlos con controles criptográficos.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Cross Site Request Forgery",
     observation: "Se ha observado que la aplicación puede ser susceptible a ataques de Cross-site Request Forgery (CSRF). Es decir, cuando un usuario se encuentra autenticado en la aplicación afectada y realiza un click en una URL, especialmente diseñada y proporcionada por un usuario malicioso, la acción deseada por el atacante podría ejecutarse en el contexto de la victima. El componente afectado soporta el método HTTP GET, lo que permite aprovechar este tipo de ataques.",
     impact: "Los ataques de Cross Site Request Forgery (CSRF) podrían permitir a un usuario desprevenido realizar un click en una URL especialmente modificada por un atacante, con la finalidad de realizar una operación indebida en el contexto del usuario autenticado. Por ejemplo, se podría  <ACCIONES A REALIZAR>. ",
     recommendation: "Se recomienda considerar transmitir toda la información que puede alterar cualquier propiedad de los datos almacenados de los usuarios, o al realizar alguna operación crítica, utilizando el método POST de HTTP. Además, se recomienda analizar la posibilidad de utilizar el patrón “Synchronizer Token Pattern”, asociado con la sesión actual del usuario.  Cuando una aplicación web formula una petición, la misma debería incluir un parámetro de entrada oculto. El valor de ese parámetro (token) debería ser generado de forma aleatoria de manera tal que no pueda ser adivinado por un usuario malintencionado. Por otra parte, <CLIENTE> debería considerar la revisión y/o actualización de su estándar de desarrollo para garantizar que todas las operaciones críticas se realicen utilizando el método HTTP POST. Cualquier desviación al mismo, debería ser documentada previa evaluación del riesgo que representa.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Cross Site Scripting (XSS) persistente",
     observation: "Se ha observado que ciertos componentes de las aplicaciones web afectadas permiten ingresar código Javascript. Este código ingresado por un usuario malicioso es almacenado por la aplicación Web, y luego puede ser ejecutado por el navegador Web de una víctima que ingrese al componente afectado.",
     impact: "Utilizando esta debilidad, un usuario malintencionado podría almacenar código HTML/Javascript malicioso mediante los componentes Web afectados. Posteriormente el navegador Web de un usuario que ingrese a dicho componente web, ejecutará el código malicioso especialmente generado por el usuario malintencionado permitiéndole realizar múltiples ataques como ser: obtener credenciales de acceso y otra información sensible de la víctima, cookies de sesión, explotar vulnerabilidades del navegador Web del cliente, entre otros. Debido a que el componente Web afectado almacena el código ingresado por el usuario malintencionado (persistente en el tiempo), el mismo se podría ejecutar en el contexto del navegador de cualquier cliente lo visite, sin requerir que el usuario malintencionado envíe a cada posible victima un link especialmente generado, quien a la vez debería seguir el mismo.",
     recommendation: "Se recomienda validar todos los parámetros de entrada que se reciben de los usuarios de las aplicaciones (por ejemplo por el medio de uso listas blancas y negras entre otros mecanismos). El mecanismo de validación debe asegurar que cualquier página web generada dinámicamente es verificada apropiadamente y no contiene caracteres especiales y/o código inyectados por usuarios malintencionados. Adicionalmente los datos presentados a los usuarios deberían ser codificados apropiadamente para evitar que posibles caracteres especiales indispensables sean interpretados como parte del código HTML de las páginas generadas. nComo una capa adicional de seguridad, el cliente debería considerar la implementación de un firewall de capa de aplicación para bloquear el posible contenido malicioso incluido en las peticiones HTTP.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP / INTERNO",
     name: "Cross-site Scripting (XSS) reflejado",
     observation: "Se ha observado que la aplicación es susceptible a inyecciones de código Javascript, permitiendo generar, a través de la misma, ataques del tipo Cross-site Scripting reflejado sobre el navegador de los usuarios < autenticados> de la aplicación. A continuación se detallan los recursos afectados: <COMPLETAR> <AGREGAR SI SE REQUIERE> ota: Las inyecciones detalladas han sido observadas en los siguientes navegadores: Firefox x.x.x e Internet Explorer x.x ",
     impact: "Un individuo malicioso podría aprovechar esta debilidad para inyectar scripts (programas maliciosos) dentro de páginas web dinámicamente generadas. Los scripts inyectados serían ejecutados por el navegador del usuario <autenticado> de la aplicación. La explotación de Cross-site Scripting tiene como objetivo atacar la computadora de los usuarios de la aplicación, y suele realizarse mediante el envío de correos electrónicos especialmente diseñados y/o mediante la utilización de técnicas de ingeniería social para convencerlos de visitar enlaces web maliciosos. La explotación exitosa podría permitirle al individuo malicioso obtener tokens de sesión, credenciales y/u otra información confidencial.",
     recommendation: "Se recomienda analizar el diseño e implementación de los mecanismos de validación de datos de entrada y salida utilizados por la aplicación y los mismos estén alineados con las mejores prácticas de seguridad correspondientes, contemplando el tipo de dato esperado, la longitud y caracteres permitidos. Asimismo, se debe garantizar que los mecanismos mencionados sean aplicados a todos los parámetros que son utilizados para crear páginas web dinámicamente generadas. Como nivel adicional de seguridad, se recomienda considerar la implementación de un firewall de capa de aplicación para bloquear solicitudes HTTP con contenido malicioso.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/79.html (enlace con contenido en Inglés)",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "CSV Excel Macro Injection",
     observation: "La aplicación permite la descarga de archivos del tipo “.csv” (accesibles con aplicaciones como Microsoft Excel), con celdas cuyo contenido proviene de fuentes no confiables. Adicionalmente, la aplicación no valida correctamente el contenido de los archivo “.csv”, permitiendo la ejecución del contenido ingresado en las celdas.nnNota: Crear archivos a partir de datos provenientes de fuentes no confiables representa un riesgo aún cuando el archivo generado no contenga información sensible, ya que podría comprometer la terminal del usuario víctima.nn",
     impact: "En un archivo de hoja de cálculo, cada celda que comience con los caracteres “=”, ”+”, “@” o “-“ será interpretado como una fórmula por Microsoft Excel. Un individuo malintencionado podría aprovechar esta vulnerabilidad para intentar inyectar contenido malicioso (por ej. comandos del sistema operativo) a través de fórmulas en las celdas afectadas, con el fin de ejecutar futuros ataques en el contexto de la victima. Esto podría tener como consecuencia la ejecucion arbitraria de software malicioso o comandos del sistema operativo en el dispositivo de la víctima, o forzar al navegador por defecto a visitar una URL determinada.",
     recommendation: "Se recomienda realizar una adecuada validación de la entrada de usuario antes de usarla para generar archivos del tipo '.csv', no permitiendo el ingreso de caracteres como ser '=', '+', '@' o '-', o bien realizar escaping de los mismos por medio del agregado de una comilla simple o apóstrofe (') con el fin de evitar que el contenido de la celda sea interpretado como una fórmula por las aplicaciones de hoja de cálculo. Adicionalmente, se recomienda considerar reforzar la validación de entradas realizada la aplicación, permitiendo solamente el ingreso de caracteres alfanuméricos en lugar de caracteres especiales no necesarios. nPara informacion adicional, por favor referirse al siguiente enlace (con contenido en inglés):nhttps://www.owasp.org/index.php/CSV_Excel_Macro_Injectionn",
     severity: "ALTO",
     complex: null
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Cuentas con máximos privilegios",
     observation: "A partir del análisis de los grupos y usuarios del sistema, Se ha observado que, adicionalmente a la cuenta de máximos privilegios SA, se han creado 4 cuentas con privilegios de administración sobre la base de datos.nnLas cuentas mencionadas se detallan a continuación:natumnkfamoresp nmretamozo nreplicador_adm",
     impact: "El impacto de utilizar cuentas genéricas/servicio de máximos privilegios implica la imposibilidad de identificar unívocamente al usuario que ingresó al sistema e incrementa la posibilidad de que dichas cuentas sean utilizadas en forma no autorizada, ya sea por terceros o por personal de la Entidad.",
     recommendation: "Recomendamos realizar un análisis detallado de los identificadores de usuario existentes con máximos privilegios. Como parte de dicho proceso deberán tenerse en cuenta las siguientes premisas:nn- Reducir el número de administradores a los mínimos indispensables;n- No deberán existir identificadores de usuarios genéricos.  nnTodas las excepciones deberán ser documentadas y aprobadas oportunamente;",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Cuentas creadas por defecto",
     observation: "Los recursos afectados posee la cuenta de usuario 'Administrator' habilitada y sin renombrar.",
     impact: "Dicho usuario se crea por defecto al momento de la instalación del sistema operativo y es seleccionado como objetivo en númerosos ataques que se efectúan sobre servidores Windows, como ser la ejecución de pruebas de adivinación de contraseñas por fuerza bruta.",
     recommendation: "Se recomienda considerar la posibilidad de renombrar la cuenta de usuario creada por defecto y habilitar un esquema de registro de actividades y monitoreo de las acciones efectuadas por dicho usuario, a fin de detectar usos no autorizados de las cuenta de usuario mencionada.",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Cuentas creadas por defecto",
     observation: "Los recursos afectados poseen la cuenta de usuario 'Administrator' habilitada y sin renombrar.",
     impact: "Dicho usuario se crea por defecto al momento de la instalación del sistema operativo y es seleccionado como objetivo en númerosos ataques que se efectúan sobre servidores Windows, como ser la ejecución de pruebas de adivinación de contraseñas por fuerza bruta.",
     recommendation: "Se recomienda considerar la posibilidad de renombrar la cuenta de usuario creada por defecto y habilitar un esquema de registro de actividades y monitoreo de las acciones efectuadas por dicho usuario, a fin de detectar usos no autorizados de las cuenta de usuario mencionada.",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "ROUTERS",
     name: "Cuentas de usuario genéricas",
     observation: "De la revisión de las cuentas de usuario activas en los dispositivos de comunicación, se han identificado 5 cuentas de usuario genéricas. nA continuación se presenta un detalle de las cuentas mencionadas:nnPara el dispositivo APC_RT_ASOC:napcntemporalapcnadminnPara el dispositivo EXTERNO:ncisco123nadmin",
     impact: "La existencia de cuentas genéricas, dificulta la auditoria y el monitoreo de las acciones que son llevadas a cabo por dichas cuentas. ",
     recommendation: "Analizar la posibilidad de deshabilitar las cuentas genéricas existentes y, en caso de ser necesarias, definir formalmente un responsable por cada una de estas cuentas, quién se deberá responsabilizar por la administración (cambio y resguardo de contraseña, inhabilitación, solicitud de bloqueo/ desbloqueo, etc.) y el uso de la cuenta.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Cuentas de Usuario Inactivas – O.S.",
     observation: "Se ha observado que existen 11 cuentas de usuario habilitadas, sobre un total de 19 cuentas existentes en los recursos afectados, las cuales no han accedido a los sistemas por un período de tiempo mayor a 45 días. Las cuentas mencionadas se detallan a continuación:",
     impact: "Las cuentas de usuario identificadas podrían corresponder a personas que han dejado la Entidad y/o no sean requeridas por el negocio.",
     recommendation: "Se recomienda  evaluar si las cuentas afectadas cumplen funciones de negocio y, en caso de no ser así, evaluar la posibilidad de eliminarlas.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Cuentas de Usuario No Personalizadas - B.D.",
     observation: "De la revisión de las cuentas de usuario activas en el sistema, se han identificado 10 cuentas de usuario genéricas.nnA continuación se presenta un detalle de las cuentas mencionadas:nn-sysop, crm, validador, factura, operador, apcws, investiga,n- cargadata, atum, mcamargo",
     impact: "La existencia de cuentas genéricas, dificulta la auditoria y el monitoreo de las acciones que son llevadas a cabo por dichas cuentas.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar las cuentas genéricas existentes y, en caso de ser necesarias, definir formalmente un responsable por cada una de estas cuentas, quién se deberá responsabilizar por la administración (cambio y resguardo de contraseña, deshabilitación, solicitud de bloqueo/ desbloqueo, etc.) y el uso de la cuenta. nAsimismo, recomendamos restringir al máximo los privilegios de este tipo de cuentas sobre el sistema.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Cuentas de Usuario No Personalizadas – O.S.",
     observation: "Se ha observado que existen 13 cuentas de usuario genéricas.",
     impact: "La existencia de cuentas genéricas, dificulta la auditoria y el monitoreo de las acciones que son llevadas a cabo por dichas cuentas.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar las cuentas genéricas existentes y, en caso de ser necesarias, definir formalmente un responsable por cada una de estas cuentas, quién se deberá responsabilizar por la administración (cambio y resguardo de contraseña, inahabilitación, solicitud de bloqueo/ desbloqueo, etc.) y el uso de la cuenta. nAsimismo, recomendamos restringir al máximo los privilegios de este tipo de cuentas sobre el sistema.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Cuentas de usuarios genéricas",
     observation: "Como resultado de la revisión de privilegios otorgados a los usuarios del sistema, Se ha observado que los siguientes usuarios poseen asignados privilegios superiores a los necesarios:nDYNGRPnDYNWORKFLOWGRPnRAPIDGRP",
     impact: "Privilegios mayores a los necesarios incrementa el riesgo de accesos no autorizados a recursos críticos del sistema (datos o funciones). Asimismo, la situación mencionada posibilita la materialización del riesgo de ocurrencias de denegaciones o degradaciones en el servicio prestado por la base de datos.",
     recommendation: "Se recomienda analizar la posibilidad de restringir los privilegios asignados a roles/ usuarios de la base de datos, tomando como base el principio del menor privilegio.",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Datos sensibles enviados en texto plano",
     observation: "Se ha observado que al utilizar la funcionalidad de login del panel de administración, los datos sensibles completados en la misma son enviados en texto plano hacia el servidor web.",
     impact: "La debilidad observada podría permitir a un atacante con moderados conocimientos técnicos, intentar interceptar la comunicación cliente-servidor, ya que las mismas no se encuentran cifradas.",
     recommendation: "Se recomienda analizar la posibilidad de configurar la aplicación y el servidor web para forzar el establecimiento de conexiones a través de canales cifrados únicamente, así como utilizar certificados TLS con un cifrado igual o mayor a 128 bits, para el canal de comunicaciones entre el cliente y el servidor web.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Datos sensibles enviados por GET",
     observation: "Se ha observado que el recurso afectado envía información sensible a través del método GET, es decir, como parte del URL. En particular, Se ha observado que la cookie de sesión, se envía utilizando el método mencionado, permitiendo acceder a la aplicación, sin utilizar el usuario y contraseña correspondientes, y accediendo solo mediante la URL afectada:",
     impact: "La información sensible enviada utilizando el método GET puede ser almacenada en el historial de los navegadores o en proxys que intervengan en la comunicación.  Adicionalmente, dicha información podría potencialmente ser almacenada localmente en los registros de auditoría de la aplicación web. Si un usuario malintencionado obtiene acceso a esta información, puede utilizarla para intentar comprometer la cuenta del usuario.",
     recommendation: "Se recomienda analizar la posibilidad de enviar aquellos parámetros que contengan datos sensibles utilizando únicamente los canales definidos por los estándares de programación web. Además, se recomienda revisar los estándares de codificación utilizados para la implementación de formularios de consulta, para asegurar que sea consistente con otras aplicaciones publicadas en la web.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "DB Links de acceso público",
     observation: "Durante las pruebas realizadas sobre la base de datos de desarrollo, Se ha observado que existe un número elevado de DB links de acceso público. A saber, entre los encontrados se pudo observar la existencia de un link con acceso a la base PROD.WORLD (base productiva).",
     impact: "La existencia de DB Links de acceso público (cuyo owner o propietario es PUBLIC) podría permitir a un usuario no autorizado acceder a información de otras bases de datos en forma remota, sin necesidad de autenticarse en las mismas, ya que aprovecha las credenciales establecidas en el DB link. Adicionalmente cabe destacar que la base de datos de origen es de desarrollo y la de destino es de producción.",
     recommendation: "Se recomienda remover y cambiar los DB links de acceso público por DB links privados, a fin de evitar que usuarios que no requieran la información almacenada en otras bases puedan acceder a la misma.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WIRELESS",
     name: "Débil nivel de encripción",
     observation: "De acuerdo a nuestro análisis, se detectó que el recurso afectado se encuentra utilizando el método de encripción WEP para controlar el acceso y la encripción del tráfico de red wireless.",
     impact: "Dicho método de encripción posee mayor riesgo de ser vulnerado por sus reconocidos problemas de seguridad. nEs posible que un usuario malicioso utilice herramientas públicas disponibles en internet para capturar suficiente tráfico de red como para permitirle obtener la clave WEP de encripción, lo que le permitirá acceder a esta red wireless y sus recursos asociados, así como también visualizar todo el tráfico wireless transmitido.nDe acuerdo a nuestro análisis y al volumen de tráfico que mueve esta red, se requieren al menos 5 horas de captura de tráfico para obtener la clave WEP de esta red.",
     recommendation: "Analizar la factibilidad técnica y operativa de implementar un mecanismo de encripción mas robusto como ser WPA o WPA2 en modalidad Enterprise, utilizando AES como algoritmo de encripción.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad de controles en la ejecución de consultas",
     observation: "Es posible que un usuario malicioso, con acceso a la aplicación Web “Sistema Administrativo de Placas Metálicas”, pueda ejecutar cantidades irrestrictas de consultas, utilizando la función “CONSULTA SOLICITUDES X NÚMERO DE SOLICITUD”. De esta manera el usuario malintencionado podría obtener grandes volúmenes de información de la base de datos utilizada por la aplicación. El ataque se debe a que unas consultas típicas tienen la siguiente forma: Se puede observar que los parámetros utilizados son: “txtAno” y “txtConsecutivo”, donde “txtConsecutivo” tiene un valor secuencial y “txtAno” representa el año.",
     impact: "La debilidad observada posibilita que un usuario malintencionado o usuario malicioso pueda acceder a gran cantidad de información interna de la aplicación Web en cuestión. Esta información puede ser usada en forma no autorizada, difundida en forma masiva, impactando negativamente en la imagen de la organización.nnNota: Esta vulnerabilidad ha sido considerada como de impacto “Alto”, debido a que la misma puede ser ejecutada sin autenticarse en el sistema, debido a la vulnerabilidad reportada con código RNP-APP-005.n",
     recommendation: "Se recomienda implementar controles que busquen limitar la cantidad de consultas que se pueden realizar en forma simultánea por medio de la función afectada, como por ejemplo a través de la implementación de un control CAPTCHA. Asimismo, podría considerarse la implementación de un esquema de alertas frente a consultas múltiples, el cual sea implementado como control complementario.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "CITRIX",
     name: "Debilidad de restricciones en la configuración de Citrix",
     observation: "Se ha observado que es posible saltear los controles de Citrix para ganar acceso a aplicaciones, archivos o directorios que contienen información potencialmente sensible, y a la que un usuario regular no debería tener acceso, como por ejemplo, el command prompt.",
     impact: "Un usuario malintencionado podría escapar la seguridad del contexto de la aplicación publicada, y ganar acceso a recursos almacenados en los servers y en la red, lo que permitiría acceder a información sensible de negocios. El riesgo de esta observación se ve incrementado debido a la naturaleza de la red de Banco Galicia (por ejemplo, una vez que el usuario malintencionado ha escapado de su entorno, pueden atacar demás sistemas a través de la red).",
     recommendation: "Se recomienda analizar la posibilidad de asegurar que los controles de Citrix, sean correctamente implementados para evitar que un usuario malintencionado acceda a aplicaciones restringidas para su perfil, como por ejemplo el “Command Prompt”. Para lograrlo, se recomienda implementar el modelo de mínimos privilegios, solo permitiendo el acceso a recursos requeridos. Esto puede lograrse restringiendo acceso a la interfaz del sistema operativo, agregando por ejemplo: 'c:windowssystem32command.com' y 'c:windowssystem32cmd.exe' a la lista de aplicaciones restringidas en el entorno de Citrix. Además, <CLIENTE> debería considerar implementar controles como “active logging” y procesos de monitoreo para prever el uso incorrecto de sesiones de Windows.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en el esquema de pistas de contraseñas",
     observation: "El recurso afectado presenta debilidades en el esquema de 'Pista' que permite la recuperación de contraseñas de usuarios. La URL afectada es:",
     impact: "La debilidad observada permite a un usuario del sistema utilizar pistas débiles que podrían conducir a un usuario malintencionado a la contraseña y así lograr acceso al sistema.",
     recommendation: "Se recomienda analizar y mejorar la funcionalidad de 'Pistas', de manera que no proporcione a un posible usuario malintencionado información que lo conduzca directamente a la contraseña del usuario. A su vez, recomendamos evaluar la implementación de controles adicionales como “CAPTCHAS” para evitar que puedan automatizarse tareas de recuperación de contraseñas.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en el esquema de preguntas de seguridad",
     observation: "Se ha observado que el esquema de preguntas de seguridad presenta oportunidades de mejora. A continuación se detallan las debilidades observadas en el mismo:n- Las respuestas pueden contener la misma información.n- Las respuestas pueden contener un solo carácter de longitud.n- No se permite la creación de preguntas personalizadas por parte del usuario.n- Las respuestas proporcionadas por el usuario no son enmascaradas.n- En dos intentos de <autenticación> sucesivos, la pregunta de seguridad requerida por la aplicación al usuario no se mantiene igual, aun cuando no se haya dado una respuesta válida en el primer intento. <ELIMINAR LOS QUE NO CORRESPONDAN Y AGREGAR SI HAY NUEVOS>",
     impact: "Un débil esquema de preguntas de seguridad le proporciona a un individuo malicioso la oportunidad de obtener el control de una cuenta de usuario válida. Las respuestas cortas (por ejemplo, de un carácter) o respuestas iguales para diferentes preguntas, le permiten a los usuarios utilizar valores de respuesta de seguridad débiles, haciéndolos más susceptibles a los ataques de fuerza bruta. Adicionalmente, al  no encontrarse ofuscado el texto introducido en el campo de respuesta, se brinda la posibilidad a un individuo malicioso (que se encuentre dentro de la proximidad de un usuario o a través de un software especial) de obtener la respuesta para acceder de forma no autorizada a la aplicación. Además, si la pregunta de seguridad mostrada durante el proceso de autenticación que aún no ha sido contestada correctamente por el usuario, no es mantenida hasta que se responde de manera correcta, se brinda la oportunidad a un individuo malicioso de rotar las preguntas hasta encontrar una, que potencialmente conozca o sea más fácil de adivinar u obtener.",
     recommendation: "Se recomienda reforzar el esquema de preguntas de seguridad, de tal manera que los usuarios de la aplicación no puedan utilizar respuestas débiles para las preguntas asociadas a su cuenta de usuario. También se recomienda considerar la implementación de preguntas personalizadas de manera tal que los usuarios puedan utilizar sus propias preguntas de seguridad. Además, se recomienda modificar el tipo de datos de entrada para los campos de texto del código HTML de las funcionalidades que solicitan el ingreso de respuestas a las preguntas de seguridad, para asegurarse que las mismas sean enmascaradas al igual que los campos de contraseña. Finalmente, se recomienda mantener la misma pregunta de seguridad durante el proceso de autenticación hasta que sea respondida de manera correcta.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en el procesamiento de contraseñas iniciales",
     observation: "Se observa una debilidad en el mecanismo de asignación de contraseñas iniciales a los usuarios proveedores que se registran desde la Web. Esta  última podría ser capturada durante el proceso de registración, y anticipar la autenticación a la recepción del mail de confirmación.",
     impact: "En caso de modificar el proceso de validación de alta de proveedores en el sistema, y entregar credenciales válidas sólo a aquellos proveedores aceptados, un usuario malintencionado podría interceptar la contraseña durante el registro y ser capaz de autenticarse en la aplicación antes de ser admitido.",
     recommendation: "Se recomienda generar la contraseña inicial en el lado del servidor y evitar que sea interceptada por el cliente, de modo que ningún usuario pueda ingresar a la aplicación antes de recibir un mail de aceptación.",
     severity: "-",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en el proceso de blanqueo de contraseñas",
     observation: "La aplicación permite a los administradores realizar un blanqueo de la contraseña de las cuentas de usuario. Una vez realizado este proceso, es posible acceder a la cuenta introduciendo únicamente el nombre de usuario. ",
     impact: "Si se blanquease la contraseña de una cuenta y el usuario no la reestableciese en un corto período de tiempo, un usuario malicioso podría acceder a una de ellas, modificando su contraseña a un valor de su elección. Una vez comprometida, la cuenta podría ser utilizada para realizar acciones en nombre del usuario. Esto podría potencialmente causar una disminución en la confianza de los clientes de <CLIENTE> y un deterioro de su imagen.",
     recommendation: "Se recomienda analizar la necesidad de negocio de realizar un blanqueo de contraseñas que acepte cualquier contraseña ingresada, y considerar la posibilidad de implementar una contraseña temporal o un link que permita resetear la contraseña del usuario, el cual deberia ser enviado a la direccion de correo electrónico previamente fijada en la cuenta del usuario. Además, se recomienda considerar la posibilidad de implementar un segundo control para el proceso de blanqueo de contraseña, como  un esquema de preguntas secretas, que mitigue el riesgo de que un usuario malintencionado pueda acceder a la cuenta e ingresar una contraseña antes que el usuario válido.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en el proceso de creación de cuentas de usuarios",
     observation: "La funcionalidad para el registro de nuevos proveedores expuesta en internet, permite la creación de usuarios con permisos válidos en la aplicación Web basada en Lotus Domino, sin contar con un mecanismo de control que verifique si el usuario debe ser admitido en el sistema. URL afectada:",
     impact: "Un usuario malintencionado podría registrarse en la aplicación, obtener credenciales válidas en el sistema y lograr acceso al mismo. De esta manera tendría un nivel de acceso con privilegios superiores a los de un usuario anónimo, lo cual le permitiría recorrer la aplicación con mayor profundidad y utilizar la información recopilada para la planificación de un ataque posterior.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad de reforzar el proceso de registración, utilizando un mecanismo de control que sólo entregue credenciales válidas a los proveedores que la requieran.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en funcionalidad de cierre de sesión",
     observation: "Se ha observado que la funcionalidad de cierre de sesión no finaliza de manera correcta la sesión de un usuario autenticado. En particular, la funcionalidad accedida a través de la opción <COMPLETAR>, no invalida la sesión en el lado del servidor cuando es invocada.nnURL del recurso afectado: <COMPLETAR>",
     impact: "Si la funcionalidad de cierre de sesión no se encuentra debidamente implementada, la sesión de un usuario legítimo podría continuar siendo válida luego de invocar la funcionalidad de cierre de sesión. Esto podría ser aprovechado por un individuo malicioso que lograra obtener el identificador de sesión de la víctima.",
     recommendation: "Se recomienda analizar y modificar la implementación de la funcionalidad de cierre de sesión afectada, de manera tal que la misma invalide, tanto en el servidor como en el lado del cliente, todos los identificadores de sesión utilizados, una vez que la funcionalidad es invocada por un usuario.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Debilidad en la configuración segura del servidor Lotus Domino",
     observation: "Se ha observado debilidades en la configuración del servidor Lotus Domino que podrían exponer información sensible acerca de la compañía, mediante el acceso a bases de datos sensibles utilizando un usuario sin privilegios. <ELEGIR>:nAcceso anónimo a bases de datosnAcceso a bases de datos sensibles mediante un usuario sin privilegios nObtención de hashes de usuarios",
     impact: "Un usuario malintencionado podría obtener información acerca de personas vinculadas a la compañía, plataformas utilizadas y otra información sensible. Por otra parte, mediante un ataque de fuerza bruta sobre los hashes de usuarios, se podría obtener la contraseña de un administrador. Servicios de Lotus Domino sin un correcto aseguramiento de la plataforma se encuentran vulnerables a diferentes debilidades de seguridad las cuales podrían ser aprovechas para un ataque enfocado sobre esta plataforma. En particular, un usuario malintencionado podría obtener información acerca de personas vinculadas a la compañía, plataformas utilizadas, nombres de servidores, bases de datos y otra información sensible.",
     recommendation: "Se recomienda analizar las configuraciones de seguridad de la plataforma y aplicar las siguientes medidas: nLimitar el acceso anónimo a todas las bases de datosnImpedir que los hashes de usuarios se envían a través de la web, al acceder a la base de datos names.nsfnAplicar las mejores prácticas de seguridad a la plataforma Lotus DominonOnSe recomienda analizar la posibilidad de restringir el acceso a las distintas bases de datos de Lotus Domino en caso de no ser requerido por motivos de negocios. Además, se recomienda modificar las configuraciones de seguridad aplicando las mejores prácticas de configuración a la plataforma Lotus Domino, entre ellas, evitando el acceso por web a esta plataforma.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Debilidad en Utilidad de Scanner Kyocera",
     observation: "Se ha identificado que la estación de trabajo afectada brinda el servicio 'Kyocera Mita's Scanner File Utility', el cual presenta debilidades de seguridad conocidas. Dicha aplicación se encuentra publicada en el puerto 37100/tcp, Los CVE que afectan a esta aplicación son: CVE-2008-7109, CVE-2008-7110, CVE-2008-7111, CVE-2008-7112, CVE-2008-7113.",
     impact: "Un usuario malicioso podría aprovechar las debilidades de seguridad conocidas en el servicio mencionado, a fin de obtener información del sistema de archivos del equipo afectado como por ejemplo el listado de archivos y directorios.",
     recommendation: "Se recomienda analizar la posibilidad de limitar el acceso al puerto 37100/tcp el cual brinda el servicio afectado, de forma tal que solo sea accedido por personal autorizado.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Debilidades en el manejo de Tokens de sesión",
     observation: "Se han observado debilidades en el esquema de manejo de Tokens de sesión a saber:nEl valor del cookie depende sólo de la contraseña nNo existe una funcionalidad de logout que invalide el cookienLa aplicación no comprueba la caducidad de los cookies",
     impact: "La debilidades observadas podrían permitir a un usuario malintencionado o usuario malicioso con altos conocimientos técnicos, intentar capturar un Token de sesión válido y realizar un ataque del tipo 'Token Reply'.nnPor otra parte, debido a que en el momento del cierre de sesión el Token no es eliminado, esta observación permitiría que el Token de sesión se mantenga activo por una determinada cantidad de tiempo y pueda ser reutilizado por otro usuario.",
     recommendation: "Considerar la posibilidad de rediseñar el esquema de manejo de sesiones existente,  limitando la posibilidad de reutilizar el Token de sesiónnAsimismo, se recomienda modificar la funcionalidad de cierre de sesión, asegurando que la misma elimine el Token del lado del cliente y del lado del servidor, al momento de finalizar la sesión.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "TOKENS",
     name: "Debilidades en el Proceso de Resincronización de Tokens",
     observation: "En base a las entrevistas realizadas y la visualización del proceso de resincronización de tokens, se ha determinado que existen oportunidades de mejora, entre las que se detectan:nFalta de documentación formal del proceso.nSincronización manual realizada por los operadores correspondientes.nAcceso a semillas de usuario las cuales se encuentran almacenadas en texto plano.",
     impact: "Las debilidades detectadas en el proceso de resincronización de tokens podrían afectar de manera directa la operatoria diaria del área involucrada en la tarea. En consecuencia, en caso de que el número de tokens a sincronizar supere las capacidades de operación, se pueden presentar demoras en la disponibilidad del acceso a SIB, para los usuarios afectados.nVale destacar que si bien existen controles de permisos de acceso, el acceso a las semillas de los usuarios y su almacenamiento en texto plano exponen al riesgo de que dicha información sea accedida por personal no autorizado y luego utilizada para intentos de fraude.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir un procedimiento formal y automatizado para la sincronización de tokens que se encuentran en estado “desincronizado”. Dicho procedimiento debe contar como mínimo con los siguientes requerimientos:n- Automatizar el proceso y, en caso de que sea factible, permitir la autogestión de la sincronización de tokens.n- El acceso a la semilla debe ser transparente y no visualizada por los operadores.",
     severity: "ALTO",
     complex: "N/A"
    },
    {
     type: "EXTERNO",
     name: "Debilidades en el servicio de RDP",
     observation: "Se ha identificado que el servicio RDP instalado en el recurso indicado, presenta debilidades de seguridad que podrían permitir ataques del tipo  'Man in the Middle'.",
     impact: "La configuración actual del servicio de RDP no valida la identidad del servidor al momento de definir el cifrado del canal de comunicaciones. En consecuencia, un usuario malintencionado podría interceptar dicho trafico generando un ataque de 'Man in the Middl' sin ser detectado.",
     recommendation: "Se recomienda analizar la posibilidad técnica de forzar conexiones seguras mediante SSL para el acceso vía RDP. Para mas información ver el link de referencia con la recomendación oficial del fabricante. Http://technet.microsoft.com/en-us/library/cc782610.aspx",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "TOKENS",
     name: "Debilidades en el Sistemas de Alarmas y Correlación de Eventos",
     observation: "En base a la criticidad de la aplicación y al relevamiento realizado junto con el personal correspondiente de <CLIENTE>, se ha determinado de que no existe un sistema de monitoreo y alertas para eventos críticos en la operación de autenticación SIB. nSe listan a continuación los eventos mínimos que deberían ser monitoreados:nMúltiples accesos exitosos a diferentes cuentas desde misma dirección IPnMúltiples intentos fallidos tanto por error en credenciales como en errores de token ingresado.nControlar aquellos campos, en los que el campo “Referer” sea diferente al esperado",
     impact: "Si bien los ataques enfocados pueden ser diversos y utilizar diferentes vectores de ataque, algunos suelen presentar un patrón de comportamiento al momento de identificarse en la aplicación.nEn caso de no contar con controles preventivos y proactivos, un usuario malintencionado podría realizar diferentes intentos de acceso sin ser detectado y bloqueado a tiempo.",
     recommendation: "Se recomienda analizar la posibilidad de implementar controles a partir de los eventos generados en el proceso de autenticación de la plataforma SIB. nLa implementación de dichos controles podrían permitir, entre otros:n-   Detectar direcciones IP desde donde se realizan múltiples accesosnDetectar direcciones IP que realizan pruebas de fuerza bruta.nDetectar recursos externos que apuntan a la autenticación en SIB, los cuales podrían ser casos de phishing.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "ARQUITECTURA",
     name: "Debilidades en la Arquitectura de la Solución",
     observation: "Como consecuencia del análisis de la arquitectura de infraestructura que soporta a la solución de tokens OTP se han detectado las siguientes debilidades:n- Servicio Web JBoss ejecutándose en mismo equipo donde se aloja la base de datos.n- En la misma base de datos, pero en diferentes instancias, se encuentran alojadas las tablas de usuarios SIB y las tablas que contienen la semilla de dichos usuarios.",
     impact: "Servicios e interfaces con diferentes requerimientos de seguridad alojados en el mismo servidor físico, exponen a los servicios e información crítica a diferentes riesgos. A partir de esta debilidad, un usuario malintencionado o usuario malicioso podría tomar control del equipo aprovechándose de debilidades en los servicios menos críticos. nA modo de ejemplo, un usuario que tiene acceso al servicio Web pero no a la capa de datos, podría explotar vulnerabilidades del servicio Web para comprometer las bases de datos.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de implementar mejoras en la arquitectura de la solución que separen el servicio Web del servidor donde se alojan las bases de datos.nnAsimismo, se recomienda no tener instancias criticas de base de datos en un mismo servidor físico a fin de aplicar una correcta segregación de funciones y de operaciones.n",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "WEBAPP",
     name: "Debilidades en la asignación de cookies de sesión",
     observation: "Se ha observado que las cookies de la aplicación web no están protegidas por los atributos “secure” y 'HttpOnly'. El primer atributo debe activarse para que la cookie sólo sea utilizada mediante un canal cifrado. El segundo atributo debe activarse para evitar que mediante un código JavaScript sea leído o modificado el contenido de las mismas.",
     impact: "La ausencia del atributo “secure” podría permitir, a un usuario malintencionado, intentar capturar la cookie de sesión de un usuario validado la aplicación, y posteriormente utilizar esa información para hacerse pasar ante la aplicación como el usuario autorizado. Por otro lado, al no estar activado el atributo 'HttpOnly', las cookies pueden ser leídas o modificadas mediante el uso de código JavaScript. De esta manera, un ataque de 'Cross Site Scripting (XSS)' podría permitirle al usuario malintencionado acceder a la información de sesión del usuario exponiéndolo a un robo de sesión.",
     recommendation: "Se recomienda analizar la posibilidad de configurar la aplicación para que la transmisión de las cookies se efectúe únicamente a través de un canal cifrado, utilizando el atributo “Secure”. Por otro lado también se recomienda activar el atributo “HttpOnly” en todas las cookies emitidas por la página web, con el fin de evitar robos de sesión.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO/INTERNO",
     name: "Debilidades en la configuración de Terminal Services",
     observation: "Se detectaron múltiples servicios de RDP (Remote desktop protocol) que no cuentan con una configuración segura.",
     impact: "Servicios de acceso remoto que no cuentan con un esquema de seguridad implementado son vulnerables a diferentes ataques como ser descripción de la comunicación, saltear autenticación, entre otros.",
     recommendation: "Se recomienda definir e implementar un estándar de seguridad para el servicio de terminal services de forma tal que se defina la arquitectura de seguridad necesaria para poder cumplir con las buenas prácticas.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Debilidades en la funcionalidad de carga de archivos",
     observation: "Se ha observado que la funcionalidad “Solicitud Carta de Instrucción” podría presentar debilidades en la validación de carga de archivos. Adicionalmente, se ha verificado la posible inexistencia de un análisis mediante la utilización de un software antivirus sobre los archivos cargados mediante esta funcionalidad. Nota: Deloitte utilizó el archivo “eicar.txt”, cuyo contenido corresponde a una prueba para la detección de software antivirus, que puede obtenerse de la siguiente URL: ttp://www.eicar.org/anti_virus_test_file.htm",
     impact: "Si las funcionalidades de carga de archivos no se encuentran bajo un proceso estricto de validación, un usuario malintencionado podría utilizar la funcionalidad afectada para realizar una carga de software malicioso al servidor. Los potenciales usuarios finales que realicen la descarga de los mismos podrían verse expuestos a la amenaza o también podría tener otro impacto, dependiendo del contexto de la aplicación, sobre la infraestructura afectada, lo que podría influir negativamente en la imagen de <CLIENTE>.",
     recommendation: "Se recomienda analizar la posibilidad de garantizar que todos los componentes de la infraestructura pública de <CLIENTE> se encuentren con software antivirus instalado y actualizado a la última versión de sus firmas. Además se recomienda que todo archivo ingresado por parte de los usuarios, que van a ser almacenados, sean validados por tipo de extensión y también por tamaño máximo permitido.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Debilidades en la validación de certificados SSL/TLS",
     observation: "De la revisión de código fuente, Se ha observado que los launchers de Ipad y Android no parecieran contener código fuente que permita la migración segura a un canal de comunicación cifrado (HTTPS) cuando se realice el pasaje a producción. Por ejemplo, Deloitte no ha podido identificar código que permita validar los certificados enviados por el servidor (firma certificante, fecha de expiración, nombres del recurso asociados, etc.).",
     impact: "Si la migración de producción no considera los aspectos mencionados, un atacante o usuario malicioso podría aprovechar las debilidades existentes en la validación de certificados para realizar un ataque de MITM (man-in-the-middle), y posteriormente intentar interceptar información potencialmente sensible.",
     recommendation: "Se recomienda evaluar la factibilidad técnica y de negocio de planificar el desarrollo de las aplicaciones manera tal que todos los controles de seguridad se encuentren en lugar al realizar el pasaje a producción. En particular, se recomienda implementar mecanismos o librerías que permitan asegurar que el certificado recibido por el cliente es válido.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "MÓVIL",
     name: "Debilidades en los Archivos de Configuración de la Aplicación",
     observation: "Durante el análisis de la aplicación móvil desarrollada para la generación de claves OTP, se ha observado debilidades relacionadas al archivo de configuración generado por la misma. En primer lugar el archivo de configuración XML generado mantiene los datos en texto plano. En segundo lugar se observó que el archivo de configuración puede ser reutilizado en otros dispositivos. Las aplicaciones afectadas son las Java, Android e iPhone.",
     impact: "Los archivos de configuración en texto plano, podrían ser accedidos o modificados por un usuario malicioso con el objetivo de obtener un mayor conocimiento de la aplicación y posteriormente realizar un ataque más enfocado. Adicionalmente si el archivo de configuración es generado por la aplicación y no incluyen un mecanismo que evite que un archivo de configuración sea reutilizado en otros dispositivos, podría permitir a un usuario malintencionado que tenga acceso a los mismos a replicarlos en otro dispositivo no autorizado.",
     recommendation: "Se recomienda analizar la posibilidad técnica de cifrar los archivos de configuración generados por la aplicación. Adicionalmente se recomienda incluir en la aplicación un mecanismo que evite que los archivos de configuración puedan ser reutilizados en otros dispositivos.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Debilidades en teclado virtual",
     observation: "Deloitte ha identificado que la aplicación afectada, si bien cuenta con un teclado virtual para el ingreso de las credenciales de autenticación de forma segura, el mismo no ofusca la totalidad de las teclas al momento de hacer click en alguna de ellas.",
     impact: "Computadoras personales se encuentran expuestas a software malicioso de tipo malware o spyware debido a la falta de aplicación de parches al software de base y a la falta de actualizaciones de las definiciones de virus por parte de los usuarios. Parte del software malicioso podría ser diseñado para monitorear la actividad de las computadoras infectadas, exponiendo las credenciales de los usuarios, permitiendo que un usuario malintencionado las utilice para conseguir acceso no autorizado a la aplicación.nVale destacar que computadoras de acceso público, como ser cibercafés, son objetivos más frecuentes a este tipo de ataques.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica y de negocio de implementar un teclado virtual en el cuál se  ofusquen la totalidad de las teclas al momento de hacer click en alguna de ellas.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Debilidades fisicas en los cajeros",
     observation: "Existen elementos en los cajeros que presentan debilidades en sus características físicas. Las siguientes se detallan a continuación: <MODELO ATM>: <CASO EJEMPLO 1: Se permite la operatoria con la cámara frontal desconectada> <MODELO ATM>: <CASO EJEMPLO 2: La cámara frontal no está embebida en el sistema.> <MODELO ATM>: <CASO EJEMPLO 3: No se generan alertas al operar el cajero con la cámara físicamente desconectada.> <MODELO ATM>: <CASO EJEMPLO 4: Hay puertos USB accesibles tanto en la parte posterior como en la parte frontal.> <MODELO ATM>: <CASO EJEMPLO 5: Es posible extraer fácilmente el disco duro utilizado por el cajero ya que presenta la funcionalidad hot-swap.>",
     impact: "Un usuario malicioso puede aprovechar las debilidades mencionadas para realizar acciones que podrían servirle para evitar controles y lograr conseguir acceso a información confidencial.> <SI CASO EJEMPLO 1: Al iniciar el cajero con la cámara desconectada, un técnico en complicidad con un individuo malicioso podria pasar desapercibido y proteger su identidad al momento de perpetrar sus ataques.> <SI CASO EJEMPLO 2: Al no tener embebida la cámara, existe la posibilidad de que esta sea desactivada y no surja ninguna alarma para avisar de la falta de la misma.> <SI CASO EJEMPLO 3: La inexistencia de alertas al momento de operar el cajero con la cámara frontal desconectada brinda a un técnico en complicidad con un individuo malicioso un mayor tiempo para realizar sus acciones sin la intervención de personal de seguridad.> <SI CASO EJEMPLO 4: Los puertos USB accesibles permiten conectar dispositivos no autorizados, como ser dispositivos de almacenamiento masivos, los cuales pueden servir para iniciar un ataque.> <SI CASO EJEMPLO 5: Al manejar un disco duro Hot-Swap, el cajero es susceptible a que un individuo malicioso con acceso al back-office pueda extraerlo y realizar una copia del mismo sin restricciones, dándole acceso a información confidencial.> ",
     recommendation: "Se recomienda analizar la posibilidad de realizar una revisión integral de la seguridad física de los cajeros que incluya los siguientes aspectos: <SI CASO EJEMPLOS 1, 2 y 3: Un mecanismo de monitoreo que alerte ante la falta de elementos de seguridad y que evite la normal operatoria sin estos.> <SI CASO EJEMPLO 4: Deshabilitar los puertos USB no utilizados y bloquear el acceso a los mismos.> <SI CASO EJEMPLO 5: Reubicar el disco duro de tal manera que no sea fácilmente extraíble.>",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Derechos de usuarios",
     observation: "Del análisis de las restricciones implementadas sobre los 'Derechos de Usuario' implementados se observa que, si bien los equipos analizados cuentan con restricciones aplicadas, existen valores que presentan oportunidades de mejora ya que no se encuentran configurados según las mejores prácticas. Estos valores se listan a continuación:nnAccess this computer from the network (Presencia de Everyone)nDeny access to this computer from the network (No se encuentra Everyone)",
     impact: "Debilidades en las restricciones sobre los 'Derechos de Usuarios' podrían exponer a los recursos afectados a amenazas tales como:n- Intentos de acceso al equipo desde la red por parte de usuarios no autorizados.",
     recommendation: "Se recomienda establecer las restricciones sobre los  'Derechos de usuarios' observadas de acuerdo a los valores recomendados por las mejores practicas, a saber:nn-   Access this computer from the network (Everyone no debe tener acceso al equipo)n-   Deny access to this computer from the network  (Incluir Everyone)",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "VOIP",
     name: "Descarga de archivos de configuración",
     observation: "Deloitte identificó que es posible descargar los archivos de configuración denlos teléfonos <VENDOR> desde un servidor TFTP.",
     impact: "Los archivos de configuración podrían contener información sensible comoncontraseñas de autenticación SIP y contraseñas de administración de losndispositivos. Un atacante que obtiene acceso a dicha información podríanutilizarla para realizar ataques adicionales sobre la infraestructura VoIP de <CLIENTE>.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar la funcionalidad den“TFTP Encrypted Config”, la cual permite cifrar el contenido de los archivosnde configuración.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Descarga de archivos desde el servidor web",
     observation: "Se identificó que accediendo a enlaces específicos del servidor web, es posible descargar ciertos archivos alojados en el mismo. La factibilidad de descargar dichos archivos depende de los privilegios con los que corre el servicio.nLa URL afectada es el siguiente:",
     impact: "Un usuario malintencionado con cierto conocimiento técnico podría ser capaz de obtener información confidencial alojada en el servidor sin necesidad de autenticarse.",
     recommendation: "Se recomienda analizar y modificar el esquema de autorización utilizado en la funcionalidad de descarga de archivos, de tal manera que sólo usuarios autenticados y con los permisos adecuados puedan utilizar la funcionalidad afectada. REVISAR: Deloitte recomienda evaluar la posibilidad de que dicha funcionalidad sea deshabilitada o, en caso de ser necesaria que su uso sea restringido a los archivos necesarios para el funcionamiento del negocio.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Descifrado de Token",
     observation: "Se identificó que el Token correspondiente a la funcionalidad “Token Login” de VisaMall puede ser descifrado utilizando el algoritmo de decodificación denominado “Base 64”.",
     impact: "Dicha vulnerabilidad permitiría visualizar los campos alojados en dicho Token y que contienen información sensible del usuario, como por ejemplo, datos personales (nombre, número de teléfono, dirección, correo, etc.) y adicionalmente datos correspondientes a las cuentas asociadas al usuario (CA, saldos, etc.)",
     recommendation: "Se recomienda analizar la posibilidad de utilizar otro algoritmo de cifrado sobre el Token que aloja los datos personales del usuario, como ser el algoritmo RSA.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Disco duro no cifrado",
     observation: "El disco duro no se encuentra cifrado, esto significa que no hay mecanismos presentes que protejan la información sensible del cajero y archivos correspondientes al sistema operativo.",
     impact: "Dado que el disco duro no se encuentra cifrado, un técnico malicioso podría acceder al mismo mediante el booteo desde otro dispositivo y acceder a archivos de configuración e información sensible allí almacenada. Además, podría modificar parámetros de configuración y seguridad del disco duro afectado.",
     recommendation: "Se recomienda analizar la posibilidad de implementar un mecanismo de cifrado en el disco duro para proteger la confidencialidad e integridad de los sistemas y de la información almacenada en los mismos.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Diseño defectuoso de aplicación de escritorio",
     observation: "Por lo visto, estas aplicaciones, al iniciar obtienen su configuración de un servidor web haciendo entre otros, el siguiente pedido:nUna vez que se obtuvo la contraseña, entonces el programa abre una conexión con la base de datos utilizando las credenciales obtenidas del servidor web y pide al usuario que ingrese sus credenciales de aplicación para completar la etapa de autenticación. Luego, los controles sobre que puede y que no puede hacer cada usuario son implementados en el mismo binario.",
     impact: "Un usuario con conocimientos de programación avanzados podría, utilizando diferentes programas llamados debuggers, interceptar las credenciales enviadas a la base de datos. Adicionalmente, y con el mismo tipo de programa, dicho usuario podría utilizarlo para alterar su flujo de ejecución y saltearse los controles.",
     recommendation: "implementada en 2 partes, una que es distribuida al cliente y otra que se ubica entre el aquella y la base de datos. La primera es la encargada de mostrar una interfaz al usuario, servir de punto de entrada a la aplicación y mostrar resultados y la segunda implementa los controles de acceso y la lógica de negocio.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Dispositivos de monitoreo accesibles",
     observation: "Se ha detectado la posibilidad de acceder a recursos de monitoreo de sistema sin necesidad de autenticarse.",
     impact: "Las aplicaciones de monitoreo brindan información adicional sobre la infraestructura. Dicha información permitiría a un usuario malicioso focalizar mejor sus ataques a los recursos de la compañía.",
     recommendation: "Los recursos de monitoreo del sistema deberían estar limitados al personal autorizado únicamente.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "DNS Cache Poisoning",
     observation: "Durante el análisis de la aleatoriedad de los puertos de origen usados por el servidor DNS, se determinó que la configuración de la misma se encuentra expuesta a un ataque conocido como “DNS cache Poisoning”.",
     impact: "Existe la posibilidad de que un usuario o un software malicioso pueda explotar dicha vulnerabilidad conocida como “DNS cache Poisoning” sobre el servidor DNS afectado. La ejecución exitosa de dicho ataque provocaría la redirección de los usuarios que consulten por un determinado dominio, a un host controlado por el usuario malintencionado.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de instalar todas las actualizaciones de seguridad disponibles y recomendadas por el fabricante.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "DNS server cache snooping",
     observation: "Se identificó que el servidor DNS afectado es vulnerable a ataques de 'DNS snooping', a través del cual un potencial usuario malintencionado podría obtener información respecto de aquellos dominios accedidos recientemente por otros usuarios.",
     impact: "un usuario malintencionado puede consultar qué dominios han sido accedidos últimamente, pudiendo determinar de esta forma los dominios consultados por los usuarios que utilizan dicho DNS para confirmar si hubo acceso a troyanos, determinar hábitos de los usuarios, etc.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad de limitar el acceso a los servidores DNS cache, o bien no resolver externamente consultas de dominios sobre los que no se posee autoridad.",
     severity: "MEDIO",
     complex: "BAJO"
    },
    {
     type: "PHISHING",
     name: "Educar a tus usuario via mail sobre phishing esta mal, le haces un favor al phisher porque de ahi en adelante tus usuarios van a esperar que todas tus comunicaciones vayan por mail",
     observation: null,
     impact: null,
     recommendation: null,
     severity: null,
     complex: null
    },
    {
     type: "WEBAPP",
     name: "El enlace para cambio de contraseña no expira",
     observation: "Se ha observado que para la funcionalidad “¿olvido su contraseña?” la aplicación requiere que se ingrese una dirección de correo electrónico, a la cual envía un enlace de “Cambio de Clave de Acceso a la WEB de GS1 Argentina”. Se identificó que es posible realizar el cambio de clave 24 horas luego de recibir el enlace, ya que el mismo no había expirado.",
     impact: "Si el enlace no expira, se mantendrá activo por largos periodos de tiempo, por lo que un usuario malintencionado podría tener una ventana de tiempo mayor para realizar un ataque. Además, dado que una pregunta secreta no es requerida para realizar el cambio de contraseña, el riesgo podría verse incrementado.",
     recommendation: "Se recomienda analizar la posibilidad de enviar un enlace para realizar el cambio de contraseña, cada vez que la funcionalidad es utilizada, que expire luego de un periodo de tiempo determinado (por ejemplo: 3 horas), para evitar el mismo pueda ser reutilizado.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "PHISHING",
     name: "el URL es importante, si tenes que implementar un homebanking, no pongas un redirect a una pagina que se llame diferente de tu marca",
     observation: null,
     impact: null,
     recommendation: null,
     severity: null,
     complex: null
    },
    {
     type: "INTERNO / CITRIX",
     name: "Elevación de privilegios via políticas de Active Directory",
     observation: "Se observó que la extensión denominada Group Policy Preferences (GPP) de Active Directory fue o está siendo utilizada para distribuir la contraseña del usuario administrador local, a través de las políticas de grupos afectadas, a las estaciones vinculadas al dominio <domain.com>. La utilización de este método para la distribución de contraseñas se encuentra afectada por una vulnerabilidad, de público conocimiento (MS14-025), la cual expone dicha información a usuarios del dominio, permitiendo la elevación de privilegios (a usuario administrador local) por parte de un usuario malicioso.",
     impact: "Un individuo malicioso que obtenga acceso al dominio sin más privilegios que las otorgadas por el grupo Domain Users, podría acceder al recurso compartido público “SYSVOL” y obtener la contraseña cifrada del <SI LOCAL ADMIN: usuario Administrador por defecto / USER COMUN: los usuarios afectados>, descifrarla con cualquier herramienta disponible públicamente y luego <SI LOCAL ADMIN: acceder a las estaciones de trabajo con privilegios de administrativos / USER COMUN: intentar aprovecharla para generar escenarios de escalación de privilegios>. Una vez que haya logrado acceso como administrador a las estaciones de trabajo que utilizan la contraseña comprometida, el usuario malicioso podrá continuar con otros vectores de ataque que podrán conducirlo al compromiso de información sensible o del dominio mismo.",
     recommendation: "Se recomienda eliminar todas las contraseñas cifradas almacenadas en las GPP de Active Directory en el dominio y de ser necesario aplicar el parche correspondiente para que no puedan utilizarse nuevamente. Además, para cada estación de trabajo perteneciente al dominio se recomienda deshabilitar el administrador local por defecto (built-in) y crear uno nuevo con una contraseña diferente para cada estación. Así mismo, se recomienda analizar la posibilidad de deshabilitar el acceso a las estaciones a través de la red y mediante RDP por parte de los usuarios locales pertenecientes al grupo Administradores.nEl siguiente enlace proporciona información adicional sobre la vulnerabilidad asociada y su remediación:n• https://technet.microsoft.com/en-us/library/security/ms14-025.aspxnnNota: existe la posibilidad  que la vulnerabilidad asociada haya sido correctamente parchada en los controladores de dominio de la compañía. Sin embargo, para una completa mitigación de la vulnerabilidad, todas las contraseñas incluidas en las GPP deberían ser eliminadas.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "INTERNO",
     name: "Enumeración anónima de usuarios en el controlador de dominio",
     observation: "Se ha observado que el controlador de dominio BACS_02_DC se encuentra revelando información de los recursos del dominio (usuarios, grupos, estaciones de trabajo y servidores).",
     impact: "Un usuario malintencionado podría obtener el listado de recursos del dominio (usuarios, grupos, estaciones de trabajo y servidores) y de esta manera identificar potenciales objetivos. Esta información puede ser de utilidad para utilizar diferentes técnicas de ataques especialmente dirigidos e intentar obtener acceso o comprometer los recursos afectados.",
     recommendation: "Se recomienda analizar la posibilidad de restringir el establecimiento de sesiones y/o la enumeración de recursos en forma anónima.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Enumeración anónima de usuarios locales y de dominio",
     observation: "Se ha observado que el recurso afectado XXXX permite la enumeración anónima de usuarios del dominio. Además, otros recursos afectados permiten la enumeración anónima de usuarios locales.",
     impact: "Dicha debilidad podría permitir a un usuario malintencionado enumerar usuarios locales y de dominio para planificar ataques de mayor envergadura, Conocer nombres de usuario puede permitir ataques como adivinación de contraseñas o ataques de fuerza bruta, para intentar escalar privilegios tanto locales como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad de configurar los recursos afectados de forma tal que no permitan sesiones nulas. Dicha configuración puede realizarse habilitando la entrada del registro 'RestrictAnonymous'. Información adicional sobre la remediación puede encontrarse en las siguientes URLs oficiales:n• http://technet.microsoft.com/en-us/library/bb418944.aspxn• http://technet.microsoft.com/en-us/library/cc740088(WS.10).aspxn• http://support.microsoft.com/kb/q143474/n• http://support.microsoft.com/kb/q129457/",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Enumeración de arquitectura del dominio",
     observation: "Se ha identificado que es posible enumerar anónimamente recursos (servidores, estaciones de trabajo e impresoras) asociados a la arquitectura de dominio del RNPCR.",
     impact: "Un usuario malicioso que se encuentra en la red interna de RNP podría, sin autenticarse por medio de credenciales, enumerar la arquitectura interna y sus recursos asociados para planificar ataques enfocados de mayor complejidad y/o impacto.",
     recommendation: "Se recomienda analizar la posibilidad de configurar la seguridad del dominio de forma tal que solo acepte consultas o conexiones de usuarios autenticados en el mismo, de forma tal que no se acepten conexiones anónimas.nnInformación adicional sobre la remediación puede encontrarse en las siguientes URLs oficiales:nnhttp://technet.microsoft.com/en-us/library/bb418944.aspxnhttp://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/575.mspx?mfr=truenhttps://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/591.mspx?mfr=truenhttp://technet.microsoft.com/en-us/library/cc740088(WS.10).aspxnhttp://support.microsoft.com/kb/q143474/nhttp://support.microsoft.com/kb/q129457/",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Enumeración de cuentas de usuario",
     observation: "Se ha observado que la aplicación es susceptible a la enumeración de cuentas de usuario, usando la funcionalidad <nombre_de_funcionalidad>, al observar la diferencia de los mensajes de error retornados cuando se utilizan identificadores válidos e inválidos. Además, no se han observado mecanismos de seguridad anti-scripting que permitan proteger la funcionalidad de ataques automatizados. <SI CORRESPONDE>De igual manera, la aplicación es susceptible a la enumeración de cuentas de usuario bloqueadas, a través de la funcionalidad <nombre_de_funcionalidad>.",
     impact: "Un individuo malicioso podría aprovechar la diferencia observada en los mensajes de error obtenidos para intentar obtener una lista de usuarios válidos de la aplicación, y utilizarla posteriormente para generar ataques de mayor impacto y complejidad tales como adivinación de contraseñas <SI SE BLOQUEAN LAS CUENTAS>y/o denegación de servicio a través del bloqueo de cuentas.",
     recommendation: "Se recomienda analizar y modificar la implementación de las funcionalidades afectadas de manera tal que al invocarlas, los mensajes de error presentados al usuario sean genéricos y no permitan determinar si una cuenta existe o no. Si la presentación de un mensaje de error genérico no es factible, se recomienda la implementación de un mecanismo de seguridad anti-scripting tal como el uso de CAPTCHA.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/204.html (enlace con contenido en Inglés)",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Enumeración de cuentas de usuario (para bloquados)",
     observation: "La aplicación “XXXX” podría permitir a un usuario malintencionado, enumerar los usuarios bloqueados de la aplicación mediante  la observación de los mensajes de error, ya que se presenta un mensaje si el ingreso de las credenciales corresponde a un usuario dado de alta y bloqueado en el sistema, y otro mensaje de error diferente si el usuario no existe o su contraseña es incorrecta.nSe realizaron intentos fallidos de autenticación con un usuario válido y una contraseña inválida. Para esta prueba se utilizo el usuario “XXX”.nPor otro lado, Se ha observado que la aplicación “XXXX” podría permitir a un usuario malintencionado enumerar usuarios del sistema.nUn usuario malintencionado, con credenciales válidas en el sistema, podría utilizar la función “Recuperar clave” para, luego de ingresar correctamente sus 3 preguntas secretas, recibir por correo electrónico la URL que le permite generar una nueva contraseña y modificar el parámetro numérico “user”, para enumerar usuarios.",
     impact: "Un usuario malintencionado podría intentar enumerar usuarios dentro de las aplicaciones afectadas, para posteriormente generar ataques de mayor complejidad e impacto como adivinación de contraseñas o denegación de servicio, entre otros.",
     recommendation: "Se recomienda analizar la posibilidad de modificar los mensajes de error presentados al usuario, retornando mensajes de error genéricos, es decir, que no permitan determinar si el usuario bloqueado existe o no en la aplicación.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Enumeración de cuentas de usuario vía cookies de sesión",
     observation: "Se ha observado que la aplicación afectada podría permitir a un usuario mal intencionado enumerar usuarios de la aplicación, debido a que se presentan distintas respuestas frente a las siguientes situaciones:n-Cuando se utiliza un usuario válido, el servidor responde asignando una nueva cookie de sesión (<ID de la Cookie>).n-Cuando se utiliza un usuario no válido, el servidor mantiene la misma cookie de sesión.",
     impact: "Un usuario malintencionado podría intentar obtener un listado de los usuarios de la aplicación afectada y posteriormente utilizar esa información para generar ataques de mayor complejidad e impacto como denegaciones de servicio o adivinación de contraseñas, entre otros.",
     recommendation: "Se recomienda analizar la posibilidad de modificar las respuestas del servidor para que no permita determinar si un usuario es válido en la aplicación.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Enumeración de cuentas locales en el servidor",
     observation: "Se ha observado que los servidores listados podrían permitir a un usuario malintencionado desde internet identificar los usuarios internos del sistema operativo a través de los mensajes de error que proveen los servidores web.",
     impact: "Esta debilidad podría ser utilizada por un usuario malintencionado para intentar obtener un listado de los usuarios del sistema y posteriormente utilizar dicha información para planificar y generar ataques de mayor impacto. Como por ejemplo ataques de tipo adivinación de contraseñas o fuerza bruta sobre usuarios existentes en el sistema.",
     recommendation: "Se recomienda analizar la posibilidad de cambiar los mensajes de error presentados al usuario, entregando mensajes genéricos que no permitan determinar si el usuario existe o no en el sistema. Por ejemplo, para el caso de servidores Apache:nEn el archivo de configuración httpd.conf, verificar que se cuenta con las siguientes líneas:n- ErrorDocument 404 /errordocs/404error.htmln- ErrorDocument 403 /errordocs/403error.html",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP / EXTERNAL",
     name: "Enumeración de nombres cortos de archivos y directorios de Microsoft",
     observation: "La aplicación es susceptible a la enumeración de nombres cortos de archivos y directorios. Cuando un nuevo archivo es creado en un ambiente Windows, se crea también un nombre corto compatible con el formato 8.3 de MS-DOS para dicho archivo. Este nombre corto permite a programas basados en MS-DOS o Windows 16 bits acceder a archivos con nombres largos. En particular, se ha detectado que es posible enumerar nombres cortos de archivos y carpetas en el recurso afectado.nLa URL afectada es:nLos directorios afectados son:n",
     impact: "Un individuo malicioso podría aprovechar esta vulnerabilidad para intentar enumerar nombres cortos de directorios y archivos válidos alojados en el servidor que potencialmente pudieran contener información sensible, para luego ejecutar también ataques específicos con el fin de obtener el nombre completo (nombre largo). Esto podría permitir al individuo malicioso ganar acceso no autorizado a los archivos afectados, si los mismos no se encuentran protegidos por un esquema de control acceso adecuado.",
     recommendation: "Se recomienda deshabilitar la creación de nombres cortos en caso de que no fuera requerida por necesidades del negocio. Como medida complementaria, se debería verificar que las respuestas a errores emitidas tanto por el servidor web IIS como por el framework .NET estén controladas.nPara más información, por favor, visite los siguientes enlaces:n• https://technet.microsoft.com/en-us/library/cc959352.aspx (enlace con contenido en Inglés)n• http://soroush.secproject.com/downloadable/microsoft_iis_tilde_character_vulnerability_feature.pdf (enlace con contenido en Inglés)",
     severity: "MEDIO/ALTO",
     complex: null
    },
    {
     type: "INTERNO",
     name: "Enumeración de recursos del dominio",
     observation: "Se ha identificado que es posible enumerar anónimamente los usuarios asociados a la arquitectura de dominio de BN. Con herramientas para enumeración como EnumDotNet.",
     impact: "Un usuario malintencionado podría obtener el listado de usuarios del dominio. De esta forma, se podrían identificar objetivos y utilizar diferentes técnicas de ataques especialmente dirigidos para obtener contraseñas de usuarios con privilegios dentro del dominio o planear ataques de mayor impacto.",
     recommendation: "Se recomienda analizar la posibilidad de configurar la seguridad del dominio de forma tal que solo acepte consultas o conexiones de usuarios autenticados en el mismo, de forma tal que no se acepten conexiones anónimas.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Enumeración de recursos locales y de dominio",
     observation: "A partir del análisis realizado se ha detectado que los recursos afectados permiten la enumeración de recursos (como por ejemplo usuarios, carpetas compartidas, etc) tanto locales como de dominio, ya que permiten la autenticaciones de sesiones nulas (sin usuario ni contraseñas).",
     impact: "Dicha debilidad podría permitir a un usuario malintencionado o usuario malintencionado enumerar recursos locales y de dominio para planificar ataques de mayor envergadura como por ejemplo el escalamiento de privilegios tanto local como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica de configurar los recursos afectados de forma tal que no permiten sesiones nulas. Para no permitir las conexiones nulas, se deben realizar las siguientes modificaciones:nn- HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlLsarestrictanonymous debe ser configurado en 1 (null sessions cannot enumerate shares)n- HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlLsarestrictanonymoussam debe ser configurado en 1 (null sessions cannot enumerate local SAM accounts)",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Enumeración de recursos locales y de dominio",
     observation: "Se ha observado que los recursos afectados permiten la enumeración de recursos (como por ejemplo usuarios, carpetas compartidas, etc) tanto locales como de dominio, ya que permiten la autenticación de sesiones nulas (sin usuario ni contraseñas).",
     impact: "Dicha debilidad podría permitir a un usuario malintencionado enumerar recursos locales y de dominio para planificar ataques de mayor envergadura como por ejemplo una escalación de privilegios tanto local como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad de configurar los recursos afectados de forma tal que no permitan sesiones nulas. Dicha configuración puede realizarse habilitando la entrada del registro 'RestrictAnonymous'. Información adicional sobre la remediación puede encontrarse en la siguiente URL oficial: http://technet.microsoft.com/en-us/library/bb418944.aspx",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Enumeración de recursos locales y de dominio a través de sesiones nulas",
     observation: "A partir del análisis realizado se ha detectado que el recurso afectado permite la enumeración de recursos (como por ejemplo usuarios, carpetas compartidas, etc) tanto locales como de dominio, ya que permiten la autenticaciones de sesiones nulas (sin usuario ni contraseñas).nPor ejemplo:",
     impact: "Dicha debilidad podría permitir a un usuario malintencionado o usuario malicioso enumerar recursos locales y de dominio para planificar ataques de mayor envergadura como por ejemplo una escalación de privilegios tanto local como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica de configurar los recursos afectados de forma tal que no permiten sesiones nulas. Dicha configuración puede realizarse habilitando la entrada del registro 'RestrictAnonymous'. Información adicional sobre la remediación puede encontrarse en las siguientes URLs oficiales:nhttp://technet.microsoft.com/en-us/library/bb418944.aspxnhttp://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/575.mspx?mfr=truenhttps://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/591.mspx?mfr=truenhttp://technet.microsoft.com/en-us/library/cc740088(WS.10).aspxnhttp://support.microsoft.com/kb/q143474/nhttp://support.microsoft.com/kb/q129457/",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Esquema de Monitoreo",
     observation: "Se detectó que una vez que se comprometió al servidor de monitoreo fue posible acceder a través de este a servidores del ambiente de producción sin utilizar usuarios y contraseñas, ya que existe un esquema de acceso basado en SSH con certificados. Asimismo, se identificó que la cuenta de usuario “y7sefa” cuenta con acceso a “command line”.",
     impact: "Cualquier deficiencia de seguridad en el servidor de monitoreo se convierte en una puerta de entrada a servidores del ambiente de producción.",
     recommendation: "Recomendamos analizar la posibilidad de implementar un servidor intermedio con el único rol de repositorio de logs. A este servidor accederán los servidores del ambiente de producción para guardar los logs. Luego el servidor de monitoreo accederá al servidor intermedio para acceder a los logs. Adicionalmente se eliminarán todos los accesos del servidor de monitoreo a los servidores del ambiente de producción. Asimismo, recomendamos limitar el entorno y comandos que puede utilizar la cuenta de monitoreo, por ejemplo utilizando el servicio de “FTP” o “secure FTP”.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Estaciones de trabajo con parches de seguridad faltantes",
     observation: "Durante el análisis de las estaciones de trabajo, se identificó que dichos equipos podrían no contar con todos los parches de seguridad críticos aplicados. Vale destacar que las vulnerabilidades asociadas a dichos parches de seguridad no han sido explotadas.",
     impact: "Un usuario malicioso podría comprometer con mayor facilidad los equipos desactualizados. Las versiones de software utilizadas presentan debilidades de riesgo medio-alto y los detalles de las mismas, como así también su explotación, pueden ser hallados en internet. A partir de ello, podría recibir ataques con exploits y DoS (Denial of Service), que pueden obtenerse de terceros, o bien ser desarrollados por el usuario malintencionado.",
     recommendation: "Se recomienda analizar la posibilidad de actualizar las versiones o aplicar los últimos parches de seguridad tanto a nivel del sistema operativo como de los servicios que brindan los equipos.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "ATM",
     name: "Evasión de las restricciones de ejecución",
     observation: "Se ha observado que las restricciones de ejecución en el cajero pueden ser evadidas mediante la utilización de software de confianza en el entorno. Por ejemplo, estando autenticado con el usuario 'Diebold_ATM', existe una aplicación 'NetOp Remote Control', la cual dispone de ayuda en línea mediante la ejecución del Internet Explorer. Utilizando esta aplicación, se puede acceder a listar el contenido del disco C:, permitiendo la modificación de archivos del sistema. Renombrando el archivo cmd.exe por el archivo sethc.exe que se encuentra en c:Windowssystem32, y manteniendo la tecla shift apretada durante 10 segundos, se obtiene una terminal desde la cual se puede ejecutar el explorer.exe y conseguir acceso al sistema.",
     impact: "Un atacante podría pasar por alto estas restricciones y tener acceso a información confidencial, ejecutar aplicaciones restringidas o modificar archivos críticos. Esto podría permitir a un usuario elevar sus privilegios y obtener credenciales administrativas.",
     recommendation: "Se recomienda analizar la posibilidad de complementar las restricciones impuestas con políticas de restricción de software del grupo u otras técnicas. Además, los permisos NTFS en aplicaciones del sistema como cmd.exe, mmc.exe, command.com, regedit.exe, notepad.exe, etc. deben ser implementadas para prevenir que no sean ejecutadas por usuarios no administradores.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Excepciones a la política de contraseñas",
     observation: "Como resultado del análisis de los logins de la base de datos afectada, se identificaron cuentas de usuario habilitadas, sobre las cuales no se aplican las políticas de contraseñas de Windows, a saber el parámetro 'Enforce password policy' no se encuentra habilitado.",
     impact: "Los usuarios sobre los cuales no aplican las políticas de contraseñas podría ser vulnerables a ataques, tales como adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda establecer una política de contraseñas uniforme que alcance a todas las cuentas sin excepción.nPara ello activar la opción 'Enforce password policy' para cada login de la base de datos.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "INTERNO",
     name: "Excepciones a la política de contraseñas",
     observation: "Se han identificado cuentas de usuario habilitadas y no bloqueadas, sobre las cuales no aplican las políticas de expiración de contraseñas. ",
     impact: "La existencia de excepciones en las políticas de contraseñas podría permitir a un usuario malintencionado tomar control del servidor, ya que las cuentas de usuarios que no se encuentran alcanzadas por dicha política, y para las cuales su contraseña nunca expira, son vulnerables a ataques tales como adivinación de contraseñas por fuerza bruta.",
     recommendation: "Se recomienda establecer una política de contraseñas uniforme que alcance a todas las cuentas locales y de dominio sin excepción. En el caso de las cuentas de servicio se recomienda establecer procedimientos para el resguardo de contraseñas en sobre cerrado, junto con adecuado esquema de monitoreo de la actividad registradas por dichas cuentas.",
     severity: "BAJO",
     complex: "ALTO"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Excepciones a la política de expiración de contraseñas",
     observation: "Enforce Password Expiration: Como resultado del analisis de los logins de la bases de datos afectadas, se identificaron cuentas de usuario habilitadas, sobre las cuales no se aplica la politcas de expiración contraseñas de windows, a saber el parámetro 'Enforce password expiration' no se encuentra habilitado.",
     impact: "Los usuarios sin caducidad de la contraseña podría ser vulnerables a ataques, tales como adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda establecer una política de expiración de contraseñas uniforme que alcance a todas las cuentas a excepción de las cuentas de servicio las cuales deberán estar debidamente documentadas con un responsable asignado. Para ello activar la opción  'Enforce password expiration' para cada login de la base de datos.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Excepciones a la política de expiración de contraseñas",
     observation: "Como resultado del análisis de los identificadores de usuario, se ha identificado una cuenta de usuario habilitada y no bloqueada, sobre las cual no aplica las políticas de expiración de contraseñas. nnLas cuenta mencionada se detalla a continuación:norion",
     impact: "La existencia de excepciones en las políticas de contraseñas podrían permitir a un usuario malintencionado tomar control del servidor o estación de trabajo afectado, ya que las cuentas de usuarios que no se encuentran alcanzadas por dicha política, y para las cuales su contraseña nunca expira, son vulnerables a ataques tales como adivinación de contraseñas por fuerza bruta.",
     recommendation: "Para las cuentas de usuario personalizadas y genéricas se recomienda establecer una política de contraseñas uniforme que alcance a dichas cuentas sin excepción.nnEn el caso de las cuentas de servicio se recomienda establecer procedimientos para el resguardo de contraseñas en sobre cerrado, junto con adecuado esquema de monitoreo de la actividad registradas por dichas cuentas.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Excepciones a la política de expiración de Contraseñas – O.S.",
     observation: "Como resultado del análisis de los identificadores de usuario del recurso afectado, se han identificado 12 cuentas de usuario habilitadas y no bloqueadas, sobre las cuales no aplican las políticas de expiración de contraseñas. nnLas cuentas mencionadas se detallan a continuación:n-MiAPC01, MiAPC02, operador, portal, PortalAPC01, PortalAPC02,n-reportes, simadmin, sirio, sql, sqlcluster, versata",
     impact: "La existencia de excepciones en las políticas de contraseñas podrían permitir a un usuario malintencionado tomar control del servidor, ya que las cuentas de usuarios que no se encuentran alcanzadas por dicha política, y para las cuales su contraseña nunca expira, son vulnerables a ataques tales como adivinación de contraseñas por fuerza bruta.",
     recommendation: "Se recomienda para las cuentas de usuario personalizadas y genéricas se recomienda establecer una política de contraseñas uniforme que alcance a dichas cuentas sin excepción. En el caso de las cuentas de servicio se recomienda establecer procedimientos para el resguardo de contraseñas en sobre cerrado, junto con adecuado esquema de monitoreo de la actividad registradas por dichas cuentas.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CÓDIGO FUENTE",
     name: "Excepciones en Flujos de Operación",
     observation: "En base al análisis de los archivos fuentes, se detectó que existen posibles  excepciones en diferentes flujos de información los cuales son invocados a través de los siguientes métodos:nValidationExceptionnBussines ExceptionnAdministrative ExceptionnDichas operaciones reciben parámetros embebidos en el código y etiquetados como “serialVersionID”.",
     impact: "Operaciones enfocadas o malformadas podrían aprovechar excepciones en los flujos de operación para evadir controles, acceder a información no autorizada o provocar degradaciones en el servicio.",
     recommendation: "Se recomienda analizar la posibilidad de relevar la necesidad de tener implementado excepciones en el flujo de operación y, en caso de que las mismas pertenezcan al objetivo de negocio de IB, documentarlas formalmente. En caso de que las mismas no sean necesarias, Se recomienda analizar la posibilidad de eliminarlas o remplazarlas por un procedimiento alternativo.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Existencia de código obsoleto o no autorizado sobre el portal",
     observation: "Se ha observado que ciertas páginas de la aplicación XXXXX Online contienen información que pareciera corresponder a otra empresa llamada “XXXX”.",
     impact: "El hecho de presentar información que corresponde a otra Compañía, podría afectar la imagen de la Entidad o generar desconfianza en los usuarios del servicio.",
     recommendation: "Se recomienda analizar la posibilidad de remover los mensajes de la aplicación que se encuentren asociados a otra empresa.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Exposición de archivos de configuración críticos",
     observation: "Durante las pruebas realizadas sobre la aplicación Web, se ha identificado la existencia de archivos de configuración que expone una cuenta de usuario de base de dato con su respectiva contraseña. Dichas cuentas se obtuvieron de al menos una de las siguientes URL:",
     impact: "Al existir credenciales de usuario disponibles en un recurso de acceso público, un usuario malintencionado sin conocimientos técnicos podría descubrir y utilizar estas cuenta de usuario para autenticarse en el sistema y realizar operaciones no autorizadas en nombre del responsable de dicha cuenta.",
     recommendation: "Se recomienda configurar al servidor web para no exponer archivos de configuración que contienen credenciales de acceso.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Exposición de código fuente",
     observation: "Se ha observado que el código fuente de las aplicaciones web afectadas se encuentra disponible públicamente.",
     impact: "Dado que existe la posibilidad de acceder al código fuente de las aplicaciones, un usuario malintencionado podría conocer la lógica del funcionamiento interno de las aplicaciones, así como también la estructura de programación de las mismas, lo cual podría ser de utilidad para futuros ataques.",
     recommendation: "Se recomienda analizar la posibilidad de restringir a el acceso a archivos que contengan información sensible, cómo código fuente aplicaciones.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ATM",
     name: "Exposición de código fuente",
     observation: "Se ha observado que el código fuente utilizado para generar las librerías DLL utilizadas por la aplicación del cajero se encuentra disponible junto con las DLL, en archivos de extensión STR.",
     impact: "Dado que existe la posibilidad de acceder al código fuente de las librerías, un atacante podría conocer la lógica del funcionamiento interno de las aplicaciones, así como también la estructura de programación de las mismas y las claves en texto plano que se encuentren almacenadas en estas, lo cual podría ser de utilidad para futuros ataques.",
     recommendation: "Se recomienda analizar la posibilidad de remover los archivos STR que contienen el código de las librerías DLL utilizadas por la aplicación del cajero. En caso de ser requeridos para el funcionamiento del mismo, BROU debería considerar restringir su acceso.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Exposición de información interna en el código fuente",
     observation: "Se identificó la publicación de información interna en el código fuente afectados. Por ejemplo:",
     impact: "La recopilación de información es normalmente el primer paso para realizar un ataque. La información expuesta puede ser utilizada por un usuario mal intencionado para intentar realizar ataques más centralizados.",
     recommendation: "Se recomienda analizar la posibilidad de remover toda la información interna potencialmente sensible del código fuente antes de realizar el pasaje a producción.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Exposición de información sensible",
     observation: "Se ha observado la existencia de recursos asociados a la compañía que exponen información sensible acerca de la infraestructura interna de la misma. <SI LA INFORMACIÓN SENSIBLE TIENE MAS DE UN ITEM>A continuación, se detalla la información sensible que fue observada durante el análisis realizado: <SI HOSTNAME INTERNO>El nombre de host interno <hostname> puede ser observado a través de <recurso: CERTIFICADO SSL, COOKIE, BANNER, URL, CODIGO HTML, etc.> <SI VERSION Y PLATAFORMA> Las plataformas utilizadas y sus versiones asociadas pueden ser identificadas a través de <detallar> <SI PATH INTERNO>El path interno <path> puede ser observado a través de <detallar> <SI IP INTERNA>La dirección IP interna <IP> puede ser observada a través de <detallar> <SI NOMBRE DE USUARIO>El nombre de usuario <username> puede ser observado a través de <detallar>",
     impact: "La recolección de información es, usualmente, el primer paso para realizar un ataque. La exposición de información le provee a un individuo malicioso un mayor conocimiento acerca de la infraestructura y podría ser aprovechada para la planificación de ataques externos sobre los recursos de la compañía. <SI VERSION Y PLATAFORMA>Además, el conocimiento acerca de las versiones de las plataformas utilizadas, le permitiría a un individuo malicioso ejecutar ataques específicos para el software utilizado, incrementando la probabilidad de éxito en los mismos. <SI PATH INTERNO> Además, el conocimiento de path internos podría servirle a un individuo malicioso para inferir la versión de la plataforma utilizada, para obtener detalles de configuración, y también podría ser utilizado para la planificación de ataques futuros. <SI NOMBRE DE USUARIO>Además, un nombre de usuario válido del sistema podría servirle a un individuo malicioso para realizar ataques de adivinación de contraseña, tales como fuerza bruta o basados en diccionario para intentar comprometer la cuenta de usuario asociada y obtener un acceso con mayores privilegios a los recursos de la compañía.",
     recommendation: "Se recomienda analizar la posibilidad de eliminar la información sensible expuesta a través de los recursos mencionados. Además, se recomienda actualizar los estándares de seguridad en el desarrollo y puesta en producción de servicios, de manera tal que contemple los riesgos asociados a la exposición de información sensible acerca de la infraestructura interna, tales como nombres de hosts, direcciones IPs, versiones de software, path internos y nombres de usuarios.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Exposición de información sensible a través del código fuente",
     observation: "Se ha observado que existen recursos web que exponen información sensible a través del código fuente, detallando: IPs internas, paths internos, posibles nombres de usuario, etc.",
     impact: "La recopilación de información es normalmente el primer paso para realizar un ataque. La información expuesta puede ser utilizada por un usuario malintencionado para intentar realizar ataques más centralizados.",
     recommendation: "Se recomienda analizar la posibilidad de remover comentarios en el código fuente, que puedan revelar información potencialmente sensible. Además, se recomienda considerar la posibilidad de realizar una exhaustiva revisión del código fuente HTML de todo el sitio, en búsqueda de exposición de información sensible.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Exposición de información sensible a través del código HTML",
     observation: "Se ha observado que existen recursos web que exponen información sensible a través del código HTML, detallando: IP’s internas, paths internos, posibles nombres de usuario, etc.",
     impact: "La recopilación de información es normalmente el primer paso para realizar un ataque. La información expuesta puede ser utilizada por un usuario malicioso para intentar realizar ataques de mayor precisión, complejidad e impacto.",
     recommendation: "Se recomienda analizar la posibilidad de remover comentarios en el código fuente, que puedan revelar información potencialmente sensible. Además, se recomienda considerar la posibilidad de realizar una exhaustiva revisión del código HTML de todo el sitio, en búsqueda de exposición de información sensible.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Exposición de información sensible en encabezados de correos",
     observation: "Se ha observado que los encabezados de los correos enviados por la aplicación exponen la dirección IP interna y nombre de host del servidor SMTP involucrado. A continuación se detalla la información observada: <COMPLETAR LA LISTSA> • <dirección IP> (hostname)",
     impact: "La información expuesta en los encabezados de correo podría ser aprovechada por un individuo malicioso que planifique ataques de mayor impacto sobre la infraestructura interna. En caso de que la red interna sea comprometida, o que el individuo malicioso obtenga acceso no autorizado, la dirección IP y/o el nombre de host revelados podrían ser un potencial objetivo en el reconocimiento inicial de la red.",
     recommendation: "Se recomienda analizar y modificar la configuración del servidor de correos de manera tal que dicha información no se encuentre presente en los encabezados de los correos que son enviados.nnPara más información, por favor, visite el siguiente enlace (Microsoft Exchange Server): nhttp://technet.microsoft.com/es-es/library/bb232136(v=exchg.80).aspx",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Exposición de información sensitiva en registros de auditoría",
     observation: "De la revisión de código fuente del Launcher de Ipad, Deloitte ha identificado que existen registros de auditoría que podrían exponer información potencialmente sensitiva.",
     impact: "Un atacante o usuario malicioso que obtiene acceso a un dispositivo Ipad (por ejemplo, mediante robo o hurto), podría aprovechar la debilidad identificada para obtener acceso al mensaje enviado al servidor con las credenciales (cifradas). Posteriormente, el atacante podría utilizar esta información para realizar ataques de fuerza bruta o adivinación de contraseña (offline).",
     recommendation: "Se recomienda evaluar la posibilidad de remover toda información potencialmente sensible de los logs o registros de auditoría.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Exposición de números de tarjetas de crédito",
     observation: "A partir del análisis de la aplicación Se ha observado que los números de tarjetas de crédito (PAN), no son presentados al usuario de manera “enmascarada” a fin de  preservar la confidencialidad de los mismos.",
     impact: "Al exponer el PAN (Principal Account Number) sin enmascarar se está expuesto a que, en caso que personal no autorizado o un usuario malintencionado logre acceder a la información, pueda utilizar la misma para intentar generar transacciones ilegitimas utilizando los datos de tarjetas de crédito asociadas.nVale destacar que dicha vulnerabilidad podría tener impacto en el cumplimiento de regulaciones impuestas por las franquicias de tarjetas de crédito (Por ejemplo: Norma PCI-DSS).",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio, de considerar la implementación de alguna de las siguientes soluciones:nn Al mostrar el PAN al usuario, evaluar si el mismo puede ser “enmascarado”, es decir, si puede almacenase y presentarse en forma parcial como el siguiente ejemplo, únicamente mostrando los primeros seis y los últimos 4 caracteres. Por ejemplo:n234561-XXXXXXXXXX-3456nn- Evaluar la factibilidad de “cifrar” o “enmascarar” el campo de la base de datos que contiene el PAN .",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Extensiones de FrontPage por defecto",
     observation: "Se identificaron páginas por defecto de la instalación de FrontPage en el servidor Web de los recursos afectados.nnComo ejemplo de URLs detectadas:n/_vti_pvt/access.cnfn/_vti_pvt/botinfs.cnfn/_vti_pvt/bots.cnfn/_vti_pvt/service.cnfn/_vti_pvt/services.cnfn/_vti_pvt/writeto.cnfn/_vti_pvt/linkinfo.cnf",
     impact: "Las páginas por defecto brindan información sobre la infraestructura que soporta el aplicativo afectado, la cual podría ser utilizada por un usuario malicioso para focalizar ataques de mayor impacto sobre el sitio web.",
     recommendation: "Se recomienda remover todas las páginas y/o componentes por defecto creados al momento de la instalación del servidor Web, los cuales no sean requeridos para el normal funcionamiento del sitio.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO/INTERNO",
     name: "Falta de banner de advertencia",
     observation: "Se ha observado que no se encuentra implementado un mensaje de advertencia (banner) para los usuarios que establecen conexiones con los recursos afectados. ",
     impact: "La falta de un mensaje de advertencia (banner) dificulta la implementación de acciones legales o penalizaciones sobre las personas que hayan realizado actividades no autorizadas en los recursos afectados.",
     recommendation: "Se recomienda analizar la posibilidad de implementar un mensaje de advertencia para los usuarios que se conectan a los servicios, que detalle el uso aceptable y advierta a los usuarios maliciosos de las implicaciones legales asociadas al uso sin autorización de los recursos afectados.",
     severity: "INFORMATIVO",
     complex: null
    },
    {
     type: "INTERNO",
     name: "Falta de complejidad de contraseñas en Bases de Datos",
     observation: "Se identificaron bases de datos con falta de complejidad en las contraseñas utilizadas. Ha sido posible acceder a las mismas con diversos métodos: sin utilizar contraseñas, con contraseñas por defecto o con contraseñas triviales.",
     impact: "El acceso a las bases de datos, dependiendo del nivel de privilegios del usuario, puede ocasionar la pérdida de confidencialidad, integridad y/o disponibilidad de la información almacenada. Asimismo, en ciertos casos puede llegar a ser utilizado para obtener privilegios adicionales que permitirían comprometer al sistema operativo.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar o eliminar las cuentas por defecto de las bases de datos. Adicionalmente, es recomendable que todas las cuentas posean contraseñas y la mismas cuenten con complejidad, en la medida de lo posible, por políticas.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Falta de complejidad de contraseñas en Sistemas Operativos",
     observation: "Los recursos afectados no cuentan con una política de contraseñas de cuentas de usuarios. Ha sido posible acceder a servidores utilizando contraseñas triviales. Por ejemplo, entre otros: backup, tomctcm, oracle, etc..",
     impact: "Debilidades en la política de contraseñas locales podrían permitir a un usuario malintencionado tomar control del servidor o estación de trabajo afectado para luego intentar escalar privilegios o avanzar sobre otras redes.",
     recommendation: "Se recomienda definir e implementar una política de contraseñas para usuarios locales que contemple al menos los siguientes puntos:nn Longitud mínima de las contraseñas: 8 caracteres.n Duración máxima de las contraseñas: 45 días o menos.n Duración mínima de las contraseñas: 1 día o más.nnY si el sistema lo admitiera, es recomendable contar, en lo posible, con:n Historial de Contraseñas: 12 contraseñas o másn Complejidad de Contraseñas (incluyendo caracteres numéricos y/o especiales, evitando contraseñas triviales de diccionarios, etc.)",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ATM",
     name: "Falta de mecanismo de comprobación de integridad",
     observation: "No existe ningún mecanismo de comprobación de integridad de los archivos ni de las entradas del registro de aplicaciones críticas. Esto permite la modificación de valores almacenados en estos, sin que sean detectados por el sistema.n• <EJEMPLO 1: En ambos modelos, el cajero bootea aunque el Software Symantec EndPoint Protection este deshabilitado. Symantec se deshabilito cambiando el nombre de la carpeta en donde está almacenado. Esto implica que los cajeros pueden funcionar con las protecciones Virus and spyware Protection, Proactive Threat Protection y Network Threat Protection desactivadas.> • <EJEMPLO 2: En el caso del modelo <MODELO ATM>, al modificar una de las imágenes que se muestran al cliente, y luego de reiniciar el mismo, no se realiza ninguna verificación de integridad sobre los archivos, y muestra la imagen modificada en el monitor frontal.> ",
     impact: "Al modificar o sustituir archivos de la aplicación o entradas del registro, un técnico malicioso podría eludir los controles establecidos y modificar el comportamiento del cajero, permitiéndole realizar acciones no autorizadas, las cuales podrían impactar en el funcionamiento normal del mismo. Esto puede impactar directamente en la reputación de <CLIENTE>, reduciendo considerablemente la confianza de los clientes en el mismo.",
     recommendation: "Se recomienda analizar la posibilidad de investigar técnicas para evitar que los archivos y entradas de registro de aplicaciones críticas hayan sido alterados o eliminados. La detección de una comprobación de integridad fallida debería suspender el normal funcionamiento de la aplicación. El mecanismo de comprobación de integridad debe tener un control para evitar que un técnico malicioso pueda manipularlo.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "INTERNO",
     name: "Falta de segregación de redes",
     observation: "Algunos segmentos de la red interna no se encuentran segmentados y existirían equipos de comunicaciones que permitirían analizar el tráfico de la red (como por ejemplo: Hubs).",
     impact: "La falta de segmentación de la red y la existencia de Hubs podría permitir a un usuario malintencionado o usuario malicioso ubicado en la red interna, analizar el tráfico de la red y obtener credenciales de usuarios para acceder a recursos o aplicaciones críticas de <CLIENTE>.",
     recommendation: "Verificar la existencia de Hubs en la red interna y, en caso de encontrarlos, reemplazarlos por switches.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "ATM",
     name: "Falta de segregación de redes ",
     observation: "Los cajeros de la red de <CLIENTE> son accesibles desde la red interna.nLa siguiente captura de pantalla muestra un comando PING ejecutado desde la red interna del personal de <CLIENTE> hacia una dirección IP perteneciente a uno de los cajeros <MODELO ATM> de la <UBICACIÓN CAJERO>:n",
     impact: "La falta de segmentación de la red podría permitir a un individuo malicioso ubicado en la red interna, analizar el tráfico y obtener credenciales de usuarios para acceder a los cajeros de <CLIENTE>.",
     recommendation: "Se recomienda segmentar a la red de los cajeros para que estos no puedan ser accedidos desde otras ubicaciones en la red interna. Además, se recomienda analizar la posibilidad de mantener afuera del dominio corporativo a los cajeros e incluirlos en un dominio propio, con el fin de evitar que estos sean accedidos de manera no autorizada si el dominio corporativo fuese comprometido.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ARQUITECTURA",
     name: "Filtrado de contenido web/proxy no implementado",
     observation: "Se identificó que el filtrado de contenido web/proxy para proteger al entorno de posibles amenazas externas via web, no se encuentra implementado. Adicionalmente, los usuarios no poseen restricciones de acceso sobre ningún servicio de internet, desde la red interna.",
     impact: "No controlar el contenido web que puede ser accedido por empleados de la compañía puede incrementar el riesgo de ataques via sitios maliciosos, fuga de información y/o descarga de contenido inapropiado. Restringir el acceso web para usuarios no autenticados es necesario para monitorear el uso de internet. Además, permitir acceso a todos los servicios de internet puede dar lugar al uso de programas no deseados y servicios como P2P para compartir archivos, transmitir información y aumentar en el riesgo de acceso no autorizado.",
     recommendation: "Se recomienda analizar la estrategia implementada para el filtrado de contenido web y analizar e identificar qué servicios de internet cumplen funciones de negocio esenciales. Además, se recomienda analizar las políticas de uso de internet, y asegurar que sean revisadas por los empleados, anualmente.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Formularios web susceptibles a ataques automatizados",
     observation: "Se ha observado la existencia de formularios web que no se encuentran protegidos contra ataques automatizados, lo cual los hace vulnerables a ataques de denegación de servicio basados en la ejecución de scripts automáticos.",
     impact: "Un individuo malicioso podría aprovechar un formulario sin protección para enviar numerosas solicitudes al servidor, con la ayuda de scripts automáticos y/o redes de zombies, y causar una alta carga de procesamiento en los sistemas involucrados (por ejemplo: servidor de correo o de base de datos). De ser explotado de manera exitosa, los sistemas afectados podrían sufrir un ataque por denegación de servicio.",
     recommendation: "Se recomienda incorporar una protección para evitar el envío automático de formularios. Existen sistemas del tipo CAPTCHA, los cuales generan pruebas del tipo desafío-respuesta que deben ser respondidas de manera correcta para que la funcionalidad protegida trabaje normalmente. Las pruebas generadas pueden ser respondidas por seres humanos, pero no por los programas de computación actuales (por ejemplo, la solicitud del ingreso de un texto que se muestra distorsionado en una imagen). La protección CAPTCHA podría ser incluida al final del formulario o bien mostrarse luego de un número determinado de usos de la funcionalidad afectada desde la misma dirección IP, de manera tal de evitar el impacto negativo en la usabilidad del formulario o servicio.nAdemás, se recomienda considerar la implementación de las protecciones CAPTCHA en todas las funcionalidades que pudieran generar una alta carga computacional en los servidores involucrados, de manera tal de evitar posibles ataques por denegación de servicio. nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/799.html (contenido en Inglés)",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Forzado del método GET permitido para autenticación",
     observation: "Se ha observado que cuando las credenciales son enviadas a través del formulario de autenticación, el método POST es utilizado para enviar los parámetros. Sin embargo, se identificó que la aplicación también acepta dichos parámetros si son enviados mediante el forzado de la utilización del método GET. La URL afectada es:nNota 1: Para explotar esta vulnerabilidad, es necesario que el navegador utilizado no posea límite de caracteres aceptados por URL, como las últimas versiones de Firefox y Google Chrome. Esta vulnerabilidad no puede reproducirse en internet Explorer.nNota 2: La URL afectada dirige a una página de error. Sin embargo, es posible confirmar que el usuario se ha autenticado correctamente en la aplicación ingresando en la siguiente URL:",
     impact: "Los parámetros sensitivos enviados en la URL forzando la utilización del método GET, facilitan la posibilidad de que un usuario malintencionado realice ataques de “phishing” o “cross site scripting”, los cuales están diseñados para obtener acceso no autorizado a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de restringir el envío de parámetros sensitivos mediante el forzado de la utilización método GET, permitiendo que dichos parámetros sean enviados únicamente mediante el método POST.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Funcionalidad de ejecución sentencias SQL",
     observation: "La aplicación es en realidad un portal de diferentes aplicaciones en el cual se definen también los permisos que cada usuario tiene sobre cada aplicación. Por lo visto, existen administradores y usuarios de consulta. Con cualquier usuario, es posible acceder al editor de consultas, agregar nuevas consultas y modificar las viejas.",
     impact: "La explotación exitosa de dicha vulnerabilidad puede llevar robo de   datos y, dependiendo de estos al escalamiento de privilegios o acceso a otras bases de datos. Los usuarios de prueba (usrdeloitte  y usrdeloitte_consultas)no posee privilegios para ejecutar consultas diferentes a SELECT.",
     recommendation: "Se recomienda analizar la posibilidad la necesidad de negocio de esta funcionalidad especifica de la aplicación. Si es realmente necesaria, entonces debe estar disponible sólo para personas autorizadas y su uso debe ser auditado y documentado.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Funcionalidad para subida de archivos insegura",
     observation: "La aplicación es en realidad un portal de diferentes aplicaciones en el cual se definen también los permisos que cada usuario tiene sobre cada aplicación. Por lo visto, existen administradores y usuarios de consulta. Con un usuario administrador de cualquier aplicación, es posible subir archivos aleatorios al servidor en el directorio donde se encuentra alojada la aplicación que luego son interpretados por el servidor web.",
     impact: "La explotación exitosa de dicha vulnerabilidad puede llevar a lo siguiente:nnEjecución de código remoto en el servidor, por ejemplo subiendo un archivo ASP que luego es interpretado por el servidor.nEjecución de código en el cliente a través de código Javascript. Esto puede llevar a ataques de tipo XSSnRobo o manipulación de datosnnEsta vulnerabilidad también puede llevar a escalar privilegios en la red interna de <CLIENTE>.nSi bien la funcionalidad de subida de archivos, también funciona para un usuario de consulta, de momento no se encontró ningún directorio en el servidor en el cual estos tengan permisos de escritura.",
     recommendation: "Contenido modificable por el usuario debe ser sujeto a verificaciones previas antes de quedar expuesto en el servidor. De no ser necesaria esta funcionalidad, debe ser deshabilitada.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Funcionalidades comentadas en código HTML",
     observation: "Durante las pruebas realizadas se han identificado comentarios en el archivo fuente del código HTML que pareciera ser que son utilizados para restringir el acceso a funcionalidades obsoletas u antiguas del portal web.",
     impact: "Restringir el acceso a funcionalidades obsoletas o antiguas mediante validaciones o comentarios del lado cliente podría permitir a un usuario malicioso alterar el código HTML y obtener acceso a componentes que generen condiciones de error o también, podría permitir el acceso no autorizado a funcionalidades existentes. Así mismo, debilidades en el tratamiento de errores podrían revelar información relevante a la infraestructura de Santander, la cual pueda ser utilizada para generar ataques de mayor precisión, complejidad e impacto. ",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad y conveniencia de realizar un análisis detallado e integral a nivel código fuente, orientado a documentar y evaluar el esquema de acceso a cada una de las páginas web y funcionalidades de la aplicación. En base a la información relevada, se podrá evaluar la necesidad de diseñar e implementar un nuevo esquema de validación de permisos que permita resolver el problema en forma integral, asegurando que cada componente de la aplicación pueda ser accedido solamente por aquellos usuarios válidos del sistema que cuenten con adecuados permisos de acceso, mediante la implementación de controles del lado del servidor.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Identificación de contraseña con captura de pantalla",
     observation: "Se ha observado que el recurso afectado no cuenta con funcionalidades que prevengan la identificación de contraseñas mediante la captura de pantallas ante eventos del tipo 'OnClick', es decir, aquellos eventos que se ejecutan mediante un click. <Adicionalmente, se identificó que a pesar de generar el orden de los números en el teclado de manera aleatoria, dicho orden se encuentra visible en el código HTML de la aplicación.>",
     impact: "Por medio de programas que capturan los datos de entrada (conocidos globalmente como 'keyloggers') es posible obtener las contraseñas utilizadas capturando los eventos del tipo 'OnClick', cuando el usuario ingresa su contraseña en el teclado virtual; por ejemplo a través de capturas de pantalla. Además, es posible conocer la posición de los números dentro del teclado virtual mediante el análisis del código HTML de la aplicación debido a que estos son generados en el servidor, y su orden no se modifica.",
     recommendation: "Se recomienda analizar la posibilidad de implementar cambios en la funcionalidad del teclado virtual de forma tal que los elementos que componen dicho teclado sean enmascarados al momento de posicionarse sobre los mismos, por ejemplo, remplazando visualmente los números y/o letras que lo componen, por asteriscos. <y que el orden aleatorio de los números sea generado mediante código Javascript del lado del cliente.>",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Identificación de dirección IP interna",
     observation: "Debido a debilidades de configuración existentes en los servidores web, es posible identificar una dirección IP interna utilizada por dichos servidores listados. Las mismas son incluidas como parte de la cabecera en la respuesta del servidor.nnLas IP identificadas son:",
     impact: "El recurso afectado puede exponer direcciones IP internas que normalmente están ocultas o enmascaradas detrás de un servidor proxy o de un Firewall. Exponer la dirección IP interna del servidor permite al usuario malintencionado obtener conocimientos de la estructura de la red en la que se ubica el servidor, lo que podría ser utilidad posteriormente en la ejecución de un ataque.",
     recommendation: "Se recomienda depurar la información expuesta por los recursos afectados, eliminando toda referencia a direcciones IP internas, y reemplazándolas en caso necesario por el nombre de dominio completo equivalente. <OPCIONAL IIS> Mayor información sobre cómo aplicar dicha configuración, puede ser obtenida de los siguientes links: nhttp://support.microsoft.com/kb/218180nhttp://support.microsoft.com/kb/834141",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Identificador de cliente asociado a información pública",
     observation: "Durante el análisis realizado Se ha observado que es posible acceder a información deudora, de clientes del Banco Columbia, accediendo desde internet a través del sitio “Proa”, y utilizando la funcionalidad “Imprimí tu cupón de pago”. Esto es posible ya que el identificador utilizado por los clientes para acceder a la aplicación se encuentra asociado a información pública, como es el DNI. NOTA: Cabe destacar que la información deudora de clientes es de dominio publico de acuerdo a la normativa emitida por el BCRA.",
     impact: "La debilidad observada posibilita que un usuario malintencionado acceda a  información deudora (vencimiento del pago, importe, nombre, apellido y seis dígitos del número de cuenta de la tarjeta). Esta información puede ser usada en forma no autorizada, difundida en forma masiva o accedida por los mismos clientes y/o personal afectado de los clientes, impactando negativamente en la imagen de la Entidad.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad de asignar a cada cuenta de usuario de las aplicación afectada, un identificador aleatorio que no se asocie a ningún tipo de información pública de la persona dueña de la cuenta.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Identificador de dispositivo utilizado en operaciones críticas",
     observation: "Deloitte identificó que el identificador de dispositivos Android (android_id) está siendo enviado al servidor para realizar la operación de log in a la aplicación. Dicho identificador podría no ser único para cada dispositivo Android. Adicionalmente, Deloitte identificó que el launcher de Ipad utiliza un método deprecado para obtener un identificador del dispositivo.",
     impact: "Si el identificador de dispositivo (android_id) está siendo utilizado por la aplicación para realizar la autenticación de los usuarios o correlacionar registros de auditoría, es posible que existan otros dispositivos con el mismo identificador. Esto podría originar una deficiencia en el mecanismo de autenticación o presentar problemas al momento de correlacionar acciones u operaciones con los dispositivos y usuarios que las han realizado.",
     recommendation: "Se recomienda evaluar la posibilidad de utilizar identificadores únicos que garanticen su aleatoriedad y que no puedan ser creados, modificados o copiados por los usuarios. Para más información ver: Android: http://developer.android.com/about/versions/android-4.2.html http://android-developers.blogspot.com.ar/2011/03/identifying-app-installations.html Ipad: http://developer.apple.com/library/ios/#documentation/uikit/reference/UIDevice_Class/DeprecationAppendix/AppendixADeprecatedAPI.html",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Importación de discos locales usando el servidor de terminal",
     observation: "Es posible acceder a los discos locales del cliente del servicio de terminal durante la sesión de terminal desde el servidor.",
     impact: "Este tipo de acceso permitiría a un usuario con acceso al servicio de terminal subir herramientas para realizar ataques mas profundos sobre la infraestructura interna de <CLIENTE>.",
     recommendation: "Se recomienda restringir el acceso a los discos del cliente durante la sesión de terminal en la medida de lo posible. Para mas información, ver: http://technet.microsoft.com/en-us/library/cc775863(WS.10).aspx",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada configuración de Microsoft SQL 2000",
     observation: "Se observaron múltiples debilidades de configuración en el motor de base de datos afectado, estas son:nEl usuario administrador creado por defecto al instalar el motor de base de datos, “SA”, no cuenta con una contraseña definida;nEl motor de base de datos no cuenta con el último Service Pack instalado;",
     impact: "Las debilidades de configuración identificadas podrían permitir a un usuario malintencionado tomar control del servidor o estación de trabajo afectado, para luego intentar escalar privilegios en el servidor afectado.",
     recommendation: "Se recomienda desarrollar e implementar un estándar de configuración formal para motores de bases de datos MS-SQL 2000, asegurando que el mismo sea aplicado sin excepción en todas las instalaciones de motores de bases de datos de esta naturaleza.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO/INTERNO",
     name: "Inadecuada configuración de seguridad de capa de transporte (TLS)",
     observation: "Los recursos afectados presentan debilidades en la configuración de seguridad del/los protocolo/s de seguridad SSL/TLS. Estas debilidades incluyen:n• Versiones débiles de SSL/TLS:no TLS versión 1.0no SSL versión 3no SSL versión 2n• Suites de cifrados TLS débiles soportadas:no Longitud de clave simétrica menor a 128 bits.no Suites de cifrado RSA del tipo export-grade habilitadas.no Suites de cifrado DH del tipo export-grade habilitadas.no Suites de cifrado TLS basadas en el algoritmo de cifrado RC4 soportadas.no Clave de cifrado DH menor a 2048 bitsno Suites de cifrado TLS con tamaño de bloque de 64 bits (SWEET-32)n• Protocolo TLS vulnerable al ataque POODLEn• Vulnerabilidad de renegociación insegura (CVE-2009-3555)n• Característica de Perfect Forward Secrecy no soportada / Inadecuado soporte de la característica Perfect Forward Secrecy (Los suites de cifrado que soportan el algoritmo Diffie-Hellmann no son preferidos por el servidor)n• Vulnerabilidad al ataque DROWN (CVE-2016-0800) <SI SE IDENTIFICA SSLv2 EXP-GRADE> <SI SE IDENTIFICARON ORÁCULOS DE DROWN FUERA DE SCOPE> Nota: Se observó que la Clave Privada de cifrado RSA del/de los recursos afectados se comparte con un servidor vulnerable al ataque DROWN (CVE-2016-0800), el cuál está fuera del alacance de estas pruebas.",
     impact: "Una configuración de seguridad débil provee a un individuo malicioso con oportunidades para comprometer exitosamente la información transmitida sobre un canal cifrado. Las debilidades identificadas exponen dicha información a amenazas tales como:n•<SI TLS v1.0>Vulnerabilidades en el protocolo TLS versión 1.0 podrían permitir a un individuo malicioso, que haya tenido éxito en la realización de un ataque de tipo “man-in-the-middle” predecir el vector de inicialización empleado para enmascarar los datos previo al cifrado.n•<SI SSLv2 / SSLv3 / RSA Export grade / EDH Export grade / Weak key length>Vulnerabilidades en los protocolos SSLv2/SSLv3 podrían permitirle a un individuo malicioso que haya logrado efectuar un ataque del tipo Man-in-the-middle, obtener acceso a la información sensible transmitida por el canal mediante el forzado de la comunicación a un nivel menos seguro, para luego intentar romper el cifrado débil. <Si existen cifrados CBC habilitados> Para más información, por favor referirse al siguiente enlace: https://www.openssl.org/~bodo/ssl-poodle.pdf (enlace con contenido en inglés). <IF SSLv2 with EXP ciphersuites> Además -al estar soportadas suites de cifrado del tipo EXPORT-GRADE sobre el protocolo SSL versión 2- sería posible emplear el recurso afectado como un Padding Oracle de RSA, con el objetivo de descifrar sesiones TLS previamente establecidas sobre un canal cifrado fuerte. Asimismo, sesiones TLS establecidas con otros recursos que compartan el certificado SSL/TLS con <el / cualquiera de> recurso(s) afectado(s) también podrían ser descifradas, a pesar de no soportar <el/los> suite(s) de cifrado vulnerable(s). <IF OPENSSL prior to 1.0.2g and 1.0.1s (DROWN)> También, al estar <el/los> recurso(s) afectado(s) corriendo una versión de OpenSSL desactualizada, un individuo malicioso requerirá menor tiempo y menos recursos para descifrar el contenido de una sesión TLS, que el requerido cuando se emplea un Padding Oracle de RSA actualizado. Para mayor información, por favor referirse a los siguientes enlaces: https://drownattack.com/ y https://openssl.org/news/secadv/20160301.txtn•<IF 3DES> Ciertos algoritmos de cifrado en bloques, como ser 3DES y Blowfish emplean un tamaño de bloque de 64 bits. Al emplearse en el modo de operación CBC, estos algoritmos de cifrado se saben vulnerables al ataque conocido como 'birthday attack'. Un individuo malicioso que haya ejecutado exitosamente un ataque del tipo 'man-in-the-middle' podría aprovechar esta vulnerabilidad y su ataque asociado para descifrar el contenido de conexiones TLS establecidas sobre los suites de cifrado afectados.nPara mayor información, por favor referirse al siguiente enlace (con contenido en inglés): https://sweet32.info/SWEET32_CCS16.pdfn•<RSA Export grade / DH Export grade / Weak key length> El uso de suites de cifrado del tipo EXPORT-GRADE RSA y/o DHE (con longitud de clave menor igual o menor a 512 bits), y/o claves de cifrado simétrico menores a 128 bits, podría permitir a un individuo malicioso a descifrar el contenido de conexiones SSL/TLS por medio de un ataque de fuerza bruta -forzando la comunicación a un nivel menos seguro e intentando vulnerar el cifrado débil- con el  objetivo de obtener acceso no autorizado a la información. <IF EXPORT GRADE RSA: Para mayor información, por favor referirse al siguiente enlace: https://www.smacktls.com/#freak> <IF EXPORT GRADE EDH/ DHE Less than 2048 bits: Para mayor información, por favor referirse al siguiente enlace: https://weakdh.org/ > •<RC4 en TLS> Fallas de seguridad en el algoritmo de cifrado RC4 podrían permitir a un individuo malicioso recuperar el contenido de una conexión TLS en texto claro. Para mayor información, por favor, visite el siguiente enlace: http://www.isg.rhul.ac.uk/tls/ (Contenido en inglés)n•<POODLE on TLS> Una implementación del protocolo TLS que ha sido identificada como vulnerable a POODLE podría permitir a un individuo malicioso ejecutando un ataque del tipo 'man-in-the-middle' contra un usuario de la aplicación y que además es capaz de forzar al navegador de dicho usuario a enviar múltiples peticiones HTTPS incluyendo un contenido especialmente fraguado, a intentar obtener acceso no autorizado a los datos transmitidos, por medio de la realización de un ataque basado en la técnica Padding Oracle.n•<No PFS supported / Inadequate PFS> Un individuo malicioso que haya conseguido comprometer la Clave Privada <del/los> servidor(es) web, sería capaz de usar dicha clave con el fin de obtener acceso no autorizado a información sensible, tras romper el cifrado de comunicaciones previamente interceptadas.n•<IF DHE Less than 2048 bits> El uso de suites de cifrado que empleen algoritmos de intercambio de claves DHE con longitud de clave menor o igual a 1024 bits, podría permitir a individuos maliciosos intentar comprometer las conexiones TLS efectuadas con sitios que compartan los mismos números primos comunes al realizar el intercambio de claves Diffie-Hellman.n•<RSA Private Key shared with vulnerable SSLv2 Server> Una comunicación TLS establecida sobre parámetros de cifrado considerados fuertes, podría ser descifrada por un individuo malicioso realizando un ataque de 'man-in-the-middle', en el caso de que <el / los> servidor(es) afectado(s) compartan la clave privada RSA con algún otro servidor que soporte suites de cifrado EXPORT-GRADE sobre el protocolo SSLv2, empleando este último como un Padding Oracle de RSA. Para mayor información, por favor referirse al siguiente enlace (con contenido en inglés): https://drownattack.com/n•<Renegociación insegura>La funcionalidad de renegociación insegura podría permitirle a un individuo malicioso, que haya logrado efectuar un ataque del tipo Man-in-the-middle, enviar solicitudes arbitrarias al servidor con el objetivo de realizar acciones no autorizadas en nombre de otros usuarios.",
     recommendation: "Se recomienda analizar la posibilidad de rever si la configuración observada responde a un requisito de negocio. De lo contrario, se recomienda aplicar las siguiente directivas:n•<SI SSLv2/SSLv3/TLSv1.0>Los protocolos SSL versión 2, SSL versión 3 y TLS versión 1.0 deberían ser deshabilitados por completo, debido al hecho que la mayoría de los navegadores actualizados elegirán por defecto el protocolo y nivel de cifrado más alto (ej. TLS 1.2). Para mayor información, por favor, visite el siguiente enlace: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566 (Contenido en inglés) <SI TLSv1.0> ota: Deshabilitar protocolos antiguos (como ser TLSv1.0) podría impactar la compatibilidad con determinados dispositivos y sistemas.n•<Weak encryption key length / Export grade RSA / Export grade DH / RC4> Deshabilitar las suites de cifrado que incluyan claves de cifrado RSA o DH del tipo EXPORT-GRADE, longitudes de clave de cifrado simétrico débiles y el algoritmo de cifrado RC4.n•<SI SE OBSERVA TRIPLE CBC>Deshabilitar todos los suites de cifrado que incluyan tamaños de bloque de 64 bits.n•<POODLE on TLS> Contactar al proveedor de la solución de Seguridad de Capa de Transporte (TLS), con el fin de obtener las actualizaciones/parches de seguridad que corrijan la vulnerabilidad POODLE en TLS.n•<Insecure Renegotiation>Actualizar el software identificado a la última versión recomendada por el fabricante o aplicar los parches de seguridad que se encuentren asociados al problema de renegociación insegura.n•<PFS> Configurar los recursos afectados de tal modo que los suites de cifrado que soportan el algoritmo de intercambio de clave Diffie-Hellman se encuentren habilitados, y que aquellos suites de cifrado TLS ofrecidos por los clientes que aseguren que la comunicación está protegida de ser descifrada en el futuro sean seleccionados activamente por el servidor (incluyendo los suites de cifrado compatibles con la característica Perfect Forward Secrecy en los primeros lugares de la lista de preferidos). La mayoría de los navegadores actualizados seleccionarán por defecto el protocolo y cifrado compatible con Perfect Forward Secrecy considerado más fuerte.n•<IF DHE less than 2048 bits> Deshabilitar las suites de cifrado con números primos de longitud igual o menor a 1024 bits, y reemplazar los mismos con un grupo de Diffie-Hellman de 2048 bits.n•<RSA Private Key shared with vulnerable SSLv2 Server> Evitar el compartir claves con recurosos que no están configurados de acuerdo a los estándares de seguridad de capa de transporte, en particular con servidores que soportan el protocolo vulnerable SSL versión 2.nAdemás, se recomienda revisar los estándares de configuración de los sistemas para asegurarse que las configuraciones TLS están en línea con las políticas de la organización, y asegurarse de que las configuraciones relacionadas sean consistentes con todas las aplicaciones accesibles desde internet. <SI TLS 1.2 no está soportado>Por último, se recomienda analizar la posibilidad de actualizar los estándares de configuración para que estos requieran el uso de la última versión del protocolo TLS (TLSv1.2). nPara más información por favor referirse al siguiente enlace: https://cwe.mitre.org/data/definitions/326.html (enlace con contenido en inglés).n",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada configuración de sudo",
     observation: "Existen reglas en el archivos de configuración de la herramienta sudo que podrían permitir a un usuario ganar privilegios administrativos sobre los recursos afectados.",
     impact: "Mediante el aprovechamiento de dichas fallas de configuración es posible conseguir privilegios de root en las maquinas afectadas comprometiendo totalmente el equipo que luego puede ser utilizado para comprometer otros en la red del cliente.",
     recommendation: "Se recomienda revisar las configuración de la herramienta sudo en cada maquina y tal que cada usuario tenga privilegios solo para ejecutar lo que le corresponde. Además se recomienda restringir la ejecución de scripts que sean modificables por el usuario  y programas que permitan escapar al shell como el editor de texto vi.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Inadecuada implementación del código de verificación (Observación adicional para controles CAPTCHA inadecuados)",
     observation: "Se identificó que el código de verificación (CAPTCHA) implementado en la página de contacto de la aplicación afectada presenta debilidades, ya que tanto la generación del código como la verificación del correcto ingreso del mismo se realiza en su totalidad del lado cliente, lo cual permite que el código de verificación sea fácilmente omitido.",
     impact: "Un usuario malintencionado puede automatizar el proceso de respuesta del código de verificación, lo que le permitiría realizar consultas repetitivas sobre el formulario, las cuales podrían eventualmente llegar a derivar en una denegación de servicio o en la afectación de servicios internos como ser el correo electrónico.",
     recommendation: "Se recomienda analizar la posibilidad de utilizar sistemas de control CAPTCHA que realicen la verificación del código ingresado en el lado del servidor, para evitar así que un usuario malintencionado pueda automatizar el proceso de respuesta.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Inadecuada implementación del control CAPTCHA",
     observation: "Se identificó que el control CAPTCHA implementado en la página de autenticación de la aplicación afectada no se encuentra adecuadamente implementado, ya que si bien los símbolos (números o caracteres) pertenecen a una imagen, los mismos tienen siempre la misma textura y cantidad de puntos.",
     impact: "Un usuario malintencionado o usuario malintencionado puede automatizar el proceso de control, lo cuál le permitiría realizar consultas repetitivas sobre el formulario. Las mismas podrían eventualmente llegar a derivar en una denegación de servicio, o utilizarse para realizar ataques de fuerza bruta o enumeración de usuarios.",
     recommendation: "Se recomienda utilizar sistemas que realicen una generación aleatoria de los gráficos asignados a los caracteres del “CAPTCHA”, con el fin de que los gráficos no sean fácilmente predecibles.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ROUTERS",
     name: "Inadecuada política de auditoria",
     observation: "Como resultado del análisis de la configuración de los equipos de comunicaciones, se observa que, si bien los mismos cuentan con el servicio de auditoría activo, la configuración de los mismos no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el dispositivo.nA continuación se presenta un detalle de los aspectos que presentan oportunidades de mejora:n-  Utilización de un servidor de centralización de LOGs = logging host [IP Servidor de Logs]",
     impact: "La configuración actual del servicio de auditoría no permite analizar de manera completa la actividad de los usuarios sobre el sistema.",
     recommendation: "Se recomienda  configurar el servicio de auditoría (syslog) de manera que permita registrar la totalidad de eventos necesarios para el análisis del tráfico de red, o bien de la actividad de los usuarios sobre el dispositivo,  utilizando un servidor de centralización de LOGs, a partir del siguiente comando:n-   logging host [IP Servidor de Logs])",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Inadecuada política de contraseñas",
     observation: "Como resultado del análisis de las políticas de contraseñas y bloqueo de cuentas del los recursos afectados se observa que, si bien cuentan con una política de contraseña y bloqueo de cuentas aplicadas, existen ciertos parámetros de configuración que no se encuentran alineados con los valores establecidos por las mejores prácticas.nEl valor observado se detalla a continuación:nAccount lockout duration = 0",
     impact: "La existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar el valor asignado al parámetro observado, tomando como referencia los valores establecidos por las mejores practicas, a saber:nnAccount lockout duration = 30",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "ROUTERS",
     name: "Inadecuada política de contraseñas",
     observation: "Se identificó que los recursos afectados no cuentan con una adecuada política de complejidad de contraseñas y bloqueo de cuentas.",
     impact: "Debilidades en la política de contraseñas locales podrían permitir a un usuario malintencionado tomar control del servidor o estación de trabajo afectado para luego intentar escalar privilegios dentro del equipo afectado o bien en el dominio corporativo. Al no estar definidas políticas de complejidad de contraseñas, las mismas pueden ser triviales y permanecer en el tiempo, lo que podría facilitar las tareas de un usuario malintencionado en caso de pruebas de fuerza bruta contra las cuentas de estos equipos.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de definir e implementar una política de contraseñas para usuarios locales que contemple al menos los siguientes puntos:nnPara el dispositivo APC_RT_ASOC:n- security passwords min-length 8n- security authentication failure rate <3-5> lognnPara el dispositivo EXTERNO:n- security passwords min-length 8",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Inadecuada política de contraseñas",
     observation: "Se ha observado que la política de contraseñas implementada en la aplicación no cumple con las mejores prácticas de seguridad. En particular se ha identificado lo siguiente:n• Longitud mínima de caracteres: 6 n• Cantidad mínima de caracteres alfabéticos: 6n• Cantidad mínima de caracteres numéricos: 0n• Cantidad mínima de caracteres especiales: 0n• No hay historial de contraseñasn• La contraseña puede ser igual al nombre de usuarionnAdemás, fue posible saltear el control JavaScript a través de manipulación de parámetros, logrando configurar una contraseña de solo un (1) carácter.nFinalmente, se ha observado que no es posible cambiar la contraseña desde el panel de usuario, dado que no existe dicha funcionalidad.",
     impact: "Dado que la política de contraseñas presenta debilidades, la probabilidad de éxito de ataques como fuerza bruta o adivinación de contraseñas se ve incrementada, con el fin de obtener acceso no autorizado a la aplicación. Además, como la aplicación no posee historial de contraseñas, un usuario podría reutilizar la misma contraseña múltiples veces (utilizando la funcionalidad de “¿olvido su contraseña?”), incrementando la posibilidad de que la misma sea comprometida.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar una política de contraseñas que contemple al menos los siguientes puntos:n• Longitud mínima de caracteres: 10n• Cantidad mínima de caracteres alfabéticos: 6n• Cantidad mínima de caracteres numéricos: 2n• Cantidad mínima de caracteres especiales: 2n• Historial de Contraseñas: 6 contraseñas o más.n• La contraseña no debe ser igual al usuarionAdemás, se recomienda analizar la posibilidad de agregar la opción de cambio de contraseña desde el panel de usuario, para que estos tengan la posibilidad de realizar cambios de contraseña periódicamente.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Inadecuada política de contraseñas",
     observation: "Se ha observado que la política de contraseñas requerida por el launcher de Ipad y Android no cumple con las mejores prácticas de seguridad. De acuerdo a lo observado, la política de contraseñas existente acepta una longitud de la contraseña de 4 caracteres y no requiere complejidad. Nota: De acuerdo a lo conversado con personal de Banco Bolivariano, el requerimiento de 4 caracteres de longitud mínima se mantiene para dar soporte a los usuarios que aún no han migrado al nuevo esquema (que requiere al menos 8 caracteres).",
     impact: "La existencia de contraseñas débiles brinda a un potencial atacante, un camino sencillo para acceder a la aplicación utilizando las credenciales (identificador de usuario y contraseña) de un cliente válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda analizar la factibilidad técnica y de negocio de forzar la migración de todos los usuarios al nuevo esquema, de manera que se pueda implementar una política de contraseñas que contemple al menos los siguientes puntos:n Longitud mínima de caracteres: 8  Cantidad mínima de caracteres alfanuméricos: 4 Cantidad mínima de caracteres numéricos: 2 Cantidad mínima de otros caracteres: 2nHistorial de Contraseñas: 6 contraseñas o más.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Inadecuada política de contraseñas – O.S. ",
     observation: "Se ha observado que, si bien cuentan con una política de contraseña y bloqueo de cuentas aplicadas, existen ciertos parámetros de configuración que no se encuentran alineados con los valores establecidos por las mejores prácticas.",
     impact: "La existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar los valores asignados a los parámetros observados, tomando como referencia los valores establecidos por las mejores practicas, a saber:n- Minimum Password Length = 8n- Account lockout duration = 30n- Account lockout threshold = 5 or lessn- Reset account lockout counter after = 30",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Inadecuada política de contraseñas – Router",
     observation: "Se ha observado que los recursos afectados no cuentan con una adecuada política de complejidad de contraseñas. La longitud mínima requerida para las contraseñas es de 6 caracteres. Lo cual se encuentra configurado mediante el siguiente comando: - security passwords min-length 6.",
     impact: "Debilidades en la política de contraseñas locales podrían permitir a un usuario malintencionado tomar control del servidor o estación de trabajo afectado para luego intentar escalar privilegios dentro del equipo afectado o bien en el dominio corporativo. Al no estar definidas políticas de complejidad de contraseñas, las mismas pueden ser triviales y permanecer en el tiempo, lo que podría facilitar las tareas de un usuario malintencionado en caso de pruebas de fuerza bruta contra las cuentas de estos equipos.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de definir e implementar una política de contraseñas para usuarios que contemple al menos el siguiente punto: n-Longitud mínima de las contraseñas: 8 caracteres.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "INTERNO",
     name: "Inadecuada restricción de acceso a Consola de VMWare",
     observation: "Se ha observado que es posible acceder al servidor que aloja la infraestructura virtual de <CLIENTE>, desde una dirección IP con permisos de “Customer Service” en la red Interna de usuarios finales, a saber el segmento 192.168.219.0/24.",
     impact: "Dicha observación permitiría que un usuario malintencionado interno o usuario malicioso con permisos de “Customer Service” a nivel de red, tenga acceso a la consola administrativa del servidor VMWare.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de restringir el acceso a la consola de administración del servidor VMWare únicamente a aquellas direcciones IP o segmentos de red correspondientes a las estaciones de trabajo de los usuarios administradores que deban poseer acceso al recurso afectado. ",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada restricción de acceso a consola de VMWare",
     observation: "Se ha observado que es posible acceder al servidor que aloja la infraestructura virtual de <CLIENTE>, desde una dirección IP con permisos de “Customer Service” en la red Interna de usuarios finales.",
     impact: "Dicha observación permitiría que un usuario malintencionado interno o usuario malicioso con permisos de “Customer Service” a nivel de red, tenga acceso a la consola administrativa del servidor VMWare.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de restringir el acceso a la consola de administración del servidor VMWare únicamente a aquellas direcciones IP o segmentos de red correspondientes a las estaciones de trabajo de los usuarios administradores que deban poseer acceso al recurso afectado.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada restricción de navegación y descarga de internet",
     observation: "Se ha observado que es posible navegar por internet con inadecuados permisos de restricción, así como también, la posibilidad de descargar archivos.",
     impact: "Si bien las estaciones de trabajo se encuentran restringidas respecto de su acceso a internet, por ejemplo, el servicio de MSN se encuentra denegado, existen múltiples sitios de internet desde donde se pueden descargar programas que podrían estar comprometiendo la seguridad de la red interna.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar políticas de acceso a sitios de internet que limiten a las estaciones de trabajo a acceder únicamente a los sitios permitidos por la Entidad. Adicionalmente, se recomienda considerar la posibilidad de limitar la descarga de aplicaciones desde internet en aquellos casos en que no sea requerido por el negocio.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada restricción de navegación y descarga de internet",
     observation: "Se ha observado que no se están filtrando exhaustivamente los sitios a los que los usuarios de la red interna pueden acceder vía internet.",
     impact: "Si bien las estaciones de trabajo cuentan con algunas restricciones de los tipos de servicios que pueden utilizar en internet, por ejemplo el servicio de MSN se encuentra denegado, existen múltiples sitios de internet desde donde se pueden descargar programas que podrían estar comprometiendo la seguridad de la red interna de <CLIENTE>.",
     recommendation: "Evaluar la posibilidad de implementar políticas de acceso a sitios de internet que limiten a las estaciones de trabajo a acceder únicamente a los sitios permitidos por la Organización. Adicionalmente, se recomienda considerar la posibilidad de limitar la descarga de aplicaciones desde internet en aquellos casos en que no sea requerido por el negocio.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Inadecuada segregación de redes",
     observation: "Se observó que existen segmentos de la red interna que no se encuentran adecuadamente segregados. En particular, <EJEMPLO: los consultores de Deloitte accedieron a la red interna a través del segmento de Marketing y logró alcanzar diferentes sistemas de administración y desarrollo.>",
     impact: "Una inadecuada segmentación de la red posibilita que un individuo malicioso que logre acceso a la red interna a través de cualquier dispositivo pueda alcanzar dispositivos de red y servidores de datos y aplicaciones críticos de la compañía y realizar ataques contra los mismos.",
     recommendation: "Se recomienda realizar un análisis detallado de la arquitectura de red actualmente definida para la compañía y modificarla de manera tal que existan diferentes segmentos de red lógicamente separados, mediante dispositivos firewalls que impidan que los usuarios conectados a los diferentes segmentos de red puedan alcanzar dispositivos y servidores que no corresponden a su rol dentro de la compañía.",
     severity: "BAJO",
     complex: "ALTO"
    },
    {
     type: "WEBAPP",
     name: "Inadecuada validación de parámetros",
     observation: "Se ha observado que la aplicación presenta debilidades en el esquema de validación de los parámetros de entrada y salida. Los siguientes recursos permiten la inyección de caracteres especiales que luego son reflejados en el navegador cliente: <listar los recursos y sus parámetros GET/POST>.",
     impact: "Las aplicaciones que no validan de manera apropiada los parámetros de entrada y salida, en general, son susceptibles a ataques del tipo Cross-site scripting. Estos ataques aprovechan las validaciones insuficientes de los parámetros de entrada y salida, permitiéndole a individuos maliciosos insertar código de scripting arbitrario en las mismas, que luego serán ejecutados en el navegador de las víctimas. La explotación exitosa de esta vulnerabilidad podría permitirle a un individuo malicioso obtener información sensible de la víctima relacionada con la aplicación (por ejemplo credenciales de usuario o tokens de sesión), o en la distribución y propagación de virus a través del sitio de la compañía, dañando considerablemente la imagen de <CLIENTE>.",
     recommendation: "Se recomienda analizar la posibilidad de implementar una apropiada validación para todos los parámetros procesados por la aplicación, ya sean de entrada o salida, en el código que se ejecuta en el servidor. La misma debería determinar el tipo de dato esperado, junto con su longitud y caracteres permitidos, descartando toda desviación. Cabe destacar que dichas validaciones no deberían acotarse a aquellos parámetros y recursos presentados a modo de ejemplo, sino que se recomienda extender dicha implementación a todos los parámetros de la aplicación. Además, se recomienda realizar un análisis detallado a nivel de código fuente, para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación. Finalmente, como nivel adicional de seguridad, se recomienda considerar la implementación de un firewall de capa de aplicación para bloquear solicitudes HTTP maliciosas.nPara más información, por favor, visite el siguiente enlace: https://www.owasp.org/index.php/Data_Validation (enlace con contenido en Inglés)",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Inadecuada validación de parámetros permite la generación de escenarios de Phishing",
     observation: "Se ha observado que la aplicación presenta debilidades en el esquema de validación de los parámetros de entrada y salida. Las siguientes URLs aceptan solicitudes del tipo GET que permiten inyectar texto arbitrario en el código HTML contenido en la respuesta HTTP de la aplicación, a través de los parámetros afectados.",
     impact: "Las aplicaciones que no validan de manera apropiada los parámetros de entrada y salida, en general, son susceptibles a varios tipos de ataques que incluyen, por ejemplo, ataques de ingeniería social. Este tipo de ataques permite a individuos maliciosos enmascararse como <CLIENTE> para realizar ataques de Phishing, con el objetivo de capturar información personal o financiera, propagación de malware, o generar otros escenarios del tipo “Man-in-the-middle” con el fin de intentar capturar información de la cuenta. Estas acciones son problemáticas debido a que podrían debilitar la imagen pública y, por tanto, afectar la reputación de <CLIENTE>",
     recommendation: "Se recomienda analizar la posibilidad de implementar una apropiada validación para todos los parámetros procesados por la aplicación, ya sean de entrada o salida, en el código que se ejecuta en el servidor. La misma debería determinar el tipo de dato esperado, junto con su longitud y caracteres permitidos, descartando toda desviación. Cabe destacar que dichas validaciones no deberían acotarse a aquellos parámetros y recursos presentados a modo de ejemplo, sino que se recomienda extender dicha implementación a todos los parámetros de la aplicación. Además, se recomienda realizar un análisis detallado a nivel de código fuente, para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación.nPara más información, por favor, visite el siguiente enlace:n• https://www.owasp.org/index.php/Data_Validation (Contenido en inglés).n",
     severity: "INFORMATIVO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Inadecuada validación de permisos de acceso",
     observation: "Se ha observado que el esquema de validación de permisos de acceso presenta posibles debilidades, que podrían permitir a un usuario que se encuentra autenticado en el sistema, acceder a funcionalidades restringidas de la aplicación para su perfil.",
     impact: "Si un usuario tiene acceso a funcionalidades no permitidas para su perfil, podría realizar acciones que no se encuentren alineadas con el objetivo de negocio, lo que podría repercutir negativamente en el mismo. Un usuario malintencionado podría aprovechar las debilidades existentes en el esquema de validación de permisos de la aplicación para intentar generar condiciones de error y/u obtener información que pueda ser de utilidad para realizar ataques de mayor impacto. <EN CASO DE INVOLUCRAR FUNCIONALIDADES CLAVE> Las debilidades observadas podrían repercutir de forma directa en el negocio, ya que un usuario malintencionado podría aprovechar las debilidades existentes en el esquema de validación de permisos de la aplicación, para realizar funcionalidades no autorizadas que alteren la configuración de la aplicación o los datos de la misma.",
     recommendation: "Se recomienda analizar la posibilidad de modificar la funcionalidad afectada, implementando un control de permisos transitorio que permita acotar los riesgos identificados en forma inmediata. Dicho control transitorio podría ser complementado con la implementación de un monitoreo detallado del uso de la funcionalidad afectada. Además, Se recomienda analizar la posibilidad la factibilidad y conveniencia de realizar un análisis detallado e integral a nivel código fuente, orientado a documentar y evaluar el esquema de validación actual en cada una de las páginas web y funcionalidades de la aplicación. En base a la información relevada, se podrá evaluar la necesidad de diseñar e implementar un nuevo esquema de validación de permisos que permita resolver el problema en forma integral, asegurando que cada componente de la aplicación pueda ser accedido solamente por aquellos usuarios válidos del sistema que cuenten con adecuados permisos de acceso.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO",
     name: "Inadecuado control de requerimientos de seguridad para el acceso remoto",
     observation: "Deloitte ha observado, analizando la estructura de la conexión de acceso remoto VPN, se ha determinado que en el proceso de autenticación remoto no se ejecutan controles específicos, sobre el equipo que genera la conexión,  los cuales comprueben los requerimientos mínimos de seguridad como ser:n- La existencia de antivirusn- Cliente de firewall habilitadon- Parches de seguridad aplicados",
     impact: "A definir junto con personal de <CLIENTE>.",
     recommendation: "A definir junto con personal de <CLIENTE>.",
     severity: "A DEFINIR",
     complex: "A DEFINIR"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Inadecuado manejo de errores",
     observation: "Se ha observado la presencia de distintos mensajes de error presentados a los usuarios, que revelan información sensible acerca de la infraestructura de los servicios afectados. Algunas condiciones de error en las aplicaciones producen mensajes que generan stack traces (listado de excepciones de memoria), pudiendo revelar información sensible acerca de las funciones e infraestructura de los servicios afectados.",
     impact: "Los errores que presentan las aplicaciones afectadas, podrían permitir a un potencial usuario malintencionado, identificar información adicional sobre la infraestructura (tipo de servidor web utilizado, versión, etc.), la cual pueda ser utilizada para generar ataques de mayor precisión, complejidad e impacto.",
     recommendation: "Se recomienda analizar la posibilidad de modificar la configuración de los servidores web para que los mismos muestren al usuario pantallas de errores generales, personalizados por <CLIENTE>, que no revelen información detallada del error y/o de la infraestructura que soporta el sitio web.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Inadecuado manejo de errores (sin stack traces)",
     observation: "Se ha observado la presencia de distintos mensajes de error presentados a los usuarios, que revelan información sensible acerca de la infraestructura de los servicios afectados.",
     impact: "Los errores que presentan las aplicaciones afectadas, podrían permitir a un potencial usuario malintencionado, identificar información adicional sobre la infraestructura (tipo de servidor web utilizado, versión, etc.), la cual pueda ser utilizada para generar ataques de mayor precisión, complejidad e impacto.",
     recommendation: "Se recomienda analizar la posibilidad de modificar la configuración de los servidores web para que los mismos muestren al usuario pantallas de errores generales, personalizados por <CLIENTE>, que no revelen información detallada del error y/o de la infraestructura que soporta el sitio web.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Inadecuado manejo de expiración de la sesión",
     observation: "Se identificó que en la aplicación afectada, el manejo de expiración de las sesiones de usuarios no cumple con las mejores prácticas recomendadas, ya que las mismas no expiran automáticamente pasados los 30 minutos de inactividad.",
     impact: "Es posible que un usuario no termine explícitamente con la sesión (por ejemplo cerrando el navegador) y abandone la terminal de trabajo. Dicha terminal puede ser utilizada por otros usuarios en su ausencia, por lo que un tiempo de expiración demasiado largo podría facilitar la captura de la sesión.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de realizar un análisis del código fuente de la aplicación, e implementar la expiración de las sesiones de manera tal que se ajuste a las mejores prácticas recomendadas. Específicamente, el tiempo de expiración de la sesión debe ser menor o igual a 30 minutos.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Inadecuados permisos de archivos (UNIX)",
     observation: "Se identificó que en el sistema de archivos de un servidor Linux, <SI APLICA/EJEMPLO: accedido a través de la consola de administración Jenkins>, se encuentra un archivo de script Bash, perteneciente al usuario root, con permisos de lectura por parte de todos los usuarios del sistema. Dentro del archivo de script se puede observar la llamada a un programa que incluye credenciales de usuarios en texto plano.nDetalles del archivo afectadon• -rwxr-xr-x  1  root  root  817  May   9  2012 /etc/zenoss_register.shn",
     impact: "Los archivos de configuración y/o con información sensible que poseen inadecuados permisos de acceso, posibilitan que usuarios no autorizados accedan a información privilegiada y puedan utilizarla para acceder a otros sistemas de manera indebida. Además, la utilización de credenciales en texto plano dentro de archivos de configuración, pone en riesgo las mismas puesto que podrían ser filtradas por errores de configuración, accesos indebidos al dispositivo de almacenamiento donde se encuentran o sus copias de respaldos inadecuadamente protegidas.",
     recommendation: "Se recomienda modificar las propiedades del archivo indicado, de manera tal que sólo pueda ser accesido por aquellos usuarios que lo requieran para el normal funcionamiento del negocio. Además, se recomienda no embeber credenciales dentro de archivos en texto plano.",
     severity: "BAJO",
     complex: "BAJO"
    },
    {
     type: "MÓVIL",
     name: "Inexistencia de Política de Contraseñas y Bloqueo de Cuenta",
     observation: "Se ha observado que no existe una política de contraseñas implementada para los pines que permiten el acceso a la aplicación móvil. Adicionalmente no se detectó un mecanismo de bloqueo de aplicación por intentos de acceso fallidos en dicha autenticación.",
     impact: "Al no existir una política de contraseñas y de bloqueo de cuentas, los pines podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.nUn usuario malintencionado que logró tener acceso al dispositivo móvil donde se encuentra la aplicación, podría realizar pruebas automatizadas de fuerza bruta para obtener el pin de acceso a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar en las aplicaciones móviles una política de pines que contemple al menos los siguientes puntos:n- Longitud mínima de caracteres: 6n- Complejidad de pines, sin permitir contraseñas triviales.n- Bloqueo de acceso a la aplicación por intentos fallidos",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Inexistencia de protección contra IFRAMES",
     observation: "El portal de banca electrónica puede ser incrustado dentro de un frame en una página web de un usuario malintencionado. La URL afectada es:",
     impact: "Un usuario malintencionado podría realizar un ataque de phishing introduciendo la página web de la entidad dentro de un frame y posteriormente mediante técnicas de Clickjacking espiar la actividad del usuario, pudiendo robar las credenciales de autenticación del mismo.",
     recommendation: "Se recomienda considerar la implementación del encabezado de respuesta HTTP “X-Frame-Options” configurado con el valor “Deny”, con el objetivo de prevenir ataques del tipo Clickjacking. Como medida de seguridad adicional, se recomienda investigar mecanismos que prevengan que la aplicación pueda ser cargada a través de objetos frame o iframe de fuentes externas, asegurando que el correcto funcionamiento de la aplicación no se vea afectado.nPara más información, por favor, visite el siguiente enlace:nhttp://cwe.mitre.org/data/definitions/103.html (enlace con contenido en Inglés)n",
     severity: "INFORMATIVO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Inexistencia de sensores en los paneles",
     observation: "Se ha observado que el cajero NCR no posee sensores que adviertan la apertura de los paneles frontal y posterior.",
     impact: "La inexistencia de sensores que identifiquen la apertura de los paneles posibilita que un atacante no sea detectado en caso de comprometer la cerradura y obtener acceso al interior de cajero automático.",
     recommendation: "Se recomienda analizar la posibilidad de implementar sensores para identificar la apertura de los paneles frontal y posterior, a fin de detectar en forma temprana la posibilidad de un ataque.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Inexistencia de teclado virtual",
     observation: "Durante el análisis realizado se ha identificado que la aplicación afectada no presenta al usuario la funcionalidad de un teclado virtual para ingresar las credenciales de autenticación (usuario y contraseña) de forma segura.",
     impact: "Computadoras personales se encuentran expuestas a  software malicioso de tipo malware o spyware debido a la falta de aplicación de parches al software de base por parte del usuario e inefectividad de las aplicaciones antivirus. Parte del software malicioso puede ser diseñado para monitorear la actividad de los teclados de las computadoras infectadas, exponiendo las credenciales de los usuarios y permitiendo que un usuario malintencionado las utilice para conseguir acceso no autorizado a la aplicación.nVale destacar que computadoras de acceso público, como ser cibercafés, son mas vulnerables a este tipo de ataques.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica y de negocio de implementar un teclado virtual para el ingreso de credenciales. Asimismo, dicho teclado virtual deberá ofuscar las teclas al momento de hacer click en alguna de estas con el objetivo de prevenir ataques basados en el monitoreo de la pantalla del equipo ante cada click.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Inexistencia de un procedimiento de manejo de cajeros",
     observation: "Deloitte ha observado, durante las entrevistas con el personal de seguridad del banco, que no existe un procedimiento o checklist de controles y tareas a realizar sobre la seguridad física y lógica de los cajeros automáticos.",
     impact: "La inexistencia de un procedimiento o checklist sobre el manejo de los cajeros automáticos pone en riesgo la integridad de los mismos. Al no existir un proceso estandarizado a seguir para asegurar un cajero, cajeros con una configuración insegura podrían ser utilizados en producción, lo que permitiría que los mismos puedan ser comprometidos en menos tiempo.",
     recommendation: "Se recomienda analizar la posibilidad de definir un proceso de aseguramiento de los cajeros automáticos. El mismo debería incluir proceso de seguridad lógica, física y de redes, para llevar las terminales a un nivel de seguridad estandarizado y adecuado según las mejores prácticas.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "TOKENS",
     name: "Inexistencia de un Procedimiento de Respuesta Ante Incidentes",
     observation: "Como conclusión de las tareas realizadas se ha determinado que no existe un procedimiento formal con el objetivo de implementarse en tareas de respuesta ante incidentes vinculadas a la arquitectura de OTP. nA modo de ejemplo se listan posibles incidentes que pudieran afectar la operatoria:nDesincronización masiva de tokens de usuariosnInterrupción del servicio que soporta  la solución OTPnDetección de fraude usando el sistema de claves temporales",
     impact: "Los recursos informáticos se encuentran expuestos a diversos incidentes que pueden afectar la disponibilidad del servicio y la integridad de la información que se encuentra soportada por el mismo. En caso de no contar con un procedimiento formal, probado y aprobado, dichos incidentes pueden afectar considerablemente los recursos afectados ya que el impacto podría no ser contenido.",
     recommendation: "Se recomienda analizar la posibilidad de realizar las siguientes acciones:nEstablecer los posibles incidentes que pueden afectar la arquitectura de tokens OTP.nAsimismo, se deberá realizar el análisis de impacto correspondiente para los incidentes que puedan afectar dicha solución.nComo consecuencia de las tareas detalladas anteriormente, <CLIENTE> deberá desarrollar, probar y aprobar un procedimiento de respuesta ante incidentes para aquellos puntos en donde se comprometa la disponibilidad de la arquitectura de tokens OTP.",
     severity: "ALTO",
     complex: "N/A"
    },
    {
     type: "ATM",
     name: "Información confidencial transmitida en texto plano",
     observation: "Información confidencial es transmitida por la red en texto plano. A continuación se detalla la información afectada:n- <ATM MODELO: EJEMPLO 1: Transmite la información del track 2 de la tarjeta de debito, junto con los  saldos y números de cuenta utilizados en la impresión del comprobante de la operación realizada.> - <ATM MODELO: EJEMPLO 2: Transmite la información del track 2 de la tarjeta de debito.> - <ATM MODELO: EJEMPLO 3: Transmite el número de tarjeta utilizado en el cajero, el número de transacción, el nombre de la persona y el contenido del recibo del cajero, el cual incluye el monto extraído y el saldo disponible.>",
     impact: "Debido a que los datos no se cifran entre el cajero y la red de procesamiento, estos serían visibles para un individuo malicioso con acceso al canal de comunicación. Esta información podría ser utilizada para duplicar las tarjetas de los usuarios del cajero, identificar clientes con saldos elevados en sus cuentas para seleccionarlos como posibles objetivos o en ataques de ingeniería social.",
     recommendation: "Se recomienda analizar la posibilidad de cifrar la información confidencial de las transacciones que es enviada por el canal de comunicación.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Información de usuario almacenada en la cookie",
     observation: "Se ha observado que la aplicación incluye información potencialmente sensible dentro de la cookie de sesión, la cual es almacenada en el navegador. En particular, Se ha observado la siguiente información:",
     impact: "La observación identificada podría permitir que un usuario malintencionado con acceso a la estación de trabajo de un cliente de <CLIENTE>, acceda a los archivos temporales del navegador web para intentar obtener la información detallada.",
     recommendation: "Se recomienda analizar la posibilidad de remover información asociada con el usuario y/o información potencialmente sensible, como nombres internos de servidores, dentro de la cookie de sesión. Asimismo, se recomienda analizar la posibilidad de revisar las políticas actuales de desarrollo para asegurar que no se incluya información sensible dentro de las cookies de sesión.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "CTI / EXTERNO / WEBAPP",
     name: "Información interna en documentos públicos",
     observation: "Se ha observado la existencia de documentos accesibles desde Internet, con extensiones como <COMPLETAR CON: XLS, PDF, DOCX, etc>, cuya metadata contiene información interna de la organización, tal como: <COMPLETAR LA LISTA>  <Nombres de usuario: COMPLETA CON EJEMPLOS> <Software utilizado: COMPLETA CON EJEMPLOS> <Sistemas operativos: COMPLETA CON EJEMPLOS> <Nombres de carpetas: COMPLETA CON EJEMPLOS>",
     impact: "La información contenida en la metadata de los archivos identificados podría ser utilizada por un individuo malicioso para obtener un mayor entendimiento de la organización, y así planificar ataques de ingeniería social o phishing dirigidos a determinados usuarios.",
     recommendation: "Se recomienda eliminar los documentos que actualmente exponen información interna de la organización y publicarlos nuevamente luego de una debida depuración de información contenida en la meta data de los mismos. Además, se recomienda implementar un procedimiento para controlar los documentos a publicar, de manera tal de garantizar que los mismos no contengan información sensible de la organización en su metadata.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/200.html (enlaces con contenido en Inglés)",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Información sensible almacenada en carpetas compartidas",
     observation: "Durante el análisis del contenido de las carpetas compartidas a las que se tenía acceso se encontró información sensible de algunos equipos de <CLIENTE>, entre ésta se encontraban contraseñas, alguna de las cuales otorgaba acceso administrativo a recursos de la compañía. Estas carpetas compartidas pueden ser accedidas por cualquier usuario de Windows autenticado en la red de <CLIENTE>. Estas carpetas son:",
     impact: "Si los permisos efectivos aplicados a los recursos compartidos del dominio no son cuidadosamente analizados y aplicados, un individuo malicioso que lograra obtener acceso al dominio con una cuenta sin privilegios especiales podría acceder a información sensible de manera no autorizada. Además, el almacenamiento de información sensible en recursos compartidos no específicos, incrementa las posibilidades de que un individuo malicioso pudiera accederlos y utilizarlos para realizar ataques en perjuicio de la compañía.",
     recommendation: "Se recomienda revisar y actualizar los permisos efectivos del recurso compartido afectado, de manera tal que no pueda ser accedido por cualquier usuario que tenga acceso a la red del dominio. Además, se recomienda realizar un análisis exhaustivo de todos los recursos compartidos del dominio y aplicar las modificaciones pertinentes de manera tal que su contenido pueda ser accedido únicamente por los grupos y/o usuarios según los requisitos de negocio.  Finalmente, se recomienda realizar una minuciosa verificación del contenido de todos los recursos compartidos del dominio en busca de material sensible, tal como contraseñas, tarjetas de créditos, información de salarios y todo aquellos que sea considerado sensible para la compañía.",
     severity: "MEDIO",
     complex: "BAJO"
    },
    {
     type: "WEBAPP",
     name: "Información sensible almacenada en el cache del navegador",
     observation: "Se han identificado páginas de la aplicación que contienen información potencialmente sensible del usuario tal como su nombre de usuario, y son almacenadas en el disco rígido de la PC del usuario (Cache del navegador Web).",
     impact: "La observación identificada podría permitir a un usuario malicioso con acceso a la estación de trabajo de un cliente de la Entidad, acceder a los archivos temporales del navegador Web y a la información sensible almacenada en los mismos, y utilizar dicha información para realizar ataques de adivinación de contraseñas e intentar acceder de forma no autorizada a la aplicación 'impersonándose' como el usuario. Este hecho se vería agravado, si el usuario accede a la aplicación desde una PC pública (ej. Cyber café o locutorio de internet), donde existe una mayor posibilidad de acceso a dicha información por parte de usuarios no autorizados.",
     recommendation: "Se recomienda modificar los códigos fuentes de la aplicación, para lograr que las páginas que contienen información sensible de los usuarios no sean grabadas en los archivos temporales del navegador Web.nPara ampliar la información ver los siguientes links: nhttp://support.microsoft.com/default.aspx?kbid=234067nhttp://support.microsoft.com/default.aspx?kbid=222064nNo obstante, siempre que sea posible se debe evitar incluir información sensible del usuario en la página Web que se le presenta al mismo, como en este caso que se incluye el nombre de usuario.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "MÓVIL",
     name: "Información sensible contenida en archivos de cache",
     observation: "La aplicación almacena información de la cuenta del usuario, como <INFORMACION ENCONTRADA>, en los archivos contenidos en la cache del dispositivo Android/iOS.nLa información almacenada es la siguiente:n•xxnLos archivos afectados se encuentran en los siguientes directorios:n• /data/data/xxx",
     impact: "La recopilación de información es normalmente el primer paso para realizar un ataque. Un individuo malicioso con acceso al dispositivo podría acceder a la información sensible contenida en los archivos de cache.",
     recommendation: "Se recomienda realizar una revisión total de la información guardada en la cache y filtrar aquellos parámetros que podrían exponer información sensible. Además, se recomienda revisar los estándares de codificación utilizados para asegurar que la información sensible es almacenada en componentes que permitan el cifrado en memoria, que esta práctica está alineada a las políticas y requerimientos de negocio y es aplicada consistentemente en todas las aplicaciones de la organización.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Información sensible de clientes disponible en internet",
     observation: "Se ha observado que los archivos obtenidos por los clientes a través del menú de descarga de archivos correspondiente a las funcionalidades de “XXXXX” y ”XXXX”, son depositados en una carpeta pública del servidor web y pueden ser accedidos desde internet por cualquier persona que conozca el nombre de dichos archivos.  ",
     impact: "La debilidad observada posibilita que los archivos obtenidos por los clientes, los cuales contienen información sensible (cuentas, fechas, tipo de transacción, montos asociados, etc.), puedan ser visualizados por un usuario malintencionado o usuario malicioso desde internet. Esta información puede ser usada en forma no autorizada, difundida en forma masiva o accedida por los mismos clientes y/o personal afectado de los clientes, impactando negativamente en la imagen de la compañía.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de que los archivos mencionados no sean almacenados en disco, sino que se generen en memoria y luego sean enviados al usuario.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Información sensible en archivos de auditoria (LOGS)",
     observation: "Se ha observado archivos con extensión .dat los cuales contienen información de las operaciones realizadas en el cajero, como números de cuentas y balance de las mismas, almacenadas en texto plano. Esta información coincide con los datos impresos en el comprobante al realizar la operación.",
     impact: "Dicha información podría ser utilizada para identificar clientes con altos saldos de las cuentas o bien en ataques de ingeniería social.",
     recommendation: "Se recomienda analizar la posibilidad de no almacenar esta información en archivos en texto plano dentro del sistema. En caso de ser necesarios para el negocio, se debería evaluar la posibilidad de implementar algún mecanismo de cifrado que garantice la confidencialidad de esta información.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Información sensible en View State",
     observation: "La propiedad ViewState es utilizada por ASP.NET para almacenar información de estado de la sesión de un usuario de la aplicación. La información contenida en la propiedad ViewState es intercambiada entre el servidor y el navegador, a través de un campo HTML oculto (hidden) y su contenido se encuentra codificado, pero no cifrado. De esta manera, se ha observado que es posible identificar información sensible en el contenido de la propiedad ViewState. En particular, se ha podido observar: <Listar la información obtenida>",
     impact: "Si la información almacenada utilizando la propiedad ViewState no se encuentra cifrada, se brinda la oportunidad a un individuo malicioso, que logre obtener acceso al ViewState de un usuario legítimo, de obtener información sensible perteneciente o relativa a la víctima.",
     recommendation: "Se recomienda modificar la configuración de ASP.NET para evitar la exposición de información sensible. Esta modificación puede realizarse cifrando el objeto View State, con el fin de reducir la probabilidad de que un individuo malicioso obtenga acceso a la información almacenada, utilizando la siguiente configuración de ASP.NET: “ViewStateEncryptionMode.Always”.nPara más información, por favor, visite el siguiente enlace: http://msdn.microsoft.com/es-es/library/aa479501.aspx",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "MÓVIL",
     name: "Información sensible expuesta a través del Clipboard",
     observation: "Se ha observado que la aplicación permite que datos potencialmente sensibles como el número de línea son almacenados temporalmente (caché) en texto plano cuando son copiados al “Clipboard”.",
     impact: "Un individuo malicioso podría ganar acceso a información potencialmente sensible como el número de línea con el objetivo de utilizarla como punto de partida para otros ataques, como adivinación de contraseñas o ataques de phishing.",
     recommendation: "Se recomienda analizar la necesidad técnica y de negocio de tener habilitada la funcionalidad de copiado y pegado en campos que contienen información potencialmente sensible. De no ser necesario, se recomienda deshabilitar la función de copiado y pegado en todo campo que contenga información sensible, con el objetivo de evitar que el usuario pueda almacenar información potencialmente sensible en el “Clipboard” de los dispositivos móviles.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Interfaces de administración accesibles",
     observation: "Se ha observado la existencia de interfaces de administración accesibles. <Listar las URL afectadas>",
     impact: "Las interfaces de administración suelen proveer elevados privilegios al ser accedidas, razón por la cual son los primeros puntos de ataque. Un individuo malicioso podría intentar adivinar cuentas de usuarios y contraseñas válidas para acceder a las interfaces. Si se accedieran, las áreas administrativas le permitirían ver y modificar los parámetros de configuración, así como también obtener información sensible del entorno de la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de restringir el acceso a las interfaces de administración únicamente desde equipos autorizados alojados en la red interna o en una red DMZ de la organización. En caso de que se requiera el acceso remoto a dichas interfaces, debería restringirse su acceso a las direcciones IP correspondiente al personal autorizado, o bien habilitar su acceso a través de una red VPN (Virtual Private Network).",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Invocación Anónima a Operaciones Mediante Web Services",
     observation: "Se ha observado que para las operaciones soportadas por “Web Services” no se verifica que las mismas sean realizadas por un usuario autenticado ni que sean generadas desde equipos permitidos. En consecuencia, estas operaciones pueden ser generadas e invocadas por medio de mensajes SOAP sin autenticación y sin encontrarse firmados.",
     impact: "Si los mensajes usados entre la capa de aplicación y la capa de Web Services no son firmados ni ejecutados luego de una autenticación, un usuario malicioso podría crear y enviar mensajes personalizados y manipulados a fin de extraer información critica de la aplicación, escalar privilegios o provocar denegaciones de servicio.",
     recommendation: "Se recomienda analizar la posibilidad técnica de firmar todos los mensajes SOAP que invoquen a las operaciones soportadas por Web Services a fin de garantizar el origen de los mismos. Asimismo, se recomienda implementar un método de autenticación entre la capa de aplicación y los Web Services como ser el de claves compartidas o mediante certificados.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Inyección CRLF posible",
     observation: "La aplicación parece no realizar una apropiada validación de datos de entrada y salida. La misma acepta una operación a través del método GET que podría incluir caracteres de retorno de carro (CR) y salto de línea (LF).",
     impact: "Si no se valida apropiadamente los datos de entrada y salida, un individuo malicioso sería capaz de insertar caracteres de retorno de carro (CR) y salto de línea (LF) en el encabezado, permitiéndole inyectar código personalizado (cookies o código HTML) que serían incluidos en la respuesta. Esto podría ser la causa de diferentes ataques, como por ejemplo, cross-site scripting o fijación de sesión.",
     recommendation: "Se recomienda analizar la posibilidad de asegurar que cada dato de entrada recibido por parte de usuarios de la aplicación sea sanitizado y validado en el servidor. Esta validación debe asegurar que la respuesta es construida con datos sanitizados y que no contengan ningún carácter especial como por ejemplo, CR (0d) y LF (0a).nPara más información, por favor, visite el siguiente enlace (con contenido en Inglés):n• http://cwe.mitre.org/data/definitions/113.htmln",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Inyección SQL",
     observation: "<SI ES BASADA EN ERRORES>Se ha observado que la aplicación es susceptible a inyecciones SQL. Mediante la manipulación de parámetros enviados al servidor, la aplicación presenta mensajes de error provenientes desde el motor de base de datos <MSSQL/MySQL/Oracle/PostgreSQL/etc.>, permitiéndole a un individuo malicioso <autenticado/anónimo> orientar su ataque y así aumentar la probabilidad de una inyección de código SQL exitosa. <O SI ES BASADA EN TIEMPO DE RESPUESTA>Se ha observado, a través de pruebas basadas en tiempo de respuesta, que la aplicación sería susceptible a inyecciones SQL.nA continuación se detallan los recursos afectados:<COMPLETAR>",
     impact: "Los recursos vulnerables a inyección SQL posibilitan que un individuo malicioso pueda eludir los controles de seguridad a nivel de aplicación y ejecutar sentencias SQL directamente en el motor de bases de datos. De esta manera, un individuo malicioso podría obtener y, bajo ciertas condiciones, alterar información sensible almacenada en el sistema (por ejemplo, utilizando sentencias para insertar, actualizar o eliminar registros, tablas u otros recursos almacenados). Además, bajo ciertas condiciones particulares, un individuo malicioso podría extender el ataque para ejecutar comandos en el sistema operativo subyacente. De conseguirlo, este nivel de acceso le permitirá a un usuario malicioso, intentar la ejecución de ataques a los recursos que se encuentran en la misma red en la que se encuentra el servidor comprometido.",
     recommendation: "Se recomienda analizar el diseño e implementación de los mecanismos de validación de datos de entrada utilizados por la aplicación y asegurarse que los mismos se ejecuten en el servidor y estén alineados con las mejores prácticas de seguridad correspondientes, contemplando el tipo de dato esperado, la longitud y caracteres permitidos. Asimismo, se debe garantizar que los mecanismos mencionados sean aplicados a todos los parámetros provenientes desde los usuarios sean susceptibles de ser modificados por un individuo malicioso. <SI CORRESPONDE (no blind)>Además, se recomienda analizar y modificar el código fuente de la aplicación, de manera tal que ante los eventos de error producidos en el código que se ejecuta en el servidor, se muestren al usuario mensajes de error genéricos, personalizadas por la compañía y que no expongan ninguna información sensible. Para más información, por favor, visite el siguiente enlace: http://capec.mitre.org/data/definitions/66.html (enlace con contenido en Inglés)",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Inyección SQL utilizando Query/Where",
     observation: "Se ha observado que los DB links con acceso público pueden ser accedidos desde la aplicación Stealth a través de la funcionalidad de query/where mediante la utilización de inyecciones SQL.",
     impact: "La existencia de DB Links de acceso público (cuyo owner o propietario es PUBLIC), sumada a la posibilidad de acceder a los mismos a través de la aplicación (sin necesidad real de estar en la red interna de la Compañía) podría permitir a un usuario no autorizado acceder a información de otras bases de datos en forma remota y sin necesidad de acceder a la base de datos mediante la utilización de inyecciones SQL.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de restringir el acceso al analizador de consultas query/where y suplantar los DB links de acceso público por aquellos de acceso privado.nnn",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "MÓVIL",
     name: "La aplicación móvil no restringe su comunicación al uso a certificados SSL/TLS confiables",
     observation: "La comunicación entre la aplicación móvil y el servidor no utiliza métodos para asegurar que los certificados con los cuales se está cifrando la conexión sean auténticos. En particular, cuando se utilizó un servidor proxy para analizar el tráfico de la aplicación, no se observó que la aplicación detectase el certificado inválido.",
     impact: "Si la comunicación no está restringida a certificados TLS de confianza, un usuario malicioso podría realizar un ataque del tipo MITM (Man in the middle) e interceptar el tráfico del usuario, incluyendo información sensible como usuarios, contraseñas.",
     recommendation: "Se recomienda analizar la posibilidad de evitar que conexiones cifradas firmadas con certificados distintos al emitido por una autoridad confiable de internet (CA). Adicionalmente, se recomienda analizar la posibilidad de implementar tecnologías de “Certificate Pinning”, la cual limita las comunicaciones cifradas a aquellas firmadas por un certificado distribuido conjuntamente con la aplicación.nPara más información, visite el siguiente enlace: (con contenido en Inglés)n• https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning ",
     severity: "BAJO",
     complex: null
    },
    {
     type: "MÓVIL",
     name: "La aplicación móvil puede ser ejecutada en un ambiente inseguro",
     observation: "Es posible ejecutar la aplicación Giros en dispositivos Android que son considerados inseguros para aplicaciones que manipulan datos sensibles de negocio. En particular, fue posible ejecutar y utilizar la aplicación en los siguientes ambientes inseguros:n• Modo Desarrollo de Androidn• Debug USB activadon• “Origen desconocido” activado (Permite la instalación de aplicaciones ajenas al Play store)n• 'Verificar aplicaciones' desactivado (Permite a Google verificar todas las aplicaciones instaladas en el dispositivo en busca de aplicaciones maliciosas)n• Dispositivo RooteadonNota: La detección de root puede ser una capa extra de seguridad que dificultaría los ataques por parte de usuarios maliciosos. Es importante destacar que si la detección de root es un control del lado del cliente, éste puede evadirse.",
     impact: "Si un dispositivo Android es configurado con un ambiente inseguro y la aplicación no es capaz de detectarlo, podría ser posible ejecutar y utilizar la aplicación sin contar con las protecciones de seguridad de Android. Esas funcionalidades podrían permitir a un individuo malicioso evitar los controles de seguridad para obtener acceso al dispositivo. Esta situación podría aprovecharse para obtener acceso a información sensible como la información almacenada por la aplicación. Adicionalmente, podría ser posible aprovechar el Android Debug Bridge (adb) para realizar un debug USB y obtener acceso a la línea de comandos.",
     recommendation: "Se recomienda analizar la posibilidad de modificar la aplicación afectada a fin de asegurar que al intentar ejecutar la aplicación en un dispositivo Android que se encuentra configurado de forma insegura, se muestre un mensaje indicando que la aplicación no puede ser ejecutada evitando que continúe la ejecución hasta que el ambiente alcance los niveles de seguridad requeridos. Adicionalmente, se recomienda asegurar que esta consideración de seguridad es incluida como parte de los estándares requeridos de seguridad para las aplicaciones móviles de Claro. Esto incluye informar al proveedor sobre los requisitos antes mencionados. Además, se recomienda realizar pruebas de seguridad en aplicaciones móviles para verificar que los requerimientos de seguridad han sido apropiadamente implementados. Finalmente, se recomienda implementar un mecanismo que asegure que la protección de root no puede ser evadida. nPara más información, por favor, visite el siguiente enlace (con contenido en Inglés):n• http://developer.android.com/tools/help/adb.html",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "ATM",
     name: "La aplicación se ejecuta con permisos de administrador",
     observation: "Se ha observado que la aplicación del cajero NCR se ejecuta en el entorno del usuario administrador del sistema.",
     impact: "Dado que la aplicación se ejecuta en el entorno del usuario administrador del sistema, y dado que este usuario se loguea automáticamente al iniciar el cajero, un atacante podría conseguir acceso administrativo en el cajero mediante el reinicio del sistema, o logrando conectar un teclado USB y abriendo, por ejemplo, el task manager.",
     recommendation: "Se recomienda analizar la posibilidad de revisar los privilegios utilizados por el usuario que ejecuta la aplicación y otorgar solo los permisos requeridos. Los permisos excedentes deberían ser removidos de este usuario.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "La pregunta secreta puede ser igual a su respuesta",
     observation: "Se ha observado que la respuesta a la pregunta secreta definida por el usuario puede ser igual a la pregunta secreta.",
     impact: "Si la respuesta y la pregunta secreta poseen el mismo valor, un usuario malintencionado puede intentar utilizar esta característica para obtener acceso no autorizado a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad de implementar una correcta validación del texto ingresado por el usuario como respuesta a la pregunta secreta y no permitir que el mismo sea igual a la pregunta secreta. Además, se recomienda analizar la posibilidad de implementar una política de lockout que limite los intentos de ingresar una respuesta incorrecta a la pregunta de seguridad para prevenir el ataque por fuerza bruta de la pregunta.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Librerias 3rd party desactualizadas en uso",
     observation: "Se ha observado la presencia de librerías que se encuentran desactualizadas. Las librerías observadas, junto con las vulnerabilidades identificadas se detallan a continuación: <TABLA CON Librería afectada, Versión Actual, Última versión disponible, CVE> <EJEMPLO PARA JQUERY> NOTA: La observación sobre la versión de la librería JQuery fue realizada en base a la información obtenida al acceder a las URL afectadas indicadas anteriormente. Los CVEs listados son sólo una referencia de las vulnerabilidades existentes.",
     impact: "Un individuo malicioso podría comprometer con mayor facilidad las librerías afectadas, ya que las versiones observadas poseen vulnerabilidades y/o debilidades de seguridad previamente reportadas. Las vulnerabilidades mencionadas son de conocimiento público y los detalles de las mismas se encuentran disponibles. En consecuencia, un individuo malicioso podría intentar explotarlas para comprometer a los usuarios de la aplicación.",
     recommendation: "Recomendacion tactica:nSe recomienda analizar la posibilidad de actualizar la librería afectada a la última versión disponible.nRecomendación estrategica:nAdicionalmente se recomienda realizar el monitoreo regular de las actualizaciones de las librerías en uso para todas las aplicaciones y asegurarse de instalarlas en un tiempo prudencial.nPara información adicional, por favor referirse a los siguientes enlaces:nhttps://capec.mitre.org/data/definitions/310.html (Contenido en inglés)",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "EXTERNO / WEBAPP / INTERNO",
     name: "Listado de directorio habilitado",
     observation: "Se ha observado que el servidor web afectado permite obtener el listado de los contenidos de los recursos listados a continuación: <listar los recursos afectados> <OJO!: Si tenemos archivos con info sensible esos se reportan APARTE con otra observación, porque las dos cosas se arreglan de forma distinta!! pueden sacar el dir listings pero los archivos sensibles siguen siendo accesibles!>",
     impact: "La recolección de información es, usualmente, el primer paso para realizar un ataque. El listado de directorios le permite a un individuo desde Internet, obtener un listado del contenido de un recurso web, aun cuando el recurso afectado no haya sido pensado para ser expuesto. Un individuo malicoso podría aprovechar esta debilidad para acceder a directorios ocultos, interfaces administrativas, archivos de respaldo, código fuente de aplicaciones, o cualquier otra información sensible que pudiera ser de utilidad en ataques posteriores. <Adicionalmente, aunque los recursos afectados no contienen actualmente información sensible, podrían inadvertidamente exponer información sensible en el futuro.>",
     recommendation: " recomienda analizar la posibilidad de deshabilitar el listado de directorios afectados y revisar el contenido de los recursos afectados para asegurar que no se haya expuesto información sensible a través de ellos. Además, se recomienda realizar un análisis detallado de la configuración del servicio web, a fin de obtener un listado completo de todas las ocurrencias que puedan estar afectadas por la presente observación. nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/548.html (enlace con contenido en Inglés)",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Mensaje de advertencia",
     observation: "A partir de la revisión de la configuración del dispositivo, Se ha observado que no se encuentra implementado un mensaje de advertencia (banner) para los usuarios que establecen conexiones con el mismo.",
     impact: "La falta de un mensaje de advertencia (o banner) dificulta la implementación de acciones legales o penalizaciones sobre las personas que hayan realizado actividades no autorizadas sobre el dispositivo.",
     recommendation: "Se recomienda implementar un mensaje de advertencia para los usuarios que se conectan al dispositivo, a partir de la configuración de (al menos) uno de los siguientes parámetros:n- banner login <mensaje> n- banner motd <mensaje> - banner exec <mensaje>",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "ATM",
     name: "Menu de supervisor con contraseña trivial o sin contraseña",
     observation: "El acceso al modo de supervisor de la aplicación del cajero no requiere contraseña o posee una contraseña trivial.nEn la siguiente imagen se muestra el menú de supervisor del modelo <MODELO ATM> el cual se puede acceder con una contraseña trivial:n",
     impact: "Un individuo malicioso con acceso físico al cajero automático podría acceder  al menú de supervisor de la aplicación del mismo y realizar acciones administrativas no autorizadas que podrían afectar la operación normal del banco, impactando negativamente en la imagen de la entidad.",
     recommendation: "Se recomienda analizar la posibilidad de implementar un mecanismo de autenticación para el acceso al modo supervisor en la aplicación del cajero. Esto debe incluir una correcta política de contraseñas, la cual se aplique uniformemente sobre la entidad.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Métodos HTTP extendidos habilitados",
     observation: "Se ha observado, en los servicios afectados, la existencia de métodos HTTP adicionales habilitados tales como: <PUT, DELETE, CONNECT, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK, TRACE> <SI DEBUG AGREGAR> El método adicional HTTP DEBUG. <SI TRACE AGREGAR> El método TRACE podría permitirle a individuos maliciosos ejecutar ataques del tipo Cross-site Tracing. <SI PROPFIND y VERSION de IIS = 5.x o 6.x AGREGAR> El método PROPFIND podría permitirle a un individuo malicioso ganar acceso no autorizado a recursos protegidos. <SI PROPFIND y VERSION de IIS = 7.x AGREGAR> El método PROPFIND podría permitirle a un individuo malicioso comprometer información confidencial almacenada en archivos del servidor web.",
     impact: "Un individuo malicioso podría utilizar los métodos HTTP extendidos identificados para obtener información sensible sobre el entorno y/o ejecutar acciones no autorizadas. Cabe destacar que incluso si los recursos no exponen información sensible actualmente, una fuga de información podría ocurrir en el futuro cercano. <SI TRACE AGREGAR> Aunque los datos enviados mediante una solicitud HTTP TRACE sean reflejados por el servidor, para que el ataque de Cross-site Tracing (XST) sea exitoso es necesario que se utilice en conjunto con una vulnerabilidad de Cross-site Scripting. Esto podría permitir que información sensible, como cookies de sesión <y/o cabeceras de autenticación HTTP BASIC>, sea transferida a un sitio malicioso, para luego ser usadas en ataques de robo de sesión. <SI DELETE AGREGAR> El método DELETE podría permitirle a un individuo malicioso eliminar archivos del servidor web. <SI PROPFIND y IIS VERSION 5.x / 6.x AGREGAR> El método PROPFIND podría permitir la elevación de privilegios, lo que podría conducir a un individuo malicioso a eludir el mecanismo de autenticación para acceder al contenido del servidor IIS. <SI PROPFIND y IIS VERSION 7.x AGREGAR> El método PROPFIND podría permitirle a un individuo malicioso comprometer información confidencial almacenada en archivos del servidor. <SI DEBUG> El método DEBUG podría permitirle a un individuo malicioso generar ataques de denegación de servicio en el servidor afectado. A pesar de que su ejecución se encuentra actualmente denegada en el path identificado, podría inadvertidamente ser permitida en el futuro.",
     recommendation: "Se recomienda analizar si los métodos HTTP extendidos identificados son requeridos por el negocio, y deshabilitarlos en caso de no ser requeridos. De igual manera, se recomienda revisar los estándares de configuración de los servidores para asegurar que los métodos HTTP innecesarios se encuentren deshabilitados antes de promover un servidor a producción. <SI IIS>Para más información, por favor, visite el siguiente enlace: http://technet.microsoft.com/en-us/library/dd450371.aspx (enlace con contenido en Inglés) <SI APACHE>Para más información, por favor, visite el siguiente enlace: http://httpd.apache.org/docs/2.0/en/mod/core.html#traceenable <si no es 2.0, cambiar> <SI TRACE>Además, visite el siguiente enlace: http://capec.mitre.org/data/definitions/107.html (enlace con contenido en Inglés)",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Métodos PUT/DELETE habilitados",
     observation: "El servidor web identificado utiliza ciertos métodos o funciones propias del protocolo HTTP para funcionar, siendo los más utilizados GET POST y HEAD.nComo resultado del análisis de los servicios web, se ha detectado que el recurso afectado permite utilizar métodos HTTP adicionales (PUT y DELETE) los cuales podrían no ser requeridosm debilitando la seguridad de dichos servicios web.",
     impact: "Los métodos HTTP anteriormente expuestos podrían permitir a un usuario malintencionado realizar distintas acciones en el servidor como crear/eliminar información. En consecuencia, un usuario malintencionado podría explotar las mismas para intentar comprometer la integridad confidencialidad y/o disponibilidad de la información alojada en el servidor.",
     recommendation: "Se recomienda analizar la posibilidad la necesidad de utilizar los métodos adicionales que se encuentran actualmente disponibles en el servidor web, y en caso de identificar que el método PUT y/o el DELETE no son requeridos, deshabilitarlos.",
     severity: "ALTO",
     complex: "BAJO"
    },
    {
     type: "WARDIALING",
     name: "Módem identificado",
     observation: "Se identificó la presencia de un modem activo dentro del rango de teléfonos analizados.",
     impact: "El módem identificado presenta ante el usuario la opción de autenticación en el equipo de comunicaciones. Si bien no fue posible obtener credenciales de autenticación válidas durante las pruebas, si un usuario lo lograra podría obtener acceso a información del sistema o comprometer el equipo utilizándolo como punto de partida para otros ataques.",
     recommendation: "Deloitte recomienda evaluar la necesidad de que el módem se encuentre habilitado para acceder remotamente a la compañía. En casos en que sea necesario su acceso remoto, recomendamos restringir el acceso sólo a aquellos números telefónicos que correspondan a personal autorizado utilizando la funcionalidad de call-back.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "MÓVIL",
     name: "Modo de segundo plano inseguro",
     observation: "Cada vez que se deja de utilizar una aplicación IOS (por ej., al presionarse el botón “Home”), ésta continúa ejecutándose en segundo plano. Simultáneamente, se realiza una captura de pantalla que se guarda en el directorio Capturas de la aplicación. Particularmente, capturas como la siguiente son almacenadas en el siguiente directorio para la aplicación “x”:n• /Library/Caches/Snapshots/<paquete>/<paquete>",
     impact: "Si se mostrase información sensible en la aplicación al momento de presionar el botón Home, se capturaría la pantalla con dicho contenido y se almacenaría en el directorio mencionado. Un usuario malintencionado podría obtener acceso no autorizado a información sensible utilizando diversas herramientas gratuitas disponibles. Adicionalmente debe señalarse que además de la captura de pantalla más reciente de la aplicación almacenada en el sistema de archivos, pueden recuperarse copias adicionales de capturas anteriores extrayéndolas del HFS+.",
     recommendation: "Se recomienda analizar la posibilidad de asegurar que el contenido de la pantalla esté oculto u ofuscado antes de que una captura de pantalla se realice al enviar la aplicación a segundo plano, por ej: cuando el usuario cambie de aplicación.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "CONFIGURACIÓN",
     name: "Múltiples cuentas con máximos privilegios – O.S.",
     observation: "Se han observado 7 cuentas de usuario activas, las cuales cuentan con privilegios de administrador sobre el sistema, 6 de las cuales cuentan también con máximos privilegios sobre el dominio (Pertenecientes al grupo “Domain Admins”).",
     impact: "La existencia de múltiples usuarios con máximos privilegios sobre el sistema, debilita el esquema de seguridad e incrementa la probabilidad de que el/los sistemas puedan verse afectados tanto en forma deliberada como involuntaria (errores operativos, virus, troyanos, etc.).",
     recommendation: "Se recomienda realizar un análisis detallado de los identificadores de usuario existentes con máximos privilegios. Como parte de dicho proceso deberán tenerse en cuenta las siguientes premisas:nn- Reducir el número de administradores a los mínimos indispensables;n- No deberán existir identificadores de usuarios genéricos.  nTodas las excepciones deberán ser documentadas y aprobadas oportunamente;",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "INTERNO",
     name: "Múltiples cuentas con privilegios de administración en el Dominio",
     observation: "Durante las pruebas, se observaron XX usuarios miembros del grupo Domain Admins que se autenticaron en el dominio en los últimos 100 días. ",
     impact: "El nivel de privilegios de administrador de dominio otorga a un usuario el control completo sobre el dominio afectado. De existir un número elevado de cuentas con este nivel de privilegio, la superficie de ataque se verá incrementada, ya que le provee a un individuo malicioso mayores oportunidades de comprometer una cuenta de este tipo. Además, debido al nivel de privilegio de un administrador de dominio, cada uno de estos usuarios será capaz de obtener acceso a información crítica de negocios de <CLIENTE>.",
     recommendation: "Se recomienda analizar la lista actual de usuarios con privilegios de administrador para el dominio <DOMINIO>, con el objeto de determinar si dicho nivel de acceso es requerido para los usuarios identificados. De no ser requerido en alguno de los casos analizados, se recomienda modificar este nivel de acceso de acuerdo al requerimiento del negocio. Además, se recomienda considerar el concepto de privilegios mínimos cada vez que se agreguen nuevas cuentas de usuario al dominio <DOMINIO>.",
     severity: "MEDIO",
     complex: "ALTO"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Múltiples métodos HTTP",
     observation: "Los servidores web utilizan ciertos métodos o funciones propias del protocolo HTTP para funcionar siendo los más utilizados GET POST y HEAD.nComo resultado del análisis de los servicios Web internos se ha detectado que los recursos afectados permiten utilizar métodos HTTP adicionales (OPTIONS, TRACE, GET, HEAD, DELETE, PUT, POST, COPY, MOVE, MKCOL, PROPFIND, PROPPATCH, LOCK, UNLOCK, SEARCH) los cuales podrían no ser requeridos debilitando la seguridad de dichos servicios web.",
     impact: "Los métodos HTTP anteriormente expuestos podrían permitir a un usuario malintencionado realizar distintas acciones en el servidor como crear/eliminar información.",
     recommendation: "Se recomienda analizar la posibilidad la necesidad de utilizar todos los métodos que se encuentran actualmente disponibles en los servidores web, y en caso de identificar métodos no requeridos, los mismos deberían ser deshabilitados.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Múltiples servicios de acceso a impresoras",
     observation: "Se identificó que las impresoras publican númerosos servicios de acceso remoto hacia la red Interna de <CLIENTE>.",
     impact: "Dicha vulnerabilidad permitiría a un usuario malintencionado interno acceder a dichos servicios y obtener información sensible que se encontrara en las mismas y/o ganar privilegios administrativos sobre las mismas.",
     recommendation: "Se recomienda restringir los servicios publicados en las impresoras a los mínimos indispensables para su normal funcionamiento y restringir las consolas administrativas de las mismas solamente a los usuarios autorizados.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "TOKENS",
     name: "No Existe Documentación de Integración de la Solución OTP",
     observation: "En base a los requerimientos de documentación solicitados, se ha detectado de que no existen definiciones formales para la integración de nuevas aplicaciones con la solución de tokens OTP.",
     impact: "Teniendo en cuenta que las aplicaciones de negocio necesitan ser escalables y que las mismas podrían ser integradas con aplicaciones de terceros, es necesario contar con las definiciones necesarias para dicha integración. Servicios que no cuentan con precondiciones y requerimientos de seguridad definidos, podrían integrarse a nuevas aplicaciones las cuales presenten debilidades de configuración y desarrollo que afecten de manera implícita al servicio de autenticación por tokens de <CLIENTE>",
     recommendation: "Se recomienda que tanto el área de desarrollo como el área de seguridad definan los requerimientos mínimos, tanto técnicos como de seguridad, que deben contar aquellas aplicaciones que deban integrarse a la solución de tokens OTP. Asimismo, se deberá desarrollar la documentación correspondiente en donde se detalle las funcionalidades que dicha solución presta.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "No existen mecanismos de ofuscación de código fuente",
     observation: "De la revisión de código fuente, Se ha observado que no parecieran existir mecanismos implementados que permitan ofuscar el código fuente de las aplicaciones, de manera tal que el mismo no pueda ser obtenido a partir del archivo binario distribuido.",
     impact: "Un usuario malicioso podría des-ensamblar el código fuente de las aplicaciones con el fin de obtener acceso al código fuente de las mismas, para posteriormente intentar identificar información potencialmente sensible o debilidades en la programación.",
     recommendation: "Se recomienda evaluar la factibilidad técnica de implementar mecanismos que permitan ofuscar el código fuente de las aplicaciones. Para más información ver:nAndroid: nhttp://developer.android.com/tools/help/proguard.htmlnhttp://www.saikoa.com/dexguardnApple: nhttp://www-304.ibm.com/partnerworld/gsd/solutiondetails.do?solution=48459&expand=true&lc=en",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "MÓVIL",
     name: "No existen mecanismos de ofuscación de código fuente",
     observation: "La aplicación no presenta mecanismos implementados que permitan ofuscar el código fuente de manera tal que el mismo no pueda ser obtenido a partir del archivo binario distribuido.",
     impact: "Un usuario malicioso podría des-ensamblar la aplicación con el fin de obtener acceso al código fuente de la misma, para posteriormente intentar identificar información potencialmente sensible o debilidades en la programación.",
     recommendation: "Se recomienda evaluar la factibilidad técnica de implementar mecanismos que permitan ofuscar el código fuente de la aplicación.nPara más información, por favor, visite los siguientes enlaces (con contenido en Inglés):n• http://developer.android.com/tools/help/proguard.htmln• http://www.saikoa.com/dexguard",
     severity: "BAJO",
     complex: null
    },
    {
     type: "ATM",
     name: "No existen restricciones en la utilización de dispositivos USB",
     observation: "En el cajero no existen restricciones en la utilización de dispositivos USB. Los mismos se pueden conectar y son reconocidos por el sistema operativo. Adicionalmente, se pueden copiar archivos hacia y desde el dispositivo.",
     impact: "Un individuo malicioso podría ser capaz, mediante la utilización de un dispositivo de almacenamiento USB, de instalar software malicioso en el sistema o utilizarlo para copiar información confidencial.nRecomendaciónn",
     recommendation: "Se recomienda analizar la posibilidad de restringir el uso de dispositivos de almacenamiento externos en el sistema. Una posible solución sería la eliminación de los drivers de almacenamiento masivo del sistema, evitando que estos puedan ser reconocidos por el mismo.",
     severity: "BAJO",
     complex: "BAJO"
    },
    {
     type: "MÓVIL",
     name: "No se impide la instalación en sistemas operativos desactualizados",
     observation: "Se ha observado que la aplicación móvil “Giros Claro” no verifica que la versión del sistema operativo Android sobre la que está siendo instalada, se encuentre con soporte. En particular, es posible instalar y ejecutar la aplicación en el siguiente sistema operativo:nAndroid: versión 2.3.7 y posterioresn <Como política de Google, solo se realizan actualizaciones de seguridad en sistemas menores a tres años de antiguedad. Por lo general, coincide con las tres ultimas versiones mayores, aunque no siempre.>",
     impact: "Debido a que la aplicación móvil no fuerza la utilización de un sistema operativo Android bajo soporte, la aplicación asume que se cuenta con controles y protecciones de seguridad que podrían no estar implementadas en versiones antiguas fuera de soporte. Esta situación podría permitirle a un individuo malicioso obtener acceso no autorizado a la información sensible almacenada en la aplicación, evadir controles de seguridad y manipular la lógica de la aplicación mediante vulnerabilidades conocidas en el sistema operativo Android.",
     recommendation: "Se recomienda asegurar que en el ciclo de vida de desarrollo seguro en aplicaciones móviles, se incluya la implementación de controles de seguridad que permitan la detección de sistemas operativos fuera de soporte.nNota: No todos los dispositivos móviles soportan las últimas versiones del sistema operativo Android, por lo que esta oportunidad de mejora debe tenerse en cuenta para aquellos dispositivos en los que puede forzarse su actualización.",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Nombres de usuario asociados a información pública",
     observation: "Se identificó que los usuarios de la aplicación se encuentran asociados a información pública, como es el CUIT.",
     impact: "Si los usuarios de la aplicación están asociados con información pública, un usuario malintencionado podría utilizar dicha información para realizar ataques de fuerza bruta sobre las cuentas.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad de asignar a cada cuenta de usuario de las aplicaciones afectadas, un identificador aleatorio que no se asocie a ningún tipo de información pública de la persona dueña de la cuenta.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Nombres de usuario asociados a información pública",
     observation: "Se identificó que los usuarios (de cuenta corriente) de la aplicación se encuentran asociados a información  pública, como es el número de DNI. Las URLs afectadas son:",
     impact: "Si los usuarios de la aplicación están asociados con información pública, un usuario malintencionado podría enumerar cuentas de usuario utilizando dicha información para realizar ataques de fuerza bruta sobre las cuentas.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad de asignar a cada cuenta de usuario de las aplicaciones afectadas, un identificador distinto que no se asocie a ningún tipo de información pública de la persona dueña de la cuenta.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Nombres de usuario de baja complejidad",
     observation: "Se ha observado que es posible que un usuario con los privilegios necesarios cree cuentas en la aplicación con un nombre de usuario de baja complejidad, como por ejemplo, de un (1) carácter de longitud. Se ha podido crear un usuario con el siguiente ID: “a”.",
     impact: "La posibilidad de utilizar nombres de usuario de baja complejidad podría permitir que un usuario malintencionado enumere cuentas válidas con mayor facilidad, con el objetivo de realizar ataques de fuerza bruta para obtener acceso no autorizado a la aplicación.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar una política para la creación de nombres de usuario, con el objetivo de mitigar los riesgos de enumeración de usuarios y ataques de fuerza bruta.nLa política debería contener al menos los siguientes puntos:n• Longitud mínima de caracteres: 6n• Cantidad mínima de caracteres alfabéticos: 5n• Cantidad mínima de caracteres numéricos: 1n• Debe existir una lista de palabras, las cuales no estén permitidas (como por ejemplo: Admin, user, test, etc)",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Nombres de usuario de baja complejidad",
     observation: "Se ha observado que las cuentas de usuario son creadas sólo en base a caracteres numéricos. Asimismo la aplicación misma proporciona dicha información al usuario.",
     impact: "La posibilidad de utilizar nombres de usuario de baja complejidad podría permitir que un usuario malintencionado enumere cuentas válidas con mayor facilidad, con el objetivo de realizar ataques de fuerza bruta para obtener acceso no autorizado a la aplicación.",
     recommendation: "La política debería contener al menos los siguientes puntos:n• Longitud mínima de caracteres: 6n• Cantidad mínima de caracteres alfabéticos: 5n• Cantidad mínima de caracteres numéricos: 1n• Debe existir una lista de palabras, las cuales no estén permitidas (como por ejemplo: Admin, user, test, etc.)",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Números de tarjetas de crédito almacenados en texto plano",
     observation: "Se ha observado que sobre el recurso afectado, existe información sensible de <CLIENTE> almacenada en texto plano. Entre esta información se identificaron números de tarjetas de crédito (PAN).",
     impact: "Al almacenar el PAN (Principal Account Number) sin enmascarar se está expuesto a que, en caso de un usuario malintencionado con privilegios de administrador logre acceder a esta información, podría utilizar la misma para intentar generar transacciones ilegitimas utilizando los datos de tarjetas de crédito asociadas. Cabe destacar que dicha vulnerabilidad podría tener impacto en el cumplimiento de regulaciones impuestas por las franquicias de tarjetas de crédito. (Por ejemplo: Norma PCI-DSS).",
     recommendation: "Se recomienda analizar la posibilidad de asegurar que los archivos que contengan números de tarjetas de crédito, u otra información sensible, sean removidos o, en caso de ser requeridos por razones de negocio, protegidos por controles criptográficos.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Obtención de información del usuario en forma anónima",
     observation: "El esquema de autenticación y autorización de la aplicación presenta debilidades de diseño, las cuales permiten obtener, sin estar autenticado, información sensible de cuentas asociadas a un usuario.nAl invocar al recurso web de funcionalidad “exportar a txt”, la aplicación genera automáticamente en el servidor Web un archivo de texto “temporal” cuyo nombre es predecible y es accesible mediante una consulta web sin mediar autenticación alguna.nVale destacar que el nombre del archivo generado corresponde al id de usuario utilizado para identificarse en la aplicación.nAsimismo, la URL utilizada para acceder a dicha información tiene el siguiente formato:",
     impact: "La observación identificada permitiría a un usuario malintencionado externo o usuario malintencionado, acceder a información sensible y crítica  asociada a clientes de la entidad sin haberse autenticado previamente, pudiendo de esta forma recopilar información que podría ser utilizada para diferentes fines, como ser posibles fraudes electrónicos o afectación de la imagen de la entidad.nnAsimismo, debe considerarse que otros recursos derivados de los afectados podrían presentar similares debilidades.",
     recommendation: "Se recomienda modificar los códigos fuente de la aplicación para garantizar que todas las operaciones y recursos privados o que formen parte de un flujo de operación, puedan ser accedidas únicamente por usuarios que se encuentren autenticados y cuenten con los suficientes permisos de acceso.nnAsimismo, Se recomienda analizar la posibilidad técnica y de negocio de aplicar las siguientes recomendaciones:n Asignar sobre todas las carpetas de la aplicación un esquema de permisos mínimos.n No exponer información sensible, tanto de clientes como de la aplicación, en repositorios públicos los cuales puedan ser accedidos directamente por medio de un navegador. n Establecer un ciclo de vida y de rotación para todos los archivos temporales generados por la aplicación; en particular aquellos que cuenten con información crítica.nnFinalmente, entendemos que aplicar las remediaciones sobre los ejemplos puntuales que se han presentado podría no remediar las debilidades reales de raíz. En consecuencia, se recomienda realizar un análisis detallado e integral a nivel “código” fuente, orientado a evaluar si la vulnerabilidad identificada podría haberse extendido a otros módulos o funciones de la aplicación.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Opción “Recordar nombre de usuario” habilitada",
     observation: "Se ha observado que los launchers de Ipad y Android permiten al usuario recordar el identificador de usuario utilizado para ingresar a la aplicación.",
     impact: "Un atacante o usuario malicioso que obtiene acceso a un dispositivo Ipad o Android (por ejemplo, mediante robo o hurto), podría aprovechar la debilidad identificada para realizar ataques de fuerza bruta o adivinación de contraseña. Este riesgo se encuentra incrementado ya que pareciera no existir una política de contraseñas robusta implementada.",
     recommendation: "Se recomienda evaluar la factibilidad de negocio de remover dicha opción. De ser requerido, se recomienda analizar la posibilidad de implementar una política de contraseñas y bloqueo de cuentas robusta que permita mitigar los riesgos asociados (ver observación REV-001-001 Inadecuada política de contraseñas).",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Opciones de seguridad",
     observation: "Del análisis de las opciones de seguridad implementadas se observa que, si bien los equipos analizados cuentan con 'Opciones de seguridad' aplicadas, existen valores que presentan oportunidades de mejora ya que no se encuentran configurados según las mejores prácticas. Estos valores se listan a continuación:nnDo not display last username = DisablednNumber of previous logons to cache = 25nDo not allow anonymous enumeration of SAM accounts and shares = Disabled",
     impact: "Debilidades en las 'Opciones de Seguridad' podrían exponer al recurso afectado a amenazas tales como:nnObtención del último nombre de usuario con acceso al servidor, para luego iniciar un ataque de adivinación de contraseñas e intentar ganar acceso al sistema.nnUn usuario malintencionado que acceda al sistema de archivos del recurso, podría localizar información almacenada en cache y ejecutar un ataque de fuerza bruta para intentar obtener las contraseñas de usuario.nnEnumeración anónima de cuentas de usuarios, grupos y otros objetos del dominio (P.e.:políticas de cuentas y carpetas compartidas).",
     recommendation: "Se recomienda establecer las 'Opciones de Seguridad' observadas de acuerdo a los valores recomendados por las mejores prácticas, a saber:nnDo not display last username = EnablednNumber of previous logons to cache = de 2 a 5nDo not allow anonymous enumeration of SAM accounts and shares = EnablednnNota: Todas las recomendaciones deberán ser validadas en un entorno de prueba antes de ser implementadas en el ambiente de producción.",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "ARQUITECTURA",
     name: "Operaciones Críticas no Autorizadas con Tokens OTP",
     observation: "Como resultado del análisis de los servicios alcanzados por la solución de claves OTP se ha determinado que, existen en SIB, operaciones especiales como ser transferencias, cambios de clave o pagos, los cuales no están integradas con la nueva plataforma de autorización.",
     impact: "Existen diferentes técnicas y ataques del tipo “man in the middle” que tienen como objetivo interponer las comunicaciones cliente-servidor a fin de obtener sesiones de aplicación validas. En caso de que alguno de estos ataques se lleve a cabo, un usuario malicioso que cuenta con una sesión válida dentro de SIB podría emitir operaciones “críticas” sin requerir una autorización de segundo factor.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica y de negocio de implementar un esquema de autorización en base a la solución OTP, la cual alcance todas aquellas funcionalidades que sean consideradas críticas para el objetivo de negocio de IB.",
     severity: "ALTO",
     complex: "N/A"
    },
    {
     type: "WEBAPP",
     name: "Página de creación de usuarios disponible en internet",
     observation: "Se ha observado la existencia de un componente de creación de usuarios accesible anónimamente a través de internet. La URL afectada es:",
     impact: "La debilidad observada permitiría a un usuario malintencionado, desde internet, crear una cuenta de usuario en la aplicación. Como resultado, podría autenticarse en la misma, recolectar información y lograr así un mayor entendimiento de la aplicación para planear ataques más específicos sobre componentes internos.",
     recommendation: "Se recomienda analizar el requerimiento de negocio de exponer un componente de registración que pueda ser utilizado anónimamente. Si no es necesario, se recomienda restringir su acceso a sólo aquellos usuarios autorizados. Si por el contrario, es un requisito de negocio, se recomienda implementar los controles necesarios que permitan verificar la legitimidad de los usuarios antes de que puedan obtener acceso a la aplicación.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Páginas en desuso disponibles en el ambiente de producción",
     observation: "Se ha observado que en el recurso afectado, existe una página que se corresponde con una versión antigua del portal.",
     impact: "Este tipo de páginas podrían mostrar información incorrecta y/o desactualizada que podría afectar negativamente la imagen de la empresa. En el último caso, adicionalmente, es posible acceder al código fuente de la página. Las páginas en desuso, al no ser requeridas en ambientes de producción, aumentan el vector de ataque, ya que las mismas podrían revelar información sensible como la arquitectura o infraestructura que soporta la aplicación web, que puede ser utilizada por un usuario malintencionado para planificar ataques de mayor impacto contra el sitio real.",
     recommendation: "Se recomienda remover todas las páginas y/o componentes que no sean utilizados o no reflejen la situación actual de la empresa o sus productos.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Páginas por defecto",
     observation: "Se ha observado la existencia de páginas por defecto, propias de la instalación del servicio web o de los componentes de software habilitados.n <SI SON SIN AUTENTICACION> Nota: debe considerarse que los recursos observados fueron obtenidos con una visión de un usuario que no conoce la totalidad de los archivos y, en consecuencia, los ejemplos se presentan únicamente a modo orientativo, estimando que podrían existir archivos adicionales.",
     impact: "Las páginas por defecto podrían permitirle a un individuo malicioso obtener información adicional sobre la infraestructura (tipo y versión de servidor web, estructura de directorios, sistema operativo, direcciones IP internas, etc.), lo cual podría ser utilizado para planificar y focalizar ataques de mayor impacto contra la infraestructura.",
     recommendation: "Se recomienda realizar un análisis detallado de todas las páginas y archivos por defecto expuestos en los recursos afectados, y eliminarlos si no son requeridos para el normal funcionamiento del negocio.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Permisos de Acceso sobre archivos críticos de la base de datos – B.D.",
     observation: "Se ha observado que los mismos no se encuentran restringidos de acuerdo a lo establecido por las mejores prácticas. Los archivos y/o carpetas mencionadas se indican en el detalle.",
     impact: "Cualquier usuario con acceso al sistema operativo puede ejecutar, analizar y/ o modificar los archivos mencionados.",
     recommendation: "Se recomienda restringir el acceso sobre los archivos y carpetas mencionados a todos los usuarios del sistema, en base al principio del mínimo privilegio.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "EXTERNO",
     name: "Permisos de escritura en servidor FTP en forma anónima",
     observation: "Se ha observado que el servidor FTP afectado permiten el acceso anónimo con permisos de 'Lectura', 'Modificación' y 'Escritura'.",
     impact: "Debido a la situación planteada, un usuario con acceso a la red interna podría acceder al servicio FTP sin contar con un usuario y una contraseña válida (Acceso anónimo) y generar distintos ataques como ser:nLectura o eliminación de información de negocio;nDenegación de servicio a través de la escritura masiva de archivos hasta llenar el disco rígido del servidor.",
     recommendation: "Se recomienda restringir el acceso anónimo al servicio FTP mediante la utilización de usuarios y grupos con contraseñas.nAdicionalmente se recomienda utilizar la variante SFTP de dicho servicio, la cual permite cifrar el canal de comunicaciones.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Política de auditoria",
     observation: "Como resultado del análisis de las políticas de auditoría se observa que, si bien la instancia de la base de datos IRAM cuenta con una política de auditoría aplicada, la misma no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el servidor.naudit level = failurenc2 audit mode = 0",
     impact: "La política de auditoría definida no permite analizar la totalidad de las actividades llevadas a cabo por los usuarios de la base de datos.",
     recommendation: "Se recomienda  establecer  una  política de auditoria que permita analizar las actividades de los usuarios de la base de datos, a partir de la de la registración de los siguientes eventos:naudit level = allnc2 audit mode = 1",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "REVISIÓN CISCO PIX",
     name: "Política de auditoria",
     observation: "Como resultado del análisis de la configuración del equipo de comunicaciones, se observa que, si bien el equipo cuenta con el servicio de auditoría activo, la configuración del mismo no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el dispositivo.nnA continuación se presenta un detalle de los aspectos que presentan oportunidades de mejora:nnRegistro de fecha y hora de generación de los eventosnUtilización de un servidor de centralización de LOGs",
     impact: "La configuración actual del servicio de auditoría no registra el momento exacto (fecha/hora) en el que son generados los eventos de auditoría. La situación mencionada dificultaría la correlación de eventos de seguridad en caso que sea necesario llevar a cabo un análisis de pistas de auditoría.nLa falta de un servidor de centralización de LOGs pone en riesgo la veracidad de los registros de auditoria en caso de que el acceso al equipo se vea comprometido.",
     recommendation: "Se recomienda  establecer  una  política de auditoria que permita registrar los eventos del equipo a partir de la implementación de los siguientes valores:nnRegistro de fecha y hora de generación de los eventos (logging timestamp)nNivel de auditoría establecido (logging trap informational o debugging)nUtilización de un servidor de centralización de LOGs (logging host [IP Servidor de Logs])",
     severity: "MEDIO",
     complex: "-"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Política de auditoría",
     observation: "Como resultado del análisis de las políticas de auditoría se observa que los  servidores <XXXX>, no se encuentran registrando eventos de seguridad.nAdicionalmente, como resultado del análisis de las políticas de auditoría se observa que, si bien el servidor <XXXX> cuenta con una política de auditoria aplicada, la misma no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el servidor.nnLos valores que presentan oportunidades de mejora se detallan a continuación:n- Audit account logon events = No auditingn- Audit account management = No auditingn- Audit logon events = No auditingn- Audit policy change = No auditingn- Audit system events = No auditing",
     impact: "La falta de registros de auditoría impide la oportuna detección de intentos de ingresos y/o modificaciones no autorizadas, con la consecuente imposibilidad de tomar acciones de prevención y remediación. Asimismo, impide, ante un error o fraude, un completo análisis posterior de los hechos que permita asignar responsabilidades, y medidas correctivas.",
     recommendation: "Se recomienda activar la auditoría para los recursos afectados.nUna vez configurados todos los LOGS y pistas de auditoría, se recomienda redefinir los procesos de monitoreo y evaluación de los mismos.nn- Audit account logon events = Success, Failuren- Audit account management = Success, Failuren- Audit logon events = Success, Failuren- Audit policy change = Success, Failuren- Audit system events = Success, Failure",
     severity: "ALTO",
     complex: "-"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Política de Auditoría",
     observation: "Como resultado del análisis de las políticas de auditoría se observa que, si bien la instancia de la base de datos OTP1 cuenta con una política de auditoría aplicada, la misma no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el servidor.nnA continuación se presenta un detalle de los aspectos que no están siendo auditados:ndba_privs_audit_opts: no se auditan todas las cuentas al ejecutar ALTER, GRANT, DELETE, DROP y REVOKE.ndba_obj_audit_opts, no se auditan tablas críticasndba_stmt_audit_opts: no se auditan todos los intentos de inicio de sesión.",
     impact: "La política de auditoría definida no permite analizar la totalidad de las actividades llevadas a cabo por los usuarios de la base de datos.",
     recommendation: "Se recomienda  establecer  una  política de auditoria que permita analizar la totalidad de las actividades de los usuarios de la base de datos.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Política de auditoría – B.D.",
     observation: "Se ha observado que si bien el servidor de base de datos XXX cuenta con una política de auditoría aplicada, la misma no cubre todos los puntos requeridos para un correcto análisis de eventos de seguridad en el servidor.nLog audit logon failure = 0nLog audit logon success = 0",
     impact: "La falta de registros de auditoría impide la oportuna detección de intentos de ingresos y/o modificaciones no autorizadas, con la consecuente imposibilidad de tomar acciones de remediación y prevención. Asimismo, impide, ante un error o fraude, un completo análisis posterior de los hechos que permita asignar responsabilidades, y medidas correctivas.",
     recommendation: "Se recomienda establecer  una  política de auditoria que permita analizar las actividades de los usuarios de la base de datos, a partir de la de la registración de los siguientes eventos:n- Log audit logon failure = 1n- Log audit logon success = 1",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Política de Auditoría - Router",
     observation: "Se ha observado que el servicio de auditoría (syslog) no se encuentra activo en el mismo.",
     impact: "La falta de registros de auditoría impide la oportuna detección de intentos de ingresos y/o modificaciones no autorizadas, con la consecuente imposibilidad de tomar acciones de remediación y prevención. Asimismo, impide, ante un error o fraude, un completo análisis posterior de los hechos que permita asignar responsabilidades, y medidas correctivas.",
     recommendation: "Se recomienda activar el servicio de auditoría (syslog) para el recurso afectado. Una vez que el mismo ha sido configurado, se recomienda redefinir los procesos de monitoreo y revisión de pistas de auditoría.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Política de contraseña",
     observation: "Se observo que la base de datos SYBASE no cuenta con una política de contraseñas y bloqueo de cuentas aplicada, ya que no se encuentran establecidos los parámetros de configuración alineados con las mejores prácticas.nnLos valores observados se detallan a continuación:nn-Min alpha in password =  N/An-Min special in password =  N/An-Min upper char in password =  N/An-Min lower char in password =  N/An-Min digits in password =  N/An-Minimum password length =  N/An-Disallow simple passwords =  N/A",
     impact: "La existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar los valores asignados a los parámetros observados, tomando como referencia los valores establecidos por las mejores practicas, a saber:nn-Min alpha in password = 1 o másn-Min special in password = 1 o másn-Min upper char in password = 1 o másn-Min lower char in password = 1 o másn-Min digits in password = 1 o másn-Minimum password length = 8 caracteresn-Disallow simple passwords = 1",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "REVISIÓN BASE DE DATOS",
     name: "Política de contraseña y bloqueo de cuentas",
     observation: "Como resultado del análisis de las políticas de contraseñas y bloqueo de cuentas de la instancia de base de datos IRAM se observa que, si bien cuentan con una política de contraseña y bloqueo de cuentas aplicadas, existen ciertos parámetros de configuración que no se encuentran alineados con los valores establecidos por las mejores prácticas.nnLos valores observados se detallan a continuación:nPasswordComplexity = 0nLockoutBadCount = 7",
     impact: "La existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar los valores asignados a los parámetros observados, tomando como referencia los valores establecidos por las mejores practicas, a saber:nPasswordComplexity = 1nLockoutBadCount = 3 - 5",
     severity: "BAJO",
     complex: null
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Política de contraseña y bloqueo de cuentas",
     observation: "Como resultado del análisis de las políticas de contraseñas y bloqueo de cuentas de los servidores afectados, se observa que, si bien cuentan con una política de contraseña y bloqueo de cuentas aplicada, existen ciertos parámetros de configuración que no se encuentran alineados con los valores establecidos por las mejores prácticas.nLos valores observados se detallan a continuación:n- Password must meet complexity requirements = Disabledn- Account lockout threshold = 7",
     impact: "La existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar los valores asignados a los parámetros observados, tomando como referencia los valores establecidos por las mejores prácticas, a saber:nn- Password must meet complexity requirements = Enabledn- Account lockout threshold = 5 o menos",
     severity: "BAJO",
     complex: "-"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Política de Contraseña y Bloqueo de Cuentas",
     observation: "Como resultado del análisis de las políticas de contraseñas y bloqueo de cuentas  de los servidores se observa que, si bien cuentan con una política de contraseñas y bloqueo de cuentas aplicada, existen ciertos parámetros de configuración que no se encuentran alineados con las buenas prácticas-nnibdb01n- LOCK_AFTER_RETRIES, se encuentra configurado en NOn- HISTORY=6",
     impact: "En primer lugar existe el riesgo de incumplimiento de las regulaciones  vigentes que alcanzan a la industria financiera (Norma 4609 BCRA). No obstante, también debe considerarse que la existencia de debilidades sobre la política de contraseñas, podría brindar a un potencial usuario malintencionado un camino sencillo para acceder al sistema utilizando las credenciales (identificador de usuario y contraseña) de un usuario válido, dado que dichas contraseñas podrían ser comprometidas a través de ataques de adivinación de contraseñas o fuerza bruta.",
     recommendation: "Se recomienda modificar los valores asignados a los parámetros observados, tomando como referencia los valores establecidos  por las mejores prácticas:nFailed Login Attempts = 3nPassword Life Time = 30nPassword Reuse Max = 12 o másnPassword Grace Time = 5 o menosn- LOCK_AFTER_RETRIES = Yesn- HISTORY= 12",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "WEBAPP",
     name: "Posibilidad de ataque de ingeniería social",
     observation: "Se ha identificado que en los sitios afectados es posible manipular el parámetro “Src” sobre el componente que se detalla a continuación: Ejemplo de URLs afectadas: Este hecho permitiría a un tercero realizar engaños en nombre de la compañía.nORnSe ha observado que existen debilidades en la funcionalidad de ingreso de datos por parte de los usuarios. En el formulario de la URL afectada, un usuario autenticado debe proveer la dirección email a la que desea que la información ingresada sea enviada. La manipulación de los parámetros “Concepto origen” y “Concepto destino” en el formulario, podría permitir a un usuario malintencionado completar ambos campos con código HTML, como el uso de links, para intentar realizar ataques de ingeniería social tomando como víctima al receptor del correo electrónico.",
     impact: "Un usuario malintencionado podría realizar un ataque de ingeniería social conocido como phishing, enviando e-mails en nombre de la compañía afectada a los grupos de interés relacionados con ésta, pudiendo obtener información sensible o bien robar las credenciales de autenticación del mismo.",
     recommendation: "Se recomienda analizar la posibilidad de realizar una adecuada validación de todos los parámetros ingresados por el usuario (longitud, validez, caracteres especiales, etc.), del lado del servidor. La verificación debe asegurar que todo parámetro de cualquier página dinámicamente generada, sea correctamente validado para que el tipo de dato y la longitud de cada campo se corresponda con lo esperado, y las mismas no contengan caracteres especiales que puedan resultar peligrosos, ni scripts inyectados por usuarios malintencionados. Como nivel adicional de seguridad, se recomienda considerar implementar un firewall de capa de aplicación para bloquear pedidos HTTP maliciosos. Para más información: https://www.owasp.org/index.php/Data_Validation",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Posibilidad de ataques de denegación de servicio",
     observation: "A partir de la ejecución de herramientas de escaneo de vulnerabilidades de uso público (denominadas de baja carga) sobre la infraestructura de aplicaciones Web, se reportó la ocurrencia de problemas que afectaron la disponibilidad y/o performance de las aplicaciones Web soportadas.",
     impact: "Ataques de tipo automático comúnmente ejecutados por usuarios maliciosos durante una etapa inicial de descubrimiento, podrían afectar el funcionamiento y disponibilidad de las páginas web de la Compañía.",
     recommendation: "Se recomienda realizar un análisis detallado sobre el diseño de la aplicación y configuración del servicio Web y componentes relacionados, a los fines de identificar la causa que origina caídas de servicio ante este tipo de ataques. Como medida complementaria, debería limitarse la cantidad de peticiones entrantes por dirección IP.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "VOIP",
     name: "Posibilidad de desconectar dispositivos VoIP",
     observation: "Se ha observado que no existen controles físicos (por ejemplo, unn“ethernet lock”) que impidan la conexión y desconexión no autorizadas dendispositivos VoIP.",
     impact: "Un atacante o usuario malicioso con acceso físico podría desconectar lanconexión ethernet de un teléfono VoIP y conectar otro dispositivo. Dichanconectividad podría ser utilizada para realizar ataques adicionales sobre laninfraestructura de <CLIENTE>.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de utilizar controles físicos (como pornejemplos “ethernet locks”) que permitan mitigar la posibilidad de conectar yndesconectar dispositivos VoIP de manera no autorizada.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Posibilidad de envío de e-mails falsificados",
     observation: "Se ha identificado que en el sitio afectado es posible manipular los parámetros HTTP en los componentes que se detallan a continuación: Este hecho permitiría a un tercero el envío de e-mails en nombre de la compañía.",
     impact: "un usuario malintencionado podría realizar un ataque de ingeniería social conocido como phishing, enviando e-mails en nombre de la compañía afectada a los grupos de interés relacionados con ésta, pudiendo obtener información sensible o bien robar las credenciales de autenticación del mismo.",
     recommendation: "Se recomienda eliminar la posibilidad de manipular los parámetros HTTP mediante su correcta validación en el servidor, antes de realizar la entrega de los e-mails.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Posibilidad de generar ataques de fuerza bruta sobre NTLM",
     observation: "La configuración por defecto aplicada a los servicios web afectados, podrían proveer a un usuario malintencionado la oportunidad de autenticarse directamente en el componente web, utilizando autenticación NTLM.",
     impact: "Esta observación permitiría a un usuario malintencionado en internet, realizar ataques de fuerza bruta sobre los usuarios y contraseñas del sistema operativo que soporta al servicio web.",
     recommendation: "Se recomienda anular la autenticación integrada de Windows sobre el servicio IIS en caso de que el mismo no sea requerido por una necesidad de negocio.nREVISAR: Se recomienda anular la autenticación integrada de Windows para este tipo de archivos, al igual que remover todas las páginas y/o componentes por defecto creadas en la instalación del servidor Web IIS.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Posibilidad de montar directorios NFS anónimamente",
     observation: "Se detectaron en los recursos afectados, directorios compartidos accesibles anónimamente. A continuación se listan los recursos y directorios afectados:",
     impact: "Los sistemas identificados con permisos de lectura/escritura permiten a usuarios maliciosos afectar la confidencialidad, integridad y/o disponibilidad de la información almacenada en los recursos.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de no compartir directorios remotamente, de ser requerido por una necesidad de negocio, se recomienda configurar NFS de forma tal que solo los hosts autorizados puedan montar dichos directorios.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Posibilidad de realizar envíos de E-Mails maliciosos",
     observation: "En función de las pruebas realizadas Se ha observado que la aplicación afectada presenta debilidades en el esquema de validación de parámetros ingresados por el usuario en la funcionalidad “Invita a tus amigos”, lo cual ocasiona que puedan ser enviados correos con código HTML embebido dentro de los mismos.",
     impact: "Utilizando esta debilidad, un usuario malintencionado podría engañar a usuarios que reciban el correo induciéndolos por ejemplo a descargar archivos con contenido malicioso (trojanos, virus, etc).",
     recommendation: "Recomendamos modificar el código fuente del aplicativo, para que se realice una adecuada validación de todos los parámetros ingresados por el usuario (Longitud, validez, caracteres especiales, etc.), del lado del servidor.  Dichas validaciones no deberán acotarse a los formularios afectados presentados en los ejemplos, sino que consideramos conveniente extenderlo a todos los parámetros y formularios de la aplicación que podrían tener impacto.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Posibilidad de utilizar un canal de comunicación no cifrado",
     observation: "De la revisión de código fuente de los launchers de Ipad y Android, Se ha observado que las aplicaciones móviles estarían consumiendo servicios web utilizando un canal de comunicación no cifrado (HTTP).",
     impact: "La debilidad observada podría permitir a un atacante con moderados conocimientos técnicos, intentar interceptar la comunicación cliente-servidor, y posteriormente intentar visualizar datos sensitivos de los usuarios (Ataque “Man In-the-middle”).",
     recommendation: "Se recomienda configurar servicios web para forzar el establecimiento de conexiones a través de canales cifrados únicamente, así como utilizar certificados SSL v3 o TLS con un cifrado igual o mayor a 128 bits, para el canal de comunicaciones entre el cliente y el servidor Web.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "INTERNO",
     name: "Posible Backdoor en servicio TFTP",
     observation: "Se ha identificado que los recursos afectados podrían ser víctimas de un ataque de puertas traseras conocido como 'backdoor'.  Vale destacar que dicha conclusión fue determinada al analizar la información que devuelve el servicio TFTP (69/udp) presente en los recursos afectados, al momento de realizar una operación GET por cualquier nombre de archivo.",
     impact: "En caso de que dicho servicio se encuentre infectado, el recursos afectado se encontraría expuesto a ser controlado o monitoreado a través de un canal no autorizado.",
     recommendation: "Se recomienda identificar el proceso en ejecución que hace uso del mencionado puerto en el sistema afectado, con el objetivo de discernir si este corresponde a un producto instalado lícitamente o bien tiene un origen desconocido.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Posible Blind SQL Injection",
     observation: "Se ha observado que, en función del análisis de código fuente de la aplicación de <CLIENTE>, si bien se encuentran presentes componentes que evitarían la inyección de caracteres especiales, existen debilidades en el esquema de validación de parámetros que podrían permitir a un usuario malicioso la inyección de consultas SQL.",
     impact: "Las inyecciones SQL a ciegas no generan mensajes de error visibles por el usuario, sin embargo permitirían a un usuario malintencionado inyectar sentencias SQL que podrían ser interpretadas en el motor de base de datos. En función de las pruebas realizadas Se ha observado que la aplicación afectada presentaría debilidades en el esquema de validación de parámetros ingresados por el usuario lo cual permitiría a un usuario malintencionado, mediante la inyección de código SQL, realizar (entre otras) las siguientes acciones:n - Obtención de información potencialmente sensiblen - Creación, modificación y eliminación de datosn - Ejecución de comandos arbitrarios",
     recommendation: "Se recomienda considerar, en primer lugar, modificar el código fuente del aplicativo, para que se realice una adecuada validación de todos los parámetros ingresados por el usuario (longitud, validez, caracteres especiales, etc.), del lado del servidor. Dichas validaciones no deberían acotarse a los parámetros afectados presentados en los ejemplos, sino que deberían ser extendidos a todos los parámetros de la aplicación que podrían tener impacto en la base de datos.nnComo segundo paso, de mediano plazo, <CLIENTE> debería considerar evaluar la factibilidad y conveniencia de realizar un análisis detallado a 'nivel de código', para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación, complementando las tareas de análisis iniciadas en el paso anterior. Cabe destacar que en el entorno de las aplicaciones y los servicios web, los datos deberían ser validados en el servidor y luego utilizados en las tareas de procesamiento.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Posible evasión del mecanismo de autenticación remoto",
     observation: "Deloitte ha observado, que el servicio de autenticación requerido para el acceso remoto permite a un usuario malintencionado ingresar a funcionalidades no habilitadas, mediante el acceso a una URL previamente conocida.",
     impact: "Un usuario malintencionado podría obtener acceso no autorizado a funcionalidades, las cuales no están habilitadas sin la correcta autenticación por medio de una red privada virtual (VPN).",
     recommendation: "Se recomienda analizar la posibilidad de modificar la funcionalidad afectada, para asegurarse de que no se pueda acceder a las distintas funcionalidades sin la correcta autenticación. Además, Se recomienda analizar la posibilidad la factibilidad y conveniencia de realizar un análisis detallado e integral a nivel código fuente, orientado a documentar y evaluar el esquema de validación actual en cada una de las páginas web y funcionalidades de la aplicación.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Posible infección del 'worm' Conficker",
     observation: "Como resultado de la ejecución de pruebas de identificación de vulnerabilidades sobre los segmentos correspondientes a la red Interna de <CLIENTE>, Se ha observado que existen recursos que podrían encontrarse infectados con el 'worm' 'Conficker'.",
     impact: "Debido a esto existe la posibilidad que el 'worm' Conficker infecte otros servidores o estaciones de trabajo alojados en la red de Nidera.",
     recommendation: "Se recomienda realizar un escaneo de virus sobre los servidores y estaciones de trabajo mencionados. Adicionalmente, se recomienda tener en cuenta las siguientes recomendaciones del fabricante ara evitar la propagación del mismo. http://www.microsoft.com/security/worms/conficker.aspx.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Posible inyección en cadena de conexión",
     observation: "En función de las pruebas realizadas sobre el sitio <CLIENTE> Se ha observado que debido a la inadecuada validación de la información ingresada por el usuario, se podrían producir ataques de inyección de código a la cadena de conexión. Dicha debilidad permitiría a un usuario malintencionado modificar la cadena de conexión a la base de datos mediante la utilización de funcionalidades propias del producto.nURLs afectadas:nPor ejemplo, en el campo usuario se inyectaron las siguientes cadenas:n;Data%20Source=%20localhost;%20Integrated%20Security=yes;%20Encryption=Offn;Data%20Source=%20localhost",
     impact: "Debilidades en los procesos de validación de los parámetros de entrada podría permitir a un usuario malintencionado alterar el comportamiento de la conexión con la base de datos, con el fin de realizar captura de credenciales, acceso a información sensible mediante delegación del proceso de autenticación y/o escaneo anónimo de puertos disponibles.",
     recommendation: "Se recomienda analizar la posibilidad de modificar el código fuente del aplicativo, para que se realice una adecuada validación de los parámetros ingresados por el usuario (tipo de dato, longitud, caracteres especiales, etc.) tanto del lado del cliente (con motivos de optimización) así como también del lado del servidor. Se recomienda analizar la posibilidad la factibilidad y conveniencia de realizar un análisis detallado a 'nivel de código fuente', para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación. Adicionalmente se recomienda que la aplicación muestre al usuario pantallas de errores genéricas, que no revelen información detallada acerca del error y/o de la infraestructura que soporta el sitio web.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Privilegios de Usuarios en el Sistema",
     observation: "Como resultado de la revisión de privilegios otorgados a los usuarios del sistema, se observó que los siguientes usuarios poseen asignados privilegios superiores a los necesarios:n- OPS$A6FTUM: Tiene algunos privilegios de Select ANY",
     impact: "Privilegios mayores a los necesarios incrementa el riesgo de accesos no autorizados a recursos críticos del sistema (datos o funciones). Asimismo, la situación mencionada posibilita la materialización del riesgo de ocurrencias de denegaciones o degradaciones en el servicio prestado por la base de datos.",
     recommendation: "Se recomienda analizar la posibilidad de restringir los privilegios asignados a roles/ usuarios de la base de datos, tomando como base el principio del menor privilegio.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Privilegios otorgados al grupo PUBLIC – B.D.",
     observation: "Se ha observado que el mismo cuenta con privilegios de ejecución, escritura y borrado sobre objetos sensitivos de la instancia de base de datos. A continuación se presenta el detalle de los objetos críticos sobre los que el grupo mencionado cuenta con privilegios de ejecución, escritura y/o borrado:n-SRC_SP_DESV_US_RENn-SRC_SP_OCUL_REFERENCIA",
     impact: "La asignación de elevados privilegios al grupo PUBLIC, podría permitir a un potencial usuario malintencionado que haya ganado acceso a la instancia de base de datos, el acceso no autorizado a objetos de la misma (funciones, tablas, procedimientos almacenados, etc.), comprometiendo de esta manera la disponibilidad, integridad y confidencialidad de la información almacenada en la base de datos y del servidor que la soporta.",
     recommendation: "Se recomienda realizar un análisis de los privilegios otorgados al rol PUBLIC, con el objetivo de identificar la asignación de privilegios innecesarios. Posteriormente se deberá realizar la depuración del rol PUBLIC.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Programación de Tareas",
     observation: "Del análisis de la configuración del servicio 'cron', se ha observado que además del usuario 'root' existen otros usuarios del sistema con privilegios para programar tareas.nLos usuarios que pueden utilizar el servicio mencionado son los siguientes:ninterfaceny7sefana6ftumnNagiosnNOTA: Según lo conversado con el personal correspondiente, estos usuarios necesitan acceso a programación de tareas para funciones de administración y monitoreo",
     impact: "A través de la creación de tareas programadas no autorizadas, los usuarios mencionados podrían ejecutar comandos o procesos fuera de los horarios de trabajo asignados a los mismos.",
     recommendation: "Analizar la posibilidad de limitar o restringir el acceso al comando 'cron', únicamente a usuarios que cumplan con funciones de negocio que requieran la utilización de dicho comando.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "WIRELESS",
     name: "Propagación de Nombre de Red Wireless Crítica",
     observation: "Durante las pruebas, Deloitte encontró que las redes wireless de la compañía se encontraban exponiendo su nombre y sus configuraciones de seguridad, como ser el algoritmo de cifrado, esquema de autenticación, etc.",
     impact: "El primer paso para un usuario malintencionado es identificar los recursos pertenecientes a una empresa plausibles de ser atacados. La propagación de nombres permiten que esta tarea sea mas simple incluso para intrusos sin un conocimiento técnico elevado.",
     recommendation: "Deloitte recomienda evaluar la posibilidad de no propagar los nombres de las redes wireless de la compañía de tal manera que éstas sean mas difíciles de enumerar para un potencial usuario malintencionado.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "ATM",
     name: "Protector de privacidad en el monitor no implementado.",
     observation: "La pantalla carece de filtro de privacidad, el cual es soportado por el modelo de cajero instalado. A continuación se listaran los modelos afectados:",
     impact: "Un individuo malicioso podría aprovechar el descuido de un cliente y lograr observar por los laterales información sensible de este. Esto puede comprometer la seguridad del cliente exponiendo información personal del mismo.",
     recommendation: "Se recomienda analizar la posibilidad de implementar un mecanismo de protección para la privacidad que no permita que se vea la pantalla desde los laterales del cajero.",
     severity: "BAJO",
     complex: "BAJO"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Proxy ARP se encuentra habilitado – Router",
     observation: "Se ha observado que el proxy ARP se encuentra habilitado. ARP es un protocolo que los hosts en una red utilizan para traducir direcciones IP en direcciones físicas. En circunstancias normales, los paquetes ARP están confinados al segmento de red del host origen. Sin embargo, un Router Cisco con Proxy ARP habilitado en una interfaz de red, puede actuar como un proxy para los paquetes ARP, respondiendo a consultas y actuando como intermediario. La dirección IP de la interfaz afectada es: ",
     impact: "Un router actuando como un proxy para los paquetes ARP, extenderá el acceso a nivel de cada dos entre múltiples segmentos de red, rompiendo el perímetro de seguridad. ",
     recommendation: "Se recomienda que si el servicio de proxy ARP no es requerido sea deshabilitado en todas las interfaces. Esto puede ser realizado utilizando el siguiente comando: n-no ip proxy-arp",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "ATM",
     name: "Puertos USB accesibles",
     observation: "Se ha observado que existen puertos USB de fácil acceso en los recursos afectados. A continuación se detalla lo observado:n- Diebold Opteva 720: Existen 4 puertos USB, dos de los cuales están libres, atrás del panel frontal, debajo de la cámara de seguridad. Estos puertos pueden ser accesibles a través del awareness mirror que se encuentran a ambos lados de la cámara.n- NCR SelfServ 32: Existe un cable mini USB disponible atrás de la pantalla frontal del cajero, el cual puede ser fácilmente accesible una vez abierta la tapa frontal.",
     impact: "La existencia de puertos USB accesibles desde el frente de los cajeros compromete la seguridad de los mismos, permitiendo a un atacante conectar un teclado o mouse, para lograr escapar de la aplicación del cajero y obtener acceso al sistema operativo que se ejecuta de fondo.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar los puertos USB que no se utilizan en los cajeros. En caso de ser requeridos por motivos de negocio, BROU debería considerar reubicar estos puertos para que no se encuentren accesibles desde el frente del mismo.",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "WIRELESS",
     name: "Radio de alcance",
     observation: "Se identificó que la potencia emitida por el dispositivo wireless permite iniciar el proceso de negociación para establecer una comunicación con el recurso afectado desde afuera de las instalaciones analizadas, específicamente, desde la calle.",
     impact: "Es posible que personal no autorizado pueda atacar el recurso afectado con el objetivo de establecer una conexión desde afuera de las instalaciones para intentar visualizar el tráfico o comprometer a otros recursos conectados a esta red wireless.",
     recommendation: "Analizar la ubicación y disposición de las antenas de los access points que de la red wireless EDS, de forma de limitar la propagación de señal transmitida hacia fuera de las instalaciones. Asimismo, si fuera posible, evaluar regular la potencia de transmisión de dichos access points para minimizar la señal emitida y dificultar las conexiones desde fuera de las instalaciones.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Recursividad activa en servicio de DNS",
     observation: "En el equipo afectado se identificó que se encuentra habilitado el servicio de DNS con la opción de atender consultas recursivas activas, permitiendo contestar consultas de otro dominio provenientes de internet.",
     impact: "Un servidor de nombres de dominio que permite consultas recursivas a través de UDP, podría ser utilizado para realizar ataques de denegación de servicio contra otra red o sistema.",
     recommendation: "Se recomienda deshabilitar la opción de recursividad o bien restringirla únicamente a los equipos que sean necesarios por cuestiones de negocio.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WIRELESS",
     name: "Redes inalámbricas con bajos niveles de encripción",
     observation: "El objetivo de las pruebas  fue identificar el uso de redes inalámbricas no controladas, tanto dentro de <CLIENTE>  como en los alrededores de los proveedores EDS y TELMEX. Durante las pruebas identificamos que las redes “eds” y “Telmex_guest” no cuentan con medidas que permitan asegurar la confidencialidad de la información transmitida por esta vía.",
     impact: "Los mecanismos de protección basados en tecnología WEP utilizan tecnología para la cual ya existen herramientas públicamente disponibles que permiten acceder a éstas redes. Esta situación podría permitir que un posible usuario malintencionado desde la calle gane acceso a las redes mencionadas. Es importante mencionar que dado que no contamos con la información que nos permita determinar a dónde se accede desde las redes WiFi mencionadas, no podemos dimensionar en forma precisa el riesgo de exposición al que se exponen los recursos de <CLIENTE>.",
     recommendation: "Una vez determinados los segmentos de red a dónde se conectan las redes WiFi mencionadas en la observación y analizando si esto supone un riesgo para los recursos y la información de <CLIENTE>, recomendamos requerir a los responsables de las redes WiFi que implementen tecnología de control inalámbrico basados en WPA-Enterprise con encripción basada en AES.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WIRELESS",
     name: "Redes wireless abiertas",
     observation: "El objetivo de las pruebas fue identificar el uso de redes inalámbricas no controladas, tanto dentro de <CLIENTE> como en los alrededores de los proveedores HP y TELMEX.nDurante las pruebas identificamos la que la red “Guest” en Telmex no cuenta con medidas que permitan asegurar la confidencialidad de la información transmitida por esta vía.",
     impact: "La falta de mecanismos de cifrado podría permitir a un usuario malintencionado ganar acceso a las red mencionada. Es importante mencionar que este recurso no estuvo dentro del alcance de las pruebas de intrusión y que dado que no contamos con la información que nos permita determinar a dónde se accede desde las redes WiFi mencionadas, no podemos dimensionar en forma precisa el riesgo de exposición al que se exponen los recursos de <CLIENTE> si los mismos pudiesen ser accedidos desde esta red inalámbrica.",
     recommendation: "-",
     severity: "BAJO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Registros de Transacciones",
     observation: "Se observó que la instancia de base de datos OTP1 no se encuentra configurada para la generación de LOGS de transacciones (RedoLogs). A saber, el parámetro de configuración utilizado para activar la generación de RedoLogs, Log_Archive_Start, posee el valor False asignado.",
     impact: "La falta de generación y almacenamiento de archivos de transacciones (Redo Logs), podrían implicar que el estado actual de la base de datos no pueda recuperarse ante una eventual falla en el motor o en el equipo que lo soporta.",
     recommendation: "Se recomienda habilitar la generación y almacenamiento de Logs de transacciones (RedoLogs), con el fin de contar con una herramienta adicional a los resguardos de seguridad del sistema, en caso de una eventual falla o pérdida de datos sobre el mismo. Para tal fin se recomienda configurar el siguiente parámetro: Log_Archive_Start = DB, OS o TRUE.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "INTERNO",
     name: "Relaciones de confianza utilizando SSH",
     observation: "Se detecto que entre los recursos afectados se encontraban establecidas relaciones de confianza mediante la utilización de llaves SSH. En particular el equipo de nombre <NOMBRE> tiene relaciones de confianza con todos los recursos afectados.",
     impact: "Las relaciones de confianza permiten a los usuarios iniciar sesión en distintos equipos sin que le sea solicitada la contraseña. En caso de comprometer a alguno de los usuarios afectados, se estarían comprometiendo a todos aquellos equipos entre los cuales existen las relaciones de confianza.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad operativa de no utilizar relaciones de confianza (aunque las mismas se encuentren bajo un canal encriptado). En caso de ser necesarias para el negocio, configurarlas según las mejores prácticas con el fin de limitar su alcance al mínimo indispensable. En particular, puede restringirse el uso de llaves SSH para la ejecución de comandos en particular mediante la opción “commands=” en el archivo authorized_keys.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "Renegociación TLS/SSL (Denegación de servicio)",
     observation: "Se ha observado que el servidor web afectado actualmente soporta mecanismos de renegociación en el protocolo de cifrado SSL.",
     impact: "El propósito de una negociación SSL es elegir el protocolo más seguro que tanto el cliente como el servidor puedan soportar. La negociación TLS/SSL requiere una mayor capacidad de procesamiento de lado del servidor. Las renegociaciones permiten volver a comenzar este proceso. Un usuario malicioso podría hacer uso de dicha vulnerabilidad en la configuración para generar un consumo excesivo de los recursos de los servidores afectados, pudiendo provocar denegación de servicio.",
     recommendation: "Se recomienda realizar un análisis detallado sobre la configuración del servicio Web y/o el componente relacionado con la configuración del protocolo TLS/SSL, a fines de identificar la causa que origina caídas de servicio ante este tipo de ataques. Como medida complementaria, debería limitarse la cantidad de peticiones entrantes por dirección IP.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Restricciones de internet inadecuadamente aplicadas",
     observation: "Si bien el servidor aplica por políticas de dominio restricciones respecto de que tipo de acceso tiene cada cliente fijando un servidor proxy para el internet Explorer y previniendo si cambio, es posible acceder a internet de manera irrestricta usando un navegador alternativo al cual estas políticas no aplican.",
     impact: "Este tipo de acceso permitiría a un usuario con la posibilidad de conseguir un navegador alternativo obtener acceso a internet y visitar páginas que le están prohibidas o subir herramientas para realizar ataques mas profundos sobre la infraestructura interna de <CLIENTE>.",
     recommendation: "Se recomienda configurar el router de borde para filtrar aquellos intentos de conexión a internet que no provengan del servidor proxy.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Robo de sesión posible",
     observation: "Es posible tomar el control de la sesión de un usuario legítimo de la aplicación, tras obtener un identificador de sesión válido (generalmente, una cookie de sesión) y reutilizarlo mientras sea válido. Se ha observado que un identificador de sesión puede ser inyectado en peticiones HTTP a funciones autenticadas de la aplicación afectada, desde un equipo distinto al que originó la sesión (por ejemplo, con una dirección IP y/o navegador distintos).nNota: para obtener un identificador de sesión válido, un individuo malicioso debería emplear un vector de ataque diferente <SI SE IDENTIFICÓ UN VECTOR>, por ejemplo explotando la vulnerabilidad de <XSS, SESSION FIXATION, ETC> identificada (referirse a la observación #x.x.x)",
     impact: "Un identificador de sesión de usuario (genralmente, una cookie de sesión) es empleada para mantener un registro de los usuarios autenticados en una aplicación y la información o funciones accesibles con su perfil. Interceptar un identificador de sesión válido (por medio de un ataque distinto) y reutilizarlo, le permitiría a un individuo malicioso acceder a la aplicación y sus funcionalidades como si fuera el usuario legítimo. Esto podría permitir al individuo malicioso afectar la integridad y confidencialidad de la cuenta de usuario de la víctima y su información. Si la aplicación no detecta que el identificador de sesión generado para un usuario está siendo utilizado desde otro equipo distinto al original en forma simultánea, un individuo malicioso podría acceder a la cuenta de la víctima sin ser detectado. ",
     recommendation: "Se recomienda revisar la implementación actual de la administración de sesiones con el fin de asegurar que las nuevas peticiones recibidas para la misma sesión coincidan con la dirección IP y la información del navegador de peticiones anteriores, y forzar al cliente a re-autenticarse en caso de que sea detectada una variación en los parámetros previamente mencionados. Además, si esta variación es detectada, se recomienda invalidar del lado del servidor la sesión previamente estabelcida. Como medida adicional, se recomienda analizar la posibilidad de implementar un mecanismo que registre, del lado del servidor, los pares de dirección IP y navegador empleados por el usuario de forma frecuente, a fin de permitir a la aplicación reaccionar preventivamente a un intento de inicio de sesión asociado a una nueva dirección IP y/o navegador, mediante el envío al usuario de una alerta de esta situación y/o la solicitud de respuestas para un número de preguntas de seguridad previamente definidas, antes de permitir la autenticación de la cuenta de usuario con estos nuevos parámetros. Finalmente, se recomienda considerar la revisión de los estándares de administración de sesiones de la aplicación e incluir controles de mitigación necesarios contra la recuperación no autorizada de sesiones, con el fin de evitar que un individuo malicioso se apodere de sesiones válidas. nPara mayor infomación, referirse al siguiente enlace (con contenido en inglés):nhttp://cwe.mitre.org/data/definitions/294.html",
     severity: "MEDIO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Se permite recuperar una sesión abierta o finalizada",
     observation: "Si un usuario cierra la ventana, o finaliza su sesión, y vuelve a abrir el portal de <CLIENTE> en dónde se procede a la elección de la empresa para luego realizar <el ABM de Productos>, se recuperará la sesión que tenía abierta utilizando un identificador de sesión válido. La URL afectada es: ",
     impact: "Un usuario malintencionado podría aprovechar este comportamiento para poder acceder a la cuenta de un usuario simplemente volviendo a abrir la aplicación con un identificador de sesión válido.",
     recommendation: "Se recomienda añadir controles que impidan recuperar una sesión simplemente abriendo un link del histórico o la ventana principal de login.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Seguridad no aplicada en las diferentes capas del sistema",
     observation: "Se ha observado la presencia de una aplicación desarrollada para ser utilizada en múltiples capas, pero la infraestructura no posee las medidas de seguridad asociadas a este tipo de desarrollo que restrinjan el acceso entre los múltiples equipos que conforman las diferentes capas.",
     impact: "Las aplicaciones desarrolladas en múltiples capas cuentan con la posibilidad de utilizar niveles de seguridad adicionales para restringir el acceso entre las mismas. nAl no existir seguridad aplicada entre las diferentes capas, es posible acceder desde cualquiera de los equipos que conforman la solución a cualquier otro sin importar la capa en la que se encuentre.",
     recommendation: "Al contar con un desarrollo de una aplicación desarrollada en capas, es recomendable que la infraestructura cuente con las medidas de seguridad adecuadas para no permitir el acceso irrestricto entre los equipos de las diferentes capas.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "CÓDIGO FUENTE",
     name: "Semilla de Encripción Embebida en el Código Fuente",
     observation: "Como resultado del análisis del código fuente, se identificó el método “encryptor.setPassword”, el cual recibe como parámetro una cadena de caracteres , embebida en el código fuente, la cual podría ser utilizada como semilla para la encripción de información. ",
     impact: "Información sensible almacenada en el código fuente expone a que, usuarios maliciosos que cuenten con acceso a estos archivos, utilicen estos datos para diferentes ataques enfocados.",
     recommendation: "Se recomienda analizar la posibilidad de no incluir en el código fuente información sensible, como ser las semillas de encripción. Dichos datos deberían ser consumidos a través de un servicio, de forma tal que sea transparente para la aplicación.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "CÓDIGO FUENTE",
     name: "Sentencias SQL Embebidas en Código Fuente",
     observation: "Como resultado del análisis del código fuente se identificó que sentencias SQL, vinculadas a la base de datos que soporta la información de aplicación, se realizan sin controles y que, adicionalmente, se encuentran embebidas en el código fuente.",
     impact: "Al realizarse las consultas directamente desde el código, se brinda información de la estructura de la base de datos, lo que le permite al desarrollador trabajar directamente contra las tablas generando una inadecuada segregación de ambientes.",
     recommendation: "Se recomienda analizar la posibilidad de encapsular las sentencias a la base de datos a través de “stored procedures” definidos por el DBA.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WIRELESS",
     name: "Servicio de Auditoría",
     observation: "Como resultado del análisis de la configuración del los dispositivos de acceso inalámbricos analizados, se determinó que el servicio de auditoría no se encuentra activo en los mismos.",
     impact: "La falta de registros de auditoría impide la oportuna detección de intentos de ingresos y/o modificaciones no autorizadas, con la consecuente imposibilidad de tomar acciones de remediación y prevención. Asimismo, impide, ante un error o fraude, un completo análisis posterior de los hechos que permita asignar responsabilidades, y medidas correctivas.",
     recommendation: "Se recomienda activar el servicio de auditoría (syslog) para los recursos afectados.nUna vez que el mismo ha sido configurado, se recomienda redefinir los procesos de monitoreo y revisión de pistas de auditoría.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "REVISIÓN WINDOWS",
     name: "Servicios activos",
     observation: "Como resultado del análisis de los servicios activos en el recurso afectado, se identificó el siguiente servicio activo: SNMP",
     impact: "La utilización de servicios de administración que emplean protocolos no cifrados, podría permitir a usuarios no autorizados obtener información confidencial crítica, tal como información de configuración del sistema,  nombres de usuarios y contraseñas. Además, los servicios no requeridos constituyen una fuente de recursos de información que pueden ser analizados, por parte de un usuario malintencionado, en busca de vulnerabilidades.",
     recommendation: "Se recomienda considerar la posibilidad de deshabilitar el servicio mencionado. Además, como SNMP v3 no está soportado en nuevas versiones de Windows Server, Se recomienda analizar la posibilidad si el servicio es necesario, y de serlo, restringir su acceso a la red de servidores.",
     severity: "MEDIO",
     complex: "-"
    },
    {
     type: "EXTERNO",
     name: "Servicios innecesarios disponibles en internet",
     observation: "Se ha identificado que el recurso afectado presenta servicios innecesarios accesibles desde internet, lo cual facilita posibles ataques que podrían comprometer la disponibilidad, confidencialidad e integridad del sistema. El banner detectado en dicho servicio es 'Microsoft Windows RPC'.",
     impact: "La utilización de servicios innecesarios eleva el riesgo de que un usuario malintencionado pudiese comprometer dicho equipo mediante la explotación de vulnerabilidades conocidas sobre los mismos. Un usuario malintencionado podría aprovechar las vulnerabilidades que pudieran existir para el servicio innecesario identificado mediante la utilización de exploits.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de detener y deshabilitar, o bien no publicar en internet, aquellos servicios innecesarios en el servidor a fin de mitigar posibles riesgos.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ROUTERS",
     name: "Servicios inseguros habilitados",
     observation: "Como resultado del análisis realizado sobre los servicios activos en los equipos, se han identificado servicios que presentan riesgos de seguridad, dado que no proveen mecanismos de encriptación. nnA continuación se presentan los servicios mencionados:nnPara el dispositivo APC_RT_ASOC:nSNMPnNTPnTelnetnnPara el dispositivo EXTERNO:nAuxiliary PortnTelnet",
     impact: "La utilización de servicios de transmisión de archivos y administración de equipos que no proveen mecanismos de encriptación, no permite garantizar la confidencialidad e integridad de la información transmitida a través de los mismos (credenciales de usuario, configuraciones, etc).",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar los servicios mencionados. En caso que el servicio SNMP sea requerido por el negocio, se recomienda reemplazar su implementación por la versión segura del protocolo: SNMP v3.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "ATM",
     name: "Servicios inseguros habilitados",
     observation: "Se ha observado servicios activos que podrían presentar riesgos de seguridad para los cajeros.nLos servicios identificados son:n- Terminal servicesn- NetBIOSnAdicionalmente, se identificó el servicio FTP activo, el cual no provee mecanismos de cifrado.",
     impact: "La utilización de servicios inseguros de transmisión de archivos y administración de equipos, no permite garantizar la confidencialidad e integridad de la información transmitida a través de los mismos (credenciales de usuario, configuraciones, etc.), además de exponer al sistema a una mayor variedad de ataques.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar los servicios mencionados. En caso de que los servicios sean requeridos por razones de negocio, se recomienda analizar la posibilidad de restringir su acceso a usuarios autorizados y remplazarlos por servicios que utilicen canales cifrados.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Session Fixation",
     observation: "Se ha observado que la aplicación no cambia el valor del identificador de sesión luego de un intento de autenticación exitoso.",
     impact: "Un individuo malicioso que logre obtener el identificador de sesión (cookie) de un usuario, podría aguardar a que este usuario se autentique y su identificador de sesión obtenga privilegios de usuario autenticado, para luego recuperar la sesión y acceder a la aplicación con los mismos privilegios concedidos al usuario legítimo.",
     recommendation: "Se recomienda analizar y modificar el módulo de gestión de sesiones de la aplicación, de manera tal que el identificador de sesión se cambie una vez que el usuario se autentica de manera exitosa. Además, se recomienda revisar los estándares de desarrollo para asegurarse que contemplen la renovación de los identificadores de sesión para lograr consistencia en las aplicaciones de la organización.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/204.html (contenido en Inglés)n",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "PHISHING",
     name: "si estas manejando informacion confidencial importante, usa EV certificates en vez de certificados comunes",
     observation: null,
     impact: null,
     recommendation: null,
     severity: null,
     complex: null
    },
    {
     type: "VOIP",
     name: "Sistema Windows fuera de soporte en la red VoIP",
     observation: "Deloitte identificó que existe un equipo Windows en la red VoIP de <CLIENTE>. Adicionalmente, se observó que dicho equipo soporta unansolución de McAfee (ePO) con sistema operativo Windows 2000.",
     impact: "Un usuario malintencionado o atacante que obtiene acceso a la red VoIPnpodría ejecutar ataques sobre el equipo que soporta la solución de McAfee,nel cual utiliza un sistema operativo que se encuentra fuera de soporte.nAdicionalmente, el usuario malintencionado podría comprometer el equiponutilizándolo como punto de partida para ataques hacia otras redes (pornejemplo, si el recurso comparte el mismo dominio que otros equipos críticosnde <CLIENTE>).",
     recommendation: "Se recomienda utilizar la red VoIP exclusivamente para dispositivos VoIP ynrelacionados. Adicionalmente, Se recomienda analizar la posibilidad la posibilidad de migrarnla solución de McAfee a alguna plataforma que cuente con soporte ynactualizaciones de seguridad periódicas.",
     severity: "ALTO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Sitio de demostración disponible en internet",
     observation: "Se ha observado que un sitio de demostración se encuentra disponible para permitir que los clientes experimenten el uso de la aplicación. Además, Se ha observado que es posible acceder a ítems de administración de seguridad, para usuarios y cuentas, mediante la siguiente URL:",
     impact: "El sitio de demostración podría mostrar información sobre la estructura y diseño de funcionalidades clave, incluyendo nombres de parámetros que sean consistentes con la versión oficial del sitio. Como resultado, un usuario malintencionado podría obtener esta información de forma anónima, ganando comprensión de la aplicación para ataques más específicos. Además, funciones ocultas en el sitio original podrían ser descubiertas mediante enumeración de recursos de aplicación, como ser consolas de administración, dentro del sitio de demostración, creando un vector de ataque mayor para potenciales ataques.",
     recommendation: "Se recomienda deshabilitar el acceso al sitio de demostración, en caso de no ser requerido por razones de negocio. En caso contrario, se recomienda analizar la posibilidad de utilizar un entorno que simule las funcionalidades requeridas pero donde las mismas no se encuentren implementadas, mediante imágenes, gráficos y/o animaciones en Flash, o asegurar que información específica relacionada a parámetros y funcionalidades sea ofuscada, para minimizar el conocimiento que un usuario malintencionado podría adquirir anónimamente.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "SMTP Relay & Mail Spoofing",
     observation: "Existe la posibilidad de efectuar “Relay Interno” y “Mail Spoofing Interno” de e-mails, utilizando los servidores de correo electrónico de <CLIENTE> desde internet.",
     impact: "El servidor de correo (SMTP) está configurado de manera tal de permitir a un usuario malintencionado desde internet enviar mensajes a través de él (RELAY).nEn este contexto un usuario malintencionado desde internet podría utilizar los servidores de correo de LINK para el envío masivo de e-mails (SPAM) o UCE (unsolicited commercial e-mail) exclusivamente a personal que posea correo electrónico en Red Link, causando una degradación en los niveles de servicio.nPor otro lado, fue posible validar que el servidor mencionado permite realizar “Mail Spoofing Interno”, es decir, permite falsificar el remitente de un e-mail, permitiendo utilizar una dirección de correo electrónico perteneciente al domino “redlink.com.ar”.",
     recommendation: "Si bien la solución de AntiSpam utilizada no permite la llegada de estos correos no deseados, se recomienda analizar la posibilidad de configurar todos los servidores de correo electrónico de forma tal que no permitan la retransmisión de e-mails (Relay) a usuarios que no se encuentren autenticados. En caso que existan aplicaciones que utilicen el servicio SMTP de forma anónima, recomendamos limitar temporalmente la posibilidad de realizar relay únicamente a los servidores o servicios que así lo requieran.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Sobrepaso de mecanismo de autorización",
     observation: "Se ha observado que es posible aplicar un proceso de decompilación sobre el recurso afectado con la finalidad de obtener el código fuente del mismo. Adicionalmente, se ha observado que un usuario autenticado en el sistema podría utilizar dicho proceso con la finalidad de realizar el borrado de recetas mediante  la elusión de los mecanismos de autorización por parte de un supervisor/responsable.",
     impact: "Un usuario mal intencionado podría aprovechar la presente debilidad para lograr un entendimiento del código fuente del aplicativo, lo que podría permitir el acceso a información sensible o a realizar la ejecución de código arbitrario. A su vez, esto podría permitir sobrepasar mecanismos de control con la finalidad de realizar acciones de forma no autorizada, así como también generar algún otro impacto no especificado.",
     recommendation: "Se recomienda considerar la posibilidad de asegurar programáticamente que una apropiada validación sea realizada para todas las operaciones realizadas por la aplicación, es decir, validadas en el servidor y luego utilizadas en las tareas de procesamiento. La validación debería determinar el tipo de operación a realizar y el perfil de usuario esperado descartando toda desviación. Cabe destacar que dicha validación no deberían acotarse a aquellos presentados a modo de ejemplo, sino que se recomienda extender dicha implementación a todas las funcionalidades utilizados por las diversas aplicaciones, y en particular a aquellos que posean un posible impacto sobre bases de datos. Además, Se recomienda analizar la posibilidad de  y conveniencia de realizar un análisis detallado a nivel de código fuente, para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de las operaciones realizadas por las distintas  funcionalidades de la aplicación, complementando las tareas de análisis iniciadas realizadas. Por otra parte, se recomienda realizar un proceso de ofuscación de código fuente al cuál los usuarios finales puedan llegar a tener acceso. La  finalidad de dicho proceso es de dificultar la interpretación del código por parte de usuarios mal intencionados.",
     severity: "ALTO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO / WEBAPP / INTERNO",
     name: "Software desactualizado",
     observation: "Se ha observado la presencia de servicios que poseen versiones de software desactualizadas. Los servicios observados, junto con las vulnerabilidades identificadas se detallan a continuación: <cuadro con tres columnas 'Software', 'Versión' y 'CVEs'>  <agregar Y ADAPTAR si corresponde> NOTA: Esta observación fue realizada en base a la información obtenida de algunos de los encabezados de los recursos afectados. Es posible que un producto actualizado se refleje incorrectamente en los encabezados como desactualizado. En esos escenarios, esta observación debería ser desestimada. A si mismo, los CVEs listados son sólo una referencia de las vulnerabilidades existentes.",
     impact: "Un individuo malicioso podría comprometer con mayor facilidad los servicios afectados, ya que las versiones de software asociadas a los mismos poseen vulnerabilidades y/o debilidades de seguridad previamente reportadas. Las vulnerabilidades mencionadas son de conocimiento público y los detalles de las mismas se encuentran disponibles. En consecuencia, un individuo malicioso podría intentar explotarlas para comprometer la confidencialidad, integridad y/o disponibilidad de la información a través de los servidores afectados.",
     recommendation: "Se recomienda analizar la posibilidad de actualizar los servicios afectados a las versiones recomendadas por los fabricantes o bien aplicar todos los parches de seguridad disponibles.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP / INTERNO",
     name: "Software no soportado por el fabricante",
     observation: "Se ha observado que el recurso afectado presenta un servicio cuya versión de software se encuentra fuera de soporte por parte del fabricante. NOTA: Esta observación fue realizada en base a la información obtenida de los encabezados de los recursos afectados. Es posible que un producto actualizado se refleje incorrectamente en los encabezados como desactualizado. En esos escenarios, esta observación debería ser desestimada. Además, los CVEs listados para cada producto son solo un ejemplo de todas las vulnerabilidades existentes.",
     impact: "El software fuera de soporte podría contener vulnerabilidades, que, en su mayoría, son de conocimiento público y se encuentran disponibles en internet. En consecuencia, un usuario malintencionado podría intentar explotarlas para comprometer la integridad, confidencialidad y/o disponibilidad de la información alojada en los recursos afectados. Además, mantener instalado software no soportado por el fabricante, no permite que se generen actualizaciones de seguridad adecuadamente.",
     recommendation: "Se recomienda analizar la posibilidad de actualizar el software afectado a versiones más recientes y estables del mismo, es decir, versiones que se encuentren soportadas por el fabricante, en particular en aquellos equipos que se encuentren más expuestos y que son considerados críticos. Para aquellos sistemas en los cuales no pueda migrarse el software, controles adicionales deberían aplicarse (como segregación mediante firewalls y ACLs) para restringir el acceso a los mismos.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "ARQUITECTURA",
     name: "Solución OTP Sensible a Ataques de Phishing",
     observation: "Como consecuencia del análisis realizado se ha concluido que la solución de claves OTP es sensible a ataques de phishing debido a que el algoritmo que soporta la solución genera claves OTP incrementales.",
     impact: "Ante un ataque de phishing sobre la autenticación en SIB se podrían capturar los datos del usuario, incluido su clave otp. Dicha clave permanecerá valida en los sistemas de IB hasta que el usuario original se identifique en la aplicación real. Asimismo, se podrían capturar mas de una clave otp a fin de aumentar la probabilidad de éxito del ataque.",
     recommendation: "Se recomienda analizar la posibilidad la factibilidad técnica y de negocio de desarrollar e implementar un control específico con el objetivo de detectar proactivamente casos de phishing y, en caso de que este se materialice, poder tomar acciones sobre las cuentas afectadas por dicho ataque. De manera complementaria se recomienda fortalecer las campañas de concientización de usuarios respecto a los ataques mas comunes, como ser el caso de phishing.",
     severity: "ALTO",
     complex: "N/A"
    },
    {
     type: "INTERNO",
     name: "Stored procedure “xp_cmdshell” activo",
     observation: "Se ha observado que el stored procedure “xp_cmdshell” se encuentra activo en la base de datos Microsoft SQL Server afectado.",
     impact: "Un usuario malintencionado con acceso a la base de datos podría utilizar el stored procedure para correr comandos de sistema operativo para intentar comprometer el sistema, como crear usuarios con permisos administrativos a nivel local. Obtener un usuario válido en el sistema puede ser de utilidad para lograr ataques de mayor envergadura, como intentar escalar privilegios dentro de la estructura de la red interna.",
     recommendation: "Se recomienda analizar la posibilidad de revisar la lista de stored procedures potencialmente inseguros activos en Microsoft SQL Servers y considerar removerlos, en caso de no ser requeridos por razones de negocio. En caso que sean requeridos, los servidores de Microsoft SQL pueden ser configurados para correr con niveles bajos de permisos para mitigar la posibilidad de ataques y exposición de información potencialmente sensible. Nota: Por tratarse de un análisis de pruebas de penetración interna, no se realizó una auditoría detallada de la configuración de la base de datos. Otras vulnerabilidades potenciales podrían estar presentes y no haber sido identificadas. Se recomienda realizar una revisión de configuración para analizar si los sistemas asociados a bases de datos cumplen con las mejores prácticas sugeridas por la industria.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Transferencia de zona sobre servicio de DNS",
     observation: "Se verificó que la configuración de este servidor DNS permite acceder a información sobre servidores y arquitectura de red de <CLIENTE>.nEsta situación se comprobó para los siguientes dominios:",
     impact: "Se obtiene información sobre la denominación de la plataforma tecnológica de la Compañía, que podría ser utilizada por un usuario malintencionado para focalizar sus ataques.",
     recommendation: "Se recomienda corregir la configuración del servidor DNS para que no permita realizar 'Zone Transfer' a usuarios externos a la Entidad, y/o limitarlo a aquellos usuarios externos autorizados, como ser los ISP’s con los que opera <CLIENTE> si así fuera necesario.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Transferencia de zona sobre servicio de DNS",
     observation: "Se verificó que la configuración de este servidor DNS interno permite acceder a información sobre servidores y arquitectura de la red Interna de <CLIENTE> realizando una transferencia de zona. Dicha situación se comprobó para el dominio xxxxx.",
     impact: "Dicha observación permitiría a un usuario malintencionado interno conocer en qué direcciones IP´s se encuentran alojados los servidores y estaciones de trabajo del dominio redlink.com.ar en la Red Interna. Adicionalmente permite obtener información sobre la denominación de las plataformas tecnológicas utilizadas por la Entidad, que podría ser utilizada por un usuario malicioso para focalizar sus ataques.",
     recommendation: "Se recomienda corregir la configuración del servidor DNS para que no permita realizar transferencia de zona a usuarios internos de la Entidad, y/o limitarlo a aquellos usuarios internos autorizados, de ser necesario.",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Usuarios con contraseñas triviales",
     observation: "Se ha observado que existe usuarios creados por defecto en las instalación del Panel de Control de XXX, los cuales se encuentran activos  y cuentan con contraseñas triviales. nRecurso afectado:",
     impact: "Un potencial usuario malintencionado, podría realizar ataques fuerza bruta o adivinación de contraseñas sobre los recursos de la infraestructura que requieran autenticación, a fin de obtener acceso a la misma, y comprometer la disponibilidad de dicho equipo o la confidencialidad e integridad de la información almacenada en el mismo.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados, o que permitan acceder  a recursos críticos de negocio.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "ATM",
     name: "Usuarios con contraseñas triviales",
     observation: "Se ha observado que los usuarios creados por defecto en el sistema operativo, en la aplicación Agilis y en la consola de supervisor del NCR, cuentan con contraseñas triviales. ",
     impact: "Un atacante podría realizar ataques de fuerza bruta o adivinación de contraseñas sobre los recursos de la infraestructura que requieran autenticación, a fin de obtener acceso a la misma y comprometer dicho equipo o la información almacenada en el mismo.",
     recommendation: "Se recomienda analizar la factibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados o que permitan acceder a recursos críticos de negocio.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Usuarios con contraseñas triviales en servidores",
     observation: "En ciertos de los sistemas de <CLIENTE> se detectaron usuarios con contraseñas triviales. Estas permiten acceder al servidor y a la información almacenada en éste. Algunos de estos usuarios son:",
     impact: "Un potencial usuario malintencionado o usuario malintencionado podría realizar ataques de fuerza bruta o adivinación de contraseñas sobre el sistema, a fin de obtener acceso a la línea de comandos del mismo, y comprometer la disponibilidad de dicho equipo o la confidencialidad e integridad de la información almacenada en éste.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en los recursos de infraestructura, en particular para aquellos que cuenten con máximos privilegios asignados, o que permitan acceder a recursos críticos de negocio.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Usuarios de dominio con contraseñas triviales",
     observation: "Se ha observado que existen numerosos usuarios pertenecientes al dominio <dominio>, los cuales se encuentran activos  y cuentan con contraseñas triviales.",
     impact: "Un potencial usuario malintencionado, podría realizar ataques de adivinación de contraseñas sobre los recursos del dominio que requieran autenticación, a fin de obtener acceso al mismo, y comprometer la disponibilidad de dicho equipo o la confidencialidad e integridad de la información almacenada en el mismo.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de definir e implementar contraseñas complejas para todos los usuarios definidos en el dominio, en particular para aquellos que cuenten con máximos privilegios asignados, o que permitan acceder  a recursos críticos de negocio.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Usuarios por Defecto",
     observation: "Como resultado del análisis de cuentas de usuario activas en la base de datos y servidor, se ha observado la existencia de usuarios por defecto. A continuación se presenta un detalle de las cuentas de usuario mencionadas:nOTP-PR: nDBSNMPnNOTA: Si bien el usuario identificado es utilizado para monitoreo, se recomienda deshabilitarlo",
     impact: "Los usuarios mencionados son creados por defecto al momento de la instalación de la instancia de la base de datos y sistema operativo, y son seleccionados como objetivo en númerosos ataques, como ser la ejecución de pruebas de adivinación de contraseñas por fuerza bruta.",
     recommendation: "Se recomienda analizar la posibilidad de deshabilitar las cuentas de usuario creadas por defecto. En caso que las mismas sean requeridas por el Negocio, se recomienda habilitar un esquema de registro de actividades y monitoreo de las acciones efectuadas por las cuentas mencionadas, a fin de detectar usos no autorizados de las mismas.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "INTERNO",
     name: "Usuarios y contraseñas configurados con el mismo valor",
     observation: "Se ha observado usuarios y contraseñas configurados con el mismo valor. En particular, administradores locales fueron identificados en los siguientes recursos afectados del entorno Windows: Además, Deloitte identificó una combinación de usuario y contraseña configurada con el mismo valor, en el entorno Unix:",
     impact: "El uso de usuarios y contraseñas con el mismo valor podría permitir que un usuario malintencionado logre acceso a los sistemas, comprometiendo la integridad, confidencialidad y disponibilidad de la información almacenada. Además, obtener acceso a una cuenta en el sistema puede ser el primer paso para lograr intentar escalar privilegios tanto locales como a nivel de dominio.",
     recommendation: "Se recomienda analizar la posibilidad de modificar el valor de las contraseñas asociadas a las cuentas afectadas, asegurando que las mismas cumplan con la complejidad requerida según las políticas de contraseñas empleadas en la empresa. Asimismo, se recomienda analizar la posibilidad de modificar las políticas de contraseñas actuales, tanto a nivel dominio como a nivel local, para evitar que las cuentas puedan ser configuradas con valores de nombre de usuario y contraseña iguales.",
     severity: "MEDIO",
     complex: "BAJA"
    },
    {
     type: "INTERNO",
     name: "Usuarios y contraseñas embebidos en código fuente",
     observation: "Se encontraron usuarios y contraseñas embebidos en el código fuente de al menos una aplicación de monitoreo. La utilización de claves embebidas en el código fuente puede resultar en problemas de seguridad.",
     impact: "Un usuario con acceso al código fuente de alguno de estas de estas páginas web, podría utilizar dichos usuarios y contraseñas para acceder a distintos equipos de la red interna.",
     recommendation: "Se recomienda analizar la posibilidad de no incluir en el código fuente de las aplicaciones información que comprometa la seguridad de recursos de la red interna. nEn caso de no poder ser eliminados, se deberá analizar los scripts existentes con claves embebidas para reducir al mínimo la utilización de claves en archivos. ",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO / WEBAPP",
     name: "Usuarios y contraseñas embebidos en scripts",
     observation: "Se encontraron usuarios y contraseñas embebidos en scripts con permiso de lectura en los recursos afectados. La utilización de claves embebidas en scripts puede resultar en problemas de seguridad.",
     impact: "Un usuario con acceso al código de alguno de estos scripts, podría utilizar dichos usuarios y contraseñas para comprometer la base de datos del recurso afectado.",
     recommendation: "Se recomienda analizar la posibilidad de no incluir en el código de scripts información que comprometa la seguridad de recursos de la red. En caso de no poder ser eliminados, se deberá analizar los scripts existentes con claves embebidas para reducir al mínimo la utilización de claves en archivos.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "CODIGO FUENTE MOVIL",
     name: "Utilización de método inseguro de autenticación",
     observation: "De la revisión de código fuente de los launchers de Ipad y Android, Se ha observado que, a pesar de cifrar las credenciales de acceso antes de enviarlas al servidor, las aplicaciones móviles utilizan una clave de cifrado previamente proporcionada por el mismo servidor. Esta clave se transmite utilizando un canal de comunicación no cifrado. Nota: Si al realizar el pasaje a producción se utiliza un canal de comunicación cifrado (HTTPs), el riesgo se encuentra mitigado.",
     impact: "La debilidad observada podría permitir a un atacante con moderados conocimientos técnicos, intentar interceptar la comunicación cliente-servidor, e intentar visualizar la clave utilizada para cifrar las credenciales de acceso. Posteriormente, el atacante podría intentar utilizar dicha clave para obtener acceso a las credenciales (cifradas) enviadas por el usuario.",
     recommendation: "De utilizar un canal de comunicación no cifrado, se recomienda evaluar la factibilidad técnica y económica de implementar el mecanismo de autenticación más robusto “Digest access authentication”, sobre las aplicaciones afectadas, el cual utiliza el mecanismo de cifrado MD5.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO",
     name: "Utilización de métodos inseguros de autenticación",
     observation: "El recurso afectado permite la autenticación basada en el método LANMAN.nnEl recurso afectado identificado es:nnCabe destacar que como parte de la prueba realizada, esta vulnerabilidad fue aprovechada comprometiendo las credenciales de todos los usuarios locales del servidor.",
     impact: "El método de autenticación utilizado, LANMAN, dispone de un mecanismo de cifrado débil y simple de decodificar. un usuario malintencionado ubicado en la red interna, podría intentar analizar el tráfico transmitido por la red para capturar y decodificar contraseñas de los usuarios de <CLIENTE> por medio de ataques de fuerza bruta.",
     recommendation: "Se recomienda considerar la factibilidad técnica de implementar métodos de autenticación más robustos como ser NTLM v2 o NTLM v1.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "INTERNO",
     name: "Utilización de protocolos de administración no cifrados",
     observation: "Se identificó la presencia de servicios activos de administración remota en los diversos equipos tecnológicos, cuyo protocolo no cifra el canal de comunicaciones.",
     impact: "La utilización de servicios de transmisión de archivos y administración de servidores que no proveen mecanismos de cifrado, no permite garantizar la confidencialidad e integridad de las credenciales de los usuarios que utilizan el servicio (usuario y contraseña), ni de la información transmitida a través de los mismos (archivos, configuraciones, etc.).",
     recommendation: "Se recomienda, en caso de ser soportado, evaluar la factibilidad de reemplazar los servicios mencionados por versiones seguras, tales como SSH para conexiones de administración o SFTP/SCP para copias de archivos seguras.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Utilización de Recursos del Sistema",
     observation: "Se observó que no se encuentra restringida la utilización de recursos del sistema (CPU, memoria) por parte de los usuarios de la base de datos. A saber, el parámetro de configuración RESOURCE_LIMIT posee el valor False asignado.",
     impact: "La falta restricciones sobre la utilización de recursos del sistema por parte de los usuarios de la base de datos, incrementa el riesgo de ocurrencia de denegaciones o degradaciones en el servicio prestado, debido a la utilización excesiva de recursos disponibles (memoria, CPU).",
     recommendation: "Analizar la factibilidad de implementar restricciones en el uso de los recursos del sistema por parte de los usuarios de la base de datos, a través de la configuración del siguiente parámetro: RESOURCE_LIMIT = TRUE.",
     severity: "BAJO",
     complex: "N/A"
    },
    {
     type: "CÓDIGO FUENTE",
     name: "Validación de Datos Entrantes",
     observation: "Se ha observado que la aplicación afectada podría presentar debilidades en el esquema de validación de datos ingresados por el usuario. Dicha debilidad podría permitir inyectar caracteres en parámetros transmitidos al servidor utilizando el método HTTP POST. Adicionalmente, dichos datos enviados no son procesados por un método de eliminación de caracteres especiales.",
     impact: "Un usuario podría ingresar datos no válidos a la aplicación pudiendo alterar su normal funcionamiento para generar mensajes de error que revelen  información de la aplicación como también producir buffer overflows.",
     recommendation: "Se recomienda analizar la posibilidad de verificar los datos  ingresados a la aplicación por parte del usuario validando su tipo y verificando que se reciban las longitudes / cantidades de caracteres esperados.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "MÓVIL",
     name: "Variables Críticas en Memoria No Protegida",
     observation: "Como consecuencia de las pruebas ejecutadas sobre la aplicación Móvil, se han detectado en memoria temporal variables, las cuales podrían contener información critica, sin estar protegidas.nDichas variables fueron descubiertas a través del uso de herramientas que permiten realizar tareas de “debug” y monitoreo de memoria, mientras la aplicación era ejecutada.",
     impact: "Un usuario malintencionado o usuario malintencionado que tiene acceso al dispositivo donde se está ejecutando la aplicación podría ejecutar diferentes herramientas de monitoreo de recursos para capturar información sensible. En caso de que la semilla que genera las claves temporales no este protegida, el usuario malintencionado podría capturar esta información para realizar ataques enfocados.",
     recommendation: "Variables que contienen información crítica y que son protegidas en su persistencia, deben mantenerse aseguradas durante todo el proceso de uso. En consecuencia, Se recomienda analizar la posibilidad la factibilidad técnica de utilizar memoria protegida o técnicas de ofuscación en aquellas variables que contengan información critica de aplicación.",
     severity: "MEDIO",
     complex: "ALTA"
    },
    {
     type: "CONFIGURACIÓN",
     name: "Versión de Sistema Operativo",
     observation: "Se ha observado que existen actualizaciones de seguridad del sistema operativo que no se encuentran instaladas en los recursos afectados.nA saber la misma es:n- Generic_147440-12nLa versión instalada es SunOS 5.10 Generic_142900-03 sun4u.Un ",
     impact: "La mayoría de las actualizaciones de seguridad corrigen vulnerabilidades de seguridad conocidas, las cuales podrían ser aprovechadas por un usuario o software malicioso a fin de comprometer el sistema. Algunas de las actualizaciones de seguridad faltantes resultan esenciales para mitigar vulnerabilidades críticas en  el sistema operativo.",
     recommendation: "Se recomienda aplicar todas las actualizaciones de seguridad críticas existentes para el sistema operativo.",
     severity: "MEDIO",
     complex: "N/A"
    },
    {
     type: "EXTERNO",
     name: "Votación utilizando CPF´s generados automáticamente",
     observation: "Se verificó que cuando los usuarios se registran e ingresan a la aplicación Web, la aplicación no valida que el CPF se encuentre asociado a la persona correcta.",
     impact: "Como consecuencia de dicha observación se identificó que es posible votar de forma manual, en las diferentes categorías de la aplicación, utilizando CPF generados aleatoriamente con una herramienta.",
     recommendation: "Se recomienda analizar la posibilidad la posibilidad de implementar un esquema de registración de cuentas de usuario en el sitio, que cuente con una funcionalidad Web de “Activación del usuario”, la cual envié un link de activación al usuario por correo electrónico.nnLa implementación de dicha funcionalidad, permitiría que los CPF´s sean asociados consistentemente a una única dirección de correo electrónico valida y a un único usuario registrado en el sitio.",
     severity: "ALTO",
     complex: "BAJA"
    },
    {
     type: "EXTERNO",
     name: "VPN - Autenticación con Pre-Shared Key en Modo Agresivo",
     observation: "Se ha identificado una VPN (Virtual Private Network) con autenticación basada en 'Aggressive Mode Pre-Shared Key'.",
     impact: "El método de autenticación por 'Pre-Shared Keys en modo Agresivo' es uno de los métodos de autenticación disponibles para VPN’s menos seguros, ya que posibilita que un usuario malintencionado sea capaz de:nn1.- Obtener el HASH de la clave de autenticación;n2.- Ejecutar un ataque por fuerza bruta 'Offline' para intentar obtener la clave de acceso;n3.- Intentar acceder a la red interna de <CLIENTE> a través de la VPN comprometida.",
     recommendation: "Se recomienda analizar la posibilidad técnica y de negocio de inhabilitar el 'Modo Agresivo' e implementar un mecanismo de autenticación de mayor robustez que no esté basado en la utilización de 'Pre-Shared Keys'.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "EXTERNO",
     name: "VPN (PPTP) expuesta en internet",
     observation: "Se ha observado un recurso que cuenta con una VPN PPTP expuesta a internet.",
     impact: "El uso de este protocolo podría exponer los hashes de las credenciales utilizadas para autenticarse contra el servidor.nUna vez conocidos estos hashes, un usuario malintencionado podría efectuar una serie de ataques sobre esos hashes para luego obtener acceso a la red interna a través de la VPN que usa PPTP.nEn el siguiente URL se presenta un análisis desde el punto de vista de la seguridad del protocolo:nhttp://www.schneier.com/paper-pptpv2.html",
     recommendation: "Se recomienda analizar la posibilidad técnica de reemplazar esta implementación de VPN por otra que no exponga hashes o credenciales utilizadas para la conexión. Por ejemplo, se podría considerar soluciones alternativas que ofrecen capacidades de encriptación más fuertes como IPSec o SSL VPN.",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP/EXTERNO/INTERNO",
     name: "Vulnerabilidad de “Directory Traversal” detectada.",
     observation: "El servidor web afectado es susceptible a la vulnerabilidad conocida como “Directory Traversal”. De esta manera, al acceder a URLs especialmente diseñadas, se pueden obtener archivos que forman parte del sistema de archivos del servidor de manera anónima. En particular, se obtuvieron diversos archivos del sistema operativo tales como: “system.ini”, “win.ini”, “hosts”, así como también los respaldos del registro de Windows. ",
     impact: "Un individuo malicioso puede aprovechar esta vulnerabilidad para descargar anónimamente archivos almacenados en el servidor. Esto podría proveerle a un individuo malicioso acceso a información sensible tales como credenciales de usuario y/o archivos de configuración los cuales pueden ser útiles para la planificación de ataques de mayor envergadura.",
     recommendation: "Se recomienda filtrar el acceso al servicio web afectado, de manera tal que no pueda ser accedido desde Internet. Si el servicio web accesible desde Internet es requerido por el negocio, se recomienda analizar el código fuente de la aplicación publicada para determinar si la vulnerabilidad encontrada se encuentra asociada a la misma. Además, se recomienda analizar si el servidor posee todas las actualizaciones de seguridad correspondientes a la versión del sistema operativo.",
     severity: null,
     complex: null
    },
    {
     type: "EXTERNO",
     name: "Vulnerabilidad de OpenSSL “Heartbleed”",
     observation: "El recurso está afectado por la vulnerabilidad de OpenSSL “Heartbleed” (CVE-2014-0160).",
     impact: "Un usuario malicioso podría tomar ventaja de la vulnerabilidad de OpenSSL “Heartbleed” con el objetivo de obtener información sensible almacenada en la memoria del servidor, la cual podría incluir llaves privadas (Private Keys), credenciales, y cookies de sesión. Además, si se obtuviera la llave privada del servidor utilizada en los protocolos SSL/TLS, esto permitiría que un usuario malicioso descifre la comunicación SSL/TLS entre el servidor y los clientes.",
     recommendation: "Se recomienda considerar actualizar la versión del software OpenSSL a la última versión, con el objetivo de asegurarse de que no sea vulnerable a “Heartbleed”. Además, luego de actualizar el software afectado, se recomienda considerar revocar los certificados SSL/TLS, generando nuevos pares de llaves y emitir nuevamente cada certificado usado en el servidor. Para más información, por favor, visite el siguiente enlace: http://heartbleed.com/",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Vulnerabilidad de redirección abierta",
     observation: "Se ha observado la existencia un recurso susceptible a redirección abierta, lo cual podría permitirle a un individuo malicioso realizar ataques de phishing a usuarios legítimos de la aplicación. nnURL del recurso afectado: <COMPLETAR>",
     impact: "Un individuo malicioso puede utilizar las redirecciones abiertas para realizar ataques de phishing e intentar obtener acceso no autorizado a la aplicación. Para lograrlo, podría enviar a usuarios legítimos un enlace (por ejemplo, vía email) especialmente construido para redireccionar al navegador de la víctima a un sitio malicioso (por ejemplo, un sitio con un formulario de autenticación alternativo). Si la víctima ingresara sus credenciales, las mismas podrían ser capturadas por el individuo malicioso, impactando negativamente en la reputación de la compañía y potencialmente dañando la confianza de con sus clientes.",
     recommendation: "Se recomienda modificar el código fuente de la funcionalidad afectada eliminando las redirecciones abiertas y permitiendo sólo aquellas direcciones que sean estrictamente requeridas para el normal funcionamiento de la aplicación, según los requerimientos del negocio. Además, se recomienda analizar todas las funcionalidades similares de la aplicación y asegurarse que la recomendación anterior sea aplicada de igual manera.nPara más información, por favor, visite el siguiente enlace: http://cwe.mitre.org/data/definitions/601.html (enlace con contenido en Inglés)",
     severity: "BAJO",
     complex: "BAJA"
    },
    {
     type: "WEBAPP",
     name: "Vulnerabilidad de renegociación insegura SSL",
     observation: "Se ha observado que el servidor web afectado actualmente soporta una renegociación insegura en el protocolo de cifrado SSL.",
     impact: "El propósito de una negociación SSL es elegir el protocolo más seguro que tanto el cliente como el servidor puedan soportar. Ciertas implementaciones de SSL son susceptibles a una vulnerabilidad de negociación remota. Un usuario malicioso podría aprovechar esta vulnerabilidad para forzar una negociación utilizando, por ejemplo, SSL versión 2 aún cuando existan opciones más seguras, e intentar realizar un ataque del tipo man-in-the-middle, enviando una solicitud sin autenticación que es procesada retroactivamente por el servidor.",
     recommendation: "Se recomienda considerar la posibilidad de actualizar el software afectado a la última versión recomendada, o aplicar todos los parches de seguridad provistos por el fabricante. Además, se recomienda monitorizar de manera regular la liberación de parches de seguridad por parte del proveedor de software para todos los componentes que dan soporte a la aplicación.",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "EXTERNO",
     name: "Webshell",
     observation: "Durante el brute forcé de directorios en el <CLIENTE>.com.mx se descubrió la existencia del de la consola “webstat”.",
     impact: null,
     recommendation: "1. Se recomienda desconectar de internet el servidor afectado, para evitar mayores daños por parte de usuarios malintencionados externos.n2. Se recomienda seguir los procedimientos de las políticas de manejo de incidentes, en caso de existir, establecidos por <CLIENTE>.n3. Finalmente restablecer el servidor a partir de backups en un ambiente controlado, para posterior ejecución de pruebas de intrusión sobre el mismo.",
     severity: "CRITICA",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "Inadecuada validación de parámetros (cabecera Host)",
     observation: "Se ha observado que la aplicación genera contenido dinámicamente a partir del valor de la cabecera HTTP Host, sin realizar previamente una adecuada validación de parámetros de entrada y encoding de salida. En particular, la aplicación acepta peticiones HTTP que podrían incluir <un valor arbitrario de la cabecera Host / caracteres especiales peligrosos (como ser '</>') en la cabecera Host>, los cuáles son reflejados en la página resultante, permitiendo a un individuo malicioso <generar enlaces de redirección arbitrarios / inyectar código HTML o JavaScript en la respuesta HTTP>, anónimamente.",
     impact: "Una aplicación web que utiliza el valor de la cabecera Host para generar contenido del sitio web dinámicamente podría ser vulnerable a varios ataques, siempre que no se realice una adecuada validación de parámetros de entrada y encoding de salidas para el valor de la cabecera mencionada. En particular, esto podría permitir a un individuo malicioso <generar enlaces a otro dominio, el cuál podría ser controlado por él / insertar programas maliciosos (scripts) dentro de páginas web dinámicamente generadas las cuáles podrían ser accedidas por las víctimas>. Si un individuo malicioso es capaz de controlar el contenido de la cabecera Host enviada por la víctima (por ejemplo, mediante la realización de un ataque de 'man-in-the-middle' activo), este podría generar escenarios de ataque más complejos con el objetivo de obtener credenciales de autenticación u otra información confidencial de la víctima, manipular o apropiarse de cookies de sesión y / o ejecutar código arbitrario en el equipo de la víctima.",
     recommendation: "Se recomienda analizar la posibilidad de evitar el uso de la cabecera Host para generar contenido dinámicamente en el sitio web (como ser enlaces de redirección). Además, se recomienda analizar la posibilidad de implementar una apropiada validación para todos los parámetros procesados por la aplicación, ya sean de entrada o de salida, en el código que se ejecuta en el servidor. La misma debería determinar el tipo de dato esperado, junto con su longitud y caracteres permitidos, descartando toda desviación. Cabe destacar que dichas validaciones no deberían acotarse a aquellos parámetros y recursos presentados a modo de ejemplo, sino que se recomienda extender dicha implementación a todos los parámetros de la aplicación. Además, se recomienda realizar un análisis detallado a nivel de código fuente, para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación. Finalmente, como nivel adicional de seguridad, se recomienda considerar la implementación de un firewall de capa de aplicación para bloquear solicitudes HTTP maliciosas. Para más información, por favor, visite el siguiente enlace: https://www.owasp.org/index.php/Data_Validation (enlace con contenido en Inglés)",
     severity: "BAJO",
     complex: "ALTA"
    },
    {
     type: "WEBAPP",
     name: "Ataque de cabecera Host posible",
     observation: "Se ha observado que el sitio web afectado es vulnerable al ataque de cabecera Host. Este ataque representa una debilidad dentro de una aplicación, y ocurre debido a una inadecuada validación de parámetros de la información contenida en la cabecera Host, en la entrada y la salida, la cual es empleada para <EJEMPLO: generar un enlace de reestablecimiento de contraseña que es enviado al usuario vía correo electrónico). Al usar la <nombre de la opción> dentro de la <nombre de la función>, es posible inyectar <EJEMPLO: URLs arbitrarias que serán reflejadas como parte del enlace de reestablecimiento de contraseñas>. La función afectada es:n• Función afectadan• URL afectadan• Parámetro afectado: cabecera Host (POST/GET)n• Payload",
     impact: "Una aplicación web que emplea el valor de la cabecera Host para generar dinámicamente generar <EJEMPLO: un enlace de reestablecimiento de contraseña> podría ser vulnerable a ataques, siempre que no se realice una adecuada validación de parámetros para el valor de la cabecera mencionada, para la entrada y la salida. En particular, esto podría permitir a un individuo malicioso <EJEMPLO: inducir a un usuario legítimo de la aplicación a visitar un sitio web controlado por él, mediante el envío de una URL especialmente confeccionada en el cuerpo de un correo electrónico enviado al usuario desde una dirección de correo electrónico perteneciente a <CLIENTE>. Si es exitoso, este ataque podría permitir al individuo malicioso a obtener credenciales de autenticación u otra información confidencial de la víctima, y / o intentar descargar software malicioso en el equipo de la víctima, con el fin de intentar comprometerlo.",
     recommendation: "Se recomienda analizar la posibilidad de evitar el uso de la cabecera Host para generar contenido dinámicamente en el sitio web (como ser enlaces de redirección). Además, se recomienda analizar la posibilidad de implementar una apropiada validación para todos los parámetros procesados por la aplicación, ya sean de entrada o de salida, en el código que se ejecuta en el servidor. La misma debería determinar el tipo de dato esperado, junto con su longitud y caracteres permitidos, descartando toda desviación. Cabe destacar que dichas validaciones no deberían acotarse a aquellos parámetros y recursos presentados a modo de ejemplo, sino que se recomienda extender dicha implementación a todos los parámetros de la aplicación. Además, se recomienda realizar un análisis detallado a nivel de código fuente, para identificar y verificar la existencia de oportunidades de mejora en el esquema de validación de parámetros de las distintas funcionalidades de la aplicación. Finalmente, como nivel adicional de seguridad, se recomienda considerar la implementación de un firewall de capa de aplicación para bloquear solicitudes HTTP maliciosas. Para más información, por favor, visite el siguiente enlace: https://www.owasp.org/index.php/Data_Validation (enlace con contenido en Inglés)",
     severity: "MEDIO",
     complex: "MEDIA"
    },
    {
     type: "WEBAPP",
     name: "Método HTTP TRACE habilitado",
     observation: "Se ha observado que los servicios afectados soportan la utilización del método HTTP TRACE. Este método, bajo ciertas condiciones, podría ser aprovechado por individuos maliciosos para ejecutar ataques del tipo Cross-Site Tracing.nEl atributo de seguridad HTTPOnly es utilizado para proteger las cookies de sesión de los usuarios autenticados en las aplicaciones Web. De esta manera, al código JavaScript ejecutado en el navegador no se le permite acceder a su contenido. Sin embargo, si <se emplearan cookies de sesión y > el método TRACE pudiera ser empleado para acceder recursos en el servidor de la aplicación, desde el navegador de una víctima se enviaría la cookie de sesión como parte del request HTTP y el servidor respondería reflejando el contenido del request en el cuerpo del response HTTP. De esta manera, sería posible acceder al contenido de la cookie de sesión por medio de código JavaScript, eludiendo la protección impuesta por el atributo HTTPOnly.n",
     impact: "Si una aplicación que reside en el servicio afectado tuviera algún componente vulnerable a Cross-Site Scripting (XSS), aun cuando la cookie de sesión fuera protegida mediante el atributo HTTPOnly, un individuo malicioso podría aprovechar la disponibilidad del método TRACE para realizar el ataque conocido como Cross-Site Tracing (XST). Mediante la inyección de código JavaScript especialmente diseñado en el recurso vulnerable a XSS, el individuo malicioso podría lograr que la cookie de sesión sea reflejada en el cuerpo del response HTTP y así acceder a su contenido, para ingresar a la aplicación en nombre de la víctima y obtener información sensible o realizar operaciones privilegiadas en su nombre.n",
     recommendation: "Se recomienda analizar si el método HTTP TRACE es requerido por el negocio, y deshabilitarlo en caso de no ser requerido. De igual manera, se recomienda revisar los estándares de configuración de los servidores para asegurar que los métodos HTTP innecesarios se encuentren deshabilitados antes de promover un servidor a producción.nPara más información, por favor, visite los siguientes enlaces (con contenido en inglés): n• http://httpd.apache.org/docs/2.0/en/mod/core.html#traceenablen• http://capec.mitre.org/data/definitions/107.htmln",
     severity: "BAJO",
     complex: null
    },
    {
     type: "WEBAPP",
     name: "HTTP Strict Transport Security (HSTS) no aplicada",
     observation: "Se ha observado que el encabezado de respuesta HTTP Strict Transport Security no está siendo configurado por <las aplicaciones> web cuando se accede a ellas. Este encabezado de seguridad se utiliza para informar a los navegadores que las aplicaciones web sólo se deben acceder a través de HTTPS, lo que impide el uso de canales sin cifrar.",
     impact: "Si una aplicación web no impide su acceso a través de un canal no cifrado (HTTP), entonces un usuario válido puede ser víctima de un tipo de ataque de tipo hombre en el medio como los basados en SSL Stripping o usando un certificado SSL no válido. Que puede ser utilizado por una persona malintencionada para obtener acceso no autorizado a datos confidenciales o para acceder a la aplicación haciéndose pasar por la víctima.",
     recommendation: "Se recomienda analizar la posibilidad de revisar sus estándares de configuración para la protección de canales de comunicación de aplicaciones web para asegurar que la estrategia de remediación es consistente dentro de la organización para aplicaciones basadas en web.nPara información adicional, por favor referirse al siguiente enlace (con contenido en inglés):n•thttps://hstspreload.appspot.com/",
     severity: "INFORMATIVO",
     complex: "ALTA"
    },
    {
     type: "MÓVIL",
     name: "Comunicación de datos en texto plano",
     observation: "Se identificó que el archivo de configuración “network_security_config.xml” se encuentra configurado con valores que se desvían de las directrices de la industria. En particular, el atributo “android:usesCleartextTraffic” se encuentra habilitado para un dominio específico.",
     impact: "Si el archivo de configuración de seguridad de la red tiene el atributo “android: usesCleartextTraffic” habilitado, un usuario malicioso podría tener acceso a información sensible en la aplicación mediante un ataque del tipo MITM (Man in the Middle).",
     recommendation: "Se recomienda considerar el análisis de los requerimientos funcionales y de negocio para determinar si el atributo “android:usesCleartextTraffic” debería permanecer habilitado en el archivo de configuración de seguridad de la red. Si no se requiere, se debería considerar configurar este atributo a 'false' para asegurarse de que la aplicación no permita trafico en texto plano para el dominio dado.",
     severity: "BAJO",
     complex: null
    },
    {
     type: "MÓVIL",
     name: "Aplicación vulnerable a TapJacking",
     observation: "Se ha observado que la aplicación es vulnerable a ataques de tapjacking. Similar a clickjacking en aplicaciones web, tapjacking ocurre cuando un individuo malicioso utiliza una interfaz de usuario falsa con la cual parece ser posible interactuar, pero en realidad, pasa eventos de interacción como pulsar con el dedo a una interfaz oculta detrás de esta.n",
     impact: "Usando esta técnica, un individuo malicioso podría engañar a un usuario para que realice acciones en la aplicación controlada por dicho individuo. ",
     recommendation: "Se recomienda utilizar la protección de tapjacking disponible en el Android SDK para todos los elementos de vista en la aplicación. El mecanismo de protección protege los elementos de vista individualmente y es necesario proteger explícitamente cada elemento usado. Usualmente el mecanismo es implementado llamando al método setFilterTouchesWhenObscured para el elemento a proteger o incluyendo el atributo “android:filterTouchesWhenObscured appropriatety=true” en el XML de diseño para cada uno de los elementos de vista.",
     severity: "BAJO",
     complex: null
    }
   ]