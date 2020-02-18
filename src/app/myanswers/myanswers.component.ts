import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myanswers',
  templateUrl: './myanswers.component.html',
  styleUrls: ['./myanswers.component.css']
})
export class MyanswersComponent implements OnInit {
  public text: string = ` CURD can be manipulaed in python by using the methods as:
    GET: Get/List/Retrieve an individual resource or a collection of resources.
    POST: Create a new resource or resources.
    PUT: Update an existing resource or collection of resources.
    DELETE: Delete a resource or collection of resources`;

    public text1: string = `
    1. Select the Zoom button from the toolbox and then click on your image until the entire object that you want to cut out is visible.
    2. Select the Lasso tool from the toolbox and then click and drag your mouse cursor around the edges of the object that you want to cut out. Do not release the mouse button until you have connected the start and end points of your outline. The entire outline process must be done in one motion without letting go of the mouse button. If the object is composed of straight lines use the secondary Polygonal Lasso tool. For objects with high contrast use the secondary Magnetic lasso tool as it automatically creates anchors points as you move your mouse cursor around the object.
    3. Release the mouse button once you have completed the selection. For the Polygonal and Magnetic Lasso tools, connect the last anchor point with the first one.
    4. Click "Edit" from the Menu Bar and then click "Copy."
    5. Click "File" and then click "New." Select "Clipboard" from the preset drop-down menu and then click "OK."
    6. Click "Edit" from the Menu Bar and then click "Paste." This places the object on the new canvas. Double-click the "Background Layer" on the Layers palette and then click "OK." Right-click the background layer and then click "Delete."`


  constructor() { }

  ngOnInit() {
  }
  

  delete(): void{
    this.text= '';
  }

  delete1(): void{
    this.text1='';
  }
}
