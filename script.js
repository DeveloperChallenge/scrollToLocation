/**
 * @class ScrollTo
 * @param element {string}
 * @constructor
 * It is responsible to handle all the scroll location
 */
function ScrollTo(element) {
    this.element = element;
    this.bodyElement = $('html, body');
    // this.validElementArray = [".", "#", "top", "bottom"];
}

// ScrollTo.prototype.top = function () {
//     this.animateTo(0);
// };
//
// ScrollTo.prototype.bottom = function () {
//     this.animateTo($(document).height());
// };
//
// ScrollTo.prototype.id = function () {
//     // this.animateTo($(this.element));
//     console.log("hey")
//     // console.log()
//     // scrollTop: $("#target-element").offset().top
// };
//
// ScrollTo.prototype.class = function () {
//     this.animateTo($(this.element));
// };
//
//
// ScrollTo.prototype.animateTo = function (element) {
//     console.log("animate", $(element));
//     this.bodyElement.animate({scrollTop: element}, 800);
// };


ScrollTo.prototype.checkForScrollTo = function () {
    var $scrollHere = $(this.element);

    if (this.element === "top") {
        this.bodyElement.animate({scrollTop: 0}, 800);
    } else if (this.element === "bottom") {
        this.bodyElement.animate({scrollTop: $(document).height()}, 800);
    } else if (this.element.indexOf('#') === 0) {
        this.bodyElement.animate({scrollTop: $scrollHere.offset().top}, 800)
    } else if (this.element.indexOf('.') === 0) {
        this.bodyElement.animate({scrollTop: $scrollHere.offset().top}, 800)
    }
};


$(function () {
    $("[data-scroll-to]").click(function () {
        var $scrollToElement = $(this).attr('data-scroll-to');
        var scrollElementLength = $($scrollToElement).length;
        var $scrollTo = new ScrollTo($scrollToElement);
        $scrollTo.checkForScrollTo();
    });
});

// scroll to CLASS
// scroll to  ID
// scroll to TOP
// scroll to BOTTOM

