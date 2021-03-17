import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SquareComponent}from '../square/square.component';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input('div_id') div_id: string;
  constructor(private square_com: SquareComponent) { }
  @Input('turnOfX') turnOfX: boolean;
  @Output() change = new EventEmitter;
  symbol: string;
  ngOnInit() {
  }

  clickHandler(box: HTMLDivElement) {
    let k = 0;
    this.square_com.draw_cnt=this.square_com.draw_cnt + 1;


    k += 180;
    box.style.transform = 'rotatey(' + k + 'deg)';
    box.style.transitionDuration = '1.0s';


    console.log(this.div_id + "draw cnt" + this.square_com.draw_cnt);
    if (this.square_com.gameOver != true) {
    if (this.symbol == null) {
      if (this.turnOfX == true) {
        this.square_com.box[this.div_id] = 'X';
        this.symbol = 'X';
      } else {
        this.square_com.box[this.div_id] = 'O';
        this.symbol = 'O';
      }
      this.change.emit();
    }
  }
  }

}
