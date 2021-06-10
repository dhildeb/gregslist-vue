export class Job {
  constructor(data) {
    this.jobPosition = data.jobPosition
    this.location = data.location
    this.company = data.company
    this.wage = data.wage
    this.fullTime = data.fullTime
    this.description = data.description
  }
}
