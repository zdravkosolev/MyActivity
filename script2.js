class EmailMessage {
    constructor(_from, _to, _subject, _message) {
      this.from = _from;
      this.to = _to;
      this.subject = _subject;
      this.message = _message;
    }

    displayMessage() {
        alert(`From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\n\n${this.message}`);
      }
}



function displayEmail() {
    
    const from = prompt("From:");
    const to = prompt("To:");
    const subject = prompt("Subject:");
    const message = prompt("Message:");

    
    const email = new EmailMessage(from, to, subject, message);

    
    document.getElementById("from").value = email.from;
    document.getElementById("to").value = email.to;
    document.getElementById("subject").value = email.subject;
    document.getElementById("message").value = email.message;

    email.displayMessage();
  }

  
  displayEmail();