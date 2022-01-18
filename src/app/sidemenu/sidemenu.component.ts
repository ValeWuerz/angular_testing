import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: ElementRef<HTMLInputElement>;
  @ViewChild('page') page: ElementRef<HTMLInputElement>;
  @ViewChild('open') open: ElementRef<HTMLInputElement>;
  @ViewChild('container') container: ElementRef<HTMLInputElement>;
  @ViewChild('remaining') remaining: ElementRef<HTMLInputElement>;
  @ViewChild('img') img: ElementRef<HTMLInputElement>;

  show_menu: boolean = true
constructor(){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.calc_box()

  }
 
  open_menu(){
      this.show_menu=!this.show_menu

  }
  calc_box(){
  /*  let img= this.img.nativeElement["naturalHeight"]
   console.log(img);
   
  //this.menu.nativeElement.style.height=img.toString()
  let box_height= this.page.nativeElement.offsetHeight - 
  this.container.nativeElement.offsetHeight +
  this.open.nativeElement.offsetHeight
  this.remaining.nativeElement.style.height=box_height.toString()
                 */
  
          
                
  }
  
}