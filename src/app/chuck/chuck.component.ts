import { Component, OnInit } from '@angular/core';
import { JokeInterface } from '../joke.interface';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit{
  joke: JokeInterface | undefined;

  constructor( private jokeService: JokeService)  {}

  ngOnInit(): void {
    
    this.jokeService.getJoke().subscribe(jokeTranslate => {
      this.joke = jokeTranslate;
      console.log("Votre blague est égal à :" + this.joke.value)
  }


    )
  }
}
