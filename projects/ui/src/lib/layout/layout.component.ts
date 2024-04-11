import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
@Component({
  selector: 'bb-layout',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
