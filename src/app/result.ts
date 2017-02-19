export class Result {
  constructor(
    public monthlyContribution: number,
    public targetAmount: number,
    public targetDate: Date,
    public scenarioType: string
  ) {}
}
