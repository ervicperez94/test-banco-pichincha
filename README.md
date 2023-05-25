
# Test pichincha

Este proyecto es una aplicación web construida con NestJS y Docker, probada con Jest, y diseñada para ser desplegada en infraestructura gestionada con Terraform.

## Pre-requisitos

- Docker: Visita la [página de instalación de Docker](https://docs.docker.com/engine/install/) para obtener instrucciones sobre cómo instalar Docker en tu sistema operativo.
- Node.js y npm: Necesitarás Node.js y npm para ejecutar el código de NestJS. Puedes descargarlos desde la [página oficial de Node.js](https://nodejs.org/).
- Terraform: Visita la [página de descargas de Terraform](https://www.terraform.io/downloads.html) para obtener instrucciones sobre cómo instalar Terraform en tu sistema operativo.

## Instalación

1. Clona el repositorio:

    ```
    git clone https://github.com/ervicperez94/test-banco-pichincha.git
    cd test-banco-pichincha
    ```

2. Instala las dependencias de NestJS:

    ```
    npm install
    ```
## Ejecución

1. Para ejecutar el servidor de desarrollo NestJS:

    ```
    npm run start
    ```

2. Para construir y ejecutar la aplicación en un contenedor Docker:

    ```
    docker build -t nombre-de-tu-app .
    docker run -p 3000:3000 nombre-de-tu-app
    ```

## Uso

Una vez que la aplicación está en ejecución, puedes visitar `http://localhost:3000` en tu navegador para verla. Puedes interactuar con la API en `http://localhost:3000/api`.


Para producción visita [https://production-banco-pichincha.ervicperez.dev/](https://production-banco-pichincha.ervicperez.dev/) 

Para para desarrollo visita [https://development-banco-pichincha.ervicperez.dev/](https://development-banco-pichincha.ervicperez.dev/) 



## Pruebas

Para ejecutar las pruebas de la aplicación, ejecuta el siguiente comando:


   ```
    npm run test
  ```

## Despliegue con Terraform

1. Inicializa Terraform en tu directorio de proyecto:

    ```
    terraform init
    ```

2. Verifica tu configuración de Terraform:

    ```
    terraform plan
    ```

3. Aplica tu configuración de Terraform para desplegar tu infraestructura:

    ```
    terraform apply
    ```

## Contribuciones

Por favor, asegúrate de ejecutar las pruebas y confirmar que todas pasan antes de enviar cualquier solicitud de incorporación de cambios. Además, sigue las convenciones de código y estilo presentes en el código existente.

## Licencia

Este proyecto está licenciado bajo Apache License. Consulta el archivo `LICENSE` para más detalles.




