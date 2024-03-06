$(document).ready(function () {
  // next-data Info

  //Determinar Visibilidad o no de Loader, hacer OverFlow:Hidden al body
  var bodyElement = document.querySelector('.body-home-plandata');
  var loadingElement = document.querySelector('.loading-chapter');

  function isLoadingDisplayed() {
    var styleDisplay = getComputedStyle(loadingElement).display;
    if (styleDisplay === 'flex') {
      bodyElement.classList.add('overflow-hidden');
    } else {
      bodyElement.classList.remove('overflow-hidden');
    }
  }

  isLoadingDisplayed();
  var observer = new MutationObserver(isLoadingDisplayed);
  observer.observe(loadingElement, { attributes: true, attributeFilter: ['style'] });

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
