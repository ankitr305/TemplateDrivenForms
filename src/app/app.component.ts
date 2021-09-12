import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Template Driven Form</h1><br><br>
  <div>
    <h2>User Data</h2>
    <form #userForm = "ngForm" (ngSubmit)="onSubmit(userForm.value)">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" name="name" [(ngModel)]="myname">
        <p>{{myname}}</p>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email" [ngModel]="myemail">
      </div>
      <div ngModelGroup="Address">
        <div class="form-group">
          <label>Street</label>
          <input type="text" class="form-control" name="street" ngModel>
        </div>
        <div class="form-group">
          <label>City</label>
          <input type="text" class="form-control" name="city" ngModel>
        </div>
        <div class="form-group">
          <label>Postal Code</label>
          <input type="text" class="form-control" name="code" ngModel>
        </div>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  myname = "Ankit"
  myemail = "ankit@email.com"
  onSubmit(value:any){
    console.log(value)
  }
}
