Tic Tac Toe con Algoritmo Minimax
Un juego moderno de Tic Tac Toe implementado con HTML, CSS y JavaScript vanilla, que incluye un algoritmo Minimax para jugar contra la IA.
Características

Interfaz Minimalista: Diseño moderno con colores azul oscuro y blanco
Algoritmo Minimax: IA inteligente que utiliza el algoritmo minimax para tomar decisiones óptimas
Análisis de Profundidad: Visualización detallada del proceso de decisión del algoritmo
Responsive Design: Compatible con dispositivos móviles y escritorio

Funcionalidades
Modos de Juego

Modo Normal: Juego tradicional entre dos jugadores
Modo Minimax: Juega contra la IA que utiliza el algoritmo minimax

Informe de Minimax

Profundidad máxima del árbol de decisión
Número total de nodos evaluados
Tiempo de cálculo en milisegundos
Puntuación óptima encontrada

Instalación y Uso

Clona este repositorio:

bashgit clone Link: https://github.com/Franco-Abondanshieri-Arela-Mamani/MINIMAX-TIC-TAC-TOE.git

Navega al directorio del proyecto:

bashcd tic-tac-toe-minimax

Abre index.html en tu navegador web preferido.

Cómo Jugar

Modo Normal: Haz clic en las celdas para alternar entre X y O
Modo Minimax:

Activa el modo Minimax con el botón correspondiente
Tú juegas como X (siempre vas primero)
La IA juega como O utilizando el algoritmo minimax
Usa "Ver Informe" para analizar las decisiones de la IA



Algoritmo Minimax
El algoritmo minimax es una técnica de toma de decisiones utilizada en juegos de suma cero. En este proyecto:

Maximizador: La IA (O) busca maximizar su puntuación
Minimizador: El jugador humano (X) minimiza la puntuación de la IA
Evaluación: +10 si gana la IA, -10 si gana el humano, 0 para empate
Optimización: Se ajusta la puntuación según la profundidad para preferir victorias más rápidas

Tecnologías Utilizadas

HTML5
CSS3 (Flexbox, Grid, Animaciones)
JavaScript ES6+
No se utilizan librerías externas
