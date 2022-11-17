import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Splide from "@splidejs/splide";

@Component({
  selector: 'app-transport-dialog.html',
  templateUrl: 'transport-dialog.html',
  styleUrls: ['./transport-dialog.component.css']
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TransportDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TransportDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    var splide = new Splide( '.splide' );
    var bar = splide.root.querySelector( '.my-carousel-progress-bar' );

    // Updates the bar width whenever the carousel moves:
    splide.on( 'mounted move', function () {
      var end  = splide.Components.Controller.getEnd() + 1;
      var rate = Math.min( ( splide.index + 1 ) / end, 1 );
      // @ts-ignore
      bar.style.width = String( 100 * rate ) + '%';
    } );

    splide.mount();
  }


}
