import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  ngOnInit(): void {}
  // added this method to help with the page functionality
  refresh(): void {
    window.location.reload();
  }
}
