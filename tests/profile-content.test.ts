import assert from "node:assert/strict";
import test from "node:test";

import { profile } from "../src/content/profile.ts";

test("approved profile exposes visitor-facing identity and contact details", () => {
  assert.equal(profile.name, "Jayven Lupera");
  assert.equal(profile.tagline, "Software engineer focused on secure, maintainable web systems.");
  assert.match(profile.bio, /secure, maintainable web applications/i);
  assert.ok(profile.skills.includes("Python"));
  assert.equal(profile.currentRole.title, "TDP Software Engineer");
  assert.equal(profile.currentRole.organization, "Optum");
  assert.equal(profile.currentRole.dates, "July 2026 - Present");
  assert.equal(profile.currentRole.description, undefined);
  assert.equal(profile.contacts.email, "mailto:reachjayven@gmail.com");
  assert.equal(profile.contacts.linkedIn, "https://www.linkedin.com/in/jayven-lupera");
  assert.equal(profile.contacts.gitHub, "https://github.com/jbeninjaa");
});