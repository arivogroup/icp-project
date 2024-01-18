var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_5(message) {
    hideLoading_5();
    failureMessage_5.innerText = message;
    failureMessage_5.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_5() {
    showForm_5();
    successMessage_5.style.display = "none";
  }

  // hide the form
  function hideForm_5() {
    formContent_5.style.display = "none";
  }

  // show the loading indicator
  function showLoading_5() {
    hideForm_5();
    successMessage_5.style.display = "block";
  }

  // show the form
  function showForm_5() {
    formContent_5.style.display = "block";
  }

  // listen for xhr events
  function addListeners_5(xhr) {
    xhr.addEventListener("loadstart", showLoading_5);
  }

  // add xhr settings
  function addSettings_5(xhr) {
    xhr.timeout = requestTimeout_5;
  }

  // triggered form submit
  function triggerSubmit_5(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    document.getElementById("id-user-4").value = userId;
    document.getElementById("id-item-4").value = itemId;
    document.getElementById("content-personality").textContent =
      document.getElementById("input_Personality").value;
    document.getElementById("content-lifestyle").textContent =
      document.getElementById("input_Lifestyle").value;
    document.getElementById("content-interests").textContent =
      document.getElementById("input_Interests").value;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_5(xhr);
    addSettings_5(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_5;
        let waitSuccessMessage = setTimeout(section_1_5_Update, 3500);
        function section_1_5_Update() {
          hideLoading_5();
          form_5.style.display = "none";
          form_5.style.opacity = "0";
          showContent();
        }
      } else {
        displayError_5(errorMessage_5);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_5(errorMessageTimedOut_5);
    };
  }

  const form_5 = document.getElementById("form_section_1_5");
  let formContent_5 = document.getElementById("wf-form-Section-1_5-Form");
  let failureMessage_5 = document.getElementById("section1_5-error-message");
  let successMessage_5 = document.getElementById("section1_5-success-message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_5 = 5000;
  // error messages
  let errorMessageTimedOut_5 = "Oops! Seems this timed out. Please try again.";
  let errorMessage_5 = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_5.addEventListener("submit", triggerSubmit_5);
});
