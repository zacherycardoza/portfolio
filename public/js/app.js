$(document).ready(() => {
  $(".sidebar-btn").on("mouseup", () => {
    $(".sidebar").show(500);
    $(".main")[0].addEventListener("mouseup", () => $(".sidebar").hide(500), {
      once: true,
    });
    for (const el of $(".nav-link")) {
      el.addEventListener("mouseup", () => $(".sidebar").hide(500), {
        once: true,
      });
    }
  });

  $(".project-btn").on("click", function () {
    $(`.${$(this).val()}-card-back`)
      .width($(`.${$(this).val()}-project-card`).width())
      .height($(`.${$(this).val()}-project-card`).height())
      .slideDown(500);
  });
  $(".project-btn-back").on("click", function () {
    $(`.${$(this).val()}-card-back`).slideUp(500);
  });

  window.onscroll = function () {
    sectionsAndNav.forEach((el) => {
      if (
        el[1].getBoundingClientRect().top <= 0 &&
        el[1].getBoundingClientRect().bottom >= 0
      ) {
        if (!$(el[2]).hasClass(`${el[0]}-hover`)) {
          $(el[2]).addClass(`${el[0]}-hover`);
        }
      } else {
        if ($(el[2]).hasClass(`${el[0]}-hover`)) {
          $(el[2]).removeClass(`${el[0]}-hover`);
        }
      }
    });
  };
});

const sectionsAndNav = [
  ["about", $("#about")[0], $(".about")[0]],
  ["work", $("#work")[0], $(".work")[0]],
  ["projects", $("#projects")[0], $(".projects")[0]],
  ["education", $("#education")[0], $(".education")[0]],
];
