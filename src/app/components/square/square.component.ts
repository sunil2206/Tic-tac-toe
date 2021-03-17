import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  constructor() { }
  draw_cnt:number=0;
  gameDraw:boolean=false;
  box: string[] = [];
  winnerName: string;
  gameOver: boolean;
  gameStart = false;
  turnOf = 'X';
  turnOfX = true;
  
  ngOnInit() {
  }
  check() {

    this.turnOfX ? this.turnOf = 'O' : this.turnOf = 'X';
    this.turnOfX = !this.turnOfX;

    // this.turnOfX==true
    // if(this.turnOfX){
    //   this.turnOfX=false;
    //   this.turnOf='X';
    // }else{
    //   this.turnOf='O';
    //   this.turnOfX=true;
    // }
   

    if (this.box[1] != null) {
      
    if (this.box[1] == this.box[4]) {
      if (this.box[4] == this.box[7]) {
        this.winnerName = this.box[4];
        this.gameOver = true;
      }
    }}
    if (this.box[5] != null) {
    if (this.box[2] == this.box[5]) {
      if (this.box[5] == this.box[8]) {
        this.winnerName = this.box[8];
        this.gameOver = true;
      }
    }}
    if (this.box[3] != null) {
    if (this.box[3] == this.box[6]) {
      if (this.box[6] == this.box[9]) {
        this.winnerName = this.box[9];
        this.gameOver = true;
      }
    }}
    if (this.box[4] != null) {
    if (this.box[5] == this.box[4]) {
      if (this.box[4] == this.box[6]) {
        this.winnerName = this.box[4];
        this.gameOver = true;
      }
    }}
    if (this.box[2] != null) {
    if (this.box[1] == this.box[2]) {
      if (this.box[2] == this.box[3]) {
        this.winnerName = this.box[3];
        this.gameOver = true;
      }
    }}
    if (this.box[8] != null) {
    if (this.box[7] == this.box[8]) {
      if (this.box[9] == this.box[7]) {
        this.winnerName = this.box[7];
        this.gameOver = true;
      }
    }}
    if (this.box[7] != null) {
    if (this.box[7] == this.box[5]) {
      if (this.box[5] == this.box[3]) {
        this.winnerName = this.box[3];
        this.gameOver = true;
      }
    }}
    if (this.box[9] != null) {
    if (this.box[1] == this.box[5]) {
      if (this.box[5] == this.box[9]) {
        this.winnerName = this.box[9];
        this.gameOver = true;
      }
    }}   
    if(this.draw_cnt==9 && this.gameOver==false){
      this.gameDraw=true;
    }
  }
  start() {
    this.gameStart = true;

  }
  Restart() {
    this.box = [];
    this.draw_cnt=0;
    this.gameDraw=false;
    this.gameStart = false;
    this.gameOver = false;
  }
}
