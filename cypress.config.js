const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  reporter: "spec",

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false, // Отключить блокировку CORS и других проблем с безопасностью
    setupNodeEvents(on, config) {
      // добавьте обработчики событий здесь, если нужно
    }
  }
});
