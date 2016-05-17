import {Component, enableProdMode} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap';

// todo: enable prod mod only for prod build
// if (false) {
enableProdMode();
// }

let w:any = window;
if (w && w.__theme === 'bs4') {
  Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;
}

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>Angular2 demo</h1>
      <p>Native Angular2 directives for Bootstrap</p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-bootstrap">View on GitHub</a>
      <div class="row">
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <h1 id="overview" class="page-header">
    </h1>

    <section id="getting-started">${gettingStarted}</section>

  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center">
      </p>
    </div>
  </footer>
  `,
  directives: [
    CORE_DIRECTIVES
  ]
})
export class DemoComponent {
  public isBs3:boolean = Ng2BootstrapConfig.theme === Ng2BootstrapTheme.BS3;
}

bootstrap(DemoComponent);
