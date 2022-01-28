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
  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
  }
store_dream(){
  this.dbService.add('dreams', {
    day: this.dream.day,
    content: this.dream.content,
    felt_quality: this.dream.felt_quality,
    dream_intensity: this.dream.dream_intensity,
  }).subscribe((key) => {
    console.log('key: ', key);
  });
}
log(){
  console.log(this.dream);
  
}
}
