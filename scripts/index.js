$(document).ready(function () {
  // navigation links - scroll animation
  $(".js--navigation__link").click(function (e) {
    e.preventDefault();
    var section = $($(this).attr("href"));
    var topPaddingValue = parseInt(section.css("padding-top"), 10);
    $("html, body").animate(
      {
        scrollTop: section.offset().top + topPaddingValue / 3,
      },
      500
    );
  });

  //on page scroll
  $(window).scroll(function () {
    showToTopButton();
    animateHeadings();
  });
});

function showToTopButton() {
  $(".js--btn-top").css(
    "opacity",
    ($(window).scrollTop() * 100) / $("html").height() / 100
  );
}

function animateHeadings() {
  var currentTopOffset = $(window).scrollTop();
  var cssClass = "js--animated";
  var sections = $('section[class^="section-"]');

  sections.each(function (index, element) {
    var section = $(this);
    if (section.offset().top <= currentTopOffset) {
      section.find(".heading-primary").addClass(cssClass);
      section.find(".section-about__text").addClass(cssClass);
      section.find(".section-about__photo-box").addClass(cssClass);
      section.find(".heading-secondary ").addClass(cssClass);
      section.find(".skills__list").addClass(cssClass);
      section.find(".projects__logo-box").addClass(cssClass);
      section.find(".projects__list").addClass(cssClass);
      section.find(".form").addClass(cssClass);
    }
  });
}

// navigate to the top on click
$(".js--btn-top").on("click", function () {
  animate(500);
});


function animate(duration) {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    duration
  );
}
