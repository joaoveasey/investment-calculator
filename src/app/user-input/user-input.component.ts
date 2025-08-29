import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../invesment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialAmount = signal('');
  enteredAnnualAmount = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      investmentAmount: +this.enteredInitialAmount(),
      annualAmount: +this.enteredAnnualAmount(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    this.enteredInitialAmount.set('');
    this.enteredAnnualAmount.set('');
    this.enteredExpectedReturn.set('');
    this.enteredDuration.set('');
  }
}
