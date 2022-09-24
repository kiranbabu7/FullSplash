import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageUploaderService } from './image-uploader.service';
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  file: any;
  isuploaded: boolean = false;
  imageUrl: any = "http://localhost:8000/images/spiderman_cwhBezt.jpg";
  errorMessage: string = '';
  validExtensions: string[]= ['img', 'png', 'jpg', 'jpeg']
  uploadInProgress: boolean = false;
  constructor(
    private imageUploaderService: ImageUploaderService
    ) { }

  ngOnInit(): void {
  }
  uploadFile(event: any) {
    this.errorMessage = '';
    this.file = event.target.files[0]
    const fileName = this.file.name
    const extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    if(this.validExtensions.includes(extension)){
      this.imageUploaderService.uploadImage(this.file).subscribe(
        (response: any) => {
          if (response.type === HttpEventType.UploadProgress) {
            this.uploadInProgress = true;
          }else if(response.type==HttpEventType.Response){
            this.uploadInProgress = false
            this.isuploaded = true;
            this.imageUrl = response.body.data
          }
        },
        (error) => this.errorMessage = error
      )
    }
    else{
      this.errorMessage = 'Invalid Extension'
    }
    event.target.value = ''
  }
  copyLink(event: any){
    navigator.clipboard.writeText(this.imageUrl);
    event.target.innerText = 'Copied';
  }
}
