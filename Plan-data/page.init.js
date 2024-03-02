$(document).ready(function () {
  // next-data Info
  var address =
    "https://scale-faster.webflow.io/plan-data-next/" +
    slug_init +
    " #next_data";
  $("#next_info").load(address);
  //var Slug_User = localStorage.getItem('Slug');

  var LeanCanvaSection = new pym.Parent(
    "leanCanvas-body",
    "../lean-canvas/" + slug_init,
    {}
  );

  var InstructionsSection = new pym.Parent(
    "instructions-body",
    "../app-plan/instructionapp",
    {}
  );
});
