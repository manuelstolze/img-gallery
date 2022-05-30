import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ImageService} from "./image.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progress = 0;

  imageForm = this.formBuilder.group({file: ''})

  constructor(
    private formBuilder: FormBuilder,
    public imageService: ImageService
  ) {
  }

  onSubmit(event: any) {

    const fileInput = this.imageForm.value;

    // Read file and add service
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.file);
    reader.onload = (_event) => {
      this.imageService.addImage(reader.result as string);
      console.log(this.imageService.images);
    }
  };
}
