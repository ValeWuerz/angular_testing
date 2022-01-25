import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Sheets } from '../sheets';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit, AfterViewInit {
     @ViewChild('list', { static: false }) sheet_list: ElementRef;
  
  sheets: Array<Sheets>=[]

  show_menu: boolean = true
constructor(private dbService: NgxIndexedDBService){}
  ngOnInit(): void {
    this.getimage()
  }
  ngAfterViewInit(): void {

  }
  getimage(){
    this.dbService.getAll('sheets').subscribe((sheets) => {
      this.fill_sheets(sheets)
    });

    
  }
  async render_sheets(){
    for (let index = 0; index < this.sheets.length; index++) {
      let reader = new FileReader();

      reader.readAsArrayBuffer(this.sheets[index]["imageUrl"])
       reader.onload = () =>{
    var typedarray = new Uint8Array(<ArrayBuffer>reader.result);

    pdfjs.getDocument(typedarray).promise.then((pdf) => {
      this.render(pdf, index)
     });
      }



    }
  
  }
  render(pdf: PDFDocumentProxy, index: number){
      pdf.getPage(1).then( (page) =>  {
        var viewport = page.getViewport({scale:1});
        let can= document.createElement('canvas')
        let label= document.createElement('div')
        label.innerText=this.sheets[index]["name"]
        label.setAttribute("class", "bg-slate-500 ")
        can.setAttribute("id", this.sheets[index]["name"]);
        can.setAttribute("class", "hover:border-yellow-50 hover:border-4" );
        this.sheet_list.nativeElement.appendChild(label)
        this.sheet_list.nativeElement.appendChild(can)
        can.height = viewport.height;
        can.width = viewport.width;
        can.style.width="100%"
         page.render({
          canvasContext: can.getContext('2d'),
                    viewport: viewport
        });
  
      });
  
    
  }
 fill_sheets(sheets){
for (let index = 0; index < sheets.length; index++) {
  let note = {
    id:0,
    name:"",
    imageUrl:""

  }
note.id=index
note.name=sheets[index]["name"]
note.imageUrl=sheets[index]["imageUrl"]

this.sheets.push(note)

}
  this.render_sheets()

}
  open_menu(){
    if (!this.show_menu) {
    this.render_sheets()
      
    }
      this.show_menu=!this.show_menu

  }
  
  
}