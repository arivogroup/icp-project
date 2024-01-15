// CDN Web Addres: https://cdn.jsdelivr.net/gh/arivogroup/icp-project@main/Plan-data/loadingCMSCollection.data.js

//----- LOADING PAGE ----
//----- COMPANY SIZE -----
var company_size;

function cs_pretty(cs_min, cs_max) {
  if (cs_min != cs_max) {
    company_size = `${cs_min} - ${cs_max}`;
  } else {
    company_size = `${cs_min}`;
  }
}

cs_pretty(cs_min, cs_max);
$("#content-company-size").html(company_size.replace(/\n/g, "<br>"));
$("#resume-company-size").html(company_size.replace(/\n/g, "<br>"));
document.getElementById("input_companySize_min").value = cs_min;
document.getElementById("input_companySize_max").value = cs_max;

var $cs = $("#input_companySize");
$cs.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 0,
  max: 10000,
  from: cs_min,
  to: cs_max,
  step: 100,
  decorate_both: true,
});
$cs.on("change", function () {
  var $cs_inp = $(this);
  cs_min = $cs_inp.data("from"); // input data-from attribute
  document.getElementById("input_companySize_min").value = cs_min;
  cs_max = $cs_inp.data("to"); // input data-to attribute
  document.getElementById("input_companySize_max").value = cs_max;
});

//----- NUMBER OF EMPLOYEES -----
var number_employees;

function ne_pretty(ne_min, ne_max) {
  if (ne_min != ne_max) {
    number_employees = `${ne_min} EMPL - ${ne_max} EMPL`;
  } else {
    number_employees = `${ne_min} EMPL`;
  }
}

ne_pretty(ne_min, ne_max);
$("#content-number-employees").html(number_employees.replace(/\n/g, "<br>"));
$("#resume-number-employee").html(number_employees.replace(/\n/g, "<br>"));
document.getElementById("input_numberEmployees_min").value = ne_min;
document.getElementById("input_numberEmployees_max").value = ne_max;

var $ne = $("#input_numberEmployees");
$ne.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 50,
  max: 1000,
  from: ne_min,
  to: ne_max,
  step: 50,
  max_prefix: "+",
  postfix: " EMPL",
  decorate_both: true,
});
$ne.on("change", function () {
  var $ne_inp = $(this);
  ne_min = $ne_inp.data("from"); // input data-from attribute
  document.getElementById("input_numberEmployees_min").value = ne_min;
  ne_max = $ne_inp.data("to"); // input data-to attribute
  document.getElementById("input_numberEmployees_max").value = ne_max;
});

//----- REVENUE LEVEL -----
var revenue_level;

function rl_pretty(rl_min, rl_max) {
  if (rl_min != rl_max) {
    revenue_level = `± $${rl_min} - ± $${rl_max}`;
  } else {
    revenue_level = `± $${rl_min}`;
  }
}

rl_pretty(rl_min, rl_max);
$("#content-revenue-level").html(revenue_level.replace(/\n/g, "<br>"));
$("#resume-revenue").html(revenue_level.replace(/\n/g, "<br>"));
document.getElementById("input_revenueLevel_min").value = rl_min;
document.getElementById("input_revenueLevel_max").value = rl_max;

var $rl = $("#input_revenueLevel");
$rl.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  min: 1000000,
  max: 25000000,
  from: rl_min,
  to: rl_max,
  prefix: "± $",
  hide_min_max: true,
  decorate_both: true,
  force_edges: true,
  step: 1000000,
});
$rl.on("change", function () {
  var $rl_inp = $(this);
  rl_min = $rl_inp.data("from"); // input data-from attribute
  document.getElementById("input_revenueLevel_min").value = rl_min;
  rl_max = $rl_inp.data("to"); // input data-to attribute
  document.getElementById("input_revenueLevel_max").value = rl_max;
});

//----- AGE CUSTOMER -----
var age_customer;

function ac_pretty(ac_min, ac_max) {
  if (ac_min != ac_max) {
    age_customer = `± ${ac_min} Years - ± ${ac_max} Years`;
  } else {
    age_customer = `± ${ac_min} Years`;
  }
}

ac_pretty(ac_min, ac_max);
$("#content-age-customer").html(age_customer.replace(/\n/g, "<br>"));
$("#resume-age-customer").html(age_customer.replace(/\n/g, "<br>"));
document.getElementById("input_ageCustomer_min").value = ac_min;
document.getElementById("input_ageCustomer_max").value = ac_max;

var $ac = $("#input_ageCustomer");
$ac.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 20,
  max: 80,
  from: ac_min,
  to: ac_max,
  step: 10,
  prefix: "± ",
  max_prefix: "+",
  postfix: " Years",
  decorate_both: true,
});
$ac.on("change", function () {
  var $ac_inp = $(this);
  ac_min = $ac_inp.data("from"); // input data-from attribute
  document.getElementById("input_ageCustomer_min").value = ac_min;
  ac_max = $ac_inp.data("to"); // input data-to attribute
  document.getElementById("input_ageCustomer_max").value = ac_max;
});

//----- USUAL GENDER -----
var ug = document.getElementById("gender");
var ug_fs = document.getElementById("input_gender_fs");
var usual_gender;

function emptyGender(gender) {
  if (gender == "") {
    gender = "No Data";
  }
  return gender;
}

ug.value = emptyGender(gender);
ug_fs.value = ug.value;

ug.addEventListener("change", function () {
  usual_gender = emptyGender(ug.value);
  ug_fs.value = usual_gender;
});

//----- SOCIO ECONOMIC LEVEL -----
var socio_economic;
var se_data = ["Lower", "Upper Lower", "Lower Middle", "Upper Middle", "Upper"];
var se_from_string = se_data[se_min];
var se_to_string = se_data[se_max];

function se_pretty(se_min, se_max) {
  if (se_min != se_max) {
    socio_economic = `${se_from_string} - ${se_to_string}`;
  } else {
    socio_economic = `${se_from_string}`;
  }
}

se_pretty(se_min, se_max);
$("#content-socio-economic").html(socio_economic.replace(/\n/g, "<br>"));
$("#resume-socio-economic").html(socio_economic.replace(/\n/g, "<br>"));
document.getElementById("input_socioEconomic_min").value = se_min;
document.getElementById("input_socioEconomic_max").value = se_max;

var $se = $("#input_socioEconomicLevel");
$se.ionRangeSlider({
  type: "double",
  skin: "round",
  values: ["Lower", "Upper Lower", "Lower Middle", "Upper Middle", "Upper"],
  hide_min_max: true,
  from: se_min,
  to: se_max,
  decorate_both: true,
});
$se.on("change", function () {
  var $se_inp = $(this);
  se_min = $se_inp.data("from"); // input data-from attribute
  document.getElementById("input_socioEconomic_min").value = se_min;
  se_max = $se_inp.data("to"); // input data-to attribute
  document.getElementById("input_socioEconomic_max").value = se_max;
});

//----- EDUCATIONAL LEVEL -----
var education_level;
var el_data = [
  "Illiterate",
  "Basic Education",
  "High School",
  "Bachelor Degree",
  "Master Degree",
  "PhD",
];
var el_from_string = el_data[el_min];
var el_to_string = el_data[el_max];

function el_pretty(el_min, el_max) {
  if (el_min != el_max) {
    education_level = `${el_from_string} - ${el_to_string}`;
  } else {
    education_level = `${el_from_string}`;
  }
}

el_pretty(el_min, el_max);
$("#content-educational-level").html(education_level.replace(/\n/g, "<br>"));
$("#resume-education-level").html(education_level.replace(/\n/g, "<br>"));
document.getElementById("input_educationalLevel_min").value = el_min;
document.getElementById("input_educationalLevel_max").value = el_max;

var $el = $("#input_educationalLevel");
$el.ionRangeSlider({
  type: "double",
  skin: "round",
  values: [
    "Illiterate",
    "Basic Education",
    "High School",
    "Bachelor Degree",
    "Master Degree",
    "PhD",
  ],
  hide_min_max: true,
  from: el_min,
  to: el_max,
  decorate_both: true,
});
$el.on("change", function () {
  var $el_inp = $(this);
  el_min = $el_inp.data("from"); // input data-from attribute
  document.getElementById("input_educationalLevel_min").value = el_min;
  el_max = $el_inp.data("to"); // input data-to attribute
  document.getElementById("input_educationalLevel_max").value = el_max;
});
