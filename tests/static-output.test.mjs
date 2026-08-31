import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exported homepage introduces Jayven and his professional focus", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.match(html, /<h1[^>]*>Jayven Lupera<\/h1>/);
  assert.match(html, /TDP Software Engineer/);
  assert.match(html, /Software engineer focused on secure, maintainable web systems\./);
  assert.match(html, /Jayven Lupera is a software engineer focused on building secure, maintainable web applications\./);
});

test("exported homepage presents the current role without an empty description", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.match(html, /<section[^>]*aria-labelledby="experience-heading"[^>]*>/);
  assert.match(html, /<h2 id="experience-heading">Experience<\/h2>/);
  assert.match(html, /TDP Software Engineer/);
  assert.match(html, /Optum/);
  assert.match(html, /July 2026 - Present/);
  assert.doesNotMatch(html, /<p[^>]*class="experience-description"[^>]*>/);
});

test("exported homepage lists approved professional skills", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.match(html, /<section[^>]*aria-labelledby="skills-heading"[^>]*>/);
  assert.match(html, /<h2 id="skills-heading">Skills<\/h2>/);
  assert.match(html, /<ul[^>]*class="skills-list"[^>]*>/);
  for (const skill of ["Python", "JavaScript", "Frappe Framework", "Django", "Docker", "AWS"]) {
    assert.match(html, new RegExp(`<li[^>]*>${skill}<\\/li>`));
  }
});

test("exported homepage provides direct professional contact links", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.match(html, /<section[^>]*aria-labelledby="contact-heading"[^>]*>/);
  assert.match(html, /<h2 id="contact-heading">Contact<\/h2>/);
  assert.match(html, /<a[^>]*href="mailto:reachjayven@gmail\.com"[^>]*>reachjayven@gmail\.com<\/a>/);
  assert.match(html, /<a[^>]*href="https:\/\/www\.linkedin\.com\/in\/jayven-lupera"[^>]*>LinkedIn<\/a>/);
  assert.match(html, /<a[^>]*href="https:\/\/github\.com\/jbeninjaa"[^>]*>GitHub<\/a>/);
});

test("exported homepage ends with a profile footer", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.match(html, /<footer[^>]*>[\s\S]*?Jayven Lupera[\s\S]*?<\/footer>/);
});

test("exported homepage initializes its theme before first paint", async () => {
  const html = await readFile("out/index.html", "utf8");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";

  assert.match(head, /(?:id="theme-init"|"id":"theme-init")/);
  assert.match(head, /localStorage\.getItem/);
  assert.match(head, /prefers-color-scheme: dark/);
  assert.match(head, /dataset\.theme/);
});