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
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  // Handling error
  errorMessage  = '';

  // Update Name
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName)
  }

  // Update Number of Teams
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
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

  generateTeams() {
    
    if(!this.numberOfTeams || this.numberOfTeams <= 0) return;

    const allMembers = [...this.members];

    while(allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member) break;
  
        if(this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }
  }
}
