import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamApp';

  // State management
  newMemberName = '';
  members: string[] = [];

  // Handling error
  errorMessage  = '';

  // Update Name
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName)
  }

  // Event handling
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty"
      return;
    } else {
      this.errorMessage = "";
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      console.log(this.members);
    }
  }


}
