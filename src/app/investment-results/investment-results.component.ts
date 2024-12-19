import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentResultsService:InvestmentResultsService){}
  
  annualData =  computed(() => this.investmentResultsService.resultData());
}
