import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fully',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fully.component.html',
  styleUrls: ['./fully.component.css']
})
export class FullyComponent {

@Input() example1 : any | undefined
@Input() example2 : any | undefined
@Input() example3 : any | undefined

}