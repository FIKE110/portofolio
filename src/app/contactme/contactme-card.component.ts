import { Component, Input } from "@angular/core";

@Component({
    standalone:true,
    selector:'contactme-card',
    imports:[],
    templateUrl:'./contactme-card.component.html',
})
export class ContactMeCard{
    @Input() title:string=""
}