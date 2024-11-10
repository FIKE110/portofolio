import { Component, Input} from '@angular/core';
import { forwardRef } from "@angular/core";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [forwardRef(() => SkillCardComponent)],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  programmingLanguages = [
    {
      title: 'JavaScript',
      image: `<h2>All is well</h2>`,
    },
    {
      title: 'Python',
      image: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#3776AB"/><text x="25" y="30" font-size="18" fill="#FFF" text-anchor="middle">Py</text></svg>`,
    },
    {
      title: 'Java',
      image: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#007396"/><text x="25" y="30" font-size="18" fill="#FFF" text-anchor="middle">Java</text></svg>`,
    },
    {
      title: 'C++',
      image: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#00599C"/><text x="25" y="30" font-size="18" fill="#FFF" text-anchor="middle">C++</text></svg>`,
    },
    {
      title: 'Go',
      image: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#00ADD8"/><text x="25" y="30" font-size="18" fill="#FFF" text-anchor="middle">Go</text></svg>`,
    }
  ];


}

@Component({
  selector:"skill-card",
  standalone:true,
  imports:[],
  templateUrl:"./skillcard.component.html",
 // styleUrl:""
})
export class SkillCardComponent{
  @Input() title:string="Firebase"
  @Input() svg:string=""
}
