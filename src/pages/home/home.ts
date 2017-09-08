import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //declare some class fields.
  name1 = 'Osher Ad'
  name2 = 'Moana'
  get score(){
    var concat = (this.name1 + this.name2).toLowerCase();
    var sum = 0;
    // Arrow functions:
    concat.split('').forEach(letter => {
      sum += letter.charCodeAt(0);
    })
    return sum % 101;
  }
  // Injection: 
  constructor(public navCtrl: NavController) {}

}
