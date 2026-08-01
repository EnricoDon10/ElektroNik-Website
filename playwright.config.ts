import { defineConfig, type PlaywrightTestConfig } from "@playwright/test";

const localBaseURL = "http://localhost:3100";
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? localBaseURL;

const targetViewports = [
  { name: "mobile-375x667", width: 375, height: 667 },
  { name: "mobile-390x844", width: 390, height: 844 },
  { name: "mobile-430x932", width: 430, height: 932 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "tablet-landscape-1024x768", width: 1024, height: 768 },
  { name: "desktop-1366x768", width: 1366, height: 768 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
  { name: "desktop-1920x1080", width: 1920, height: 1080 },
  { name: "desktop-2560x1440", width: 2560, height: 1440 },
] as const;

const webServer: PlaywrightTestConfig["webServer"] = process.env.PLAYWRIGHT_BASE_URL
  ? undefined
  : {
      command: "npx next dev --hostname localhost --port 3100",
      env: {
        NEXT_PUBLIC_SITE_URL:
          process.env.NEXT_PUBLIC_SITE_URL ?? "https://elektronik-meisterbetrieb.de",
      },
      reuseExistingServer: false,
      stderr: "pipe",
      stdout: "pipe",
      timeout: 180_000,
      url: localBaseURL,
    };

export default defineConfig({
  expect: {
    timeout: 8_000,
  },
  forbidOnly: Boolean(process.env.CI),
  fullyParallel: true,
  outputDir: ".next/playwright/test-results",
  projects: targetViewports.map(({ name, width, height }) => ({
    name,
    use: {
      browserName: "chromium" as const,
      viewport: { width, height },
    },
  })),
  reporter: "line",
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests",
  timeout: 30_000,
  use: {
    actionTimeout: 8_000,
    baseURL,
    locale: "de-DE",
    screenshot: "only-on-failure",
    timezoneId: "Europe/Berlin",
    trace: "off",
    video: "off",
  },
  webServer,
  workers: process.env.CI ? 2 : undefined,
});
