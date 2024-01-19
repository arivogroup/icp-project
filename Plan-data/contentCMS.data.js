const sectionTitle = document.getElementById("section-title");
const testHeading = document.getElementById("test-heading");
const defaultText = document.getElementById("default-text");
var contentCMS;
var optionName;

function Chapter_Title(num) {
  var Title;
  switch (num) {
    case 1:
      Title = "First Steps";
      document.getElementById("first-chapter-title").textContent = Title;
      break;
    case 2:
      Title = "Ideal Customer Profile";
      break;
    case 3:
      Title = "Develop Messaging";
      break;
    case 4:
      Title = "Sales Story";
      break;
    default:
      break;
  }
  document.getElementById("chapter-title").textContent = Title;
}

function ContentEmpty() {
  if (contentCMS == "") {
    defaultText.style.display = "block";
  } else {
    defaultText.style.display = "none";
  }
}

function SectionContentFill() {
  document.getElementById("section-content").textContent = contentCMS;
  document.getElementById("section-content-input").value = contentCMS;
  document.getElementById("section-id-user").value =
    document.getElementById("next_userid").textContent;
  document.getElementById("section-id-item").value =
    document.getElementById("next_itemid").textContent;
  document.getElementById("section-option-name").value = optionName;
}

async function showContent() {
  $(".section-subtitle")
    .each(function () {
      $(this).css("display", "inline-block");
      $(this).css("opacity", "1");
    })
    .get();
  $(".section-container.short")
    .each(function () {
      $(this).css("display", "flex");
      $(this).css("opacity", "1");
    })
    .get();
  $(".section-container")
    .each(function () {
      $(this).css("display", "flex");
      $(this).css("opacity", "1");
    })
    .get();
}

//-----!! CHAPTER 1 !!-----

//----- SECTION 1 -----
function Chapter_1_1() {
  Chapter_Title(1);
  optionName = "DraftICP";
  document.getElementById("content-draft-initial-icp").textContent =
    firstContentFill;
  document.getElementById("first-icp-input").textContent = firstContentFill;
  $("#guidance-content").load(
    "../app-plan/appinstruction #inst-identification",
  );
}

document
  .getElementById("link-chapter-1")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_1_1();
    }, 600);
  });

document
  .getElementById("link-section-1-1")
  .addEventListener("click", function () {
    Chapter_1_1();
  });

//----- SECTION 2 -----
document
  .getElementById("link-section-1-2")
  .addEventListener("click", function () {
    Chapter_Title(1);
    optionName = "Firmographics";
    document.getElementById("content-location").textcontent =
      contentFill_location;
    document.getElementById("input_location").value = contentFill_location;
    $("#guidance-content").load(
      "../app-plan/appinstruction #inst-identification",
    );
  });

//----- SECTION 3 -----
document
  .getElementById("link-section-1-3")
  .addEventListener("click", function () {
    Chapter_Title(1);
    optionName = "Demographics";
    $("#guidance-content").load(
      "../app-plan/appinstruction #inst-identification",
    );
  });

//----- SECTION 4 -----
document
  .getElementById("link-section-1-4")
  .addEventListener("click", function () {
    Chapter_Title(1);
    optionName = "Psycographics";
    document.getElementById("input_Personality").textContent =
      contentFill_personality;
    document.getElementById("input_Lifestyle").textContent =
      contentFill_lifestyle;
    document.getElementById("input_Interests").textContent =
      contentFill_interests;
    $("#guidance-content").load(
      "../app-plan/appinstruction #inst-identification",
    );
  });

//----- SECTION 5 -----
document
  .getElementById("link-section-1-5")
  .addEventListener("click", function () {
    Chapter_Title(1);
    optionName = "Technical";
    document.getElementById("input_technologiesPresented").textContent =
      contentFill_technologies;
    document.getElementById("input_technicalCapabilities").textContent =
      contentFill_capabilities;
    $("#guidance-content").load(
      "../app-plan/appinstruction #inst-identification",
    );
  });

//----- ON WINDOWS LOAD -----
window.onload = function () {
  Chapter_1_1();
};

//-----!! CHAPTER 2 !!-----

//----- SECTION 1 -----
function Chapter_2_1() {
  testHeading.textContent = document.getElementById("next_userid").textContent;
  Chapter_Title(2);
  sectionTitle.textContent = "Ideal user";
  optionName = "Identification";
  contentCMS = document.getElementById("next_identification").textContent;
  ContentEmpty();
  SectionContentFill();
  $("#guidance-content").load(
    "../app-plan/appinstruction #inst-identification",
  );
}

document
  .getElementById("link-chapter-2")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_2_1();
    }, 600);
  });

document
  .getElementById("link-section-2-1")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_2_1();
    }, 600);
  });

//----- SECTION 2 -----
document
  .getElementById("link-section-2-2")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(2);
      sectionTitle.textContent = "Other people need to be involved";
      optionName = "Personas";
      contentCMS = document.getElementById("next_personas").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 3 -----
document
  .getElementById("link-section-2-3")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(2);
      sectionTitle.textContent = "Buyer’s triggers";
      optionName = "Triggers";
      contentCMS = document.getElementById("next_triggers").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 4 -----
document
  .getElementById("link-section-2-4")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(2);
      sectionTitle.textContent = "Criteria used when compares alternative";
      optionName = "Value Drivers";
      contentCMS = document.getElementById("next_valueDrivers").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 5 -----
document
  .getElementById("link-section-2-5")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(2);
      sectionTitle.textContent = "Steps taken by the buyer";
      optionName = "Steps";
      contentCMS = document.getElementById("next_steps").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 6 -----
document
  .getElementById("link-section-2-6")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(2);
      sectionTitle.textContent = "Concerns had by the buyers";
      optionName = "Concerns";
      contentCMS = document.getElementById("next_concerns").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//-----!! CHAPTER 3 !!-----

//----- SECTION 1 -----
function Chapter_3_1() {
  testHeading.textContent = document.getElementById("next_userid").textContent;
  Chapter_Title(3);
  sectionTitle.textContent = "State New ICP";
  optionName = "New ICP";
  contentCMS = document.getElementById("next_newICP").textContent;
  ContentEmpty();
  SectionContentFill();
  //$("#guidance-content").load('../app-plan/appinstruction #inst-identification');
}

document
  .getElementById("link-chapter-3")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_3_1();
    }, 600);
  });

document
  .getElementById("link-section-3-1")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_3_1();
    }, 600);
  });

//----- SECTION 2 -----
document
  .getElementById("link-section-3-2")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(3);
      sectionTitle.textContent = "Message Map";
      optionName = "Message Map";
      contentCMS = document.getElementById("next_messageMap").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 3 -----
document
  .getElementById("link-section-3-3")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(3);
      sectionTitle.textContent = "Hero Message";
      optionName = "Hero Message";
      contentCMS = document.getElementById("next_heroMessage").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//-----!! CHAPTER 4 !!-----

//----- SECTION 1 -----
function Chapter_4_1() {
  testHeading.textContent = document.getElementById("next_userid").textContent;
  Chapter_Title(4);
  sectionTitle.textContent = "Problem your current customer has";
  optionName = "Problem";
  contentCMS = document.getElementById("next_problem").textContent;
  ContentEmpty();
  SectionContentFill();
  $("#guidance-content").load("../app-plan/appinstruction #inst-problem"); //Edit
}

document
  .getElementById("link-chapter-4")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_4_1();
    }, 600);
  });

document
  .getElementById("link-section-4-1")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_4_1();
    }, 600);
  });

//----- SECTION 2 -----
document
  .getElementById("link-section-4-2")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "How the problem is currently solved";
      optionName = "Current Solution";
      contentCMS = document.getElementById("next_currentSolution").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 3 -----
document
  .getElementById("link-section-4-3")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Limitations of the current solution";
      optionName = "Limitations";
      contentCMS = document.getElementById("next_limitations").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 4 -----
document
  .getElementById("link-section-4-4")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Perfect Solution for the problem";
      optionName = "Perfect Solution";
      contentCMS = document.getElementById("next_perfectSolution").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 5 -----
document
  .getElementById("link-section-4-5")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Company’s point of view of the problem";
      optionName = "View of the Solution";
      contentCMS = document.getElementById(
        "next_viewoftheSolution",
      ).textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 6 -----
document
  .getElementById("link-section-4-6")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Company’s solution to the problem";
      optionName = "Solution Description";
      contentCMS = document.getElementById(
        "next_solutionDescription",
      ).textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 7 -----
document
  .getElementById("link-section-4-7")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Value of the Solution";
      optionName = "Customer Value";
      contentCMS = document.getElementById("next_customerValue").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 8 -----
document
  .getElementById("link-section-4-8")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent = "Features that deliver the value";
      optionName = "Solution Details";
      contentCMS = document.getElementById("next_solutionDetails").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });

//----- SECTION 9 -----
document
  .getElementById("link-section-4-9")
  .addEventListener("click", function () {
    setTimeout(function () {
      Chapter_Title(4);
      sectionTitle.textContent =
        "Places where the solution had been implemeted";
      optionName = "Success Stories";
      contentCMS = document.getElementById("next_successStories").textContent;
      ContentEmpty();
      SectionContentFill();
    }, 600);
  });
