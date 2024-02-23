$(document).ready(function () {
  //DOM elements
  const instructionSection = document.getElementById("instructions-content");
  const leanCanvasSection = document.getElementById("leancanvas-content");
  const mainSection = document.getElementById("main-content");

  // next-data Info
  var address =
    "https://scale-faster.webflow.io/plan-data-next/" +
    slug_init +
    " #next_data";
  $("#next_info").load(address);
  //var Slug_User = localStorage.getItem('Slug');

  // Function -> Hide all sections
  function hideSections() {
    instructionSection.style.opacity = "0";
    instructionSection.style.display = "none";
    leanCanvasSection.style.opacity = "0";
    leanCanvasSection.style.display = "none";
    mainSection.style.opacity = "0";
    mainSection.style.display = "none";
  }

  // <---------------> Loading -> Instruction Page
  $("#instructions-menu").on("click", function () {
    var InstructionsSection = new pym.Parent(
      "instructions-body",
      "../app-plan/instructionapp",
      {}
    );
    hideSections();
    instructionSection.style.display = "block";
    instructionSection.style.opacity = "1";
  });

  // <---------------> Loading -> Lean Canvas Page
  function showCanvasContent() {
    var LeanCanvasSection = new pym.Parent(
      "leanCanvas-body",
      "../app-plan/leancanvasapp",
      {}
    );
    var LeanCanvaGrid = new pym.Parent(
      "leanCanvas-grid",
      "../lean-canvas/" + slug_init,
      {}
    );
    hideSections();
    leanCanvasSection.style.display = "block";
    leanCanvasSection.style.opacity = "1";
  }

  // Lean Canvas -> Navbar Plandata Menu Button
  $("#leanCanvas-menu").on("click", function () {
    showCanvasContent();
  });

  // Lean Canvas -> Instructions Page Button
  $("#start-leanCanvas").on("click", function () {
    showCanvasContent();
  });

  // <---------------> Loading -> Main Page
  function showMainContent() {
    hideSections();
    mainSection.style.display = "flex";
    mainSection.style.opacity = "1";
  }

  // Plan -> Navbar Plandata Menu Button
  $("#plan-menu").on("click", function () {
    showMainContent();
  });

  // Plan -> Instructions Page Button
  $("#start-plan").on("click", function () {
    showMainContent();
  });
});
