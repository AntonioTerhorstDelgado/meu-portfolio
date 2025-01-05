document.addEventListener("DOMContentLoaded", function () {
  var profilePicture = document.getElementById("profilePicture");

  profilePicture.addEventListener("mouseover", function () {
    profilePicture.style.transform = "scale(1.5) translateX(-35%)";
  });

  profilePicture.addEventListener("mouseout", function () {
    profilePicture.style.transform = "scale(1) translateX(-50%)";
  });
});
