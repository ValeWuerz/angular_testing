import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Dreams } from './dreams';

@Component({
  selector: 'app-dream-journal',
  templateUrl: './dream-journal.component.html',
  styleUrls: ['./dream-journal.component.scss']
})
export class DreamJournalComponent implements OnInit {
dream: Dreams ={
  day: new Date,
  content: "",
  felt_quality: 0,
  dream_intensity: 0
}
all_dreams: Array<Dreams>
  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
   this.get_all_dreams()
  }
store_dream(){
  this.dbService.add('dreams', {
    day: this.dream.day,
    content: this.dream.content,
    felt_quality: this.dream.felt_quality,
    dream_intensity: this.dream.dream_intensity,
  }).subscribe((key) => {
    console.log('key: ', key);
    this.get_all_dreams()
  });
}
get_all_dreams(){
  this.dbService.getAll('dreams').subscribe((dreams: Array<Dreams>) => {
    console.log(dreams);
    this.all_dreams=dreams
  });
}
get_dream(i){
 console.log(this.all_dreams[i]);
  
}
delete_all(){
  this.dbService.clear('dreams').subscribe((successDeleted) => {
    console.log('success? ', successDeleted);
    this.get_all_dreams()
  });

  
}
log(){
  console.log(this.dream);
  
}
}
