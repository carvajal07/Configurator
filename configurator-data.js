/* ============================================================================
   configurator-data.js  ·  FUENTE DE DATOS DEL DEMO
   ----------------------------------------------------------------------------
   Edita este archivo para cambiar clientes, productos, requerimientos, usuarios
   y el catálogo de CP. El HTML lo carga con <script src="configurator-data.js">,
   por lo que los cambios se ven al recargar configurator.html (incluso abriéndolo
   con doble clic / file://).

   Los CP provienen del Excel "Lista de chequeo Desarrollo (5X)_V1.xlsx".
   Cada CP: tipo (lista), modo (manual/auto), nombre, criterio (de aceptación),
   carga (evidencia) y asignadoA (usuario). El estado (pasó/no pasó) y las
   observaciones se diligencian en la vista "Lista de chequeo".

   NOTA: es JSON dentro de "window.CONFIGURATOR_DATA = {...}". Se usa un .js en
   vez de un .json porque los navegadores bloquean fetch() de .json en file://.
   ========================================================================== */
window.CONFIGURATOR_DATA = {

  "currentUser": "jhon",

  "usuarios": [
    { "id": "jhon",  "nombre": "Jhon Carvajal", "ini": "JC", "rol": "Especialista" },
    { "id": "maria", "nombre": "Maria López",   "ini": "ML", "rol": "Calidad" },
    { "id": "ana",   "nombre": "Ana Vega",      "ini": "AV", "rol": "Funcional" }
  ],

  "tiposChecklist": [
    { "key": "generales", "label": "Checklist generales", "canal": null,  "icon": "clipboard-outline",    "color": "var(--text-3)" },
    { "key": "PE",        "label": "Checklist PE",         "canal": "PE",  "icon": "printer",              "color": "var(--primary)" },
    { "key": "EN",        "label": "Checklist EN",         "canal": "EN",  "icon": "email-outline",        "color": "var(--info)" },
    { "key": "IMP",       "label": "Checklist IMP",        "canal": "IMP", "icon": "printer-3d",           "color": "var(--purple)" },
    { "key": "DIG",       "label": "Checklist DIG",        "canal": "DIG", "icon": "monitor",              "color": "var(--accent)" },
    { "key": "SMS",       "label": "Checklist SMS",        "canal": "SMS", "icon": "message-text-outline", "color": "var(--warn)" },
    { "key": "RET",       "label": "Checklist Retenciones / Dev / Inconsistencias", "canal": null, "icon": "backup-restore", "color": "var(--err)" }
  ],

  "clientes": [
    {
      "id": "0001_ITAU",
      "nombre": "ITAU",
      "productos": [
        {
          "id": "MultiExtracto",
          "nombre": "MultiExtracto",
          "canales": ["PE", "EN", "IMP", "DIG", "SMS"],
          "requerimientos": [
            { "id": "FORE-001", "tipo": "FORE", "desc": "Configuración inicial CanalSMS" },
            { "id": "FORE-014", "tipo": "FORE", "desc": "Integración DIAN electrónica v2" },
            { "id": "RECA-022", "tipo": "RECA", "desc": "Gateway API · refactor SQS" }
          ]
        }
      ]
    },
    {
      "id": "0002_Proteccion",
      "nombre": "Proteccion",
      "productos": [
        {
          "id": "Extractos",
          "nombre": "Extractos",
          "canales": ["PE", "EN", "IMP"],
          "requerimientos": [
            { "id": "FORE-030", "tipo": "FORE", "desc": "Extractos mensuales PE/EN" },
            { "id": "RECA-011", "tipo": "RECA", "desc": "Ajuste plantilla email" }
          ]
        },
        {
          "id": "Certificados",
          "nombre": "Certificados",
          "canales": ["EN", "DIG"],
          "requerimientos": [
            { "id": "FORE-041", "tipo": "FORE", "desc": "Certificados tributarios digitales" }
          ]
        }
      ]
    },
    {
      "id": "0003_COLFONDOS",
      "nombre": "COLFONDOS",
      "productos": [
        {
          "id": "PensionesVoluntarias",
          "nombre": "PensionesVoluntarias",
          "canales": ["IMP", "EN"],
          "requerimientos": [
            { "id": "FORE-050", "tipo": "FORE", "desc": "Pensiones voluntarias" }
          ]
        }
      ]
    }
  ],

  "catalogoCp": [
    // ---- Generales (17) ----
    { "id": "GENERALES-CP01", "tipo": "generales", "modo": "manual", "nombre": "Las reglas de negocio deben coincidir con la totalidad de reglas del requerimiento", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP02", "tipo": "generales", "modo": "manual", "nombre": "Al realizar la prueba completa no debe quedar ningun warning", "criterio": "0", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP03", "tipo": "generales", "modo": "manual", "nombre": "No debe quedar ninguna variable desconectada en el Layout", "criterio": "0", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP04", "tipo": "generales", "modo": "manual", "nombre": "No debe quedar ningun objeto inutilizado en el layout", "criterio": "0", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP05", "tipo": "generales", "modo": "manual", "nombre": "No debe quedar ninguna variable duplicada en el desarrollo", "criterio": "0", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP06", "tipo": "generales", "modo": "manual", "nombre": "Se debe realizar validación de ortografía a los textos en los Layout", "criterio": "Cantidad palabras con mal ortografía", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP07", "tipo": "generales", "modo": "manual", "nombre": "Las dimensiones de las imágenes deben coincidir con la dimensión del image area", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP08", "tipo": "generales", "modo": "manual", "nombre": "¿El desarrollo contiene archivos alternos como recursos?", "criterio": "SI/NO", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP09", "tipo": "generales", "modo": "manual", "nombre": "Se debe realizar paso por presstmacher de las imágenes .tif", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP10", "tipo": "generales", "modo": "manual", "nombre": "los recursos tiff y pdf deben quedar cargados en el FSX (\\\\Cad-fsx-eks.cadena.com.co\\c$\\{Disco}\\{Cliente}\\{Producto}\\", "criterio": "vcs o mdeapp04", "carga": true, "asignadoA": "jhon" },
    { "id": "GENERALES-CP11", "tipo": "generales", "modo": "manual", "nombre": "Las imágenes deben quedar en variables", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP12", "tipo": "generales", "modo": "manual", "nombre": "los unicos used files que deben quedar son los de las fuentes", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP13", "tipo": "generales", "modo": "manual", "nombre": "Las fuentes deben quedar apuntando al ICM (vcs:\\\\Produccion\\General\\Fonts)", "criterio": "0", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP14", "tipo": "generales", "modo": "manual", "nombre": "Se debe agregar el detalle de todos los archivos a la ADT de anexos de procesamiento", "criterio": "SI", "carga": false, "asignadoA": "ana" },
    { "id": "GENERALES-CP15", "tipo": "generales", "modo": "manual", "nombre": "Realizr entrega a soporte (Reunión)", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP16", "tipo": "generales", "modo": "manual", "nombre": "¿Utiliza objetos compartidos entre hojas o la misma hoja en el layout?", "criterio": "En caso de utilizar objetos de esa forma, indique el nombre del objeto y el motivo por el cual se utiliza de esta forma, adicional esta configuración debe quedar registrada en el acta de entrega al equipo de soporte y en las reglas de negocio del producto, matriz de objetos copiados entre hojas", "carga": false, "asignadoA": "jhon" },
    { "id": "GENERALES-CP17", "tipo": "generales", "modo": "manual", "nombre": "Revisar que las variables se personalizaron de forma correcta", "criterio": "Total variable layout", "carga": false, "asignadoA": "jhon" },

    // ---- PE (5) ----
    { "id": "PE-CP01", "tipo": "PE", "modo": "auto", "nombre": "Cual es el peso del pdf individual mas pesado luego de cargar al portal", "criterio": "Menos de 1 Mb", "carga": false, "asignadoA": "jhon" },
    { "id": "PE-CP02", "tipo": "PE", "modo": "auto", "nombre": "Evidencia de cargue al portal de PE (S3)", "criterio": "Evidencia de carga al portal de PE", "carga": false, "asignadoA": "jhon" },
    { "id": "PE-CP03", "tipo": "PE", "modo": "auto", "nombre": "Prueba de carga e integración de PE con NT", "criterio": "Evidencia de carga realizada a PE y NT donde se observe comparación de cantidades entre PE y NT del ciclo de pruebas realizado y comparación de registros cargados entre los 2 sistemas", "carga": false, "asignadoA": "jhon" },
    { "id": "PE-CP04", "tipo": "PE", "modo": "manual", "nombre": "¿El producto posee agrupación de registros para empaquetado físico o realización de envíos unificados?", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "PE-CP05", "tipo": "PE", "modo": "manual", "nombre": "validar que funcionen los reenvios para todos los productos configurados", "criterio": "", "carga": false, "asignadoA": "jhon" },

    // ---- EN (12) ----
    { "id": "EN-CP01", "tipo": "EN", "modo": "auto", "nombre": "Indique el peso que tiene el pdf individual mas pesado generado para el proceso de envíos", "criterio": "Menor a 1MB", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP02", "tipo": "EN", "modo": "manual", "nombre": "¿Luego de realizar las pruebas las variables personalizadas del asunto las pintó de forma correcta?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP03", "tipo": "EN", "modo": "manual", "nombre": "Indique si el cuerpo de correo contiene personalización e indique cuales campos tiene personalizados", "criterio": "SI/NO y campos a personalizar", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP04", "tipo": "EN", "modo": "manual", "nombre": "¿Luego de realizar las pruebas las variables personalizadas las pintó de forma correcta?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP05", "tipo": "EN", "modo": "manual", "nombre": "La personalización del asunto del email coinciden con el cuerpo y el adjunto del email? Muestre un ejemplo", "criterio": "SI, muestre en el documento de evidencias un ejemplo donde claramente se relaciones la información", "carga": true, "asignadoA": "jhon" },
    { "id": "EN-CP06", "tipo": "EN", "modo": "manual", "nombre": "El dominio de envió de SocketLabs tiene todas las llaves DKIM y SPF configuradas", "criterio": "Evidencia de que todas las llaves DKIM están activas", "carga": true, "asignadoA": "ana" },
    { "id": "EN-CP07", "tipo": "EN", "modo": "manual", "nombre": "Indique el medio por donde obtuvo aprobación de las muestras email", "criterio": "Correo, dejar evidencia de aprobación", "carga": true, "asignadoA": "jhon" },
    { "id": "EN-CP08", "tipo": "EN", "modo": "manual", "nombre": "Los recursos de los emails fueron almacenados en AWS y puestos como públicos", "criterio": "Ruta de los recursos en AWS", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP09", "tipo": "EN", "modo": "manual", "nombre": "Se genero muestras de todos los tiempos de mail configurados y casuísticas posibles", "criterio": "Casuísticas probadas", "carga": true, "asignadoA": "jhon" },
    { "id": "EN-CP10", "tipo": "EN", "modo": "auto", "nombre": "Se realizo prueba y verificación de actualización de estados de los envíos en NT", "criterio": "Tablas verificadas", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP11", "tipo": "EN", "modo": "manual", "nombre": "Se comprobó funcionamiento e los enlaces o links enviados en la comunicación", "criterio": "Enlaces verificados", "carga": false, "asignadoA": "jhon" },
    { "id": "EN-CP12", "tipo": "EN", "modo": "auto", "nombre": "Prueba de carga e integración de EN con NT", "criterio": "Evidencia de carga realizada a NT donde se observe comparación de cantidades entre SAME y NT del ciclo de pruebas realizado y comparación de estados de envíos de registros entre los 2 sistemas", "carga": false, "asignadoA": "jhon" },

    // ---- IMP (Físico) (33) ----
    { "id": "IMP-CP01", "tipo": "IMP", "modo": "auto", "nombre": "Garantizar que no hay ningún carácter pipe en los campos del indexado o en el archivo de trazabilidad", "criterio": "Listado de 18 campos", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP02", "tipo": "IMP", "modo": "manual", "nombre": "Todos los campos deben quedar con información asociada que corresponda al campo", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP03", "tipo": "IMP", "modo": "manual", "nombre": "Indique el tamaño de la margen que posee al lado izquierdo y derecho del documento de impresión", "criterio": "Mínimo 1 cm al lado izquierdo y lado derecho", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP04", "tipo": "IMP", "modo": "manual", "nombre": "Indique el nombre del campo del spool que fue configurado para el remitente y la dirección del producto", "criterio": "Remitente: nombre campo Dirección: nombre campo", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP05", "tipo": "IMP", "modo": "manual", "nombre": "¿El nombre y la dirección asociados en la Guía coincide con la información del documento impreso?", "criterio": "Si", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP06", "tipo": "IMP", "modo": "manual", "nombre": "¿Indique el nombre del campo del spool que fue configurado para el remitente y la dirección del producto?", "criterio": "Remitente: nombre campo indexado .dat Dirección: nombre campo indexado .dat", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP07", "tipo": "IMP", "modo": "manual", "nombre": "Escriba la lectura del código Qr del documento de uno de los registros y la lectura del código Qr de la guía correspondiente", "criterio": "Lectura código documento - Lectura código guía", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP08", "tipo": "IMP", "modo": "manual", "nombre": "¿Los códigos validados en el ítem anterior coinciden?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP09", "tipo": "IMP", "modo": "manual", "nombre": "Indique la posición del código QR de autoguia", "criterio": "mm x mm (X.Y)", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP10", "tipo": "IMP", "modo": "manual", "nombre": "¿El código se observa correctamente en la ventanilla luego de ensobrar?", "criterio": "Si", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP11", "tipo": "IMP", "modo": "manual", "nombre": "¿Se realizó prueba de pegado automático de guía?", "criterio": "SI, Evidencia muestra pegado automático guía", "carga": true, "asignadoA": "jhon" },
    { "id": "IMP-CP12", "tipo": "IMP", "modo": "manual", "nombre": "Indique la segmentación que realiza el proceso para generación de archivos de impresión", "criterio": "Archivos mas de 7 hojas y archivos de 1 a 7 hojas", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP13", "tipo": "IMP", "modo": "manual", "nombre": "Indique la posición del código QR para ensobrado", "criterio": "mm x mm (X.Y)", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP14", "tipo": "IMP", "modo": "manual", "nombre": "¿El producto tiene empaquetamiento de extractos?", "criterio": "SI/NO", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP15", "tipo": "IMP", "modo": "manual", "nombre": "Indique el nombre de la variable del sistema utilizada para configuración del código QR", "criterio": "Si tiene empaquetamiento SYS.PageCounter de lo contrario SYS.SubPageCounter", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP16", "tipo": "IMP", "modo": "manual", "nombre": "¿Se realizó prueba de ensobrado automático?", "criterio": "SI, Evidencia muestra ensobrado automático", "carga": true, "asignadoA": "jhon" },
    { "id": "IMP-CP17", "tipo": "IMP", "modo": "manual", "nombre": "¿El código de barras es de recaudo?", "criterio": "SI/NO", "carga": false, "asignadoA": "ana" },
    { "id": "IMP-CP18", "tipo": "IMP", "modo": "manual", "nombre": "Indique la codificación del código de barras", "criterio": "Codificación", "carga": false, "asignadoA": "ana" },
    { "id": "IMP-CP19", "tipo": "IMP", "modo": "manual", "nombre": "¿El código de barras contiene certificación GS1?", "criterio": "Si es código de recaudo obligatoriamente tiene que tener certificación GS1", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP20", "tipo": "IMP", "modo": "manual", "nombre": "Indique la estructura configurada para el código de barras", "criterio": "Estructura", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP21", "tipo": "IMP", "modo": "manual", "nombre": "Indique el ordenamiento que tiene el archivo de impresión", "criterio": "Screen: orden descendente, otras maquinas ordenamiento normal", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP22", "tipo": "IMP", "modo": "manual", "nombre": "Indique consecutivos configurados", "criterio": "Contador global de hojas - Paquete - Pagina actual del paquete/Cantidad total paginas paquete", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP23", "tipo": "IMP", "modo": "manual", "nombre": "¿Los consecutivos se encuentran en el frente y dorso del documento?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP24", "tipo": "IMP", "modo": "manual", "nombre": "¿Los recursos configurados contienen logo FSC?", "criterio": "NO", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP25", "tipo": "IMP", "modo": "manual", "nombre": "¿La estructura coincide con la configurada en el portal de WL?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP26", "tipo": "IMP", "modo": "manual", "nombre": "Evidencia de cargue al portal de WL", "criterio": "Evidencia de carga al portal de WL donde se evidencie la totalidad de los registros y sus detalles", "carga": true, "asignadoA": "jhon" },
    { "id": "IMP-CP27", "tipo": "IMP", "modo": "manual", "nombre": "Indique la cantidad máxima de segmentación por hojas", "criterio": "Cantidad máxima de hojas por archivo asociado a la maquina principal de impresión acorde a la información de la pestaña D-Físico", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP28", "tipo": "IMP", "modo": "auto", "nombre": "Indique el peso máximo con el que están siendo generados los archivos de impresión", "criterio": "Peso Máximo archivo asociado a la maquina principal de impresión acorde a la información de la pestaña D-Físico", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP29", "tipo": "IMP", "modo": "auto", "nombre": "Indique la cantidad de caracteres que posee el nombre de los archivos de impresión", "criterio": "Cantidad máxima caracteres nombre archivo asociado a la maquina principal de impresión acorde a la información de la pestaña D-Físico", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP30", "tipo": "IMP", "modo": "manual", "nombre": "Cargue evidencia de aprobación de muestra física", "criterio": "Evidencia de aprobación muestra", "carga": true, "asignadoA": "jhon" },
    { "id": "IMP-CP31", "tipo": "IMP", "modo": "manual", "nombre": "revisar que el codigo de sodim de los productos sea el correcto", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP32", "tipo": "IMP", "modo": "manual", "nombre": "revisar las guias migradas, que particularidades tienen (como por ejemplo los mensajes especiales, imagenes, logos...)", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "IMP-CP33", "tipo": "IMP", "modo": "auto", "nombre": "Prueba de carga e integración de IMP con NT", "criterio": "Evidencia de carga realizada a Wl y NT donde se observe comparación de cantidades entre WL y NT del ciclo de pruebas realizado y comparación de estados de registros entre los 2 sistemas", "carga": false, "asignadoA": "jhon" },

    // ---- DIG (2) ----
    { "id": "DIG-CP01", "tipo": "DIG", "modo": "manual", "nombre": "Validar publicación en el canal digital", "criterio": "Documento visible en el portal digital", "carga": false, "asignadoA": "jhon" },
    { "id": "DIG-CP02", "tipo": "DIG", "modo": "auto", "nombre": "Prueba de integración canal digital con NT", "criterio": "Tablas verificadas", "carga": false, "asignadoA": "jhon" },

    // ---- SMS (15) ----
    { "id": "SMS-CP01", "tipo": "SMS", "modo": "manual", "nombre": "¿El producto cuenta con validación de campos para SMS?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP02", "tipo": "SMS", "modo": "manual", "nombre": "Indique los caracteres que son eliminados antes de generar los insumos para envíos SMS", "criterio": "punto y coma (;)", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP03", "tipo": "SMS", "modo": "manual", "nombre": "Evidencia apertura documento PDF", "criterio": "Evidencia apertura", "carga": true, "asignadoA": "jhon" },
    { "id": "SMS-CP04", "tipo": "SMS", "modo": "auto", "nombre": "Indique si el copy contiene personalización e indique cuales campos tiene personalizados", "criterio": "SI/NO y campos a personalizar", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP05", "tipo": "SMS", "modo": "manual", "nombre": "¿Luego de realizar las pruebas las variables personalizadas del copy las pintó de forma correcta?", "criterio": "SI", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP06", "tipo": "SMS", "modo": "manual", "nombre": "Se comprobó funcionamiento de los enlaces o links enviados en la comunicación", "criterio": "Descarga pdf individual", "carga": true, "asignadoA": "jhon" },
    { "id": "SMS-CP07", "tipo": "SMS", "modo": "manual", "nombre": "¿La información del documento descargado coincide con la información del copy?", "criterio": "SI", "carga": true, "asignadoA": "jhon" },
    { "id": "SMS-CP08", "tipo": "SMS", "modo": "auto", "nombre": "indique la cantidad de caracteres que tiene el mensaje de texto", "criterio": "menos de 160 caracteres", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP09", "tipo": "SMS", "modo": "manual", "nombre": "Indique el medio por donde obtuvo aprobación de las muestras SMS", "criterio": "Correo, dejar evidencia de aprobación", "carga": true, "asignadoA": "jhon" },
    { "id": "SMS-CP10", "tipo": "SMS", "modo": "auto", "nombre": "Los SMS no contiene caracteres especiales o tildes", "criterio": "", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP11", "tipo": "SMS", "modo": "auto", "nombre": "Los mensajes no superan los 160 caracteres de longitud", "criterio": "Longitud de los SMS", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP12", "tipo": "SMS", "modo": "manual", "nombre": "Se genero muestra de los diferentes mensajes a enviar", "criterio": "Muestras generadas", "carga": true, "asignadoA": "jhon" },
    { "id": "SMS-CP13", "tipo": "SMS", "modo": "auto", "nombre": "Se verifico registro del estado de SMS en NT", "criterio": "Tablas verificadas", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP14", "tipo": "SMS", "modo": "manual", "nombre": "Si el SMS tiene personalización, se realizo la caída variable y se verifico que todas se reemplazan de forma correcta", "criterio": "Variable personalizadas", "carga": false, "asignadoA": "jhon" },
    { "id": "SMS-CP15", "tipo": "SMS", "modo": "auto", "nombre": "Prueba de carga e integración de SMS con NT", "criterio": "Evidencia de carga realizada a NT donde se observe comparación de cantidades entre SMS Trazabilidad y NT del ciclo de pruebas realizado y comparación de estados de envíos de registros entre los 2 sistemas", "carga": false, "asignadoA": "jhon" },

    // ---- Retenciones / Devoluciones / Inconsistencias (7) ----
    { "id": "RET-CP01", "tipo": "RET", "modo": "manual", "nombre": "¿El proceso tiene retención retenidas?", "criterio": "SI/NO", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP02", "tipo": "RET", "modo": "manual", "nombre": "Indique la regla para retención de registros", "criterio": "regla retención registros", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP03", "tipo": "RET", "modo": "manual", "nombre": "¿Los registros retenidos quedan almacenados en un reporte? - indique estructura del reporte", "criterio": "SI - indique estructura del reporte", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP04", "tipo": "RET", "modo": "auto", "nombre": "Indique la cantidad total de registros procesados en el ciclo de pruebas", "criterio": "Total registros", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP05", "tipo": "RET", "modo": "auto", "nombre": "Indique todos los posibles canales de salida que tiene el proceso(Email, SMS, Físico, Retenido, etc.)", "criterio": "Canales de salida", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP06", "tipo": "RET", "modo": "auto", "nombre": "Indique por medio de una lista la cantidad de registros por cada uno de los canales de salida indicados y deje de evidencia el reporte de cantidades de cada uno de los canales", "criterio": "Lista de canales con cantidad", "carga": false, "asignadoA": "jhon" },
    { "id": "RET-CP07", "tipo": "RET", "modo": "auto", "nombre": "¿La suma de todos los canales de salida es igual a la totalidad de registros trasmitidos por el cliente?", "criterio": "SI", "carga": false, "asignadoA": "jhon" }
  ],

  // Checklist de PASO A PRODUCCIÓN (hoja CP-PasoProduccion del Excel).
  // Se diligencian en la vista "Despliegue a producción". Los ítems con
  // canal (EN/PE) solo aplican si el producto tiene ese canal. requerido=false
  // son opcionales (no bloquean el despliegue).
  "pasoProduccion": [
    { "id": "PP-CP01", "nombre": "Actualizacion Python", "detalle": "Se realizo la actualizacion del recurso Python en el ambiente productivo?", "aplica": "Si lleva preprocessing", "canal": null, "requerido": false },
    { "id": "PP-CP02", "nombre": "Actualizacion WFD's del proceso", "detalle": "Se realizo actualizacion de los WFD Afectados o nuevos (Composer e impresión)?", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP04", "nombre": "Configuracion cliente y producto", "detalle": "Se realizo el paso de los registros de customer, product y subProduct?", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP05", "nombre": "Configuracion settings del producto", "detalle": "Se realizo el paso de los registros de setting, tanto product como subproduct?", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP03", "nombre": "Configuracion correos de notificaciones", "detalle": "Los correos configurados en los setting 9,10,119 son los del cliente, procesamiento y controller? Tambien configurar setting 218 y 219 para correos de alertas", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP06", "nombre": "Configuracion archivos del proceso", "detalle": "Se realizo el paso de los registros de las tablas fileByProduct y fileschemas?", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP07", "nombre": "Configuracion usuarios", "detalle": "Se realizo el paso de los registros de las tablas user, process y userByProcess?", "aplica": "TODOS", "canal": null, "requerido": true },
    { "id": "PP-CP08", "nombre": "Configuracion imágenes de recursos", "detalle": "Se realizo el paso de los registros de las tablas resourceConfiguration y resources?", "aplica": "Si lleva imágenes", "canal": null, "requerido": true },
    { "id": "PP-CP09", "nombre": "Actualizacion imágenes en el FSX", "detalle": "Se realizo actualizacion de los recursos modificados o nuevos al FSX?", "aplica": "Si lleva imágenes", "canal": null, "requerido": true },
    { "id": "PP-CP10", "nombre": "Configuracion cliente y producto en GW", "detalle": "Se realizo la creacion del cliente y producto en GW?", "aplica": "Si lleva EN", "canal": "EN", "requerido": true },
    { "id": "PP-CP11", "nombre": "Configuracion de los template de EN", "detalle": "Creacion de template", "aplica": "Si lleva EN", "canal": "EN", "requerido": true },
    { "id": "PP-CP12", "nombre": "Configuracion cliente y producto en NT", "detalle": "Se realizo la creacion de cliente y producto en NT?", "aplica": "Si lleva PE", "canal": "PE", "requerido": true },
    { "id": "PP-CP13", "nombre": "Configuracion id de producto NT", "detalle": "Se debe garantizar que el id producto del setting 167 sea el correcto (Productivo)", "aplica": "Si lleva PE", "canal": "PE", "requerido": true },
    { "id": "PP-CP14", "nombre": "Configuracion de reglas del proceso", "detalle": "Se realizo el paso de los registros de las tablas rulesByProduct", "aplica": "Si lleva reglas", "canal": null, "requerido": false },
    { "id": "PP-CP15", "nombre": "Configuracion retenidas y muestras", "detalle": "Se realizo el paso de los registros de las tablas resources{IdProducto}", "aplica": "Si aplica", "canal": null, "requerido": false },
    { "id": "PP-X01", "nombre": "Paso de equivalencias y template", "detalle": "", "aplica": "TODOS", "canal": null, "requerido": false },
    { "id": "PP-X02", "nombre": "Configuracion de correos de alertas", "detalle": "", "aplica": "TODOS", "canal": null, "requerido": false },
    { "id": "PP-X03", "nombre": "Equivalencias CCM", "detalle": "Configurar los nombres de producto y subproducto en la tabla CCMProductRelations", "aplica": "TODOS", "canal": null, "requerido": false }
  ]
};
