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