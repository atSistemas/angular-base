import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {
    TranslateModule,
} from 'ng2-translate/ng2-translate';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        HttpModule
    ]
})
export class SharedModule { }
