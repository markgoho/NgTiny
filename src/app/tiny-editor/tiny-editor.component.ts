import { Component, AfterViewInit, EventEmitter, OnDestroy, Input, Output, OnChanges } from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare var tinymce: any;

@Component({
  selector: 'app-tiny-editor',
  template: `
    <textarea id="{{elementId}}"></textarea>
  `
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();
 
  editor;
 
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      },
      // https://www.tinymce.com/docs/configure/integration-and-setup/#init_instance_callback
      init_instance_callback: inst => inst.setContent('<span>Some content</span>')
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
