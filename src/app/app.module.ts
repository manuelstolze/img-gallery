import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadComponent} from './file-upload/file-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from "@angular/material/icon";
import { TagListComponent } from './tag-list/tag-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ImageListComponent } from './image-list/image-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    TagListComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
