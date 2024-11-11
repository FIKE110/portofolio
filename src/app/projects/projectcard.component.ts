import { Component ,Input} from "@angular/core";

@Component({
    selector:'project-card',
    templateUrl:'./projectcard.component.html',
    standalone:true,
    imports:[]
    // styleUrl:""
})
export class ProjectCard{
    @Input() src:string=""
}