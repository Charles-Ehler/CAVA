class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        
        header {
          background: #2D2A26;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .cava-logo {
          width: 32px;
          height: 32px;
          background: #F5B335;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          color: white;
          font-weight: bold;
          font-size: 0.875rem;
        }
        
        .title {
          color: white;
          font-size: 1.375rem;
          font-weight: 700;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .date-section {
          color: #C7C7C7;
          font-size: 0.875rem;
        }
        
        .tabs-container {
          background: #F9F7F3;
          border-bottom: 1px solid #E5E5E5;
          padding: 0 2rem;
        }
        
        .tabs {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .tab-item {
          padding: 1rem 0;
        }
        
        .tab-link {
          color: #2D2A26;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .tab-link.active {
          color: #F5B335;
          border-bottom: 2px solid #F5B335;
          font-weight: 700;
        }
        
        .tab-link:hover {
          color: #F5B335;
        }
        
        @media (max-width: 768px) {
          header {
            padding: 1rem;
          }
          
          .title {
            font-size: 1.125rem;
            position: static;
            transform: none;
          }
          
          .header-content {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .date-section {
            font-size: 0.75rem;
          }
        }
      </style>
      
      <header>
        <div class="header-content">
          <div class="logo-section">
            <div class="cava-logo"></div>
            <div class="logo-text">CAVA</div>
          </div>
          <div class="title">CAVA Core Training Dashboard</div>
          <div class="date-section" id="header-date">Loading...</div>
        </div>
      </header>
      
      <div class="tabs-container">
        <ul class="tabs">
          <li class="tab-item">
            <a href="index.html" class="tab-link active">Overview</a>
          </li>
          <li class="tab-item">
            <a href="team-leader.html" class="tab-link">Team Leader Tracker</a>
          </li>
          <li class="tab-item">
            <a href="agm.html" class="tab-link">AGM Tracker</a>
          </li>
        </ul>
      </div>
    `;
    
    // Update the date immediately
    this.updateHeaderDate();
  }
  
  updateHeaderDate() {
    const now = new Date();
    const formattedDate = \`\${(now.getMonth() + 1).toString().padStart(2, '0')}/\${now.getDate().toString().padStart(2, '0')}/\${now.getFullYear()}\`;
    const dateElement = this.shadowRoot.getElementById('header-date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  }
}

customElements.define('custom-header', CustomHeader);