import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';

@Component({
  selector: 'indexed',
  templateUrl: './indexeddb.component.html',
  styleUrls: ['./indexeddb.component.scss']
})
export class IndexeddbComponent implements OnInit {
  @ViewChild('id', { static: false }) id_input: ElementRef;
  @ViewChild('name', { static: false }) name_input: ElementRef;
  title = 'angular-testing';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  Sheet: number = 3;
  sheetid: number
  sheetname: string
constructor(private dbService: NgxIndexedDBService){}
  

ngOnInit(): void {
  pdfjs.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.js';
  const fileInput = <HTMLInputElement>document.getElementById('input');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  
  this.dbService.add('sheets', {
    id: this.sheetid,
    name: this.sheetname,
    imageUrl: selectedFile
  }).subscribe((key) => {
    console.log('key: ', key);
  });
}
}
getimage(){
  console.log(this.Sheet);
  
  this.dbService.getByKey('images', this.Sheet).subscribe((file) => {
    console.log(file["email"]);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file["email"])
    reader.onload = () => {
  console.log(reader.result);
  var typedarray = new Uint8Array(<ArrayBuffer>reader.result);
  pdfjs.getDocument(typedarray).promise.then((pdf) => {
  this.render(pdf)
});
    }
  })
  
}
render(pdf:any){
  console.log("the pdf has ",pdf.numPages, "page(s).")
    for(let i=1; i<=pdf.numPages;i++ ){
    pdf.getPage(i).then((page) =>  {
      var viewport = page.getViewport({scale:1});
      let can= document.createElement('canvas')
      can.setAttribute("id", "the-canvas"+i);
      document.getElementById('container').appendChild(can);
      var canvas = document.getElementById("the-canvas"+i) as HTMLCanvasElement;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.width="100%"
      page.render({
        canvasContext: canvas.getContext('2d'),
                  viewport: viewport
                  
      });

    });

  }
}
}
