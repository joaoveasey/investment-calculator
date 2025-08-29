import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    resultData = signal<{
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
    }[] | undefined>(undefined);

    calculateInvestmentResults(data: InvestmentInput) {
        const { investmentAmount, annualAmount, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = investmentAmount;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualAmount;
            const totalInterest =
            investmentValue - annualAmount * year - investmentAmount;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualAmount,
            totalInterest: totalInterest,
            totalAmountInvested: investmentAmount + annualAmount * year,
            });
        }

        this.resultData.set(annualData);
    }
}
