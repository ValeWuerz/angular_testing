import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit, AfterViewInit {
  

  show_menu: boolean = true
constructor(){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }
 
  open_menu(){
      this.show_menu=!this.show_menu

  }
  
  
}