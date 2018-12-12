import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})

export class ListitemComponent implements OnInit {

  deleteIndicator: number;
  private swipedCoordinates?: [number, number];
  private swipedTime?: number;
  List: any[];

swipe(e: TouchEvent, when: string, i: number): void {
  const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
  const time = new Date().getTime();


  if (when === 'start') {
    this.swipedCoordinates = coord;
    this.swipedTime = time;
  } else if (when === 'end') {
    const direction = [coord[0] - this.swipedCoordinates[0], coord[1] - this.swipedCoordinates[1]];
    const duration = time - this.swipedTime;

    // tslint:disable-next-line:no-unused-expression
    if ((duration < 1000 && Math.abs(direction[0]) > 30) && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
    if (direction[0] < 0)
      this.deleteIndicator = i;

  }
  }
}

  constructor(
    private router: Router,
  ) {
    this.List = [
      'Example1',
      'Example2',
      'Example3',
      'Example4',
      'Example5',
      'Example6',
      'Example7'
    ];
   }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/login']);
  }

  deleteItem (index) {
    this.List.splice(index, 1);
    this.deleteIndicator = undefined;
  }

}
