# Prueba Técnica LYATA Frontend Vue.js

## Descripción

Este proyecto es una aplicación web que permite buscar y visualizar información sobre países de todo el mundo. La aplicación utiliza Vue.js para el frontend y Vuex para la gestión del estado. Los datos se obtienen a través de una API externa.

## API
Puedes consultar la documentación de la [API](https://countrystatecity.in/docs/)
y asi ver de que forma hice las peticiones y que datos obtengo

## Requisitos

Para ejecutar este proyecto, necesitas tener instaladas las siguientes herramientas en tu sistema:

- **Node.js**: Asegúrate de tener instalada la versión LTS recomendada de Node.js. Puedes descargarla desde [aquí](https://nodejs.org/).

- **npm**: Se instala automáticamente con Node.js. npm es el gestor de paquetes para JavaScript.

## Instalación

1. **Clona el repositorio**

   Primero, clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/prueba-tecnica-vuejs.git
   cd prueba-tecnica-vuejs


2. **Instala las dependencias**

    A continuación, instala las dependencias del proyecto utilizando npm:
    ```bash
    npm install


3. **Configura el archivo de entorno**

    Crea un archivo .env en la raíz del proyecto y añade la siguiente línea con tu API key:
    ```bash
    VITE_API_KEY=your_api_key_here

4. **Ejecución**
    
    Para ejecutar la aplicación en tu entorno local, utiliza el siguiente comando:
    ```bash
    npm run dev


5. **Estructura del Proyecto**
    
    -public -> Carpeta que contiene archivos estáticos públicos.
    
    -src
        
        -assets -> Imagenes o archivos SVG
        
        -components -> Componentes y Vistas principales de la aplicación.
       
        -routes
            
            -index.js -> Archivo principal para definir rutas de la aplicacion
        
        -utils  
          
          -constants.js -> Constantes para importar en las peticiones con axios
          
          -store.js -> Gestión del estado con Vuex.
    
    App.vue -> Componente raíz de la aplicación.
    
    main.js -> Archivo principal de entrada de la aplicación
    
    style.css -> Archivo para los estilos y bases de TailwindCSS
    
    vite.config.js -> Configuración de Vite.

6. **Scripts**
    
    -npm run dev: Inicia el servidor de desarrollo.
    
    -npm run build: Crea una versión de producción optimizada de la aplicación.
    
    -npm run preview: Previsualiza la versión de producción generada.

7. **Contacto**
    
    Si tienes alguna pregunta o comentario, puedes contactarme en escarlata.2003@gmail.com.