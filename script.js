<!-- The following is my JavaScript Source(.js) -->

<script>
<!-- Dynamic Calculator -->
function calculateTotal() {
const colorPrice = parseFloat(document.getElementById('color').value);
const feature1Price = document.getElementById('feature1').checked ? parseFloat(document.getElementById('feature1').value) : 0;
const feature2Price = document.getElementById('feature2').checked ? parseFloat(document.getElementById('feature2').value) : 0;
const total = colorPrice + feature1Price + feature2Price;
document.getElementById('total').textContent = total.toFixed(2);
}
function updateColor() {
const selectedOption = document.getElementById('color').options[document.getElementById('color').selectedIndex];
document.getElementById('color').style.background = selectedOption.getAttribute('data-color');
}
document.addEventListener('DOMContentLoaded', function() {
calculateTotal();
updateColor();
document.getElementById('color').addEventListener('change', function() {
calculateTotal();
updateColor();
});
document.getElementById('feature1').addEventListener('change', calculateTotal);
document.getElementById('feature2').addEventListener('change', calculateTotal);
});
// Add event listener to the "Buy Now" button
document.querySelector('#home button').addEventListener('click', () => {
// Scroll to the features section
document.querySelector('#features').scrollIntoView({ behavior: 'smooth'});
});

// Add event listener to the form submission
document.querySelector('#contact form').addEventListener('submit', (e) => {
// Prevent default form submission behavior
e.preventDefault();
// Get the form data
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const message = document.querySelector('#message').value;
// Display a thank you message
alert(`Thank you, ${name}! Your message has been sent.`);
// Clear the form fields
document.querySelector('#contact form').reset();
});

// Add animation to the navigation links
document.querySelectorAll('nav a').forEach((link) => {
link.addEventListener('mouseover', () => {
link.style.transform = 'scale(1.2)';
});
link.addEventListener('mouseout', () => {
link.style.transform = 'scale(1)';
});
});
document.getElementById("myCheckbox").addEventListener("submit", function(event) {
var termsChecked = document.getElementById("myCheckbox").checked;
if (!termsChecked) {
event.preventDefault();
alert("Please agree to the Terms and Conditions");
}
});
</script>