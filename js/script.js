var elements = document.getElementsByClassName("projects")
for (var element of elements) {

  element.addEventListener(
    "scroll",
    function() {
      disableBorder(element)
    }
  )

}

var lastKnownPosition = 0;
var scrollBorderChangeAt = 98;

function disableBorder(element) {
  var scrollLength = element.scrollWidth - element.offsetWidth
  var scrollLeft = element.scrollLeft
  var percent = (scrollLeft / scrollLength) * 100
  if (percent < scrollBorderChangeAt) {
    if (lastKnownPosition < scrollBorderChangeAt) return
    // EXECUTE CODE THAT HAPPENS WHEN THEY SCROLL BACK (FADE IN BORDER)
    return
  }
  // EXECUTE CODE THAT HAPPENS WHEN THEY SCROLL BACK (FADE OUT BORDER)
  lastKnownPosition = percent;
}