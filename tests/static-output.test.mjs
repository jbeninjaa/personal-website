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

test("exported homepage initializes its theme before first paint", async () => {
  const html = await readFile("out/index.html", "utf8");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";

  assert.match(head, /(?:id="theme-init"|"id":"theme-init")/);
  assert.match(head, /localStorage\.getItem/);
  assert.match(head, /prefers-color-scheme: dark/);
  assert.match(head, /dataset\.theme/);
});