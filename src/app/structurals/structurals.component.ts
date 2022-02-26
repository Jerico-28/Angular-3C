import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurals',
  templateUrl: './structurals.component.html',
  styleUrls: ['./structurals.component.css']
})
export class StructuralsComponent implements OnInit {

  public displayClass = true;

  public color = 'black';
  public grade = 72;
  constructor() { }

  // Foreach => arrays
  public gradeStats = ["Average", "Excellent", "Superior"];

  ngOnInit(): void {
  }

}
