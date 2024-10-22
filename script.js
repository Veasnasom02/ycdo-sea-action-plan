// Back to Top Button Functionality
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

// Scroll to Top Function
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Loading State Management
window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
});

// Error Handling
window.onerror = function() {
    document.getElementById('errorMessage').style.display = 'block';
};

// Add Event Listeners for Timeline Points
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to timeline points
    const timelinePoints = document.querySelectorAll('.timeline-point');
    timelinePoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        point.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Print Functionality
function printTimeline() {
    window.print();
}
