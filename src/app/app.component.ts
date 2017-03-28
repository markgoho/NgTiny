import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-tiny-editor
    [elementId]="'my-editor'"
    (onEditorContentChange)="keyupHandler($event)"
    >
  </app-tiny-editor>

  `
})
export class AppComponent {
  keyupHandler(event) {
    console.log(event);
  }
}
