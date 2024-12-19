import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResult } from '../investment-results/investment-results.model';
import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentResult[]>();

  constructor(private investmentResultsService: InvestmentResultsService) {}

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;

  calculateInvestmentResults() {
      const userInput:UserInput = {
        initialInvestment: this.initialInvestment,
        annualInvestment: this.annualInvestment,
        expectedReturn: this.expectedReturn,
        duration: this.duration,
      }
      const annualData = this.investmentResultsService.calculateInvestmentResults(userInput);
      this.calculate.emit(annualData);
  }
  
}
