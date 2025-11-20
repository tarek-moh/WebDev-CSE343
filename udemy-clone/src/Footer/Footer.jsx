import './Footer.css';
import { Globe } from 'lucide-react';

// Data structure for the main link columns
const footerLinks = [
  {
    title: 'In-demand Careers',
    links: ['Data Scientist', 'Full Stack Web Developer', 'Cloud Engineer', 'Project Manager', 'Game Developer', 'AI Career Accelerators', 'See all Certifications'],
  },
  {
    title: 'Web Development',
    links: ['Web Development', 'JavaScript', 'React JS', 'Angular', 'Java', 'More...'],
  },
  {
    title: 'IT Certifications',
    links: ['Amazon AWS', 'AWS Certified Cloud Practitioner', 'AZ-900: Microsoft Azure Fundamentals', 'AWS Certified Solutions Architect - Associate', 'Kubernetes'],
  },
  {
    title: 'Leadership',
    links: ['Leadership', 'Management Skills', 'Project Management', 'Personal Productivity', 'Emotional Intelligence'],
  },
  {
    title: 'Certifications by Skill',
    links: ['Cybersecurity Certification', 'Project Management Certification', 'Cloud Certification', 'Data Analytics Certification', 'HR Management Certification', 'See all Certifications'],
  },
  {
    title: 'Data Science',
    links: ['Data Science', 'Python', 'Machine Learning', 'ChatGPT', 'Deep Learning'],
  },
  {
    title: 'Communication',
    links: ['Communication Skills', 'Presentation Skills', 'Public Speaking', 'Writing', 'PowerPoint'],
  },
  {
    title: 'Business Analytics & Intelligence',
    links: ['Microsoft Excel', 'SQL', 'Microsoft Power BI', 'Data Analysis', 'Business Analysis'],
  },
];

// Data structure for the bottom utility links
const utilityLinks = [
  {
    title: 'About',
    links: ['About us', 'Careers', 'Contact us', 'Blog', 'Investors'],
  },
  {
    title: 'Discover Udemy',
    links: ['Get the app', 'Teach on Udemy', 'Plans and Pricing', 'Affiliate', 'Help and Support'],
  },
  {
    title: 'Udemy for Business',
    links: ['Udemy Business'],
  },
  {
    title: 'Legal & Accessibility',
    links: ['Accessibility statement', 'Privacy policy', 'Sitemap', 'Terms'],
  },
];


const FooterLinkSection = ({ title, links }) => (
  <div className="footer-link-section">
    <h3 className="section-title">{title}</h3>
    <ul className="link-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="footer-link-item">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);


export default function UdemyFooter() {
  return (
    <footer className="udemy-footer">
      
      {/* 1. TOP BAR: Business & Logos */}
      <div className="footer-top-bar">
        <p className="business-text">
          Top companies choose <strong>Udemy Business</strong> to build in-demand career skills.
        </p>
        <div className="logo-strip">
          {/* Using placeholder images for external logos */}
          <img src="src/assets/nasdaq-light.svg" alt="Nasdaq" className="partner-logo" />
          <img src="src/assets/netapp-light.svg" alt="NetApp" className="partner-logo" />
          <img src="src/assets/eventbrite-light.svg" alt="Eventbrite" className="partner-logo" />
        </div>
      </div>

      {/* 2. MAIN LINK SECTION (Dark Background) */}
      <div className="footer-main-links-wrapper">
        <h2 className="main-section-heading">Explore top skills and certifications</h2>
        
        {/* Top 4 x 4 Grid */}
        <div className="main-grid-row top-row">
          {footerLinks.slice(0, 4).map((section, index) => (
            <FooterLinkSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        
        {/* Divider (Optional: Uncomment if you want a visual line) */}
        {/* <hr className="divider" /> */}

        {/* Bottom 4 x 4 Grid */}
        <div className="main-grid-row bottom-row">
          {footerLinks.slice(4).map((section, index) => (
            <FooterLinkSection key={index + 4} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
      
      {/* 3. UTILITY LINKS SECTION (Darker Background, Two Rows of Links) */}
      <div className="footer-utility-links-wrapper">
        <div className="utility-grid">
          {utilityLinks.map((section, index) => (
            <FooterLinkSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      {/* 4. BOTTOM BAR: Logo, Copyright, Language Selector */}
      <div className="footer-bottom-bar">
        <div className="copyright-info">
          <img 
            src="/src/assets/logo-udemy-inverted.svg" 
            alt="Udemy" 
            className="udemy-logo-white" 
          />
          <span className="copyright-text">© for educational purposes only</span>
        </div>
        
        <div className="bottom-links">
            <a href="#" className="settings-link">Cookie settings</a>
            <button className="language-button">
                <Globe size={16} strokeWidth={1.5} className="globe-icon" />
                English
            </button>
        </div>
      </div>
    </footer>
  );
}