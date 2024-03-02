const formSubmitButton = document.getElementById('submit-button');
const errorEmailLabel = document.getElementById('emailServer-Error');
const emailInput = document.getElementById('wf-sign-up-email');

function getDataDomains(callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const domains = response.dominios;
        callback(domains);
      } else {
        console.error('Error loading the free domains list');
        callback([]);
      }
    }
  };
  xhr.open('GET', 'https://cdn.jsdelivr.net/gh/arivogroup/icp-project@latest/User-Pages/email_list.json');
  xhr.send();
}

function validateEmail(email, freeDomains) {
  const domain = email.split('@')[1];

  if (freeDomains.includes(domain)) {
    return false; // Free Domain Email
  }
  return true; // Valid Email
}

function showError() {
  getDataDomains(function(freeDomains) {
    let emailToValidate = emailInput.value;
    if (validateEmail(emailToValidate, freeDomains) === false) {
      errorEmailLabel.style.display = 'inline-block';
      formSubmitButton.disabled = true;
      emailInput.focus();
      emailInput.select();
    } else {
      errorEmailLabel.style.display = 'none';
      formSubmitButton.disabled = false;
    }
  });
}

emailInput.addEventListener('input', showError);
