function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}
function openFS() {
  window.open("https://www.kratosracing.in/", "_blank");
}
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}
