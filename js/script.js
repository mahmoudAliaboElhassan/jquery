// javascript library
// write less and do more
// events , ajax , css ,dom
console.log($ === jQuery); // true

$(document).ready(function () {
  // code
  console.log("Mahmoud Learning jQuery");
  // select
  $("section");
  $(".ele");
  $("#demo");
  $(".start").click(function () {
    //   mouseenter , mouseleave
    console.log("clicked");
    $("section").hide(1000, function () {
      console.log("call back function after effect");
    });
    $(".hidden").show(1000);

    $(".toggled").toggle();
    $(".in").fadeIn(); // if disapeared show
    $(".out").fadeOut(); // if show disapeared
    $(".fdtog").fadeToggle(2000);
    $(".sd").slideDown(2000);
    $(".sd").addClass("completed");
    $(".su").slideUp(2000);
    // slideToggle
    $(".animated").animate(
      {
        left: "100px",
      },
      5000,
      function () {
        // this is called callback function after effect ends
        console.log("effect is done");
      }
    );
    // all can take time or not
  });
  $(".enought").click(function () {
    $(".animated").stop();
  });

  var element = $("#element");
  console.log(element.html());
  console.log(element.text());
  element.html("<p>hello i just change html</p>");
  element.text("Hello this is just text");
  console.log(element.attr("id")); // get attribute
  element.attr("class", "completed"); // set attribute

  // in element itself
  element.append("Welcome");
  element.prepend("Mahmoud");

  // after and before element
  element.after("after element");
  element.before("before element");
  // remove
  // element.remove();
  ele = $("i");
  ele.addClass("test");
  ele.removeClass("completed");
  $(".myli").css({
    width: "fit-content",
    margin: "auto",
    backgroundColor: "red",
    color: "white",
  });
  $(".toggle-class").on("click", function () {
    $("li").toggleClass("completed");
  });
  $(".one").css("fontSize", "50px");
  console.log($(".one").width()); // width given w50
  console.log($(".one").innerWidth()); // width with padding w50 + p10 50+10+10 = 70
  console.log($(".one").outerWidth()); // add padding and border w50 + p10 + b1 = 72
  console.log($(".one").outerWidth(true)); // width + padding + border + margin
  // height , innerHeight , outerHeight , outHeight(true)

  // Traversing
  // Ancestors [parent , parents , parentsUntil
  console.log($("span").parent()); // direct parent
  console.log($("span").parents()); // get parent and grandfathers and ...
  console.log($("span").parents("ul")); // get single parent ul parent
  console.log($("span").parentsUntil("div")); // get all parents until ul => ul is not included
  // Descendents [children , find]
  console.log($(".mysection").children()); // direct children
  $(".mysection").children().css("border", "1px solid red");
  $(".mysection").children("ul").css("color", "green");
  $(".mysection").find("li").css("color", "blue"); // search for li , can be child ,
  // or grandchild
  $(".header").siblings().css("color", "yellow");
  $(".header").siblings("span").css("color", "blue");
  $(".header").next().css("background-color", "black");
  console.log($(".header").nextAll());
  console.log($(".header").nextUntil(".mydiv"));
  console.log($(".mydiv").prevAll());
  console.log($(".mydiv").prevUntil(".header"));
  $(".mydiv").prev().css("background-color", "blue");
  $(".name").first().css("color", "red");
  $(".name").last().css("color", "green");
  $(".name").eq(1).css("color", "blue"); // eq take index
  console.log($(".name")); // array to filter them
  $(".name").filter(".second").css({
    color: "black",
    backgroundColor: "white",
    border: "1px solid green",
    fontSize: "50px",
  });
  console.log($("ol"));
  $("ol").not(".ol-list").css({
    color: "green",
    border: "1px solid red",
  });
  $.ajax({
    type: "GET",
    url: "data.xml",
    data: {
      format: "xml",
    },
    error: function () {
      console.log("err");
    },
    success: function (data) {
      console.log(data);
      console.log(data.response);
      console.log($(data));
    },
  });
});
// =
$(function () {
  // code
  console.log("Mahmoud Learning jQuery");
});
// do not write outside

// selectors
// parent > child direct child
// previous + next            => next sibling only one
// previous ~ next            => next siblings all
