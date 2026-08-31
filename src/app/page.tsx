import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <>
      <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="page-grid">
          <p className="eyebrow">01 / Profile</p>
          <div className="theme-toggle-wrap">
            <ThemeToggle />
          </div>
          <div className="hero-content">
            <p className="role">
              {profile.currentRole.title} <span aria-hidden="true">/</span>{" "}
              {profile.currentRole.organization}
            </p>
            <h1 id="page-title">{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
          </div>
          <p className="hero-note">Based in the Philippines</p>
        </div>
      </section>

      <section className="about" aria-labelledby="about-heading">
        <div className="page-grid section-grid">
          <p className="eyebrow">02 / About</p>
          <div className="about-content">
            <h2 id="about-heading">Built with care for the details that last.</h2>
            <p>{profile.bio}</p>
          </div>
        </div>
      </section>

      <section className="experience" aria-labelledby="experience-heading">
        <div className="page-grid section-grid">
          <p className="eyebrow">03 / Experience</p>
          <div className="experience-content">
            <h2 id="experience-heading">Experience</h2>
            <article className="experience-entry">
              <p className="experience-dates">{profile.currentRole.dates}</p>
              <h3>{profile.currentRole.title}</h3>
              <p className="experience-organization">{profile.currentRole.organization}</p>
              {profile.currentRole.description ? (
                <p className="experience-description">{profile.currentRole.description}</p>
              ) : null}
            </article>
          </div>
        </div>
      </section>

      <section className="skills" aria-labelledby="skills-heading">
        <div className="page-grid section-grid">
          <p className="eyebrow">04 / Skills</p>
          <div className="skills-content">
            <h2 id="skills-heading">Skills</h2>
            <ul className="skills-list">
              {profile.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-heading">
        <div className="page-grid section-grid">
          <p className="eyebrow">05 / Contact</p>
          <div className="contact-content">
            <h2 id="contact-heading">Contact</h2>
            <address className="contact-links">
              <a href={profile.contacts.email}>{profile.contacts.email.replace("mailto:", "")}</a>
              <a href={profile.contacts.linkedIn}>LinkedIn</a>
              <a href={profile.contacts.gitHub}>GitHub</a>
            </address>
          </div>
        </div>
      </section>
      </main>
      <footer className="site-footer">
        <div className="page-grid">
          <p className="eyebrow">06 / End</p>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.currentRole.title}</p>
        </div>
      </footer>
    </>
  );
}
