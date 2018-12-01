# Introducción a Angular

En este post daré una introducción a Angular 7 sobre sus aspectos escenciales y al final crearé una página sencilla con este grandioso framework.

## ¿Qué es Angular?

[Angular](https://angular.io/) es un framework para generar aplicaciones web, es desarrollado por Google y utiliza Typescript como su lenguaje principal.

## Angular y sus versiones

Actualmente la versión estable de Angular es la 7, y en un par de meses se va a actualizar a la 8, ([aquí puedes checar las versiones de Angular](https://github.com/angular/angular/releases)), y recomiendo usar siempre las versiones estables más actuales, ya que por lo regular tienen correcciones de errores, optimizaciones o nuevas funcionalidades.

Angular y sus versiones, en conjunto con su nombre, han causado algo de confusión, ya que la versión 1, oficialmente llamada AngularJS es completamente diferente de sus versiones sucesoras 2/4/5/6/7, ya que Google creó la versión 2 prácticamente desde cero, por lo que dicha versión no hereda nada de código de su predecesor. Incluso cambió (muy poco notorio) el nombre a Angular.IO; sin embargo, muchos desarrolladores se siguen refiriendo a AngularJS como Angular 1 y Angular.IO como Angular 2, por lo que, si necesitas buscar algún tema relacionado con Angular.IO lo recomendable es buscarlo como Angular 2, 4, 5, 6 ó 7.

## Desarrollo de SPA con Angular

Una [SPA (Single Page Application)](https://es.wikipedia.org/wiki/Single-page_application) es una aplicación de una sola página, esto significa que un sitio web desarrollado con Angular no necesita recargarse para navegar dentro de dicho sitio, y esto es posible porque se cargan los archivos HTML, Javascript y CSS necesarios una sola vez, y conforme se requieran más, Angular se encarga de cargar los archivos faltantes necesarios sin necesidad de recargar la página, esto se logra a través de **Lazy Loagding** de Angular, tema del que hablaré en otro post.

Las ventajas de usar SPA son principalmente de experiencia de usuario (UX), ya que no va a estar recargando páginas cada vez que se navege en la SPA, además de que esto reduce considerablemente el consumo de recursos, tanto para el servidor como el cliente.

Angular se basa en desarrollar SPAs.

## Desarrollo basado en componentes

Angular.IO, a diferencia de su predecesor AngularJS basado en [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador), se basa en el [desarrollo de componentes](https://es.wikipedia.org/wiki/Ingenier%C3%ADa_de_software_basada_en_componentes), lo que significa desarrollar funcionalidades encapsuladas e independientes mediante componentes reutilizables en cualquier parte el sistema.

Un componente de Angular se basa en 3 elementos principales: su respectiva plantilla HTML, sus estilos CSS (También se puede usar SCSS) y su funcionalidad en Typescript; adicionalmente cada componente de Angular cuenta con su propio archivo Typescript para sus pruebas unitarias (Éste es opcional). Sus principales elementos (su plantilla, sus estilos y su funcionalidad) regularmente se manejan de forma separada en sus respectivos archivos **.html**, **.css** (o **.scss**) y **.ts**, que es la forma en la que personalmente acostumbro usarlos, aunque también se pueden unificar en un solo archivo **.ts**.

## Mi primera SPA con Angular

Para cuestiones didácticas vamos a generar una SPA con Angular que administre una lista de TODOs.

### Preparando mi entorno de desarrollo

Vamos a crear una SPA básica de Angular, para ello necesitamos tener instalado [Node.JS](https://nodejs.org/es/), lo pueden descargar desde su página oficial.

#### Instalndo Node.JS en Windows

Si estas desarrollando con Windows, solo se necesita descargar el **.msi** de Node.JS desde su [páfina oficial](https://nodejs.org/es/download/) e instalarlo. Posteriormente recomiendo instalar [GIT](https://es.wikipedia.org/wiki/Git), ya que en Windows éste trae una consola llamada Git Bash con la que podemos trabajar, porque en la consola MS-DOS no suelen correr los comandos que necesitamos, pueden [descargar GIT para Windows desde aquí](https://git-scm.com/download/win).

Si usan Windows 10, pueden trabajar con la PowerShell (Es la que uso personalmente) sin ningún problema.

#### Instalando en Linux/Mac

Si usas Linux o Mac, recomiendo instalar Node.JS a través de [NVM (Node Version Manager)](https://github.com/creationix/nvm), ya que de esta forma pueden instalar varias versiones de Node.JS y seleccionar la que necesiten, pueden instalarlo siguiendo las instrucciones de su [repositorio en GitHub](https://github.com/creationix/nvm#installation).

##### Otra alternativa a NPM

Node.JS trae instalado por defecto una herramienta llamada **[NPM](https://es.wikipedia.org/wiki/Npm)**, la cual se usa para instalar dependencias o ejecutar los comandos que requieramos al desarrollar con Node.JS. Sin embargo, existe otra opción a NPM, [Yarn](https://es.wikipedia.org/wiki/Yarn_(Facebook)), que al igual que NPM, se usa para instalar dependencias y ejecutar comandos, personalmente uso Yarn, ya que sus comandos son un poco más simples que los de NPM, [aquí pueden descargarlo](https://yarnpkg.com/en/docs/install).

### Validando la instalación

Ya instalado Node.JS, Yarn (Si es que se deciden por usar Yarn, ya que es opcional), y GIT para Windows (Si es que usas Windows), procedemos a confirmar la instalación abriendo la Terminal en Linux o Mac, la Consola de GIT o la PowerShell en Windows y ejecutamos el comando:

```shell
node --version
```

Al presionar ENTER, debe aparecernos la versión de Node.JS instalada (Por ejemplo: v10.13.0), si sale algún error, checa si instalaste Node.JS o investiga el error que te salga en [Google](https://www.google.com.mx/).

El comando `node` nos permite ejecutar cualquier archivo **.js** desde terminal, siempre y cuando éste implemente funcionalidades de Node.JS.

La bandera `--version` (Se identifica como bandera cuando tiene 2 guiones antes de la palabra, en este caso *version*) indica al comando `node` que estamos solicitando su versión actual.

### Instalando la Interfaz de Línea de Comandos de Angular

La [**Interfaz de Línea de Comandos de Angular**](https://cli.angular.io/), oficialmente llamado @Angular/CLI es una dependencia de Node.JS y se encarga de crear la estructura de los proyectos de Angular de una manera muy fácil. Ésta dependencia necesita instalarse de manera global, por lo que en su instalación usa la bandera `--global`, o en su forma reducida `-g`.

Para instalarla desde NPM se ejecuta el comando:

```shell
npm install --global @angular/cli
```

Si vas a usar Yarn, ejecuta:

```
yarn add --global @angular/cli
```

Para comprobar su instalación ejecutamos el comando del CLI de Angular `ng` con la bandera `--version`:

```shell
ng --version
```

Y debe aparecer la información de Angular:

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/

Angular CLI: 7.1.0
Node: 10.13.0
OS: win32 x64
Angular:
...
```

Si aparece un error, lo ideal es buscarlo en [Google](https://www.google.com.mx/).

### Usando el CLI de Angular

Para crear nuestra primera SPA con Angular, abrimos la consola (Terminal, Git Bash o PowerShell), nos dirijimos al directorio donde guardaremos el proyecto (Por ejemplo: ..\Develop\Angular) y ejecutamos el comando:

```shell
ng new
```

Posteriormente el CLI de Angular preguntará el nombre de la aplicación, a lo que ingresaremos el nombre, en nuestro ejemplo, `SPA` y presionamos ENTER:

```shell
? What name would you like to use for the new workspace and initial project? SPA
```

También pregunrará si queremos que genere automáticamente el modulo de routes, ingresamos `Y` y presionamos ENTER:

```shell
? Would you like to add Angular routing? (y/N) Y
```

Finalmente pregunta el formato de hojas de estilo a usar, personalmente siempre uso SCSS, aunque esto es a desición de cada desarrollador, para seleccionar presionamos las teclas arriba/abajo y presionamos ENTER:

```shell
? Which stylesheet format would you like to use? (Use arrow keys)
  CSS
> SCSS   [ http://sass-lang.com   ]
  SASS   [ http://sass-lang.com   ]
  LESS   [ http://lesscss.org     ]
  Stylus [ http://stylus-lang.com ]
```

Y creará la estructura del proyecto, puede tardar unos pocos minutos instalando todas las dependencias de Node.JS necesarias. Ya terminando el proceso, accedemos desde la consola al proyecto `cd SPA` y ejecutamos el comando `ng serve --open`, esperando que lance un mensaje similar a este:

```shell
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2018-11-30T15:10:42.087Z
Hash: d7e76637c08c2473e1be
Time: 15340ms
chunk {main} main.js, main.js.map (main) 41.1 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 389 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 777 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 4.14 MB [initial] [rendered]
i ｢wdm｣: Compiled successfully.
```

Lo que hace este comando es ejecutar el proyecto en un entorno de desarrollo, ya llegando a este punto abrió tu navegador cargando la SPA creada. Como la acabamos de crear, no tiene nada mas que el logotipo de angular y un saludo, técnicamente ya funciona nuestra SPA.

Dicho servidor de desarrollo funciona internamente con [Webpack](https://webpack.js.org/), aunque por el momento no hablaremos de ello; sin embargo, lo qe hace, es que cuando reaizamos un cambio en el código de nuestro proyecto y lo guardamos, el servidor automáticamente detecta dicho cambio y se recarga de tal manera de que siempre muestra los últimos cambios, sin necesidad de reiniciarlo a cada rato.

Cuando si es necesario reiniciarlo es cuando instalamos dependencias Node.JS o modificamos el archivo `angular.json`, del cual hablaremos más adelante.

### Editando nuestra SPA

Ya en este punto podemos manipular y editar nuestra SPA, para ello abrimos el proyecto con un editor de texto, personalmente uso Visual Studio Code, porque instalándole extensiones puede funcionar prácticamente como un IDE, con funcionalidades de autocompletado, detección de errores de sintaxis, entre otras cosas (Ésto también lo puedes hacer con otros editores como Atom.IO o Sublime Text, ya probé todos estos editores y me gustó mas VSCode), pueden descargarlo desde su [pagina oficial](https://code.visualstudio.com/).

En el editor de texto podemos observar la estructura del proyecto respecto a sus archivos y directorios, todos los archivos son importantes, sin embargo, hay algunos que son de gran interés para nosotros:

- **angular.json**: Este archivo [JSON](https://json.org/json-es.html) guarda la configuración del proyecto, la cual es usada para cuando ejecutamos el proyecto en el entorno de desarrollo y cuando se 'transpila' (Traducir todo el código de Typescript a Javascript [ES5](https://en.wikipedia.org/wiki/ECMAScript) a través de un proceso similar a la [compilación](https://es.wikipedia.org/wiki/Compilador)) el proyecto para producción. En otro post describiré más a detalle este archivo y cómo manipularlo.

```json
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
        "SPA": {
            "root": "",
            "sourceRoot": "src",
            "projectType": "application",
            "prefix": "app",
            "schematics": {
                "@schematics/angular:component": {
                    "styleext": "scss"
                }
            },
            ...
}
```

- **package.json**: Es un archivo JSON propio de Node.JS, encargado de almacenar la información sobre el proyecto. Aquí se guarda el nombre y la versión de todas las dependencias que necesita el proyecto para funcionar, además de almacenar scripts propios del proyecto y otra información sobre el autor, versioón del proyecto, etc.

```json
{
    "name": "spa",
    "version": "0.0.0",
    "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
        "@angular/animations": "~7.1.0",
        "@angular/common": "~7.1.0",
        "@angular/compiler": "~7.1.0",
        "@angular/core": "~7.1.0",
        ...
    },
    "devDependencies": {
        "@angular-devkit/build-angular": "~0.11.0",
        "@angular/cli": "~7.1.0",
        "@angular/compiler-cli": "~7.1.0",
        "@angular/language-service": "~7.1.0",
        ...
    }
}
```

- **src/styles.scss**: Aquí puedes guardar los estilos CSS, SCSS, SASS o LESS (depende del formato de hojas de estilo seleccionado) globales del proyecto, ya que cada componente encapsula sus estilos, por lo que si se necesita de, por ejemplo, una clase CSS general en todo el proyecto, se declara en este archivo (Inicialmente no tiene ningún estilo declarado).

```scss
/* You can add global styles to this file, and also import other style files */
```

- **src/app/app.module.ts**: Este archivo guarda la configuración principal de Angular. Angular funciona a través de módulos, en donde declaras que dependencias de Angular necesitas en tu proyecto.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

- **src/app/app.component.ts**: Nombrado AppComponent, es el componente padre, el componente principal de nuestra SPA, dentro de él se inyectan los demás componentes.

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'SPA';
}
```

- **src/app/app.component.html**: Es la plantilla HTML del AppComponent.

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
    <h1>
        Welcome to {{ title }}!
    </h1>
    <img width="300" alt="Angular Logo" src="data:image/svg+xml;...">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
    <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
    </li>
    <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
    </li>
    <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
    </li>
</ul>

<router-outlet></router-outlet>
```

- **src/app/app.component.scss**: Es el estilo CSS, SCSS, SASS o LESS (depende del formato de hojas de estilo seleccionado) del AppComponent (Inicialmente no tiene ningún estilo declarado).

- **src/app/app-routing.module.ts**: Es el módulo encargado de gestionar las rutas de nuestra SPA.

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Agregando Bootstrap 4 a nuestra SPA

Para darle algo de estilo CSS con Boostrap 4, vamos a ver cómo integrarlo con Angular. Muchos otros desarrolladores optan por integrar Bootstrap con otras dependencias de terceros como [ng-boostrap](https://ng-bootstrap.github.io/#/getting-started), pero en lo personal opto por integrar directamente Bootstrap junto con sus dependencias.

En este punto podemos agregar u omitir las dependencias de Bootstrap, dependiendo de lo que vayamos a usar de éste, en caso de necesitar los eventos y funcionalidades Javascript, se necesita instalar JQuery y Popper.js; en caso de que sólo se vayan a utilizar los estilos CSS, se puede omitir instalar JQuery y Popper.js

Únicamente Bootstrap:

- Con NPM

```shell
npm install --save bootstrap
```

- Con yarn

```shell
yarn add bootstrap
```

Bootstrap y sus dependencias:

- Con NPM

```shell
npm install --save jquery popper.js bootstrap
```

- Con yarn

```shell
yarn add jquery popper.js bootstrap
```

Por cuestiones de orden en nuestro proyecto, vamos a modificar un poco el archivo `angular.json`, para ello lo abrimos y buscamos dentro de la sección `projects.SPA.architect.build.options` la propiedad `styles`, y cambiamos el único valor que tiene `src/styles.scss` por `src/scss/styles.scss`:

```json
{
    ...
    "projects": {
        "SPA": {
            ...
            "architect": {
                "build": {
                    ...
                    "options": {
                        ...
                        "styles": [
                            "src/scss/styles.scss"
                        ],
                        ...
```

Posteriormente generamos el directorio `src/app/scss` y movemos el archivo `src/app/styles.scss` dentro del directorio creado.

De ésta manera si generamos más hojas de estilos SCSS globales (vamos a generar uno para Bootstrap) los podemos almacenar en su respectivo directorio.

Ahora generamos el archivo SCSS `src/app/scss/bootstrap.scss` con el siguiente contenido:

```scss
/** Reference: https://getbootstrap.com/docs/4.0/getting-started/theming/ */

/** Full */
@import "~bootstrap/scss/boostrap";

// /** Required */
// @import "~bootstrap/scss/functions";
// @import "~bootstrap/scss/variables";
// @import "~bootstrap/scss/mixins";

// /** Optional */
// @import "~bootstrap/scss/root";
// @import "~bootstrap/scss/reboot";
// @import "~bootstrap/scss/type";
// @import "~bootstrap/scss/images";
// @import "~bootstrap/scss/code";
// @import "~bootstrap/scss/grid";
// @import "~bootstrap/scss/tables";
// @import "~bootstrap/scss/forms";
// @import "~bootstrap/scss/buttons";
// @import "~bootstrap/scss/transitions";
// @import "~bootstrap/scss/dropdown";
// @import "~bootstrap/scss/button-group";
// @import "~bootstrap/scss/input-group";
// @import "~bootstrap/scss/custom-forms";
// @import "~bootstrap/scss/nav";
// @import "~bootstrap/scss/navbar";
// @import "~bootstrap/scss/card";
// @import "~bootstrap/scss/breadcrumb";
// @import "~bootstrap/scss/pagination";
// @import "~bootstrap/scss/badge";
// @import "~bootstrap/scss/jumbotron";
// @import "~bootstrap/scss/alert";
// @import "~bootstrap/scss/progress";
// @import "~bootstrap/scss/media";
// @import "~bootstrap/scss/list-group";
// @import "~bootstrap/scss/close";
// @import "~bootstrap/scss/modal";
// @import "~bootstrap/scss/tooltip";
// @import "~bootstrap/scss/popover";
// @import "~bootstrap/scss/carousel";
// @import "~bootstrap/scss/utilities";
// @import "~bootstrap/scss/print";
```

***Nota:** Puedes importar todo el estilo de Bootstrap o importar sólo los comonentes que necesites, sólo basta con comentar la línea debajo del comentario **Full** y descomentar las líneas que vienen abajo.*

Finalmente editamos el archivo `src/app/scss/styles.scss`, agregándole el siguiente contenido:

```scss
@import "./bootstrap.scss";
```

Ya con esta configuración el proyecto tiene integrado las hojas de estilo de Bootstrap.

#### Integrando las dependencias de Bootstrap

Si necesitas usar los eventos propioes de Bootstrap, necesitas integrar los archivos Javascript de JQuery, Popper.js y Bootstrap, para ello volvemos a modificar el archivo `angular.json`, abajo de la propiedad `styles` se encuentra otra propiedar con un arreglo vacío llamada `scripts`, dentro de éste importamos dichos archivos:

```json
{
    ...
    "projects": {
        "SPA": {
            ...
            "architect": {
                "build": {
                    ...
                    "options": {
                        ...
                        "styles": [
                            "src/scss/styles.scss"
                        ],
                        "scripts": [
                            "node_modules/jquery/dist/jquery.slim.min.js",
                            "node_modules/popper.js/dist/umd/popper.min.js",
                            "node_modules/bootstrap/dist/js/bootstrap.min.js"
                        ]
                        ...
```

Y ya con eso podemos hacer uso de JQuery dentro de Angular.

### Generando los primeros componentes

El CLI de Angular genera todos sus archivos propios de Angular en el directorio `src/app`, por lo que cuando se generan varios archivos, tiende a ser algo desorganizado; en lo personal genero directorios que indiquen el tipo de archivo que resguarda, en el caso de los componentes asignados a routes, los almaceno en un directorio nombrado `pages` (ya que técnicamente cada uno representa una página de la aplicación), y en un directorio nombrado `components` resguardo los componentes reutilizables que componen parte del contenido de los componentes del directorio `pages`.

Vamos a generar los componentes que servirán como routes de la aplicación, para ello generamos el primer componente `TodosComponent` desde la terminal/consola/powerShell:

```shell
ng generate component pages/todos
```

*Prestando atención al comando ejecutado, el comando **ng** es propio de Angular y se usa para hacer uso del CLI, posteriormente se observa el parámetro **generate** que indica que se va a generar un archivo o conjunto de archivos propios de Angular, seguido se encuentra el parámetro **component** que indica que se va a generar un nuevo componente, finalmente se encuentra la ruta y nombre del componente en la sección **pages/todos**.*

Al abrir el archivo `src/app/pages/todos/todos.component.ts`, veremos un contenido similar a:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
```

En dicho contenido vemos el decorador `@Component` antes de la declaración de la clase del componente, dicho decorador indica que ésta clase es un componente de Angular; en su contenido, que es un objeto JSON, observamos la propiedad `selector` con el valor `app-todos`, este selector define el nombre del componente como etiqueta HTML, de tal manera que si queremos insertarlo dentro de otro componente, basta con usar el valor del selector como etiqueta, por ejemplo:

```html
<section class="col-auto">
    <app-todos></app-todos>
</section>
```

Para hacer pruebas rápidas editamos la plantilla HTML del componente `src/app/pages/todos/todos.component.html` y le agregamos una lista de información aleatoria:

```html
<section class="card card-body">
    <h1 class="text-center">Todos list</h1>
    <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquid accusamus quos laboriosam iure, expedita, facere quam aspernatur debitis ab mollitia dolore. Delectus saepe dicta, assumenda ut soluta possimus corrupti?</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quo nostrum enim voluptas sapiente aliquid quidem, rem, consequuntur exercitationem provident odio cupiditate harum impedit sunt corporis quae molestias tempora quia!</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis rerum repellendus omnis quos asperiores ipsa ipsam cumque? Magnam quasi quae ab quas, illum, non modi tempore natus officia explicabo aperiam!</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, inventore ut quod eaque facilis minima eum! Excepturi commodi eligendi perspiciatis eveniet aut ipsum architecto. Optio officiis atque reprehenderit praesentium minus?</li>
    </ol>
</section>
```

Después generamos el componente `AddTodoComponent`:

```shell
ng g c pages/add-todo
```

*Los parámetros del CLI pueden ser abreviados, por lo que en este caso **generate** puede abreviarse con su inicial **g** y **componente** con su inicial **c**.*

Para hacer pruebas rápidas editamos la plantilla HTML del componente `src/app/pages/add-todo/add-todo.component.html` y le agregamos un título y algo de contenido:

```html
<section class="card card-body">
    <h1 class="text-center">New todo</h1>
    <article class="form-group">
        <label for="todo">Todo:</label>
        <input type="text" id="todo" class="form-control">
    </article>
</section>
```

Finalmente generamos el componente `TodoComponent`:

```shell
ng g c pages/todo
```

Para hacer pruebas rápidas editamos la plantilla HTML del componente `src/app/pages/todo/todo.component.html` y le agregamos un título y algo de contenido:

```html
<section class="card card-body">
    <h1 class="text-center">Todo</h1>
    <div class="alert alert-info" role="alert">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium fugit blanditiis cumque, possimus
        temporibus ipsa quidem nihil ut iure obcaecati aliquam, aperiam iusto odio neque. Quae voluptates numquam tempora?
    </div>
</section>
```

Ya generados los componentes, verificamos que se hayan importado en el módulo principal de nuestra aplicación, para ello abrimos el archivo `src/app/app-routing.module.ts` y validamos que cada componente se haya imortado y agregado a las declaraciones del módulo, teniendo el siguiente contenido:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Abajo se observan los componentes creados
import { TodosComponent } from './pages/todos/todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
    declarations: [
        AppComponent,
        // en ésta sección se asignan los componentes a nuestro módulo
        TodosComponent,
        AddTodoComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Para probar que funciona, ejecutamos el comando `ng serve --open` (si es que no esta ejecutado el proceso) y abrimos en el navegador la dirección `localhost:4200` para verificar que se está ejecutando nuestra aplicación.

![Primera vista de Angular](https://github.com/ivanhdzd/ivanhdzd.github.io/raw/docs/docs/blog/2018-11-30-introduccion-a-angular/quickstart.jpg "Primera vista de Angular")

Para visualizar los componentes, vamos a insertarlos dentro de la plantilla del componente padre `AppComponent`, para eso abrimos el archivo `src/app/app.component.html` y agregamos el siguiente contenido:

```html
<h1 class="text-center">App component</h1>
<hr>
<section class="container">
    <article class="row">
        <div class="col-12 col-md-6">
            <app-add-todo></app-add-todo>
        </div>
        <div class="col-12 col-md-6">
            <app-todo></app-todo>
        </div>
        <div class="col-12">
            <app-todos></app-todos>
        </div>
    </article>
</section>
<router-outlet></router-outlet>
```

El resultado será similar a:

![Componentes en Angular](https://github.com/ivanhdzd/ivanhdzd.github.io/raw/docs/docs/blog/2018-11-30-introduccion-a-angular/components.jpg "Componentes en Angular")

### Configurando el módulo routing

Es momento de configurar el routing de nuestra aplicación, el routing se basa en generar rutas dentro de nuestra aplicación, y cada ruta debe mostrar una vista diferente, para nuestro ejemplo de TODOs vamos a generar 3 rutas:

- **/** - Redirecciona a `/todos`

- **/todos** - carga el componente `TodosComponent`
- **/add-todo** - carga el componente `AddComponent`
- **/todo/:id** - carga el componente `TodoComponent` con un parámetro llamado `id`

- **Cualquier otra ruta inválida** - carga una página de error 404 (aún no se ha generado su respectivo componente, pero se va a generar)

Generamos el componente que corresponde al error 404:

```shell
ng g c pages/page-not-found
```

Para mantener lo más ordenado posible nuestro proyecto, vamos a crear el directorio `src/app/modules` y vamos a mover a dicho directorio el módulo `src/app/app-routing.module.ts` y vamos a actualizar su delcaración en `src/app/app.module.ts`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Vamos a asegurarnos de actualizar la ruta
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
...
```

Ahora abrimos el módulo `src/app/modules/app-routing.module.ts` y vamos a importar los componentes creados anteriormente:

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from '../pages/todos/todos.component';
import { AddTodoComponent } from '../pages/add-todo/add-todo.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [];
...
```

Vamos a definir las rutas por medio de la constante `routes` dentro de nuestro módulo:

```ts
const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodosComponent },
    { path: 'add-todo', component: AddTodoComponent },
    { path: 'todo/:id', component: TodoComponent },
    { path: '**', component: PageNotFoundComponent }
];
```

Finalmente removemos los componentes declarados dentro del componente padre `AppComponent`:

```html
<nav id="navbar" class="navbar navbar-expand fixed-top navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbar-content">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" routerLink="/todos" routerLinkActive="active">TODOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLink="/add-todo" routerLinkActive="active">ADD TODO</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<section class="m-3 mx-sm-5 px-sm-5">
    <article id="router-container" class="mx-md-3 mx-lg-5 px-md-3 px-lg-5">
        <router-outlet></router-outlet>
    </article>
</section>

<footer class="bg-dark text-center mt-5 py-5">
    Iv&aacute;nHdzD &middot; 2019
</footer>
```

En Angular, en las etiquetas `<a>` se sustituye el atributo `href` por `routerLink`, y si se desea inyectar una clase CSS cuando dicha ruta esté activa, se agrega el atributo `routerLinkActive` y el nombre de la clase a inyectar como valor de éste, en nuestro caso, cuando la ruta está activa se inyecta la clase `active`, que será definida a continuación.

Otros desarrolladores Angular acostumbran generar un componente para la barra de navegación y otro para el footer, en lo personal, como son componentes que sólo se van a usar desde el componente padre, acostumbro poner su respectivo código directamente en lugar de usar componentes, pero eso es desición de cada quien, si prefieres separarlos, te aconsejo generarlos dentro del directorio `src/app/components`.

Agregamos algo de estilo SCSS a `AppComponent`:

```scss
#router-container {
    @media screen and (max-width: 633px) {
        margin-top: 4rem;
        min-height: calc(100vh - 14.5rem);
    }
    @media screen and (min-width: 634px) {
        margin-top: 5rem;
        min-height: calc(100vh - 15.5rem);
    }
}

.active {
    border-bottom: white 2px solid !important;
    color: white !important;
}

footer {
    color: white;
}
```

Al ver los cambios en el navegador, veremos algo similar a:

![Routing en Angular](https://github.com/ivanhdzd/ivanhdzd.github.io/raw/docs/docs/blog/2018-11-30-introduccion-a-angular/routing-todos.jpg "Routing en Angular")

Ahora ya puedes navegar por medio de la barra de navegación en la parte superior para ir a `/todos` o `/add-todo`, la ruta `/todo/:id` será accesible desde la ruta `/todos` cuando ésta muestre la lista de todos junto a un botón para ver los detalles de cada uno, pero eso se verá más adelante.

Si tratas de acceder a alguna ruta inválida como `localhost:4200/an-invalid-route`, te mostrará el componente `PageNotFoundComponent`, dicho componente puedes editarlo para mostrar el mensage 404 con el diseño deseado, y si le agregas más funcionalidad, puedes poner un redireccionamiento automático dentro con un temporizador en segundos en decremento que se muestren en la vista.

Posteriormente se le agregará funcionalidad para agregar, ver, editar y eliminar TODOs de una lista almacenada en un Servicio, tema que también se verá a continuación.