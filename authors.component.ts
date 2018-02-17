
import {Component} from "angular2/core";
import {AuthorService} from "./author.service";

@Component({
    selector:'authors',
    template:`
        <h1>Authors</h1>,     
        {{title}}
        <ul>
            <li *ngFor="#author of authors"> 
                {{authors}}</li>
        </ul>            
    `,
    providers: [AuthorService]

})

export class AuthorsComponent{
    authors:string[];
    title = "The title of Authors page";

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}