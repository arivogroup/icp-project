var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_3(message) {
    hideLoading_3();
    failureMessage_3.innerText = message;
    failureMessage_3.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_3() {
    showForm_3();
    successMessage_3.style.display = "none";
  }

  // hide the form
  function hideForm_3() {
    formContent_3.style.display = "none";
  }

  // show the loading indicator
  function showLoading_3() {
    hideForm_3();
    successMessage_3.style.display = "block";
  }

  // show the form
  function showForm_3() {
    formContent_3.style.display = "block";
  }

  // listen for xhr events
  function addListeners_3(xhr) {
    xhr.addEventListener("loadstart", showLoading_3);
  }

  // add xhr settings
  function addSettings_3(xhr) {
    xhr.timeout = requestTimeout_3;
  }

  // triggered form submit
  function triggerSubmit_3(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    document.getElementById("id-user-3").value = userId;
    document.getElementById("id-item-3").value = itemId;
    ac_pretty(ac_min, ac_max);
    document.getElementById("content-age-customer").textContent = age_customer;
    document.getElementById("content-usual-gender").textContent = usual_gender;
    se_pretty(se_min, se_max);
    document.getElementById("content-socio-economic").textContent =
      socio_economic;
    el_pretty(el_min, el_max);
    document.getElementById("content-educational-level").textContent =
      education_level;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_3(xhr);
    addSettings_3(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_3;
        let waitSuccessMessage = setTimeout(section_1_3_Update, 3500);
        function section_1_3_Update() {
          hideLoading_3();
          form_3.style.display = "none";
          form_3.style.opacity = "0";
          showContent();
        }
      } else {
        displayError_3(errorMessage_3);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_3(errorMessageTimedOut_3);
    };
  }

  const form_3 = document.getElementById("form_section_1_3");
  let formContent_3 = document.getElementById("wf-form-Section-1_3-Form");
  let failureMessage_3 = document.getElementById("section1_3-error-message");
  let successMessage_3 = document.getElementById("section1_3-success-message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_3 = 5000;
  // error messages
  let errorMessageTimedOut_3 = "Oops! Seems this timed out. Please try again.";
  let errorMessage_3 = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_3.addEventListener("submit", triggerSubmit_3);
});
