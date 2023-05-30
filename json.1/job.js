function togglediv(id) {
  document.querySelectorAll(".TableBody").forEach(function(div) {
    if (div.id == id) {
      // Toggle specified DIV
      div.style.display = div.style.display == "none" ? "block" : "none";
    } else {
      // Hide other DIVs
      div.style.display = "none";
    }
  });
}