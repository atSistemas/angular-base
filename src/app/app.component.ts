import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(
        public route: ActivatedRoute,
        public router: Router,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('EN');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ca|cs|de|el|en|es|fi|fr|it|nl|no|pt|ro|sk|sv|tr/) ?
            browserLang.toUpperCase()
            :
            'EN');
    }
};
