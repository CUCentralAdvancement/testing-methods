# NextGen System Testing Saga

This document will eventually have notes on training for the Codecept BDD framework and how to 
use that for testing NextGen's Salesforce implementation; however, for now we will document the 
different attempts to run automated system-level tests for the NextGen project.

## Original SFDX Repository

On 07/14/2020, a repository was created to host NextGen code outside what UCI is working on:
https://github.com/CUCentralAdvancement/sf-digitaleng-sandbox

The repository attempted to accomplish two things:

- Serve as an example of how the development workflow could function from TaskRay to deployment. 
  Some steps are listed here: https://github.com/CUCentralAdvancement/sf-digitaleng-sandbox#development-workflow
- Codify how system tests function in relation to Salesforce. Cypress was the tool of choice and 
  is used in other work Digital Engagement does. Some docs on testing methodology and training for 
  Cypress exist here: https://github.com/CUCentralAdvancement/testing-methods/blob/main/docs/training-cypress.md

Both tasks were accomplished, IMHO, with the caveat of not actually being able to use the 
testing code with what UCI deploys. So, the "solution" only got to the point of running the 
tests but not to the point of running them on an actual sandbox with NextGen data in it.

The particulars of the error encountered with DevHub is detailed here:
https://github.com/CUCentralAdvancement/sf-digitaleng-sandbox/issues/4

The simulated test correctly made a "DE Order" record with a couple fields filled in. The UI was 
old Lightning/Aura and not the new LWC with Shadow DOM. The test ran on Travis CI using a 
Trailhead that can now only be accessed via the Wayback machine. 

Travis CI stopped allowing open source projects to run tests for free at some point during the 
fall of 2020 so this method stopped working at that point.

## Second Attempt: Introducing LWC

The next attempt at trying automated system tests began on 02/16/2021. After half of a year 
passing, the UI for NextGen/ascend changed as well as the testing services and Trailheads 
Salesforce recommends to use. 

In the 7 or so months that passed, people kept talking about Selenium being used elsewhere at CU.
Selenium within Salesforce projects, and the Robot framework were way more popular than using 
Cypress, so the devs doubted NextGen would use Cypress at all and Selenium would be implemented 
in conjunction with other CU resources...no other CU resource came out of the woodwork and now 
all talk of using Selenium seems dead.

In the months that passed, several more people started writing blogs about using Cypress within 
Salesforce as well as more work with web components and the Shadow DOM. 

However, the work on Cypress web component testing usually involved web components nested 
one or two levels deep. The "New Constituent" form in ascend has many, many levels of web 
components since it is highly configurable within the Lightning Experience Builder. Devs could 
find no examples of people testing web components as crazy as what's going on with ascend.

Eventually, it was decided to try a different approach after failing to commit a simple test 
creating a constituent. More details can be found in this issue:
https://github.com/CUCentralAdvancement/sf-digitaleng-sandbox/issues/5

## New Approach: Codecept BDD

On 03/16/2021, a new approach was found with a project created by a Salesforce employee.
https://github.com/salesforce/codeceptjs-bdd

That framework operates at a higher level than previous attempts by including BDD 
(behavior-driven development) within the test creation process. Previously while using Cypress, 
the tests were more code-centric with no way of incorporating BDD. One reason to start at a 
lower-level is to minimize work needed to get to an MVP testing solution. 

For those reasons, the attempted test started a level lower than BDD step definitions only 
running one step to complete the whole test. You can see the code and notes on this issue:
https://github.com/CUCentralAdvancement/sf-digitaleng-sandbox/issues/6

It was far easier to create a constituent with Codecept as they focused on making the framework 
easy to use when testing LWC. Devs had no issue finding and filling in form elements.

However, authenticating to Salesforce via GitHub Actions/Workflows vs. Travis CI was a stumbling 
block. UCI pushes code to Salesforce using GitHub Actions, though, so it isn't a hard thing to 
do. It just needs time to work on that part.

This line of test automation was paused due to a perceived switch in focus to provide seed test 
data for manual testing and no pathway to next steps for a working automated system testing 
solution.

## Next Steps

To continue with automated system test work, some questions need to be answered.

Questions:

1. Is Selenium discussion finally dead? No one will want to switch to using it in the future?
1. Are there any resources for hosted testing services? It might be easier to use a hosted 
   service vs. maintaining infrastructure. 
1. What is the plan to take a working automated system testing solution? There's no need to 
   finish a solution without a pathway to some group using the solution and write tests themselves.
   
The actual next steps would be:

1. Match step definitions in current manual testing steps with ones that would be created in code.
1. Complete and document standardized way to authenticate users from GitHub Actions to 
   Salesforce orgs.
1. Go over adding connected apps and machine users that would actually log in during automated 
   test runs. Permissions and such will need to be reviewed and approved.
