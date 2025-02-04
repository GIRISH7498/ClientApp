import { Component, OnInit } from '@angular/core';
import { PlayService } from './play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit{
  constructor(private playService: PlayService) { }
  message: string | undefined;

  ngOnInit(): void {
    this.playService.getPlayers().subscribe({
      next: (response : any) => this.message = response.value.message,
      error: error=> console.error(error) 
    })
  }

  
}
