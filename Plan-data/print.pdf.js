const element = document.getElementById("print-section");
const printButton = document.getElementById("print-icon");

function fillPrintContent() {
  var list_sections = [
    "-draft-initial-icp",
    "-company-size",
    "-number-employees",
    "-revenue-level",
    "-location",
    "-age-customer",
    "-usual-gender",
    "-socio-economic",
    "-educational-level",
    "-personality",
    "-lifestyle",
    "-interests",
    "-technologies",
    "-capabilities",
  ];
  for (let i = 0; i < list_sections.length; i++) {
    document.getElementById("print" + list_sections[i]).innerText =
      document.getElementById("content" + list_sections[i]).innerText;
  }
}

function fillPrintContentNext() {
  var list_sectionsNext = [
    "identification",
    "personas",
    "triggers",
    "valueDrivers",
    "steps",
    "concerns",
    "newICP",
    "messageMap",
    "heroMessage",
    "problem",
    "currentSolution",
    "limitations",
    "perfectSolution",
    "viewoftheSolution",
    "solutionDescription",
    "customerValue",
    "solutionDetails",
    "successStories",
  ];
  for (let i = 0; i < list_sectionsNext.length; i++) {
    document.getElementById('print-' + list_sectionsNext[i]).innerText = document.getElementById('next_' + list_sectionsNext[i]).innerText;
  }
}

// Event DOM completly loaded
document.addEventListener("DOMContentLoaded", () => {
  //Listen when Print Button is clicked
  printButton.addEventListener("click", () => {
    fillPrintContent();
    fillPrintContentNext();
    element.style.display = "block";
    bodyElement.classList.add('overflow-hidden');
    var opt = {
      margin: [1, 0.5, 1, 0.5],
      pagebreak: { before: ".chapterdiv__print", avoid: ["p", "h3", "h4", ".sectiondiv__print"] },
      filename: project_name + " - " + author_name + ".pdf",
      image: { type: "jpg", quality: 0.2 },
      html2canvas: { allowTaint: true, scale: 1 },
      jsPDF: { unit: "cm", format: "A4", orientation: "p" },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .catch((err) => console.log(err));
    let waitTimeOutPrint = setTimeout(hidePrintSection, 2000);
    function hidePrintSection() {
      element.style.display = "none";
      bodyElement.classList.remove('overflow-hidden');
    }
  });
});
