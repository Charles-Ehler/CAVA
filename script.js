
// Shared JavaScript across all pages

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    updateLastUpdatedDate();
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
// Update last updated date from localStorage
function updateLastUpdatedDate() {
    const EL_ID = "last-updated";
    const KEY = "cavaDashboardLastUpdated";

    // Format a Date -> "Month Day, Year"
    function formatDate(d) {
        return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    }

    // Set text in the footer
    function setFooterText(dateStr) {
        const el = document.getElementById(EL_ID);
        if (!el) return;
        el.textContent = "Last Updated: " + dateStr;
    }

    // Initialize on load: use stored date or initialize once
    const stored = localStorage.getItem(KEY);
    if (stored) {
        setFooterText(stored);
    } else {
        const firstSet = formatDate(new Date());
        localStorage.setItem(KEY, firstSet);
        setFooterText(firstSet);
    }
}
// Expose a manual updater for admins (call from console or wire to a button)
window.updateLastUpdated = function () {
    const KEY = "cavaDashboardLastUpdated";
    const todayStr = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    localStorage.setItem(KEY, todayStr);
    
    // Update the display
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = "Last Updated: " + todayStr;
    console.log('Last Updated date manually set to:', todayStr);
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
