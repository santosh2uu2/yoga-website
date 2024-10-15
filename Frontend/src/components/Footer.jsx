import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center bg-base-200 text-base-content dark:bg-gray-900 dark:text-white rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="/contact">About us</a>
          <a href="/contactus">Contact</a>
          <a className="link link-hover">Website</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.42.415a4.92 4.92 0 011.675 1.078 4.918 4.918 0 011.078 1.675c.175.45.359 1.25.415 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.42a4.92 4.92 0 01-1.078 1.675 4.918 4.918 0 01-1.675 1.078c-.45.175-1.25.359-2.42.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.42-.415a4.92 4.92 0 01-1.675-1.078 4.918 4.918 0 01-1.078-1.675c-.175-.45-.359-1.25-.415-2.42-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.42a4.92 4.92 0 011.078-1.675 4.918 4.918 0 011.675-1.078c.45-.175 1.25-.359 2.42-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.053.072 5.775.131 4.772.345 3.96.658a6.915 6.915 0 00-2.5 1.672 6.915 6.915 0 00-1.672 2.5c-.313.812-.527 1.815-.586 3.093C.013 8.332 0 8.741 0 12s.013 3.668.072 4.947c.059 1.278.273 2.281.586 3.093a6.915 6.915 0 001.672 2.5 6.915 6.915 0 002.5 1.672c.812.313 1.815.527 3.093.586C8.332 23.987 8.741 24 12 24s3.668-.013 4.947-.072c1.278-.059 2.281-.273 3.093-.586a6.915 6.915 0 002.5-1.672 6.915 6.915 0 001.672-2.5c.313-.812.527-1.815.586-3.093.059-1.278.072-1.687.072-4.947s-.013-3.668-.072-4.947c-.059-1.278-.273-2.281-.586-3.093a6.915 6.915 0 00-1.672-2.5 6.915 6.915 0 00-2.5-1.672c-.812-.313-1.815-.527-3.093-.586C15.668.013 15.259 0 12 0z"></path>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 11-2.878 0 1.44 1.44 0 012.878 0z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              {/* YouTube Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://www.openai.com" target="_blank" rel="noopener noreferrer">
              {/* ChatGPT Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
