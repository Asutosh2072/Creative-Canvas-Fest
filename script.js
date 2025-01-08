function openModal(sessionId) {
    const modal = document.getElementById('sessionModal');
   const modalContent = document.getElementById('modalContent');
  if (sessionId === 'session1') {
          modalContent.innerHTML = `
             <button class="close-btn" onclick="closeModal()">×</button>
            <h2>Digital Art Workshop</h2>
             <p>A beginner friendly session on making digital art.</p>
               <img src="session1.jpg" alt="Session 1">
         `
      } else if (sessionId === 'session2') {
             modalContent.innerHTML = `
             <button class="close-btn" onclick="closeModal()">×</button>
              <h2>Sculpting Masterclass</h2>
             <p>A session about sculpting different art forms.</p>
               <img src="session2.jpg" alt="Session 2">
         `
     } else if (sessionId === 'session3') {
          modalContent.innerHTML = `
              <button class="close-btn" onclick="closeModal()">×</button>
             <h2>Photography Workshop</h2>
            <p>Learn about professional photography.</p>
               <img src="session3.jpg" alt="Session 3">
        `
     } else if (sessionId === 'session4') {
          modalContent.innerHTML = `
              <button class="close-btn" onclick="closeModal()">×</button>
           <h2>Creative Writing Session</h2>
             <p> A writing session for all aspiring writers.</p>
                <img src="session4.jpg" alt="Session 4">
         `
     }
   modal.classList.add('active');
 }
 
 function closeModal() {
   const modal = document.getElementById('sessionModal');
    modal.classList.remove('active');
 }
 function openImageModal(imageId){
     const modal = document.getElementById('imageModal');
   const modalImage = document.getElementById('modalImage');
  if (imageId === 'image1') {
             modalImage.src = 'gallery1.jpg';
      } else if (imageId === 'image2') {
          modalImage.src = 'gallery2.jpg';
     } else if (imageId === 'image3') {
         modalImage.src = 'gallery3.jpg';
      } else if (imageId === 'image4') {
           modalImage.src = 'gallery4.jpg';
      } else if (imageId === 'image5') {
          modalImage.src = 'gallery5.jpg';
      } else if (imageId === 'image6') {
          modalImage.src = 'gallery6.jpg';
      }
     modal.classList.add('active');
 }
 function closeImageModal() {
      const modal = document.getElementById('imageModal');
     modal.classList.remove('active');
 }
 document.getElementById('contactForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form from submitting
     alert('Thank you for contacting us!'); // Replace with your logic
 });