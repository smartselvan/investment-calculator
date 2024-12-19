import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResult } from '../investment-results/investment-results.model';
import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentResultsService: InvestmentResultsService) {}

  initialInvestment = signal(1000);
  annualInvestment = signal(100);
  expectedReturn = signal(5);
  duration = signal(10);

  calculateInvestmentResults() {
      const userInput:UserInput = {
        initialInvestment: this.initialInvestment(),
        annualInvestment: this.annualInvestment(),
        expectedReturn: this.expectedReturn(),
        duration: this.duration(),
      }
      this.investmentResultsService.calculateInvestmentResults(userInput);
  }
  
}
