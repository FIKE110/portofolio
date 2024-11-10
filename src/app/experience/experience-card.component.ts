import { Component,Input } from "@angular/core";

@Component({
    standalone:true,
    imports:[],
    selector:'experince-card',
    templateUrl:'./experience-card.component.html'
})

export class ExperienceCardComponent{
    @Input() year:string=""
    @Input() location:string=""
    @Input() title:string=""
    @Input() description:string=""
}