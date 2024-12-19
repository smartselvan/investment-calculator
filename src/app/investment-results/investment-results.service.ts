import { Injectable } from '@angular/core';
import { UserInput } from '../user-input/user-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  constructor() { }

  public calculateInvestmentResults(userInput:UserInput) {
      const annualData = [];
      let investmentValue = userInput.initialInvestment;
      console.log(userInput);
      for (let i = 0; i < userInput.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
        investmentValue += interestEarnedInYear + userInput.annualInvestment;
        const totalInterest =
          investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: userInput.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
        });
      }
      return annualData;
    }
}
