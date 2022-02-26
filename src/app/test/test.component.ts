import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .color-green{
      color:green;
    }
    .color-warning{
      color: orange;
    }
    .object-color{
      color: red;
    }
    .object-font{
      font-style: italic;
    }
    .color-success{
      background-color: green;
    }
    .color-error{
      background-color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  public colorGreen = 'color-green';
  public isWarning = true;
  public isSet = true;

  public isSuccess = true;

  public multipleClasses = {
    'color-green': this.isSuccess,
    'object-color': !this.isSuccess, 
    'object-font': this.isSet
  }


  public myID = "firstID";

  public isDisabled = true;

  enableInput(){
    this.isDisabled = false;
  }



// Event + Class
public toggle = true;
public status = "Success"

changeRule(){
  this.toggle = !this.toggle;
  //             IF       THEN  mode  ELSE  mode
  this.status = this.toggle ? 'Success' : 'Error';
}

// TWO WAY BINDING
public myValue = "";


//  TEMPLATE REFERENCE VARIABLE

public storeData(value){
  console.log(value)
}





  constructor() { }

  ngOnInit(): void {
  }

}
