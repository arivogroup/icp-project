// --> Form submition - Section 1-1
const formSection_1_1 = document.getElementById("form_section_1_1");
const formContent_1_1 = document.getElementById("wf-form-Section-1_1-Form");
const successMessage_1_1 = document.getElementById(
  "section1_1-success-message",
);
const contentSection_1_1 = document.getElementById("content-draft-initial-icp");

formSection_1_1.onsubmit = function () {
  document.getElementById("id-user-1").value = userId;
  document.getElementById("id-item-1").value = itemId;
  successMessage_1_1.style.display = "none";
  formContent_1_1.style.display = "flex";
  contentSection_1_1.textContent =
    document.getElementById("first-icp-input").value;
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage_1_1.style.display = "none";
    formContent_1_1.style.display = "flex";
    formSection_1_1.style.display = "none";
    formSection_1_1.style.opacity = "0";
    contentSection_1_1.style.display = "inline-block";
    contentSection_1_1.style.opacity = "1";
  }
};

// --> Form submition - Section 1-2
const formSection_1_2 = document.getElementById("form_section_1_2");
const formContent_1_2 = document.getElementById("wf-form-Section-1_2-Form");
const successMessage_1_2 = document.getElementById(
  "section1_2-success-message",
);

formSection_1_2.onsubmit = function () {
  document.getElementById("id-user-2").value = userId;
  document.getElementById("id-item-2").value = itemId;
  successMessage_1_2.style.display = "none";
  formContent_1_2.style.display = "flex";
  cs_pretty(cs_min, cs_max);
  document.getElementById("content-company-size").textContent = company_size;
  ne_pretty(ne_min, ne_max);
  document.getElementById("content-number-employees").textContent =
    number_employees;
  rl_pretty(rl_min, rl_max);
  document.getElementById("content-revenue-level").textContent = revenue_level;
  document.getElementById("content-location").textContent =
    document.getElementById("input_location").value;
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage_1_2.style.display = "none";
    formContent_1_2.style.display = "flex";
    formSection_1_2.style.display = "none";
    formSection_1_2.style.opacity = "0";
    showContent();
  }
};

// --> Form submition - Section 1-3
const formSection_1_3 = document.getElementById("form_section_1_3");
const formContent_1_3 = document.getElementById("wf-form-Section-1_3-Form");
const successMessage_1_3 = document.getElementById(
  "section1_3-success-message",
);

formSection_1_3.onsubmit = function () {
  document.getElementById("id-user-3").value = userId;
  document.getElementById("id-item-3").value = itemId;
  successMessage_1_3.style.display = "none";
  formContent_1_3.style.display = "flex";
  ac_pretty(ac_min, ac_max);
  document.getElementById("content-age-customer").textContent = age_customer;
  document.getElementById("content-usual-gender").textContent = usual_gender;
  se_pretty(se_min, se_max);
  document.getElementById("content-socio-economic").textContent =
    socio_economic;
  el_pretty(el_min, el_max);
  document.getElementById("content-educational-level").textContent =
    education_level;
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage_1_3.style.display = "none";
    formContent_1_3.style.display = "flex";
    formSection_1_3.style.display = "none";
    formSection_1_3.style.opacity = "0";
    showContent();
  }
};

// --> Form submition - Section 1-4
const formSection_1_4 = document.getElementById("form_section_1_4");
const formContent_1_4 = document.getElementById("wf-form-Section-1_4-Form");
const successMessage_1_4 = document.getElementById(
  "section1_4-success-message",
);

formSection_1_4.onsubmit = function () {
  document.getElementById("id-user-4").value = userId;
  document.getElementById("id-item-4").value = itemId;
  document.getElementById("content-personality").textContent =
    document.getElementById("input_Personality").value;
  document.getElementById("content-lifestyle").textContent =
    document.getElementById("input_Lifestyle").value;
  document.getElementById("conten-interests").textContent =
    document.getElementById("input__Interests").value;
  successMessage_1_4.style.display = "none";
  formContent_1_4.style.display = "flex";
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage_1_4.style.display = "none";
    formContent_1_4.style.display = "flex";
    formSection_1_4.style.display = "none";
    formSection_1_4.style.opacity = "0";
    showContent();
  }
};

// --> Form submition - Section 1-5
const formSection_1_5 = document.getElementById("form_section_1_5");
const formContent_1_5 = document.getElementById("wf-form-Section-1_5-Form");
const successMessage_1_5 = document.getElementById(
  "section1_5-success-message",
);

formSection_1_5.onsubmit = function () {
  document.getElementById("id-user-5").value = userId;
  document.getElementById("id-item-5").value = itemId;
  document.getElementById("content-technologies").textContent =
    document.getElementById("input_technologiesPresented").value;
  document.getElementById("content-capabilities").textContent =
    document.getElementById("input_technicalCapabilities").value;
  successMessage_1_5.style.display = "none";
  formContent_1_5.style.display = "flex";
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage_1_5.style.display = "none";
    formContent_1_5.style.display = "flex";
    formSection_1_5.style.display = "none";
    formSection_1_5.style.opacity = "0";
    showContent();
  }
};

// --> Form submition - Multiple Chapters 2 - 4
const formSection = document.getElementById("form_section_content");
const formContent = document.getElementById("wf-form-Section-Content-Form");
const successMessage = document.getElementById("section-success-message");
const sectionContent = document.getElementById("section-content");

formSection.onsubmit = function () {
  successMessage.style.display = "none";
  formContent.style.display = "flex";
  sectionContent.textContent = document.getElementById("section-content-input");
  let waitSuccessMessage = setTimeout(delayFunctionUpdate, 3500);
  function delayFunctionUpdate() {
    successMessage.style.display = "none";
    formContent.style.display = "flex";
    formSection.style.display = "none";
    formSection.style.opacity = "0";
    sectionContent.style.display = "inline-block";
    sectionContent.style.opacity = "1";
  }
};
