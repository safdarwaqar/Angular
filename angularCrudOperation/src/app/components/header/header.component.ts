import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) {}


  openDialog() {
    // this.router.navigate(['/addItem']);
    this.dialog.open(DialogComponent,{

      width:'30%',



    });
    console.log('clicked');
  }
showProduct(){
console.log('product shown....');
this.router.navigate(['/productList'])
}

  ngOnInit(): void {

  }
}
