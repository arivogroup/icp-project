var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_1(message) {
    hideLoading_1();
    failureMessage_1.innerText = message;
    failureMessage_1.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_1() {
    showForm_1();
    successMessage_1.style.display = "none";
  }

  // hide the form
  function hideForm_1() {
    formContent_1.style.display = "none";
  }

  // show the loading indicator
  function showLoading_1() {
    hideForm_1();
    successMessage_1.style.display = "block";
  }

  // show the form
  function showForm_1() {
    formContent_1.style.display = "block";
  }

  // listen for xhr events
  function addListeners_1(xhr) {
    xhr.addEventListener("loadstart", showLoading_1);
  }

  // add xhr settings
  function addSettings_1(xhr) {
    xhr.timeout = requestTimeout_1;
  }

  // triggered form submit
  function triggerSubmit_1(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    document.getElementById("id-user-1").value = userId;
    document.getElementById("id-item-1").value = itemId;
    document.getElementById("content-draft-initial-icp").textContent =
      document.getElementById("first-icp-input").value;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_1(xhr);
    addSettings_1(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_1;
        let waitSuccessMessage = setTimeout(section_1_1_Update, 3500);
        function section_1_1_Update() {
          hideLoading_1();
          form_1.style.display = "none";
          form_1.style.opacity = "0";
          document.getElementById("content-draft-initial-icp").style.display =
            "inline-block";
          document.getElementById("content-draft-initial-icp").style.opacity =
            "1";
        }
      } else {
        displayError_1(errorMessage_1);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_1(errorMessageTimedOut_1);
    };
  }

  const form_1 = document.getElementById("form_section_1_1");
  let formContent_1 = document.getElementById("wf-form-Section-1_1-Form");
  let failureMessage_1 = document.getElementById("section1_1-error-message");
  let successMessage_1 = document.getElementById("section1_1-success-message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_1 = 5000;
  // error messages
  let errorMessageTimedOut_1 = "Oops! Seems this timed out. Please try again.";
  let errorMessage_1 = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_1.addEventListener("submit", triggerSubmit_1);
});
