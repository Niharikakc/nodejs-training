import { Component } from "@angular/core";


@Component({
    selector: 'app-booksweb',  //custom html element or component identifier
    template:
    `
    <app-booksweb-header></app-booksweb-header>
    <div>
        <h2>Book List</h2>
    </div>
    <app-booksweb-footer></app-booksweb-footer>
    `
})
export class BooksWebAppComponent{
    
}