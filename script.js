document.addEventListener('DOMContentLoaded', function() {
    // 1. Saare progress containers ko select karo
    const progressBars = document.querySelectorAll('.circular-progress');

    progressBars.forEach(bar => {
        // 2. data-progress attribute se percentage value lo
        const progress = parseInt(bar.getAttribute('data-progress'));
        
        // Agar progress 100 se kam hai, toh hi dynamic gradient set karna hai
        
            // 3. Percentage ko degrees mein convert karo (360 degrees * percentage / 100)
            const degree = (progress / 100) * 360;
            
            // 4. CSS variable ko set karo for the conic-gradient
            // Yeh value CSS mein --progress-degree ko replace karegi
            bar.style.setProperty('--progress-degree', `${degree}deg`);
       
        
        // Note: Agar progress 100% hai, toh CSS mein already set kiya hua hai ki woh full orange circle dikhega.
    });
});