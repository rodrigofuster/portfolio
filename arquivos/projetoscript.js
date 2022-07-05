let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

let list2 = document.querySelectorAll(".list");
for (let i = 0; i < list2.length; i++) {
  list2[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list2[j++].className = "list";
    }
    list2[i].className = "list active";
  };
}

