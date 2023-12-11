// main-page.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-mainPage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  // Add properties for the school form
  schoolName: string = '';
  schoolAddress: string = '';
  servicePlateNumber: string = '';
  serviceDriverId: string = '';
  serviceDriverName: string = '';
  // Add a property to track the current state
  currentState: string = 'main'; // 'main' represents the main menu
  addSchoolName: string = '';
  addSchoolAddress: string = '';
  schools: { name: string; address: string }[] = [];
  // Add a function to switch the state
  switchState(newState: string) {
    this.currentState = newState;
  }

  addSchool() {
    // Log to check the values before adding to the array
    console.log('Adding a school:', this.addSchoolName, this.addSchoolAddress);
  
    // Simulate adding a school to the array
    this.schools.push({ name: this.addSchoolName, address: this.addSchoolAddress });
  
    // Reset the input fields
    this.addSchoolName = '';
    this.addSchoolAddress = '';
  
    // Log the updated schools array
    console.log('Updated schools array:', this.schools);
  }
  
  

  deleteSchool(index: number) {
    // Simulate deleting a school from the array
    this.schools.splice(index, 1);
  }

  addShuttle() {
    // Add your logic to handle adding a school
    console.log('Adding a shuttle:', this.schoolName, this.schoolAddress);

    // Reset the state to the main menu after adding a school
    this.currentState = 'main';

    // Reset the input fields
    this.servicePlateNumber = '';
    this.serviceDriverId = '';
    this.serviceDriverName = '';
  }
  addStudentToShuttle()
  {

  }
  addDriverToShuttle(){

  }
  rmDriverFromShuttle(){

  }
  addHostToShuttle(){

  }
  rmHostFromShuttle(){
    
  }
}
