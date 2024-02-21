import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
import host from './cypress/fixtures/host.json'

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        setupNodeEvents,
        baseUrl: host.url,
        specPattern: '**/*.feature',
        watchForFileChanges: false,
        screenshotsFolder: 'cypress/reports/screenshots',
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 15000,
    },
})