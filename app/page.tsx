const projects = [
  {
    title: "On-Demand Services App",
    type: "Mobile App",
    description:
      "A cross-platform customer and provider app with service booking, profile flows, status tracking, and clean screens for repeat daily use.",
  },
  {
    title: "Sales Growth Web Portal",
    type: "Web Platform",
    description:
      "A responsive business portal with lead capture, dashboard views, user authentication, and organized workflows for online operations.",
  },
  {
    title: "Restaurant Ordering System",
    type: "Web + Mobile",
    description:
      "A digital ordering experience with product menus, cart flow, checkout-ready screens, order management, and mobile-first navigation.",
  },
  {
    title: "Startup MVP Launch Kit",
    type: "Product Build",
    description:
      "A fast MVP package covering landing page, app interface, admin area, database structure, and deployment support for new product ideas.",
  },
];

const services = [
  "Custom web applications",
  "Android and iOS app interfaces",
  "Business dashboards and portals",
  "E-commerce and booking systems",
  "API, database, and authentication flows",
  "Website redesigns and deployment support",
];

const stats = [
  { value: "01", label: "Strategy" },
  { value: "02", label: "Design" },
  { value: "03", label: "Build" },
  { value: "04", label: "Launch" },
];

export default function Home() {
  return (
    <main className="page">
      <section className="portfolio">
        <nav className="topbar" aria-label="Portfolio summary">
          <span>Shahroze Hussain</span>
        </nav>

        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Web and Mobile App Development Services</p>
            <h1>Modern apps, websites, and digital products that feel ready to launch.</h1>
            <p className="intro">
              I help businesses turn ideas into polished web platforms, mobile app
              interfaces, dashboards, and customer-facing systems with clear
              structure, responsive screens, and launch-focused development.
            </p>
            <div className="hero-actions">
              <a href="mailto:shahrozehussain8585@gmail.com">Email Me</a>
              <a href="tel:+923168098585">Call Now</a>
            </div>
          </div>

          <aside className="contact-panel" aria-label="Contact details">
            <h2>Contact Details</h2>
            <div className="contact-list">
              <p>
                <span>Name</span>
                Shahroze Hussain
              </p>
              <p>
                <span>Email</span>
                shahrozehussain8585@gmail.com
              </p>
              <p>
                <span>Phone</span>
                +92 3168098585
              </p>
              <p>
                <span>Role</span>
                Web and Mobile App Development Services
              </p>
            </div>
          </aside>
        </header>

        <section className="flow-strip" aria-label="Project process">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="main-grid">
          <div className="profile-block">
            <p className="section-kicker">About</p>
            <h2>Useful products with sharp screens and simple workflows.</h2>
            <p>
              Shahroze Hussain provides web and mobile app development services
              for clients who need a clean online presence, a working app idea,
              or a business system that is easy to use. The focus is practical:
              strong layouts, smooth responsive behavior, organized code, and
              product flows that make sense from first click to final action.
            </p>
          </div>

          <div className="services-block">
            <p className="section-kicker">Services</p>
            <div className="services">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <section className="projects-block">
            <div className="projects-heading">
              <p className="section-kicker">Projects</p>
              <h2>Project directions matched to web and mobile app work.</h2>
            </div>
            <div className="projects">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
