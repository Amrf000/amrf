原文:[https://stackblitz.com/edit/angular-material2-vertical-tabs?file=src%2Fapp%2Fapp.component.html](https://stackblitz.com/edit/angular-material2-vertical-tabs?file=src%2Fapp%2Fapp.component.html)

app.component.html

<div class="container">
  <div id="content">
    <div id="main-content">
      <mat-tab-group>
        <mat-tab label="Tab One">
          Tab One Content
        </mat-tab>
        <mat-tab label="Tab Two">
          Tab Two Content
        </mat-tab>
      </mat-tab-group>
    </div>
  </div>
</div>

app.component.scss

:host {
    >.container {
        max-width: 1264px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        background: none;
    }
    /deep/ {
        .mat-tab-group {
            flex-direction: row;
        }
        .mat-tab-header {
          border-bottom: none;
        }
        .mat-tab-header-pagination {
            display: none !important;
        }
        .mat-tab-labels {
            flex-direction: column;
        }
        .mat-ink-bar {
            height: 100%;
            left: 98% !important;
        }
        .mat-tab-body-wrapper {
            flex: 1 1 auto;
        }
    }
}
.container {
    position: relative;
    width: 100%;
    flex: 1 0 auto;
    margin: 0 auto;
    text-align: left;
}
#content {
    box-sizing: content-box;
    margin: 0 auto;
    padding: 15px;
    width: 1264px;
    background-color: #ffffff;
}
#content {
    max-width: 1100px;
    width: 100%;
    background-color: #ffffff;
    padding: 24px;
    box-sizing: border-box;
}
#content,
#main-content {
    &::before,
    &::after {
        content: "";
        display: table;
    }
    &::after {
        clear: both;
    }
}

app.component.ts

import { Component } from '@angular/core';
@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: \[ './app.component.scss' \]
})
export class AppComponent  {
name = 'Angular 6';
}

app.module.ts  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
@NgModule({
imports:      \[ BrowserModule, BrowserAnimationsModule, FormsModule, MatTabsModule \],
declarations: \[ AppComponent, HelloComponent \],
bootstrap:    \[ AppComponent \]
})
export class AppModule { }

hello.component.ts

import { Component, Input } from '@angular/core';
@Component({
selector: 'hello',
template: \`<h1>Hello {{name}}!</h1>\`,
styles: \[\`h1 { font-family: Lato; }\`\]
})
export class HelloComponent  {
@Input() name: string;
}

效果:

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542896095932688.png "1542896095932688.png")  

进一步组合测试:

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542964676807994.png "1542964676807994.png")

步骤:

1.  ng new client创建一个angular空项目
    
2.  修改index.html 在 头部添加<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    如果fonts.googleapis.com访问有问题
    
    替换成
    

<style>
  /\* fallback \*/
  @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(http://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>

3.下面是package.json中相关的依赖，没有的使用npm install xxx添加

"dependencies": {
    "@angular/animations": "~7.0.0",
    "@angular/cdk": "^7.0.3",
    "@angular/common": "~7.0.0",
    "@angular/compiler": "~7.0.0",
    "@angular/core": "~7.0.0",
    "@angular/flex-layout": "^7.0.0-beta.19",
    "@angular/forms": "~7.0.0",
    "@angular/http": "~7.0.0",
    "@angular/material": "^7.0.3",
    "@angular/platform-browser": "~7.0.0",
    "@angular/platform-browser-dynamic": "~7.0.0",
    "@angular/router": "~7.0.0",
    "core-js": "^2.5.4",
    "hammerjs": "^2.0.8",
    "jquery": "^3.3.1",
    "rxjs": "~6.3.3",
    "sockjs-client": "^1.3.0",
    "stompjs": "^2.3.3",
    "zone.js": "~0.8.26"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.10.0",
    "@angular/cli": "~7.0.6",
    "@angular/compiler-cli": "~7.0.0",
    "@angular/language-service": "~7.0.0",
    "@types/node": "~8.9.4",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "~4.5.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~3.1.6"
  }

4\. 修改polyfills.ts打开对ie9-11支持的注释内容

5.添加angular-material-demo-theme.scss

@import '~@angular/material/theming';
@include mat-core();
$primary: mat-palette($mat-indigo);
$accent:  mat-palette($mat-pink, A200, A100, A400);
$warn:    mat-palette($mat-red, A700);
$theme: mat-light-theme($primary, $accent);
@include angular-material-theme($theme);
.m2app-dark {
  $primary: mat-palette($mat-pink, 700, 500, 900);
  $accent:  mat-palette($mat-blue-grey, A200, A100, A400);
  $warn:    mat-palette($mat-red, A700);
  $theme:   mat-dark-theme($primary, $accent, $warn);
  @include angular-material-theme($theme);
}

6.添加style.scss  

@import 'angular-material-demo-theme.scss';
body {
  margin: 0;
}

7.修改angular.json将style.css替换为style.scss

8.待续
链接:[angular-material2-vertical-tabs](https://bbs.huaweicloud.com/blogs/10ab3870ee6111e8bd5a7ca23e93a891)