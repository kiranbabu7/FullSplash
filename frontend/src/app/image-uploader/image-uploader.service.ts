import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ImageUploaderService {
    constructor(private http: HttpClient) { }

    uploadImage(image:File) {
        const formData = new FormData;
        formData.append('image', image);
        return this.http.post('http://localhost:8000/upload-image/', formData,
            {
                reportProgress:true,
                observe:"events"
            });
    }
}