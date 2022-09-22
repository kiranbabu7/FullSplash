import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  file!: File;
  constructor() { }

  ngOnInit(): void {
  }
  uploadFile(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
  }
}
