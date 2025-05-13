// Event Handling

// Button Click
document.getElementById('clickButton').addEventListener('click', function() {
    this.textContent = 'You Clicked Me!';
  });
  
  // Hover Effect
  document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'skyblue';
  });
  
  document.getElementById('hoverButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });
  
  // Keypress Detection
  document.getElementById('keypressInput').addEventListener('keypress', function(event) {
    alert('You pressed: ' + event.key);
  });
  
  // Secret Action for Double-Click or Long Press
  let secretButton = document.getElementById('secretButton');
  
  secretButton.addEventListener('dblclick', function() {
    alert('Double-clicked! Secret action triggered.');
  });
  
  secretButton.addEventListener('mousedown', function(event) {
    let pressTimer;
    secretButton.addEventListener('mouseup', function() {
      clearTimeout(pressTimer);
    });
  
    pressTimer = setTimeout(function() {
      alert('Long press detected!');
    }, 1000); // 1000 ms for long press
  });
  
  
  // Interactive Elements
  
  // Button that Changes Text or Color
  document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = 'green';
    this.textContent = 'Color Changed!';
  });
  
  // Image Gallery or Slideshow
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let currentImageIndex = 0;
  
  document.getElementById('nextButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
  });
  
  // Tabs Content
  document.getElementById('tab1').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
  });
  
  document.getElementById('tab2').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'block';
    document.getElementById('content3').style.display = 'none';
  });
  
  document.getElementById('tab3').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'block';
  });
  
  
  // Form Validation
  
  // Required Field Check
  document.getElementById('myForm').addEventListener('submit', function(event) {
    let nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
      alert('Name is required!');
      event.preventDefault();  // Prevent form submission
    }
  });
  
  // Email Format Validation
  document.getElementById('emailForm').addEventListener('submit', function(event) {
    let emailInput = document.getElementById('email');
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address!');
      event.preventDefault();
    }
  });
  
  // Password Rules (Min 8 Characters)
  document.getElementById('passwordForm').addEventListener('submit', function(event) {
    let passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long!');
      event.preventDefault();
    }
  });
  
  // Real-Time Feedback for Username
  document.getElementById('username').addEventListener('input', function() {
    let feedback = document.getElementById('usernameFeedback');
    if (this.value.length < 5) {
      feedback.textContent = 'Username must be at least 5 characters.';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Good to go!';
      feedback.style.color = 'green';
    }
  });
  