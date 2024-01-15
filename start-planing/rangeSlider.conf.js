/********** jsDelivr CDN Web Address
 * https://cdn.jsdelivr.net/gh/arivogroup/icp-project@main/start-planing/rangeSlider.conf.js
 ***********************************/

var company_size_min = 5000;
var company_size_max = 8000;
var number_employees_min = 100;
var number_employees_max = 500;
var revenue_level_min = 5000000;
var revenue_level_max = 15000000;
var age_customer_min = 20;
var age_customer_max = 60;
var socio_economic_min = 1;
var socio_economic_max = 3;
var education_level_min = 3;
var education_level_max = 4;

/******** COMPANY SIZE ********/
var $cs = $("#company-size");
$cs.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 0,
  max: 10000,
  from: company_size_min,
  to: company_size_max,
  step: 100,
  decorate_both: true,
});
$cs.on("change", function () {
  var $cs_inp = $(this);
  company_size_min = $cs_inp.data("from"); // input data-from attribute
  company_size_max = $cs_inp.data("to"); // input data-to attribute
});

/******** NUMBER OF EMPLOYEES ********/
var $ne = $("#number-employee");
$ne.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 50,
  max: 1000,
  from: number_employees_min,
  to: number_employees_max,
  step: 50,
  max_prefix: "+",
  postfix: " EMPL",
  decorate_both: true,
});
$ne.on("change", function () {
  var $ne_inp = $(this);
  number_employees_min = $ne_inp.data("from"); // input data-from attribute
  number_employees_max = $ne_inp.data("to"); // input data-to attribute
});

/******** REVENUE LEVEL ********/
var $rl = $("#revenue-level");
$rl.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  min: 1000000,
  max: 25000000,
  from: revenue_level_min,
  to: revenue_level_max,
  prefix: "± $",
  hide_min_max: true,
  decorate_both: true,
  force_edges: true,
  step: 1000000,
});
$rl.on("change", function () {
  var $rl_inp = $(this);
  revenue_level_min = $rl_inp.data("from"); // input data-from attribute
  revenue_level_max = $rl_inp.data("to"); // input data-to attribute
});

/******** Age of Customer ********/
var $ac = $("#approximate-age");
$ac.ionRangeSlider({
  type: "double",
  skin: "round",
  grid: true,
  hide_min_max: true,
  min: 20,
  max: 80,
  from: age_customer_min,
  to: age_customer_max,
  step: 10,
  prefix: "± ",
  max_prefix: "+",
  postfix: " Years",
  decorate_both: true,
});
$ac.on("change", function () {
  var $ac_inp = $(this);
  age_customer_min = $ac_inp.data("from"); // input data-from attribute
  age_customer_max = $ac_inp.data("to"); // input data-to attribute
});

/******** Socio Economic Level ********/
var $se = $("#socio-economic-level");
$se.ionRangeSlider({
  type: "double",
  skin: "round",
  values: ["Lower", "Upper Lower", "Lower Middle", "Upper Middle", "Upper"],
  hide_min_max: true,
  from: socio_economic_min,
  to: socio_economic_max,
  decorate_both: true,
});
$se.on("change", function () {
  var $se_inp = $(this);
  socio_economic_min = $se_inp.data("from"); // input data-from attribute
  socio_economic_max = $se_inp.data("to"); // input data-to attribute
});

/******** Educational Level ********/
var $el = $("#educational-level");
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
  from: education_level_min,
  to: education_level_max,
  decorate_both: true,
});
$el.on("change", function () {
  var $el_inp = $(this);
  education_level_min = $el_inp.data("from"); // input data-from attribute
  education_level_max = $el_inp.data("to"); // input data-to attribute
});

/***** NEXT STEPS *****/
$(document).ready(function () {
  /*** INIT ***/
  $("#button-step-0").on("click", function () {
    const id_user = localStorage.getItem("UserId");
    const item_id = localStorage.getItem("itemId");
    localStorage.removeItem("itemId");
    $("#fs-id-user").val(id_user);
    $("#fs-done").val("True");
    $("#fs-item-id").val(item_id);
  });

  /*** STEP 2 ***/
  $("#button-step-2").on("click", function () {
    $("#fs-company-size-min").val(company_size_min);
    $("#fs-company-size-max").val(company_size_max);
    $("#fs-number-employee-min").val(number_employees_min);
    $("#fs-number-employee-max").val(number_employees_max);
    $("#fs-revenue-level-min").val(revenue_level_min);
    $("#fs-revenue-level-max").val(revenue_level_max);
  });

  /*** STEP 3 ***/
  $("#button-step-3").on("click", function () {
    $("#fs-approximate-age-min").val(age_customer_min);
    $("#fs-approximate-age-max").val(age_customer_max);
    var gender = $("#gender").val();
    if (gender == "") {
      gender = "No Data";
    }
    $("#fs-gender").val(gender);
    $("#fs-socio-economic-level-min").val(socio_economic_min);
    $("#fs-socio-economic-level-max").val(socio_economic_max);
    $("#fs-educational-level-min").val(education_level_min);
    $("#fs-educational-level-max").val(education_level_max);
  });
});
