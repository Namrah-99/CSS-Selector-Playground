// --------------------------------------------------------------------  Sidebar links Array data
const sideBarLinksList = [
  {
    id: 1,
    title: ".class",
    explanation: `Selects all elements with class="intro"`,
    selectors: [".intro", ".title", ".name1"],
  },
  {
    id: 2,
    title: ".class1.class2",
    explanation: `Selects all elements with both name1 and name2 set within its class attribute`,
    selectors: [".name1.name2"],
  },
  {
    id: 3,
    title: ".class1 .class2",
    explanation:
      "Selects all elements with name2 that is a descendant of an element with name1",
    selectors: [".name1 .name2"],
  },
  {
    id: 4,
    title: "#id",
    explanation: `Selects the element with id="firstname"`,
    selectors: ["#firstname"],
  },
  {
    id: 5,
    title: "*",
    explanation: "Selects all elements",
    selectors: ["*"],
  },
  {
    id: 6,
    title: "element",
    explanation: "Selects all &lt;b&gt; elements",
    selectors: ["b"],
  },
  {
    id: 7,
    title: "element.class",
    explanation: `Selects all &lt;p&gt; elements with class="intro"`,
    selectors: ["p.intro"],
  },
  {
    id: 8,
    title: "element,element",
    explanation:
      "Selects all &lt;h3&gt; elements and all &lt;span&gt; elements",
    selectors: ["h3 , span"],
  },
  {
    id: 9,
    title: "element element",
    explanation: "Selects all &lt;b&gt; elements inside &lt;p&gt; elements",
    selectors: ["p b"],
  },
  {
    id: 10,
    title: "element>element",
    explanation:
      "Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element",
    selectors: ["div &gt; p"],
  },
  {
    id: 11,
    title: "element+element",
    explanation:
      "Selects the first &lt;p&gt; element that is placed immediately after &lt;div&gt; elements",
    selectors: ["div + p"],
  },
  {
    id: 12,
    title: "element1~element2",
    explanation:
      "Selects every &lt;ul&gt; element that is preceded by a &lt;p&gt; element",
    selectors: ["p ~ ul"],
  },
  {
    id: 13,
    title: "[attribute]",
    explanation: "Selects all elements with a target attribute",
    selectors: ["[target]"],
  },
  {
    id: 14,
    title: "[attribute=value]",
    explanation: `Selects all elements with target="_blank"`,
    selectors: [`[target="_blank"]`],
  },
  {
    id: 15,
    title: "[attribute~=value]",
    explanation: `Selects all elements with a title attribute containing the word "food" (e.g image with title 'food')`,
    selectors: [`[title~="food"]`],
  },
  {
    id: 16,
    title: "[attribute|=value]",
    explanation: `Selects all elements with a lang attribute value equal to "en" or starting with "en-"`,
    selectors: [`[lang|="en"]`],
  },
  {
    id: 17,
    title: "[attribute^=value]",
    explanation: `Selects every <a> element whose href attribute value begins with "https"`,
    selectors: [`a[href^="https"]`],
  },
  {
    id: 18,
    title: "[attribute$=value]",
    explanation: `Selects every <img> element whose src attribute value ends with ".png"`,
    selectors: [`img[src$=".png"]`],
  },
  {
    id: 19,
    title: "[attribute*=value]",
    explanation: `Selects every <a> element whose href attribute value contains the substring "html-css-js"`,
    selectors: [`a[href*="html-css-js"]`],
  },
  {
    id: 20,
    title: ":active",
    explanation: "Selects the active link (click the target element)",
    selectors: ["p:active", "a:active", "h1:active"],
    class: "ativate-anchor-tag",
  },
  {
    id: 21,
    title: "::after",
    explanation:
      "Insert something after the content of each &lt;p&gt; element ",
    selectors: ["span::after"],
    class: "after-pseudo-class",
  },
  {
    id: 22,
    title: "::before",
    explanation:
      "Insert something before the content of each &lt;p&gt; element",
    selectors: ["span::before"],
    class: "before-pseudo-class",
  },
  {
    id: 23,
    title: ":checked",
    explanation: "Selects every checked &lt;input&gt; element",
    selectors: ["input:checked"],
    class: "input-checked-pseudo-class",
  },
  {
    id: 24,
    title: ":default",
    explanation: "Selects the default &lt;input&gt; element",
    selectors: ["input:default"],
    class: "input-default-pseudo-class",
  },
  {
    id: 25,
    title: ":disabled",
    explanation: "Selects every disabled &lt;input&gt; element",
    selectors: ["input:disabled"],
    class: "input-disabled-pseudo-class",
  },
  {
    id: 26,
    title: ":empty",
    explanation:
      "Selects every &lt;p&gt; element that has no children (including text nodes)",
    selectors: ["p:empty"],
  },
  {
    id: 27,
    title: ":enabled",
    explanation: "Selects every enabled &lt;input&gt; element",
    selectors: [`input[type="text"]:enabled`],
    class: "input-enabled-pseudo-class",
  },
  {
    id: 28,
    title: ":first-child",
    explanation:
      "Selects every &lt;p&gt; element that is the first child of its parent",
    selectors: ["p:first-child"],
  },
  {
    id: 29,
    title: "::first-letter",
    explanation: "Selects the first letter of every &lt;p&gt; element",
    selectors: ["p::first-letter"],
    class: "my-first-letter",
  },
  {
    id: 30,
    title: "::first-line",
    explanation: "Selects the first line of every &lt;p&gt; element",
    selectors: ["p::first-line"],
    class: "my-first-line",
  },
  {
    id: 31,
    title: ":first-of-type",
    explanation:
      "Selects every &lt;li&gt; element that is the first &lt;li&gt; element of its parent",
    selectors: ["li:first-of-type"],
  },
  {
    id: 32,
    title: ":focus",
    explanation:
      "Selects the input element which has focus (focus on the input field)",
    selectors: ["input:focus"],
    class: "input-focus-pseudo-class",
  },
  {
    id: 33,
    title: ":fullscreen",
    explanation: "Selects the element that is in full-screen mode",
    selectors: [":fullscreen"],
  },
  {
    id: 34,
    title: ":hover",
    explanation: "Selects elements (links or paras) on mouse over",
    selectors: ["p:hover"],
    class: "hover-pseudo-class",
  },
  {
    id: 35,
    title: ":in-range",
    explanation: "Selects input elements with a value within a specified range",
    selectors: ["input:in-range"],
    class: "in-range-pseudo-class",
  },
  {
    id: 36,
    title: ":indeterminate",
    explanation: "Selects input elements that are in an indeterminate state",
    selectors: ["input:indeterminate"],
    class: "indeterminate-pseudo-class",
  },
  {
    id: 37,
    title: ":invalid",
    explanation: "Selects all input elements with an invalid value",
    selectors: ["input:invalid"],
    class: "invalid-pseudo-class",
  },
  {
    id: 38,
    title: ":lang(language)",
    explanation: `Selects every &lt;p&gt; element with a lang attribute equal to "it" (Italian)`,
    selectors: ["p:lang(it)"],
  },
  {
    id: 39,
    title: ":last-child",
    explanation:
      "Selects every &lt;p&gt; element that is the last child of its parent",
    selectors: ["p:last-child"],
  },
  {
    id: 40,
    title: ":last-of-type",
    explanation:
      "	Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent",
    selectors: ["p:last-of-type"],
  },
  {
    id: 41,
    title: ":link",
    explanation: "Selects all unvisited links",
    selectors: ["a:link"],
    class: "link-pseudo-class",
  },
  {
    id: 42,
    title: "span::marker",
    explanation: "Selects the markers of list items",
    selectors: ["li::marker"],
    class: "marker-pseudo-element",
  },
  {
    id: 43,
    title: ":not(selector)",
    explanation: "Selects every element that is not a &lt;p&gt; element",
    selectors: [":not(p)"],
  },
  {
    id: 44,
    title: ":nth-child(n)",
    explanation:
      "Selects every &lt;p&gt; element that is the second child of its parent",
    selectors: ["p:nth-child(2)"],
  },
  {
    id: 45,
    title: ":nth-last-child(n)",
    explanation:
      "Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child",
    selectors: ["p:nth-last-child(2)"],
  },
  {
    id: 46,
    title: ":nth-last-of-type(n)",
    explanation:
      "Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child",
    selectors: ["p:nth-last-of-type(3)"],
  },
  {
    id: 47,
    title: ":nth-of-type(n)",
    explanation:
      "Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent",
    selectors: ["p:nth-of-type(2)"],
  },
  {
    id: 48,
    title: ":only-of-type",
    explanation:
      "Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent",
    selectors: ["p:only-of-type"],
  },
  {
    id: 49,
    title: ":only-child",
    explanation:
      "	Selects every &lt;p&gt; element that is the only child of its parent",
    selectors: ["p:only-child"],
  },
  {
    id: 50,
    title: ":optional",
    explanation: `Selects input elements with no "required" attribute`,
    selectors: ["input:optional"],
    class: "radiocheck-pseudo-class",
  },
  {
    id: 51,
    title: ":out-of-range",
    explanation:
      "Selects input elements with a value outside a specified range",
    selectors: ["input:out-of-range"],
  },
  {
    id: 52,
    title: "::placeholder",
    explanation: `Selects input elements with the "placeholder" attribute specified`,
    selectors: ["input[placeholder]"],
    class: "placeholder-pseudo-class",
  },
  {
    id: 53,
    title: ":read-only",
    explanation: `Selects input elements with the "readonly" attribute specified (radio buttons and check boxes)`,
    selectors: ["input:read-only"],
    class: "radiocheck-pseudo-class",
  },
  {
    id: 54,
    title: ":read-write",
    explanation: `Selects input elements with the "readonly" attribute NOT specified`,
    selectors: ["input:read-write"],
  },
  {
    id: 55,
    title: ":required",
    explanation: `Selects input elements with the "required" attribute specified`,
    selectors: ["input:required"],
  },
  {
    id: 56,
    title: ":root",
    explanation: "Selects the document's root element",
    selectors: [":root"],
  },
  {
    id: 57,
    title: "::selection",
    explanation: "Selects the portion of an element that is selected by a user",
    selectors: ["::selection"],
    class: "slection-pseudo-class",
  },
  {
    id: 58,
    title: ":target",
    explanation:
      "Selects the current active #news element (clicked on a URL containing that anchor name)",
    selectors: ["#news:target", "#news1:target"],
    class: "target-pseudo-class",
  },
  {
    id: 59,
    title: ":valid",
    explanation: "Selects all input elements with a valid value",
    selectors: ["input:valid"],
    class: "radiocheck-pseudo-class",
  },
  {
    id: 60,
    title: ":visited",
    explanation: "Selects all visited links",
    selectors: ["a:visited"],
    class: "visited-links-pseudo-class",
  },
];
// --------------------------------------------------------------------

// --------------------------------------------------------------------  side bar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-content");
const instructionsBtn = document.querySelector(".instructions");

instructionsBtn.addEventListener("click", () => {});

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// --------------------------------------------------------------------  select elements
const sideBarLinks = document.querySelectorAll(".sidebarLink");
const showTitle = document.querySelector(".showtitle");
const showExplanation = document.querySelector(".showexplanation");
const selectorButtons = document.querySelector(".showtestSelectors");

// --------------------------------------------------------------------  on initial load
window.addEventListener("load", () => {
  showTitle.innerHTML = sideBarLinksList[0].title;
  showExplanation.innerHTML = sideBarLinksList[0].explanation;
  displayButtons(sideBarLinksList[0]);
});

// --------------------------------------------------------------------  for removing items style
var selectContentGlobal;
var isPesudoClassCheck;
var filteredResultGlobal;

// --------------------------------------------------------------------  on click event, filter selector which you need to display
sideBarLinks.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    await scrollToTop();
    await removeStyles();
    const elementSelected = e.currentTarget.dataset.id;
    let filteredResult = sideBarLinksList.filter((filteredItem) => {
      if (filteredItem.id.toString() === elementSelected) {
        return filteredItem;
      }
    });
    showTitle.innerHTML = filteredResult[0].title;
    showExplanation.innerHTML = filteredResult[0].explanation;

    displayButtons(filteredResult[0]);
  });
});

// function for displaying buttons dynamically and also implemented a logic, when any of these buttons
// are selected then based on selector selected, elements from page content gets affected or gets border outside them
// --------------------------------------------------------------------
function displayButtons(filteredResult) {
  let uniqueLinkButtons = filteredResult.selectors.reduce(
    (values, currentItem) => {
      if (!values.includes(currentItem)) {
        values.push(currentItem);
      }
      return values;
    },
    []
  );

  let displayedButtons = uniqueLinkButtons.map((buttonElement) => {
    return `<a href="#" class="selectorBtn" data-id=${buttonElement}>
                  ${buttonElement}</a>`;
  });

  selectorButtons.innerHTML = displayedButtons.join("");
  // --------------------------------------------------------------------
  // selected html elements based on selector clicked logic moved inside the eventListener

  let selectedSelectorBtns = selectorButtons.querySelectorAll(".selectorBtn");

  selectedSelectorBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      await removeStyles();
      let isPesudoClass = false;
      let selectorFormat = e.currentTarget.innerHTML;
      // --------------------------------------------------------------------
      // Make the checkbox indeterminate via JavaScript
      if (selectorFormat.trim().toString().includes("input:indeterminate")) {
        var checkbox = document.getElementById("vehicle3");
        checkbox.indeterminate = true;
      }
      // --------------------------------------------------------------------  Updating selectorFormat
      //  regex is defined to separate html entities in the  e.currentTarget.innerHTML
      const regex = /(&)([^;]+)(;)?/; // Regex Understanding:  Together, these three groups match a substring that starts with an "&" character, followed by one or more non-semicolon characters, and optionally ends with a ";" character.// When the match method is called on a string using this regular expression pattern, it returns an array of all matches found.
      const matches = selectorFormat.match(regex);

      if (matches) {
        // --------------------------------------------------------------------
        // selectorFormat is modified based on regex, for selectorFormat containing any html entity
        const substring = matches[0];
        const parser = new DOMParser();
        const decodedEntity = parser.parseFromString(
          `<!doctype html><body>${substring}`,
          "text/html"
        ).body.textContent;
        const decodedStr = decodeURIComponent(selectorFormat);
        const pattern = new RegExp(substring, "g");
        selectorFormat = decodedStr.replace(pattern, decodedEntity);
      } else if (
        selectorFormat.trim().toString().includes(":") &&
        filteredResult.class &&
        selectorFormat.trim().toString() != ":fullscreen" &&
        selectorFormat.trim().toString() != "::selection"
      ) {
        // --------------------------------------------------------------------
        // selectorFormat which includes single ':' which basically are pseudo classes, this not targets pseudo elements includes '::'

        if (
          !selectorFormat.trim().toString().includes("input:checked") &&
          !selectorFormat.trim().toString().includes("input:default") &&
          !selectorFormat.trim().toString().includes("input:disabled") &&
          !selectorFormat.trim().toString().includes("input:enabled") &&
          !selectorFormat.trim().toString().includes("input:in-range") &&
          !selectorFormat.trim().toString().includes("input:indeterminate") &&
          !selectorFormat.trim().toString().includes("input:invalid") &&
          !selectorFormat.trim().toString().includes("a:link") &&
          !selectorFormat.trim().toString().includes("input:read-only")
        ) {
          const elementSelected = selectorFormat.split(":");
          selectorFormat = elementSelected[0];
        }
        isPesudoClass = true;
      }
      // Make style changes to the selected content

      const selectContent = document
        .querySelector(".sampleCode")
        .querySelectorAll(selectorFormat.trim());

      if (selectContent.length !== 0) {
        // --------------------------------------------------------------------
        let filteredResultClass = filteredResult.class;
        await stylingElements(
          selectContent,
          filteredResultClass,
          isPesudoClass,
          selectorFormat
        );
      }

      if (selectorFormat.toString().trim() === ":fullscreen") {
        // --------------------------------------------------------------------
        // Using JavaScript to open the page in fullscreen mode
        var elem = document.documentElement;
        //  openFullscreen logic
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }

        // closeFullscreen logic
        setTimeout(() => {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
          }
        }, 3000);
      }

      if (selectorFormat.toString().trim() === "::selection") {
        // --------------------------------------------------------------------

        const elementToBeSelected = document.querySelectorAll(".sampleCode *");

        Array.from(elementToBeSelected).forEach((element, index) => {
          element.classList.add("slection-pseudo-class");
        });

        setTimeout(() => {
          Array.from(elementToBeSelected).forEach((element, index) => {
            element.classList.remove("slection-pseudo-class");
          });
        }, 8000);

        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 10000);
      }
    });
  });
}
// ----------------------------------------------------------------------------------------------------------------------
// Scroll button logic
const scrollBtn = document.getElementById("scroll-btn");
// add event listeners for two events: scroll and click.

// Show the button when the user scrolls down a certain amount
window.addEventListener("scroll", () => {
  // scroll event listener is added to the window object, and fires whenever the user scrolls the page
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
scrollBtn.addEventListener("click", () => {
  // add a click event listener to the button. When the button is clicked, we use the scrollTo method on the window object to smoothly scroll to the top of the page. We've set the behavior option to 'smooth' to achieve a smooth scrolling effect.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// --------------------------------------------------------------------
// Popup Modal - Dailog - for instructions
const modal = document.getElementById("modal");
const openBtn = document.querySelector(".instructions");
const closeDialogBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.showModal();
});
closeDialogBtn.addEventListener("click", () => {
  modal.close();
});
// --------------------------------------------------------------------
async function stylingElements(
  selectContent,
  filteredResultClass,
  isPesudoClass,
  selectorFormat
) {
  // All selectors including css simple, grouping combinators, [attribute], pseudo classes and pseudo elements are handles in the below condition
  // except ':fullscreen' and '::selection'

  const timee = await addStyles(
    selectContent,
    isPesudoClass,
    filteredResultClass,
    selectorFormat
  );

  setTimeout(async () => {
    await scrollToTop();
    if (selectorFormat.trim() == "*") {
      await removeStyles();
      console.log("* remove styles");
    }
  }, timee + 1000);

  // logic for removing items styles
  selectContentGlobal = selectContent;
  isPesudoClassCheck = isPesudoClass;
  filteredResultGlobal = filteredResultClass;
}
// --------------------------------------------------------------------
async function addStyles(
  selectContent,
  isPesudoClass,
  filteredResultClass,
  selectorFormat
) {
  const interval = selectorFormat.trim() != "*" ? 3000 : 100;

  let time;
  await selectContent.forEach((item, index) => {
    let stopp = false;
    const timm = setTimeout(() => {
      if (isPesudoClass) {
        item.classList.add(filteredResultClass);
      } else {
        item.style.border = "2px solid red";
      }

      item.scrollIntoView({ behavior: "smooth", block: "center" });
    }, index * interval);

    sideBarLinks.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        clearTimeout(timm);
        stopp = true;
      });
    });

    time = index * interval;
    if (stopp) {
      return;
    }
  });
  return time;
}
// --------------------------------------------------------------------
async function removeStyles() {
  if (!!selectContentGlobal) {
    await selectContentGlobal.forEach((item) => {
      console.log("removed");
      if (isPesudoClassCheck) {
        item.classList.remove(filteredResultGlobal);
      } else {
        item.style.border = "none";
      }
    });
  }
}
// --------------------------------------------------------------------
async function scrollToTop() {
  console.log("scroller");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
