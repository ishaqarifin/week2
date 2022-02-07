
function submitForm() {
  let name = document.getElementById('input-name').value;
  console.log(name);
  let email = document.getElementById('input-email').value;
  console.log(email);
  let phone = document.getElementById('input-phone').value;
  console.log(phone);
  let subject = document.getElementById('input-subject').value;
  console.log(subject);
  let message = document.getElementById('input-message').value;
  console.log(message);
  
  // Validation ---------------------------------------------------
  if (name == '') {
    return alert('input fields must be not empty');
  } else if (email == '') {
    return alert('input fields must be not empty');
  } else if (phone == '') {
    return alert('input fields must be not empty');
  } else if (subject == '') {
    return alert('input fields must be not empty');
  } else if (message == '') {
    return alert('input fields must be not empty');
  }
  
  // Mail to ---------------------------------------------------------
  const emailReceiver = 'ishaqarifin071@gmail.com';
  const a = document.createElement('a');
  a.href = 'mailto:' + emailReceiver + 'subject=' + subject +  'body=Hello my name ' + name + ', ' + subject + ',' + message;
  a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.click();

  // Store data to object ---------------------------------------------
  // let dataObject = {
  //   name: name,
  //   email: email,
  //   phoneNumber: phone,
  //   subject: subject,
  //   message: message,
  // };
  // console.log(dataObject);
}
