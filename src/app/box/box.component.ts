import { Component, OnInit } from '@angular/core';
import { MoveonClick } from '../animations';

@Component({
  selector: 'app-box',
  template: '<div (click)="moveBox()" [@MoveonClick]="isMoved">Bacon</div>',
  styles: [
    `
    div {
      width: 100px;
      height: 100px;
      color: blue;
      background-color: red;
      position: fixed;
      border: '5px solid red';
    }
    `
  ],
  animations: [
    MoveonClick
  ]
})
export class BoxComponent {
  isMoved = 'isLeft';

  moveBox() {
    this.isMoved = this.isMoved === 'isLeft' ? 'isRight' : 'isLeft';
  }

}
