var elements=document.getElementsByClassName("projects");for(var element of elements)element.addEventListener("scroll",function(){disableBorder(element)});var lastKnownPosition=0,scrollBorderChangeAt=98;function disableBorder(e){var t=e.scrollWidth-e.offsetWidth,o=e.scrollLeft/t*100;o<scrollBorderChangeAt||(lastKnownPosition=o)}