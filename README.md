# HMS Core Application Demo

This Angular application demostrate how to use **HMS Core Library** in Angular application.

## Table Of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Install](#install)
    * [Import the library to project](#import-the-library-to-project)
* [Running Unit Test](#running-unit-test)
* [Author](#author)


## Getting Started

### Dependencies 
| Dependencies  | Version        | 
| :-----------: |:--------------:|
| Angular       | ^7.2.0         |
| hms-core      | 0.0.4         |

### Install

First thing, You need to an Angular project which you generate by Angular CLI.
After that, You need to install [Bootstrap CSS/SCSS](https://www.npmjs.com/package/bootstrap) and [Ng-Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) on Dev Dependencies (--save-dev). You need to make sure about you imported bootstrap CSS/SCSS to your project.
```scss
// styles.scss
    @import '../../../node_modules/bootstrap/scss/bootstrap.scss';
```
```css
// styles.css
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```
> About ".../.../.../" or ".../" at URL prefix, It's belong to project structure you have.

Then you can get our library from NPM as below:
```shell
npm i hms-core
```
```shell
npm install hms-core
```

### Import the library to project

Now, you need to import the library to any modules that you need as the following example
```ts
// app.module.ts
...
import { HmsCoreModule } from 'hms-core'; // <-- Declare importting module from hms-core here
...

@NgModule({
    declarations: [
        AppComponent,
        ...
    ],
    imports: [
        ...,
        HmsCoreModule, // <-- Import the library here
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
## Running unit tests

Run `ng test hms-core` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Author
* **Shane - Sang Nguyen** - *Initial work* - [Github](https://github.com/SangNguyenOSD)
