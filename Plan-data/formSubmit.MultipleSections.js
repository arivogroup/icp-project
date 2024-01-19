var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError(message) {
    hideLoading();
    failureMessage.innerText = message;
    failureMessage.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading() {
    showForm();
    successMessage.style.display = "none";
  }

  // hide the form
  function hideForm() {
    formContent.style.display = "none";
  }

  // show the loading indicator
  function showLoading() {
    hideForm();
    successMessage.style.display = "block";
  }

  // show the form
  function showForm() {
    formContent.style.display = "flex";
  }

  // listen for xhr events
  function addListeners(xhr) {
    xhr.addEventListener("loadstart", showLoading);
  }

  // add xhr settings
  function addSettings(xhr) {
    xhr.timeout = requestTimeout;
  }

  // triggered form submit
  function triggerSubmit(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    sectionContent.textContent = document.getElementById(
      "section-content-input",
    ).value;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners(xhr);
    addSettings(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading;
        let waitSuccessMessage = setTimeout(section_Update, 3500);
        function section_Update() {
          hideLoading();
          form.style.display = "none";
          form.style.opacity = "0";
          sectionContent.style.display = "inline-block";
          sectionContent.style.opacity = "1";
        }
      } else {
        displayError(errorMessage);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError(errorMessageTimedOut);
    };
  }

  const form = document.getElementById("form_section_content");
  let formContent = document.getElementById("wf-form-Section-Content-Form");
  let failureMessage = document.getElementById("section-error-message");
  let successMessage = document.getElementById("section-success-message");
  let sectionContent = document.getElementById("section-content");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout = 5000;
  // error messages
  let errorMessageTimedOut = "Oops! Seems this timed out. Please try again.";
  let errorMessage = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form.addEventListener("submit", triggerSubmit);
});
