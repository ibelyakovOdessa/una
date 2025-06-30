import "reflect-metadata";
import 'es6-shim';
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './src/tests',
    timeout: 30000,
    retries: 1,
    workers: 1,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
    ],
    tsconfig: 'tsconfig.json',
};
