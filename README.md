# Testing Methods

Details Central Advancement's testing methods for web applications complete with guides and samples.

## Training

Before you look at any of the testing methodologies or tools used for writing tests, you should go
through a set of training materials.

- [Cypress Training](/docs/training-cypress.md) - Students will learn how to write a basic Cypress
  test and gain access to code snippets and other useful tidbits to kickstart their automated
  testing journey.
- [Jest Unit Tests for LWC -](https://trailhead.salesforce.com/content/learn/modules/test-lightning-web-components)
  Students will learn how to use Jest to write tests for LWC (Lightning Web Components).
- [System Tests for LWC](/docs/training-codecept.md) - Students will learn how to write system 
  tests using an emulated browser. LWC, the Shadow DOM, and Salesforce's support for the 
  Codecept BDD framework make this a better choice than using Cypress. 

## Methodologies

Current methodologies:

- [System Testing](/docs/method-e2e.md) - At the top of the testing pyramid sits system tests. 
  These tests touch every piece of code a user needs to run through a feature story. System 
  tests will be the slowest of all testing methods but provide the most accurate picture for 
  each PR of what will happen to the same feature story in production. 
- [Component Testing](/docs/method-components.md) - Using frontend tools like React, component tests
  are at the integration level and allow for fewer e2e tests to cover all the features of a
  component. For example, if you have a form with seven text fields, you only have to perform
  validation tests on the shared base component and can exclude edge case validation testing from
  e2e tests.
- [Unit Testing](/docs/method-unit.md) - At the lowest level of the testing pyramid sit unit 
  tests. These tests only run code witin one "unit", usually a single function. Unit tests are 
  the fastest of the methodologies but will tell you nothing about what each PR will behave once 
  deployed to production.

## Tech Stacks

Current tech stacks:

- [Cypress](/docs/stack-cypress.md) - Cypress does it all from writing to running to monitoring test
  runs via a dashboard service. It can handle e2e testing needs as well as component-level testing
  for the "Clean Slate" component library.
- [Codecept](/docs/stack-codecept.md) -
- [Jest](/docs/stack-jest.md) - 
