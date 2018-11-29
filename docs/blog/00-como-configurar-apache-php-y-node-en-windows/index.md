# Cómo configurar Apache, PHP y Node en Windows

## Configurar Apache

Descargar e instalar MSVC15 (Visual C++ 2017) o el más actual.

Descargar Apache desde el [sitio oficial](https://www.apachelounge.com/download/) y extraerlo en la ruta `C:\Apache24`.

Editar el archivo `C:\Apache24\conf\httpd.conf`:

1. Buscar la línea `Listen 80` y cambiarla a `Listen *:80`.

2. Descomentar las siguientes líneas (Quitar el # antes de la línea):
```shell
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule rewrite_module modules/mod_rewrite.so
```

3. Agregar el siguiente código después de TODOS los `LoadModule`:
```shell
LoadModule php7_module C:/PHP/php7apache2_4.dll
<IfModule php7_module>
    DirectoryIndex index.html default.php index.php
    AddHandler application/x-httpd-php .php
    PHPIniDir "C:/PHP"
</IfModule>
```

4. Buscar la línea `#ServerName www.example.com:80` y cambiarla a `ServerName localhost`.

5. Buscar las líneas:
```shell
<Directory />
    AllowOverride none
    Require all denied
</Directory>
```
Y cambiarlas por:
```shell
<Directory />
    Options FollowSymLinks
    AllowOverride all
    Order Deny,Allow
    Allow from all
    Require all granted
</Directory>
<Directory "cgi-bin">
    Options FollowSymLinks
    AllowOverride all
    Order Deny,Allow
    Allow from all
    Require all granted
</Directory>
```

6. Buscar la línea `<Directory "c:/Apache24/htdocs">`, y dentro de esas etiquetas cambiar la línea `AllowOverride None` por `AllowOverride All`.

7. Agregar al final del archivo las siguientes líneas:
```shell
# Proxies configuration
ProxyPass / http://localhost:3000
```

Cuando corras un servidor de NodeJS en el puerto 3000, accedes a http://localhost y tendrás acceso a tu servidor de Node desde Apache

1. Crear una regla en tu Firewall donde le des acceso total de entrada y salida al puerto 80.

## Instalar PHP

Descargar PHP 7 desde su [sitio oficial](https://windows.php.net/download/) **IMPORTANTE: RECUERDA DESCARGAR LA VERSIÓN `Thread Safe`** y extraerlo en `C:\PHP`.

Duplicar el archivo `C:\PHP\php.ini-development` y cambiarle el nombre a la copia a `C:\PHP\php.ini`.

Editar el archivo `C:\PHP\C:\PHP\php.ini`:

1. Buscar la línea `Listen 80` y cambiarla a `Listen *:80`.

2. Descomentar las siguientes líneas (Quitar el ; antes de la línea):
```shell
extension=mbstring
extension=mysqli
extension=pdo_mysql
```

3. Agregar al final: `extension=php_openssl.dll`.

Agregar la ruta `C:\PHP` a las variable de entorno del sistema de Windows `Path`:

1. Abrir el explorador de archivos.
2. Click derecho en `Equipo`.
3. Seleccionar `Propiedades`.
4. Seleccionar `Configuración avanzada del sistema`.
5. Seleccionar la pestaña `Opciones avanzadas`.
6. Presionar el botón `Variables de entorno`.
7. Buscar la variable `Path` en la lista de `variables del sistema` y darle doble click para editarla.
8. Presionar el botón `Nuevo`.
9. Ingresar la ruta `C:\PHP`.
10. Aceptar todos los cambios y reiniciar.

## Instalar Apache

Abrir el cmd como Administrador e ir a la ruta `C:\Apache24/bin`.
Crear el servicio de Apache ejecutando en cmd `httpd -k install`.

**Nota:** Cada cambio realizado en el archivo `httpd.conf` requiere que reinicies Apache, para ello se puede generar un acceso directo de `Apache Monitor`, situado en `C:\Apache24\bin`.

Para deshabilitar el proxy del puerto 3000, sólamente se comenta esa línea y se reinicia Apache.

## Probando Apache

Para evaluar que efectivamente funciona Apache, basta con ir a http://localhost, ahí nos aparecerá la leyenda `It works` (no olvides comentar la línea que define el proxy y reiniciar Apache).

Si quieres probar un servidor NodeJS, descomentas la línea que define el proxy y reinicias Apache, corres el servidor en el puerto 3000, posteriormente te diriges a http://localhost y debe aparecer tu servidor corriendo.

Cabe destacar que todas las configuraciones realizadas permiten acceder al servidor Apache desde dispositivos externos, siempre y cuando éstos estén en la misma red LAN. Vas a `http://tu.ip` y deberías tener conexión a tu servidor.

El directorio raíz del servidor Apache es `C:\Apache24\htdocs`, ahí puedes desarrollar tus proyectos PHP para que se ejecuten en Apache.