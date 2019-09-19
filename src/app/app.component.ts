import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'lohith';
  promise;
  observable;

  ngOnInit(){
  this.promise = new Promise(this.executerFuntion);
  this.promise.then(this.onSuccess).catch(this.onReject);
  this.observable = new Observable(this.observableFunction);
  this.observable.subscribe(this.onSuccess,this.onSuccess,this.onComplete)
  }
  
  executerFuntion(resolve,reject){
    const value = Math.random();
    if(value<1/3.0){
      resolve(value);
      resolve("another");
    }else if(value<2/3.0){
      reject("value 2/3 rejected");
    }else{
      throw "value > 2/3(throw)";
    }
  }

onSuccess(value){
console.log(value);
}
onReject(value){
  console.log(value)
}
onComplete(){
  console.log("compeleted");
}

observableFunction(observer){
 const value = Math.random();
    if(value<1/3.0){
      observer.next(value);
      observer.next("another"); 
    }else if(value<2/3.0){
     observer.error("value 2/3 rejected");
    }else{
      throw "value > 2/3(throw)";
    }
    observer.complete();
}
}
