class Ticket {
  creationDate: Date;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.description = description;
    this.title = title;
    this.creationDate = new Date();
  }
}

class User {
  name: string;
  lastname: string;
  telephoneNumber: string;
  email: string;
  createTicket(ticket: Ticket) {
    // Save ticket data to the database.
  }

  constructor(name: string, lastname: string, telephoneNumber: string, email: string) {
    this.name = name;
    this.lastname = lastname;
    this.telephoneNumber = telephoneNumber;
    this.email = email;
  }
}

class Handler {
  name: string;
  lastname: string;
  telephoneNumber: string;
  email: string;
  public attachLogToTicket(log: { title: string, description: string, date: Date }){
    // Attach a log to a ticket.
  }
  public workOnTicket() {
    // The handler works on solving the problem.
  }
  public resolveTicket() {
    // The handler resolves the problem.
  }
  public rejectTicket() {
    // The handler closes the ticket as not resolved.
  }
  public reasignTicket() {
    // The handler reasignes the ticket to another handler.
  }

  constructor(name:string, lastname:string, telephoneNumber:string, email:string){
    this.email = email;
    this.telephoneNumber = telephoneNumber;
    this.name = name;
    this.lastname = lastname;
  }
}
