import { Component, inject, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserInput } from './userInput.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResultsService } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  userInputs!: UserInput;
  private IRS = inject(InvestmentResultsService);
  result: any[] = [];
  onSubmit(userInput: UserInput) {
    this.result = this.IRS.calculateInvestmentResults(userInput);
  }
}
