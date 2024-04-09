import { Component } from '@angular/core';

import { Camera,CameraResultType } from '@capacitor/camera';
import { Injectable } from "@angular/core";

//call


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

@Injectable({
  providedIn: 'root'
})
export class TabsPage {

  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
  }
  
 
}
