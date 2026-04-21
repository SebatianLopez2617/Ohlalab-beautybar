


-------------Ohlalab BeautyBar - Plataforma de Gestión------------------------

Este proyecto es una plataforma digital diseñada para la gestión de servicios, catálogo y reservaciones de Ohlalab BeautyBar. El sistema permite administrar de manera eficiente la oferta de servicios del salón y spa, ofreciendo una interfaz limpia y profesional.




----------------------------------Tecnologías Utilizadas--------------------------------------------------
El desarrollo se basa en una arquitectura moderna de alto rendimiento y escalabilidad:


Frontend: HTML5, CSS3 y JavaScript (enfocado en una interfaz de usuario limpia con acentos en Fiusha #EE5B9B).

Backend & Hosting: Cloudflare Pages y Cloudflare Workers para una ejecución de funciones Serverless rápida.

Base de Datos: Cloudflare D1 (SQL nativo basado en SQLite) para la persistencia de datos de servicios y reservaciones.

Control de Versiones: Git y GitHub.




--------------------Requisitos del Sistema------------------------
Para ejecutar o colaborar en este proyecto, necesitarás:

Una cuenta de GitHub.

Una cuenta de Cloudflare con acceso a Pages y D1.

Navegador web moderno (Chrome, Firefox, Edge).




----------Pasos para la Instalación y Despliegue----------------
Sigue estos pasos para configurar el entorno:

Clonar el repositorio:

Bash
git clone https://github.com/SebatianLopez2617/Ohlalab-beautybar.git
cd Ohlalab-beautybar
Configuración en Cloudflare Pages:

Conecta tu cuenta de GitHub a Cloudflare Pages.

Selecciona el repositorio Ohlalab-beautybar.

Configura el directorio de salida (Build output directory) como el directorio raíz o main, según la estructura de tus archivos estáticos.

Configuración de la Base de Datos (D1):

Crea una base de datos D1 en el panel de Cloudflare.

Copia el ID de la base de datos.

En la configuración de tu proyecto en Cloudflare Pages, ve a Settings > Functions > D1 database bindings.

Vincula la variable de entorno correspondiente con tu base de datos D1 activa.

Despliegue:

Realiza un git push a la rama principal.

Cloudflare Pages detectará los cambios y desplegará la aplicación automáticamente.


----------------Arbol del sistema----------------------


Proyecto
    │───README.md
    │
    ├───functions
    │       agendar.js
    │       login.js
    │       registro.js
    │
    └───main
        │   .gitignore
        │   avisos.css
        │   avisos.js
        │   index.html
        │
        ├───agenda
        │       agenda.html
        │       agenda.js
        │       agenda2.css
        │
        ├───alaciado
        │       alaciado10.jpeg
        │       alaciado11.jpeg
        │       alaciado2.jpeg
        │       alaciado3.jpeg
        │       alaciado4.jpeg
        │       alaciado5.jpeg
        │       alaciado6.jpeg
        │       alaciado7.jpeg
        │       alaciado8.jpeg
        │       alaciado9.jpeg
        │
        ├───cabello
        │       cabe1.jpeg
        │       cabe10.jpeg
        │       cabe11.jpeg
        │       cabe12.jpeg
        │       cabe13.jpeg
        │       cabe14.jpeg
        │       cabe15.jpeg
        │       cabe16.jpeg
        │       cabe17.jpeg
        │       cabe2.jpeg
        │       cabe3.jpeg
        │       cabe4.jpeg
        │       cabe5.jpeg
        │       cabe6.jpeg
        │       cabe7.jpeg
        │       cabe8.jpeg
        │       cabe9.jpeg
        │
        ├───carousel
        │       destacados.jpeg
        │       ojo.jpg
        │       rojo.jpeg
        │       rubio.jpeg
        │       verdes.jpeg
        │
        ├───cejas
        │       cejas.jpeg
        │       cejas2.jpeg
        │       cejas3.jpeg
        │       cejas4.jpeg
        │       cejas5.jpeg
        │       cejas6.jpeg
        │       cejas7.jpeg
        │
        ├───Fotos
        │       afuera.jpeg
        │       background.jpeg
        │       home1.png
        │       home2.png
        │       logo.jpeg
        │       logo1.png
        │       logo2.png
        │       menu1.png
        │
        ├───iconos
        │       iconFC.PNG
        │       iconIG.png
        │       iconW.png
        │       IGN.png
        │       WP.png
        │
        ├───labios
        │       labios.jpeg
        │       labios2.jpeg
        │       labios3.jpeg
        │       labios4.jpeg
        │       labios5.jpeg
        │
        ├───lashes
        │       lashes.jpeg
        │       lashes10.jpeg
        │       lashes11.jpeg
        │       lashes2.jpeg
        │       lashes3.jpeg
        │       lashes4.jpeg
        │       lashes5.jpeg
        │       lashes6.jpeg
        │       lashes7.jpeg
        │       lashes8.jpeg
        │       lashes9.jpeg
        │
        ├───lipo
        │       lipo.jpeg
        │       lipo10.jpeg
        │       lipo2.jpeg
        │       lipo3.jpeg
        │       lipo4.jpeg
        │       lipo5.jpeg
        │       lipo6.jpeg
        │       lipo7.jpeg
        │       lipo8.jpeg
        │
        ├───make
        │       make.jpeg
        │       make2.jpeg
        │       make3.jpeg
        │       make4.jpeg
        │       make5.jpeg
        │
        ├───pies
        │       pies.jpeg
        │       pies10.jpeg
        │       pies11.jpeg
        │       pies2.jpeg
        │       pies3.jpeg
        │       pies4.jpeg
        │       pies5.jpeg
        │       pies6.jpeg
        │       pies7.jpeg
        │       pies8.jpeg
        │       pies9.jpeg
        │
        ├───servicios
        │       alaciado.jpeg
        │       exterior.jpeg
        │       faciales.jpeg
        │       interior.jpeg
        │       make up.jpeg
        │       make up2.jpeg
        │       make_up3.jpeg
        │       nails.jpeg
        │       neils2.jpeg
        │       Peinados.jpeg
        │       SalaEstar.jpeg
        │       services.jpeg
        │       spa.jpeg
        │       Teñido.jpeg
        │
        ├───servicioscarp
        │   │   aniamaciones2.css
        │   │   servicios.css
        │   │   servicios.html
        │   │
        │   └───serviciospag
        │           alaciado.css
        │           alaciado.html
        │           animacion.css
        │           cejas.css
        │           cejas.html
        │           labios.css
        │           labios.html
        │           lashes.css
        │           lashes.html
        │           lipo.css
        │           lipo.html
        │           make_up.css
        │           make_up.html
        │           unas.css
        │           unas.html
        │           unas_pies.css
        │           unas_pies.html
        │
        ├───tratamiento
        │       trata.jpeg
        │       trata10.jpeg
        │       trata2.jpeg
        │       trata3.jpeg
        │       trata4.jpeg
        │       trata5.jpeg
        │       trata6.jpeg
        │       trata7.jpeg
        │       trata8.jpeg
        │       trata9.jpeg
        │
        ├───unas
        │       unas.jpeg
        │       unas10.jpeg
        │       unas12.jpeg
        │       unas13.jpeg
        │       unas14.jpeg
        │       unas2.jpeg
        │       unas3.jpeg
        │       unas4.jpeg
        │       unas5.jpeg
        │       unas6.jpeg
        │       unas7.jpeg
        │       unas8.jpeg
        │       unas9.jpeg
        │
        └───usuario
                inicio_de_secion.css
                inicio_de_secion.html
                perfil.html