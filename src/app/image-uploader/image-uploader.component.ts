import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  file!: File;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  uploadFile(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
    let formData = new FormData;
    formData.append('file', this.file)
    fetch('http://localhost:8000/image-uploader/', {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log(response)
    }
    )

  }
}
