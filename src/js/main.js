// Header hamburger menu script 

// Selecting necessary elements
let hamburgerBtn = document.querySelector('.hamburger-btn'); // Hamburger menu button
let closeBtn = document.querySelector('.close-btn'); // Close button
let nav = document.querySelector('header nav'); // Navigation menu

// Open button functionality
hamburgerBtn.addEventListener('click', function (event) {
  this.style.display = 'none'; // Hide hamburger button
  event.stopPropagation(); // Prevent event bubbling
  // Toggle between displaying close button and showing/hiding navigation
  if (closeBtn.style.display === 'block') {
    closeBtn.style.display = 'none';
    nav.classList.remove('active');
  } else {
    closeBtn.style.display = 'block';
    nav.classList.add('active');
  }
});

// Close button functionality
closeBtn.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent event bubbling
  this.style.display = 'none'; // Hide close button
  // Toggle between displaying hamburger button and showing/hiding navigation
  if (hamburgerBtn.style.display === 'block') {
    hamburgerBtn.style.display = 'none';
    nav.classList.add('active');
  } else {
    hamburgerBtn.style.display = 'block';
    nav.classList.remove('active');
  }
});

// Listen for clicks on the document to close the menu if clicked outside
document.addEventListener('click', function (event) {
  // Close menu if clicked outside the header nav or viewMap element
  if (!event.target.closest('header nav') && event.target !== viewMap) {
    nav.classList.remove('active');
    closeBtn.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  }
});

// Tabs script 

// Triggering the click on the first tab on DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  var tablinks = document.getElementsByClassName("tablinks"); // Get all tab links
  if (tablinks.length > 0) {
    tablinks[0].click(); // Trigger click on the first tab
  }
});

// Function to display active tab
function menu(evt, recipe) {
  var i, tabcontent, tablinks;
  // Hide all tab content and remove 'active' class from tab links
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Display the selected tab content and mark the clicked tab as active
  document.getElementById(recipe).style.display = "block";
  evt.currentTarget.className += " active";
}

// Overlay map script 

// Selecting necessary elements
let viewMap = document.querySelector('.view-map'); // Element to view map
let overlayMap = document.querySelector('.overlay-map'); // Overlay map
let overlayMapClose = document.querySelector('.overlay-map-close'); // Close button on overlay map

// Toggle active class on overlayMap when viewMap is clicked
viewMap.addEventListener('click', function () {
  overlayMap.classList.toggle('active');
});

// Remove active class when close button is clicked on overlay map
overlayMapClose.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent event bubbling
  overlayMap.classList.remove('active'); // Hide overlay map
});

// Listen for clicks on the document to close the overlay map if clicked outside
document.addEventListener('click', function (event) {
  // Close overlay map if clicked outside the custom-modal or viewMap element
  if (!event.target.closest('.custom-modal') && event.target !== viewMap) {
    overlayMap.classList.remove('active');
  }
});
