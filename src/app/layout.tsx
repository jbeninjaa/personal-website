import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const newsreader = localFont({
  src: "./fonts/Newsreader-Variable.woff2",
  variable: "--font-display",
  weight: "200 800",
});

const ibmPlexMono = localFont({
  src: "./fonts/IBMPlexMono-Regular.woff2",
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jayven Lupera | Software Engineer",
  description: "Jayven Lupera is a software engineer focused on secure, maintainable web systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  document.documentElement.dataset.theme = theme;
})();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
