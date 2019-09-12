import { Component } from '@angular/core';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  onSubmit(url, start, end) {
    url = encodeURIComponent(url.value);
    var res = this.http.get('http://localhost:8045/'+url+'/'+start.value+'/'+end.value, {responseType: 'text'}).subscribe(response => console.log(response));
  }
}
