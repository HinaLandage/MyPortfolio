document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

 
  const myname = document.getElementById("myname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  
  if (!myname || !email || !message) {
      alert("Please fill in all fields.");
      return;
  }

  
  const data = [
      ["Name", "Email", "Message"],
      [myname, email, message]     
  ];
  const csvContent = "data:text/csv;charset=utf-8," +
      data.map(row => row.join(",")).join("\n");

  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "contact_messages.csv");

  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

 
  document.getElementById("contact-form").reset();

  
  alert("Your message has been saved successfully!");
});


//////////////////////////Typing Animation///////////////////////////////////////////////////////


        const navLinks = document.querySelectorAll('.nav-link');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const sections = document.querySelectorAll('section');
      
        function updateScrollIndicator() {
          let activeSection = null;
      
          // Loop through each section to check its position relative to the viewport
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
      
            // Check if the section is in the viewport (including partial visibility)
            if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
              activeSection = section.id; // Store the current section ID
            }
          });
      
          // Update the active link and scroll indicator position
          if (activeSection) {
            navLinks.forEach((link) => {
              const sectionId = link.getAttribute('data-section');
      
              if (sectionId === activeSection) {
                // Highlight the active link
                navLinks.forEach((link) => link.classList.remove('active'));
                link.classList.add('active');
      
                // Position the scroll indicator under the active link
                const linkRect = link.getBoundingClientRect();
                scrollIndicator.style.width = `${linkRect.width}px`;
                scrollIndicator.style.left = `${linkRect.left}px`;
                scrollIndicator.style.opacity = 1; // Ensure visibility
              }
            });
          }
        }
      
        // Attach the function to window events
        window.addEventListener('scroll', updateScrollIndicator);
        window.addEventListener('load', updateScrollIndicator);
        window.addEventListener('resize', updateScrollIndicator);
      
     
      
      
