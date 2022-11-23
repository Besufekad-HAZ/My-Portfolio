const subBtn = document.getElementById('submitbtn');
const errMsg = document.getElementById('error_msg');
const mailForm = document.getElementById('email-address');
subBtn.onclick = (event) => {
  const mailValue = document.getElementById('email-address').value;
  const lowerMail = mailValue.toLowerCase();
  if (mailValue !== lowerMail) {
    errMsg.textContent = 'Invalid Format';
    mailForm.classList.toggle('error');
    event.preventDefault();
  }
};