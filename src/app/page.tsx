import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
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
    </main>
  );
}
