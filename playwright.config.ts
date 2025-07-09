import "reflect-metadata";
import 'es6-shim';
import { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig } from '@playwright/test';


export default defineConfig({
    testDir: './src/tests',
    timeout: 30000,
    retries: 0,
    workers: 1,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    // projects: [
    //     {
    //         name: 'Chrome',
    //         use: { browserName: 'chromium' },
    //     }
    //     // {
    //     //     name: 'Firefox',
    //     //     use: { browserName: 'firefox' },
    //     // },
    // ],
    tsconfig: 'tsconfig.json',
    reporter: [
        ['list'],
        ['allure-playwright', {
            links: {
                issue: {
                    nameTemplate: "Issue %s",
                    urlTemplate: "https://unaverse.atlassian.net/browse/%s"
                }
            }
        }
    ]]
});
