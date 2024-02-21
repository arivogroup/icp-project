const element document.getElementById("print-section");
const printButton = document.getElementById("print-icon");

function fillPrintContent() {
  document.getElementById("print-draft-initial-icp").textContent = document.getElementById("content-draft-initial-icp").textContent;
  document.getElementById("print-company-size").innerText = document.getElementById("content-company-size").innerText;
};

// Event DOM completly loaded
document.addEventListener("DOMContentLoaded", () => {
  //Listen when Print Button is clicked
  printButton.addEventListener("click", () => {
    fillPrintContent();
    element.style.display = "block";
    var opt = {
      margin: [1, 0 ,1, 0],
      pagebreak: { before: '.chapterdiv__print', avoid: 'p' },
      filename: project_name + ' - ' + author_name + '.pdf',
      image: { type: 'jpg', quality: 0.2 },
      html2canvas: { allowTaint: true, scale: 1 },
      jsPDF: { unit: 'cm', format: 'A4', orientation: 'p' }
    };
    html2pdf().set(opt).from(element).save().catch(err => console.log(err));
    let waitTimeOutPrint = setTimeout(hidePrintSection, 2000);
    function hidePrintSection() {
      element.style.display = "none";
    };
  });
});
