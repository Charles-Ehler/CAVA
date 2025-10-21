class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-text {
          margin: 0;
          font-size: 0.875rem;
          color: #C7C7C7;
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <p class="footer-text">&copy; 2024 CAVA Core Training Dashboard. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);