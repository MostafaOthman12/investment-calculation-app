import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from '../userInput.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() userInputs = new EventEmitter<UserInput>();
  initialInvestment = '0';
  anualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  onSubmit() {
    this.userInputs.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.anualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
    });
  }
}
