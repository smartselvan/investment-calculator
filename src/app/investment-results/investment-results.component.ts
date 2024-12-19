import { Component, computed, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentResultsService:InvestmentResultsService){}
  
  annualData =  computed(() => this.investmentResultsService.resultData());
}
