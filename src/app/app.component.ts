import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba editor'
  editor = '';
  // config= {
  //   toolbar : [
  //     ['italic','bold'],
  //     ['video','image']
  //   ]
  // }

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log(event);
    this.editor = event['editor']['root']['innerHTML'] 
  }

}
