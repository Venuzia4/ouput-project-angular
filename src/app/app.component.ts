import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouput-project';
  public onomatopoeiaList: string[]=[];
 

 

  onReceiveNewOnomatopia(event:string):void{
    this.onomatopoeiaList.push(event)
    console.log(event)
  
    

  }

  
}
