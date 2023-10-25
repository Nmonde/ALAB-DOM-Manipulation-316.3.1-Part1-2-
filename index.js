//Menu bar array
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Part 1
const mainEl = document.querySelector("main");
// background color
mainEl.style.setProperty("background-color", "var(--main-bg)");
// heading
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1);
// adding class
mainEl.classList.add("flex-ctr");

// Part 2
const topmenuEl = document.querySelector("#top-menu");
topmenuEl.style.height = "100%";
topmenuEl.style.setProperty("background-color", "var(--top-menu-bg)");
topmenuEl.classList.add("flex-around");

// Part 3
for (let i in menuLinks) {
  const a = document.createElement("a");
  a.textContent = menuLinks[i].text;
  // Add a data-index attribute to store the index of the link
  a.dataset.index = i;
  topmenuEl.appendChild(a);
}

// Part 2.1 Creeate a nav tag.
const header = document.querySelector("header");
const newNav = document.createElement("nav");
newNav.id = "#sub-menu";
header.appendChild(newNav);

// Part 2.3 SubMenu Style.
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.setProperty("background-color", "--sub-menu-bg");
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


// Define the event listener for anker tag. Also gets the clicked link's "link" object and Sub-Menu.
topmenuEl.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const clickedLink = menuLinks[event.target.dataset.index];
    event.target.classList.toggle("active");

    function buildSubmenu(subLinks) {
      subMenuEl.innerHTML = "";
      subLinks.forEach((link) => {
        const subLinkElement = document.createElement("a");
        subLinkElement.href = link.href;
        subLinkElement.textContent = link.text;
        subMenuEl.appendChild(subLinkElement);
      });
    }
    subMenuEl.style.top = "100%";
    buildSubmenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.top = "0";
  }
});
