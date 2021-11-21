function extractEmails(string){
  // let pattern = /[A-Za-z0-9]+([\.\-\_]{1}[A-Za-z0-9]+)*@[A-Za-z]+([\-]{1}[A-Za-z]+)*(\.[A-Za-z]+([\-]{1}[A-Za-z]+)*)+/gm
  // let pattern = /[a-z0-9]+([\.\-\_]{1}[a-z0-9]+)*@[a-z]+([\-]{1}[a-z]+)*(\.[a-z]+([\-]{1}[a-z]+)*)+/gm
  let pattern = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g

  let match = string.match(pattern);
  if (match != null) {
    console.log(match.join('\n'));
  }
}
extractEmails('Please contact us at: support@github.com.')
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')