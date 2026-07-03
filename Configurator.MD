Diseña un mockup funcional en HTML, CSS y JavaScript llamado **Configurator**, enfocado en la gestión completa de proyectos de desarrollo, configuración, soporte y seguimiento operativo.
La aplicación debe tener una apariencia moderna, corporativa y minimalista, inspirada visualmente en sistemas administrativos tipo ERP/Workflow, siguiendo la estructura visual de las imágenes de referencia adjuntas.

La interfaz debe parecer una mezcla entre:

* Jira
* Monday
* Teamwork
* Azure DevOps
* Sistemas internos corporativos

El objetivo principal es controlar el flujo completo de una tarea desde su creación hasta producción y soporte, permitiendo que distintos roles interactúen con la tarea según el estado actual.

---

# Diseño general

## Layout principal

Crear una interfaz SPA (Single Page Application) con:

### Sidebar izquierdo fijo

Con fondo claro o gris suave.

Debe contener:

* Logo superior “Configurator”
* Avatar del usuario conectado
* Menú vertical colapsable

Opciones del menú:

* Parámetros
* Configuraciones
* Esquemas de mapeo
* Lista de chequeo
* Tareas de desarrollo
* Casos de soporte

Inspirarse visualmente en las imágenes:

* Sidebar compacto
* Íconos modernos
* Hover azul corporativo
* Diseño limpio tipo Material Design

---

## Topbar superior

Debe incluir:

* Nombre del usuario
* Rol
* Notificaciones
* Botón logout
* Buscador rápido
* Indicador de tareas pendientes

Color principal:
Azul corporativo oscuro similar a las imágenes.

---

# Flujo funcional principal

El sistema funciona como una cadena de estados.

Cada tarea debe avanzar automáticamente por etapas y enviar notificaciones por email (Simular mostrando un pop up indicando que el email se envio) al siguiente responsable.

---

# Estados del workflow

Crear un workflow visual tipo timeline o stepper.

## Flujo oficial

| Estado                   | Acción                                  | Responsable         |
| ------------------------ | --------------------------------------- | ------------------- |
| Creación de tarea        | Tarea creada en Configurator + Teamwork | Funcional           |
| Lista chequeo funcional  | Checklist diligenciado                  | Funcional           |
| FORE / RECA / Migración  | Documento cargado                       | Funcional           |
| Estimación               | Documento estimación cargado            | Desarrollador       |
| Inicio desarrollo        | Inicio configuraciones                  | Desarrollador       |
| Lista chequeo desarrollo | Checklist desarrollo completo           | Desarrollador       |
| Pruebas calidad          | Validación QA                           | Calidad             |
| Solución bugs            | Corrección errores                      | Desarrollador       |
| Aprobación cliente       | Aprobación final                        | Comercial / Cliente |
| Comité cambios           | Validación comité                       | Desarrollador       |
| Entrega soporte          | Transferencia a soporte                 | Desarrollador       |
| Paso producción          | Deploy productivo                       | Desarrollador       |
| Ingreso caso             | Caso reportado                          | Usuario / Cliente   |
| Solución caso            | Caso solucionado                        | Soporte             |

---

# Roles del sistema

Crear mock de usuarios con permisos visuales distintos:

## Funcional

Puede:

* Crear tareas
* Cargar documentos
* Diligenciar checklist funcional

## Desarrollador

Puede:

* Ver tareas asignadas
* Registrar estimaciones
* Cambiar estados
* Gestionar bugs
* Subir evidencias

## Calidad

Puede:

* Ejecutar pruebas
* Aprobar o rechazar
* Registrar bugs

## Soporte

Puede:

* Gestionar incidentes
* Resolver casos
* Escalar problemas

## Comercial / Cliente

Puede:

* Aprobar entregas
* Ver avance
* Comentar tareas

---

# Módulo: Lista de chequeo

Este módulo debe ser el más completo visualmente.

Inspirarse directamente en la captura “Checklist”. y puedes ser creatico o agregar lo que consideres necesario

---

## Estructura visual

### Parte superior

Filtros:

* Cliente
* Producto
* Tipo FORE/RECA/MIG
* Estado
* Responsable

Botones:

* Buscar
* Limpiar
* Crear checklist

---

## Secciones acordeón

Crear acordeones expandibles:

* Checklist General
* Checklist Funcional
* Checklist Desarrollo
* Checklist Calidad
* Checklist Producción
* Checklist Soporte

Cada acordeón debe contener:

* Lista de tareas
* Checkbox
* Responsable
* Fecha
* Comentarios
* Evidencias adjuntas
* Estado visual

---

## Elementos de checklist

Cada item debe incluir:

* Checkbox interactivo
* Nombre tarea
* Prioridad
* Usuario asignado
* Fecha límite
* Adjuntar archivo
* Campo comentarios
* Estado:

  * Pendiente
  * En proceso
  * Completado
  * Bloqueado

---

## Automatización visual

Cuando un checklist se completa:

* Cambiar color a verde
* Mostrar toast notification
* Habilitar siguiente etapa
* Mostrar animación suave

---

# Módulo: Tareas de desarrollo

Este será el núcleo operativo del sistema ⚙️

---

## Crear nueva tarea

Formulario superior:

Campos:

* Tipo
* Nombre tarea
* Descripción
* Prioridad
* Cliente
* Producto
* Fecha entrega
* Responsable

---

## Tipo de tarea

Dropdown:

* FORE (Requerimiento)
* RECA (Cambio)
* MIG (Migración)

---

## Solicitante

Debe autocompletarse automáticamente con:

* Usuario logueado

Campo readonly.

---

## Botón Crear

Al presionar:

* Mostrar snackbar:
  “La tarea fue creada exitosamente en Teamwork”
* Agregar fila dinámica a tabla
* Crear ID automático:

  * FORE-001
  * RECA-014
  * MIG-003

---

## Tabla de tareas

Crear tabla moderna con:

* ID
* Tipo
* Nombre
* Estado
* Responsable
* Prioridad
* Fecha creación
* Fecha entrega
* Progreso
* Acciones

---

## Acciones

Botones:

* Ver detalle
* Editar
* Cambiar estado
* Adjuntar archivo
* Ver historial
* Comentarios

---

## Vista detalle tarea

Modal lateral tipo drawer.

Debe contener:

### Información general

* Cliente
* Producto
* Solicitante
* Estado actual
* Tiempo estimado
* Horas invertidas

### Timeline

Mostrar visualmente:

* Quién intervino
* Fecha
* Acción realizada

### Comentarios tipo chat

Con burbujas modernas.

### Archivos adjuntos

Con tarjetas visuales.

---

# Módulo: Casos de soporte

Inspirado en sistemas ITSM.

---

## Dashboard principal

Cards superiores:

* Casos abiertos
* Casos críticos
* Casos vencidos
* Casos resueltos hoy

---

## Crear caso

Campos:

* Cliente
* Categoría
* Prioridad
* Descripción
* Evidencias
* Producto afectado

---

## Estados

* Nuevo
* Asignado
* En análisis
* En solución
* Escalado
* Resuelto
* Cerrado

---

## Tabla soporte

Columnas:

* Ticket
* Cliente
* Prioridad
* Responsable
* Estado
* SLA
* Fecha creación
* Última actualización

---

# Módulo: Configuraciones

Inspirarse directamente en la captura “Configuraciones”.

Debe incluir:

* Configuración cliente
* Configuración productos
* Configuración canales
* Configuración procesos

---

## Canales

Checkboxes:

* PE
* EN
* IMP
* DIG
* SMS
* DEE

---

## Configuraciones dinámicas

Acordeones configurables:

* Generales
* Integraciones
* Notificaciones
* Producción
* Seguridad

---

# Módulo: Parámetros

Inspirado en la captura “Parámetros”.

Debe incluir:

* Tabla editable
* Buscador
* Modal “Agregar parámetro”
* CRUD visual

Campos:

* Nombre
* Descripción
* Valor

---

# Módulo: Esquemas de mapeo

Debe permitir:

* Ver esquemas XML/JSON
* Árbol visual
* Relación origen/destino
* Simulación de transformación

---

# Dashboard principal

Pantalla inicial moderna con:

## KPIs

* Tareas activas
* Bugs abiertos
* Deploys pendientes
* Casos soporte
* Tiempo promedio desarrollo

---

## Gráficos

* Tareas por estado
* Bugs por severidad
* Tiempo promedio por etapa
* Cumplimiento SLA

---

## Actividad reciente

Timeline tipo feed corporativo.

---

# Notificaciones

Agregar sistema mock visual de:

* Toasts
* Campana superior
* Alertas
* Correos simulados
* Flujo automático al cambiar estados

Ejemplos:

* “Nueva tarea asignada”
* “Checklist completado”
* “QA rechazó la tarea”
* “Caso escalado a soporte”

---

# Tecnologías deseadas

El mockup debe hacerse usando:

* HTML5
* CSS3
* JavaScript Vanilla o React
* Material UI o Bootstrap
* Diseño responsive
* Íconos Material Design
* Animaciones suaves
* Dark mode opcional

---

# Estilo visual esperado

El sistema debe transmitir:

* Plataforma corporativa real
* Sensación enterprise
* Orden visual
* Mucha usabilidad
* Componentes modernos
* Cards limpias
* Tablas avanzadas
* Modales elegantes
* Acordeones fluidos

Inspiración visual:

* Azure DevOps
* Atlassian
* Monday
* Material Dashboard
* ERP empresariales modernos

---

# Extras opcionales

Agregar mock visual de:

* Integración Teamwork
* Integración correo
* Integración Teams
* Integración Jira
* Logs del sistema
* Historial auditoría
* Vista Kanban
* Calendario entregas
* Drag and drop estados

---

# Resultado esperado

Generar:

* Mockup navegable
* Datos simulados
* Navegación entre módulos
* Componentes interactivos
* Diseño altamente profesional
* Código organizado por módulos
* Sensación de sistema real listo para vender 🚀
