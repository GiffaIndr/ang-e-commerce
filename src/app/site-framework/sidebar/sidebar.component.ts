import { Component, OnInit } from '@angular/core';
import { PorductsService } from 'src/app/products/porducts.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList!: Category;

  constructor(private  PorductsService: PorductsService) {
  }
  ngOnInit(): void {
    this.PorductsService.getCategories().subscribe(data => {
      this.categoryList = data;

    });
  }
}
