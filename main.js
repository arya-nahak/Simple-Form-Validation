function FormValidation() {
  let mainObj = {
    isinit: false,
    init: function (a, b, c, d, e, f, btn) {
      if (!mainObj.isinit) {
        mainObj.f = document.querySelector(a);
        mainObj.l = document.querySelector(b);
        mainObj.u = document.querySelector(c);
        mainObj.c = document.querySelector(d);
        mainObj.s = document.querySelector(e);
        mainObj.z = document.querySelector(f);
        mainObj.submit = document.querySelector(btn);
        mainObj.display(
          mainObj.f,
          mainObj.l,
          mainObj.u,
          mainObj.c,
          mainObj.s,
          mainObj.z,
          mainObj.submit
        );
      }
    },
    display(a, b, c, d, e, f, g, h) {
      g.addEventListener("click", (el) => {
        el.preventDefault();

        if (a.value == "") {
          a.nextElementSibling.classList.remove("d-none");
        } else {
          a.nextElementSibling.classList.add("d-none");
        }

        if (b.value == "") {
          b.nextElementSibling.classList.remove("d-none");
        } else {
          b.nextElementSibling.classList.add("d-none");
        }

        if (c.value == "") {
          c.nextElementSibling.classList.remove("d-none");
        } else {
          c.nextElementSibling.classList.add("d-none");
        }

        if (d.value == "") {
          d.nextElementSibling.classList.remove("d-none");
        } else {
          d.nextElementSibling.classList.add("d-none");
        }

        if (e.value == "") {
          e.nextElementSibling.classList.remove("d-none");
        } else {
          e.nextElementSibling.classList.add("d-none");
        }

        if (f.value == "") {
          f.nextElementSibling.classList.remove("d-none");
        } else {
          f.nextElementSibling.classList.add("d-none");
        }
      });

      $(a).on("keyup", function () {
        if (a.value == "") {
          a.nextElementSibling.classList.remove("d-none");
        } else {
          a.nextElementSibling.classList.add("d-none");
        }
      });

      $(b).on("keyup", function () {
        if (b.value == "") {
          b.nextElementSibling.classList.remove("d-none");
        } else {
          b.nextElementSibling.classList.add("d-none");
        }
      });

      $(c).on("keyup", function () {
        if (c.value == "") {
          c.nextElementSibling.classList.remove("d-none");
        } else {
          c.nextElementSibling.classList.add("d-none");
        }
      });

      $(d).on("keyup", function () {
        if (d.value == "") {
          d.nextElementSibling.classList.remove("d-none");
        } else {
          d.nextElementSibling.classList.add("d-none");
        }
      });

      $(e).on("keyup", function () {
        if (e.value == "") {
          e.nextElementSibling.classList.remove("d-none");
        } else {
          e.nextElementSibling.classList.add("d-none");
        }
      });

      $(f).on("keyup", function () {
        if (f.value == "") {
          f.nextElementSibling.classList.remove("d-none");
        } else {
          f.nextElementSibling.classList.add("d-none");
        }
      });
    },
  };

  return {
    init: mainObj.init,
  };
}

let formValidation = new FormValidation();
formValidation.init(
  "#validationCustom01",
  "#validationCustom02",
  "#validationCustomUsername",
  "#validationCustom03",
  "#validationCustom04",
  "#validationCustom05",
  "#s_btn"
);
