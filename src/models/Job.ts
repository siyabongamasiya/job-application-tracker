export default class Job {
  id: string;
  company: string;
  role: string;
  dateApplied: string;
  status: string;

  constructor(
    id: string,
    company: string,
    role: string,
    dateApplied: string,
    status: string
  ) {
    this.id = id;
    this.company = company;
    this.role = role;
    this.dateApplied = dateApplied;
    this.status = status;
  }
}
