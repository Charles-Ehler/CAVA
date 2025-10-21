// Shared JavaScript across all pages

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    updateDates();
    animateProgressBars();
});

// Initialize dashboard functionality
function initializeDashboard() {
    console.log('CAVA Core Training Dashboard initialized');
    
    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Add tooltip functionality to table cells
    const tableCells = document.querySelectorAll('.table-cell');
    tableCells.forEach(cell => {
        if (cell.textContent.length > 20) {
            cell.setAttribute('data-tooltip', cell.textContent);
        cell.classList.add('tooltip');
    });
}

// Update all dates on the page
function updateDates() {
    const now = new Date();
    const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()}`;
    
    // Update header date
    const headerDate = document.getElementById('header-date');
    if (headerDate) {
        headerDate.textContent = formattedDate;
    }
    
    // Update last updated date
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = `Last Updated: ${formattedDate}`;
}

// Animate progress bars on page load
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = originalWidth;
        }, 500);
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-nav');
    tabs.forEach(tab => {
        tab.classList.remove('text-cava-gold', 'border-cava-gold', 'font-bold');
        tab.classList.add('text-cava-charcoal');
    });
    
    // Add active class to clicked tab
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('text-cava-gold', 'border-b-2', 'border-cava-gold', 'font-bold');
    }
}

// Export functions for use in other files
window.dashboardUtils = {
    initializeDashboard,
    updateDates,
    animateProgressBars,
    switchTab
};