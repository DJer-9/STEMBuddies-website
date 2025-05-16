// Count-up animation for statistics numbers
document.addEventListener('DOMContentLoaded', () => {
    // Utility functions
    const easeOutQuint = (t) => 1 + (--t) * t * t * t * t;
    const frameDuration = 1000 / 60;
  
    // Get all stat number elements
    const statNumbers = document.querySelectorAll('#stats-list .stat h3');
    
    // Set up IntersectionObserver to detect when stats are in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Get the target number to count to (remove any + or other symbols)
          let countTo = parseInt(element.textContent.replace(/\D/g, ''), 10);
          const hasPlusSign = element.innerHTML.includes('<span>+</span>');
          
          // Start animation
          animateCountUp(element, countTo, hasPlusSign);
          
          // Unobserve after starting animation
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });
  
    // Observe each stat number
    statNumbers.forEach(element => observer.observe(element));
  
    // Animation function
    function animateCountUp(element, countTo, hasPlusSign) {
      const duration = 2000; // 2 seconds
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      // Store the original HTML content (to preserve the + sign if it exists)
      const originalInnerHTML = element.innerHTML;
      
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuint(frame / totalFrames);
        const currentCount = Math.floor(countTo * progress);
        
        // Update the text content while preserving any HTML inside (like the + sign)
        if (hasPlusSign) {
          element.innerHTML = `${currentCount}<span>+</span>`;
        } else {
          element.textContent = currentCount;
        }
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }
  });