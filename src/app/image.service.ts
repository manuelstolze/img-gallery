import {Injectable} from '@angular/core';

export interface Image {
  img: string,
  tags: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Image[] = [];

  constructor() {
  }

  public addImage(image: string) {
    const newImage = {img: image, tags: ['CATS', 'KITTEN', 'UWU']}
    this.images.push(newImage);
  }
}
