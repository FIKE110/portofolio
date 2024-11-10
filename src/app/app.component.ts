import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonComponent } from "./button/button.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutsectionComponent } from "./aboutsection/aboutsection.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactmeComponent } from "./contactme/contactme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ButtonComponent, HeroComponent, AboutsectionComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio-with-angular';
}
