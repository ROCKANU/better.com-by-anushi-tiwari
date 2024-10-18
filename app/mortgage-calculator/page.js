"use client";

import { useState } from 'react';
import styles from './MortgageCalculator.module.css';

export default function MortgageCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const payment = (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);

    setMonthlyPayment(payment);
  };

  return (
    <div className={styles.calculatorSection}>
      <h1 className={styles.fadeIn}>Mortgage Calculator</h1>
      <p className={styles.fadeIn}>Calculate your monthly mortgage payments easily.</p>
      
      <div className={styles.formSection}>
        <input
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className={styles.inputField}
        />
        <button className={styles.calculateButton} onClick={calculateMortgage}>
          Calculate
        </button>
      </div>

      {monthlyPayment && (
        <div className={styles.resultSection}>
          <h2>Your Monthly Payment:</h2>
          <p className={styles.result}>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
}
