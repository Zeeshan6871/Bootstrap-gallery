
// Custom Sidebar JS
document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar
  document.querySelector(".toggle-sidebar").addEventListener("click", function () {
      document.querySelector(".page-wrapper").classList.toggle("toggled");
  });

  // Pin sidebar on click
  document.querySelector(".pin-sidebar").addEventListener("click", function () {
      var pageWrapper = document.querySelector(".page-wrapper");
      var sidebar = document.querySelector(".sidebar-wrapper");
      if (pageWrapper.classList.contains("pinned")) {
          pageWrapper.classList.remove("pinned");
          sidebar.removeEventListener("mouseenter", sidebarHover);
          sidebar.removeEventListener("mouseleave", sidebarHover);
      } else {
          pageWrapper.classList.add("pinned");
          sidebar.addEventListener("mouseenter", sidebarHover);
          sidebar.addEventListener("mouseleave", sidebarHover);
      }
  });

  function sidebarHover() {
      var pageWrapper = document.querySelector(".page-wrapper");
      pageWrapper.classList.toggle("sidebar-hovered");
  }

  // Toggle sidebar overlay
  document.getElementById("overlay")?.addEventListener("click", function () {
      document.querySelector(".page-wrapper").classList.toggle("toggled");
  });

  // Handle window resize
  window.addEventListener("resize", function () {
      var pageWrapper = document.querySelector(".page-wrapper");
      if (window.innerWidth <= 768) {
          pageWrapper.classList.remove("pinned");
      }
      if (window.innerWidth >= 768) {
          pageWrapper.classList.remove("toggled");
      }
  });
});



