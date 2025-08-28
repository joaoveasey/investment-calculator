import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialAmount: string = '';
  enteredAnnualAmount: string = '';
  enteredExpectedReturn: string = '';
  enteredDuration: string = '';

  onSubmit() {
    this.calculate.emit({
      investmentAmount: +this.enteredInitialAmount,
      annualAmount: +this.enteredAnnualAmount,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
  }
}
