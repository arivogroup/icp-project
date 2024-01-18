var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_4(message) {
    hideLoading_4();
    failureMessage_4.innerText = message;
    failureMessage_4.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_4() {
    showForm_4();
    successMessage_4.style.display = "none";
  }

  // hide the form
  function hideForm_4() {
    formContent_4.style.display = "none";
  }

  // show the loading indicator
  function showLoading_4() {
    hideForm_4();
    successMessage_4.style.display = "block";
  }

  // show the form
  function showForm_4() {
    formContent_4.style.display = "block";
  }

  // listen for xhr events
  function addListeners_4(xhr) {
    xhr.addEventListener("loadstart", showLoading_4);
  }

  // add xhr settings
  function addSettings_4(xhr) {
    xhr.timeout = requestTimeout_4;
  }

  // triggered form submit
  function triggerSubmit_4(event) {
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
    addListeners_4(xhr);
    addSettings_4(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_4;
        let waitSuccessMessage = setTimeout(section_1_4_Update, 3500);
        function section_1_4_Update() {
          hideLoading_4();
          form_4.style.display = "none";
          form_4.style.opacity = "0";
          showContent();
        }
      } else {
        displayError_4(errorMessage_4);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_4(errorMessageTimedOut_4);
    };
  }

  const form_4 = document.getElementById("form_section_1_4");
  let formContent_4 = document.getElementById("wf-form-Section-1_4-Form");
  let failureMessage_4 = document.getElementById("section1_4-error-message");
  let successMessage_4 = document.getElementById("section1_4-success-message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_4 = 5000;
  // error messages
  let errorMessageTimedOut_4 = "Oops! Seems this timed out. Please try again.";
  let errorMessage_4 = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_4.addEventListener("submit", triggerSubmit_4);
});
