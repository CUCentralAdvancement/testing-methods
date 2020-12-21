# Testing Methods

Details Central Advancement's testing methods for web applications complete with guides and samples.

## Methodogiles

Current methodologies:
- [Browser Automation, end-to-end (e2e) testing](/docs/method-e2e.md) - Using Cypress, these tests can do anything a user can with the browser. Since these tests are the slowest, they chain together a lot of user interactions in one test that usually simulate a conversion or feature of the web app. By default Chromium is used but other user system browsers are available to add.
- [Component Testing](/docs/method-components.md) - Using frontend tools like React, component tests are at the integration level and allow for fewer e2e tests to cover all the features of a component. For example, if you have a form with seven text fields, you only have to perform validaiton tests on the shared base component and can exclude edge case validation testing from e2e tests.

## Tech Stacks

Current tech stacks:
- [Cypress](/docs/stack-cypress.md) - Cypress does it all from writing to running to monitoring test runs via a dashboard service. It can handle e2e testing needs as well as component-level testing for the "Clean Slate" component library.
