import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };
  posts=[
    {
      title: "Mon premier post",
      content: "The ng new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "The ng new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "The ng new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
  /**
   *
   */
  constructor() {
  }
}
