import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-transport-dialog.html',
  templateUrl: 'plan-dialog.html',
  styleUrls: ['./plan-dialog.component.css']
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class PlanDialogComponent {
  constructor(public dialogRef: MatDialogRef<PlanDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
