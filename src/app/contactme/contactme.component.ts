import { Component } from '@angular/core';
import { ContactMeCard } from "./contactme-card.component";

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ContactMeCard],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {

}
