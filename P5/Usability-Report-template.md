# Usability Report



<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability Download png" style="height:150px" />

### Evaluación de usabilidad del proyecto Remake Champions Burger

25/05/2026

<img src="../P4/logo_clenchaos.png" style="width:300px; height:auto;">

[Remake Champions Burger](https://github.com/DIU3-Clenchaos/UX_CaseStudy)

### Realizado por:  

Equipo Solanum. Proyecto "Gravity Brew". Compuesto por:
* Manuel Martínez Cobos
* Ana Cascone Hernández

## 1 RESUMEN EJECUTIVO  (Executive Summary)

- **Objetivo:** Evaluamos el rediseño de la web oficial del evento gastronómico The Champions Burger. El objetivo principal es dar solución a las carencias detectadas en la plataforma actual para implementar mejoras clave, como un mapa interactivo, tiempos restantes de cola e información detallada de las hamburguesas.
 
- **Metodología:** La evaluación se apoya en un enfoque mixto que incluye A/B Testing para comparar el rendimiento y usabilidad del diseño original frente a otra propuesta (Caso A vs Caso B); el cuestionario SUS (System Usability Scale) para cuantificar la satisfacción del usuario; y pruebas de Eye Tracking (mediante GazeRecorder) para analizar el comportamiento visual y los mapas de calor en la interfaz.
  
- **Principales Hallazgos:**
* Existe una gran dificultad por parte de los usuarios para encontrar información relevante de forma rápida.

* Hay una falta evidente de herramientas de filtrado eficientes para el contenido.

* La navegación actual genera una experiencia de usuario (UX) poco fluida y frustrante.
  
- **Resultado Global:** Su diseño es aceptable, aunque poco adaptado a gente no muy inmersa en el mundillo, es una clara mejora respecto al actual e implementa interesantes mejoras que seguro que contentarán a su público de nicho.


## 2. Metodología y Reclutamiento

- **Perfil de los participantes:** Hemos contado con participantes de perfiles muy variados para este experimento, pertenecientes a distintas franjas de edad, adaptación tecnológica y gremios.
  
- **Escenario de la prueba:** Los usuarios llevaron a cabo 3 tareas principales.
  
* En primer lugar, entraron a la página sin saber su temática y trataron de acertarla con la información de la página principal; tuvieron éxito en la tarea.
* Luego, trataron de realizar una reserva de una mesa. El usuario menos adaptado a la tecnología fue incapaz, ya quie la navegación perdía el header en algunas páginas y resultaba confusa.
* Por último trataron de encontrar una opción en el menú apta para consumir teniendo en cuenta su condición alérgena. Todos la encontraron de manera manual, pero coincidieron en que un filtro habría facilitado el proceso.
  
- **Herramientas:** Se usó (como ya se ha mencionado con anterioridad) GazeMapping para crear los Heat Maps correspondientes, así como navegador web y teléfono móvil para realizar las pruebas de los usuarios

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

[Aquí se muestran datos del análisis multivariable de SUS] 

- **Comparativa A vs. B:** Un gráfico de barras comparando la puntuación final de ambos diseños.
- **Desglose por ítems:** Identifica qué preguntas del SUS tuvieron peor puntuación (por ejemplo, si la pregunta 2 sobre "complejidad" fue muy alta en el Diseño B).

Valoración numérica del SUS - 


## 4. Análisis de Eye Tracking (Datos Biométricos)

[Presenta la evidencia visual del comportamiento del usuario]

- **Heatmaps (Mapas de calor):** Incluye las capturas de GazeMapping. Comenta si los usuarios miraron los **POI** (Puntos de Interés) definidos.
- **Zonas de Silencio:** Identifica elementos importantes que fueron totalmente ignorados.
- **Hallazgo clave:** Ejemplo: "El 80% de los usuarios ignoró el botón de CTA debido a su ubicación en el margen inferior".

## 5. Auditoría de Accesibilidad

Sintetiza el cumplimiento técnico y normativo.

- **Puntuación Automática:** (Lighthouse/WAVE).
- **Principales barreras:** Lista los errores críticos (contraste, falta de etiquetas, etc.) y cómo afectan a los usuarios con discapacidad.

## 6. Conclusiones y Recomendaciones (Actionable Insights)

No te limites a decir qué está mal; di cómo arreglarlo. Clasifica las recomendaciones por prioridad:

| **Prioridad**      | **Hallazgo**                                                 | **Recomendación de Mejora**                                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Alta (Crítica)** | Ej. El SUS indica alta complejidad y el Eye Tracking muestra confusión en el menú. | Simplificar la arquitectura de información y aumentar el tamaño de las fuentes. |
| **Media**          | Ej. Los usuarios no ven el botón de registro rápidamente.        | Cambiar el color del CTA a uno de mayor contraste según WCAG. |
| **Baja**           | Ej. El logo no redirige a la home.                               | Añadir el enlace estándar al logotipo en la cabecera.        |



