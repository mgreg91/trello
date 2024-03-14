# Trello Hometask

INFORMATION

- There should be no boards created before running the scripts
- Maximum of 10 boards are allowed to be created due to Trello free version
- It's preferable to delete boards before running the full suite again
- The search function might fail, but usually works for the second or third try
- In config.js you can turn off headless mode by commenting out some capabilities.
- For _Chrome_ it's `"goog:chromeOptions": {args: ["headless", "disable-gpu"],},`
- For _Firefox_ it's `"moz:firefoxOptions": {args: ["-headless"],},`
- Use `npm run wdio` to start running the tests one after another
- Or you can start individual suites by typing one of these commands:
- `npm run test:login`
- `npm run test:logout`
- `npm run test:create_boards`
- `npm run test:create_card`
- `npm run test:search_card_board`

HOME TASK

1. Walk through the provided materials (official documentation, video) to understand how WDIO works and the main benefits of the tool.
2. Create an initial setup of WDIO on the local machine
3. Create WDIO config if it does not exist and familiarize
4. Create first specs using the existing BDD scenario created in Module 1
5. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
6. Execute tests in parallel using 2 instances
7. Add the option to run tests 2 times before marking it as failed
8. Push the code to remote repository and create Merge Request

HOME TASK 2

Take your set up test automation framework and improve it by applying knowledge from this module. Refactor automated tests created in the previous module based on Page object pattern and follow DRY, KISS, YAGNI principles (other design patterns can be used as well)

The solution should be split into next layers:

1. Core layer (core functionality of TAF, that isn’t project specific).
2. Business layer (should contain all functionality, related with business logic of the tested application)
3. Tests layer (should contain automated tests, TAF configuration)
4. Push the code to remote repository and create Merge Reque

HOME TASK 3

1. Familiarize with Dropbox API - https://www.dropbox.com/developers/documentation/http/documentation
2. Implement at least 3 test scenarios using one of JS libraries like Axios, Got, SuperTest (it will be a plus) or Postman :

   - Upload file
   - Get File Metadata
   - Delete file

3. Add assertions for headers, status code and body of response
4. Add script into package.json to run API tests through the CLI (if tests done in Postman use Newman tool)
5. Push API tests to the remote repository and create a Merge Request

HOME TASK 4

1. Install Jenkins locally
2. Create pipelines with 2 jobs where:
   - The repo with tests will be cloned
   - The 1-st job will run UI tests and 2-nd job will run API tests
3. Set up the trigger to perform test every 2 hours 4. Demo it to your mentor

HOME TASK 5

1. Integrate both: spec and HTML reporter with Test Automation Framework
2. Exclude generated report files from Git index
3. Set up that spec report should show result in console
4. Push implemented solution to Git and create Merge Request

HOME TASK 6

1. Set up Prettier and configure it
2. Set up EsLint and configure it
3. Add both scripts to package.json to run linters
4. Run both linters on new CI job (place this job before jobs with UI and API tests)
5. Push code to the remote repository and create Merge Request and demo this CI job to mentor
