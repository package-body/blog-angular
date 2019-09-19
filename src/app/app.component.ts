import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    // tslint:disable-next-line: max-line-length
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.'),
    // tslint:disable-next-line: max-line-length
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.'),
    // tslint:disable-next-line: max-line-length
    new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.')
  ];

  constructor() {}
}
