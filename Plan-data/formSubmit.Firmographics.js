var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_2(message) {
    hideLoading_2();
    failureMessage_2.innerText = message;
    failureMessage_2.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_2() {
    showForm_2();
    successMessage_2.style.display = "none";
  }

  // hide the form
  function hideForm_2() {
    formContent_2.style.display = "none";
  }

  // show the loading indicator
  function showLoading_2() {
    hideForm_2();
    successMessage_2.style.display = "block";
  }

  // show the form
  function showForm_2() {
    formContent_2.style.display = "block";
  }

  // listen for xhr events
  function addListeners_2(xhr) {
    xhr.addEventListener("loadstart", showLoading_2);
  }

  // add xhr settings
  function addSettings_2(xhr) {
    xhr.timeout = requestTimeout_2;
  }

  // triggered form submit
  function triggerSubmit_2(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    document.getElementById("id-user-2").value = userId;
    document.getElementById("id-item-2").value = itemId;
    cs_pretty(cs_min, cs_max);
    document.getElementById("content-company-size").textContent = company_size;
    ne_pretty(ne_min, ne_max);
    document.getElementById("content-number-employees").textContent =
      number_employees;
    rl_pretty(rl_min, rl_max);
    document.getElementById("content-revenue-level").textContent =
      revenue_level;
    document.getElementById("content-location").textContent =
      document.getElementById("input_location").value;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_2(xhr);
    addSettings_2(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_2;
        let waitSuccessMessage = setTimeout(section_1_2_Update, 3500);
        function section_1_2_Update() {
          hideLoading_2();
          form_2.style.display = "none";
          form_2.style.opacity = "0";
          showContent();
        }
      } else {
        displayError_2(errorMessage_2);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_2(errorMessageTimedOut_2);
    };
  }

  const form_2 = document.getElementById("form_section_1_2");
  let formContent_2 = document.getElementById("wf-form-Section-1_2-Form");
  let failureMessage_2 = document.getElementById("section1_2-error-message");
  let successMessage_2 = document.getElementById("section1_2-success-message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_2 = 5000;
  // error messages
  let errorMessageTimedOut_2 = "Oops! Seems this timed out. Please try again.";
  let errorMessage_2 = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_2.addEventListener("submit", triggerSubmit_2);
});
