import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @ViewChild('ref1') input: ElementRef<HTMLInputElement>;
  menu_opened: boolean
constructor(){}
  ngOnInit(): void {
  }
 
  log(){
    console.log(this.input.nativeElement.style.display='none');

  }
  
}