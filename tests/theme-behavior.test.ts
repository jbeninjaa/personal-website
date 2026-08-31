import { expect, test } from "@playwright/test";

test("first-time visitor can switch from the OS dark theme to light", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.getByRole("button", { name: "Toggle color theme" }).click();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.reload();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("dark theme provides a dark canvas with readable text", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.addInitScript(() => localStorage.setItem("theme", "dark"));
  await page.goto("/");

  const colors = await page.locator("body").evaluate((body) => {
    const { backgroundColor, color } = getComputedStyle(body);
    return { backgroundColor, color };
  });

  const contrastRatio = (foreground: string, background: string) => {
    const luminance = (color: string) => {
      const channels = color.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number) ?? [];
      const values = channels.map((channel) => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
      });

      return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
    };

    const foregroundLuminance = luminance(foreground);
    const backgroundLuminance = luminance(background);
    return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
      (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
  };

  expect(contrastRatio(colors.color, colors.backgroundColor)).toBeGreaterThanOrEqual(4.5);
  expect(colors.backgroundColor).not.toBe("rgb(244, 240, 232)");
});

test("theme control is keyboard reachable with a visible focus state", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");

  const toggle = page.getByRole("button", { name: "Toggle color theme" });
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveCSS("outline-style", "solid");
  await expect(toggle).toHaveCSS("outline-width", "2px");
});

test("professional contact links are keyboard reachable with visible focus", async ({ page }) => {
  await page.goto("/");

  const email = page.getByRole("link", { name: "reachjayven@gmail.com" });
  const linkedIn = page.getByRole("link", { name: "LinkedIn" });
  const gitHub = page.getByRole("link", { name: "GitHub" });

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(email).toBeFocused();
  await expect(email).toHaveCSS("outline-style", "solid");
  await expect(email).toHaveCSS("outline-width", "2px");

  await page.keyboard.press("Tab");
  await expect(linkedIn).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(gitHub).toBeFocused();
});

test("reduced-motion visitors receive no theme transition", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(page.getByRole("button", { name: "Toggle color theme" })).toHaveCSS(
    "transition-duration",
    "0s",
  );
});
