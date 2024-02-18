# Trello Hometask

INFORMATION

- There should be no boards created before running the scripts
- Maximum of 10 boards are allowed to be created due to Trello free version
- It's preferable to delete boards before running the full suite again
- The search function might fail, but usually works for the second or third try
- In config.js you can turn of headless mode by commenting out some capabilities.
- For _chrome_ it's **"goog:chromeOptions": {args: ["headless", "disable-gpu"],},**
- For _firefox_ it's **"moz:firefoxOptions": {args: ["-headless"],},**
- Use **npm run wdio** to start running the tests
- Or you can start individual suites by typing one of these commands:
- **npm run login**
- **npm run logout**
- **npm run create_boards**
- **npm run create_card**
- **npm run search_card_board**

HOME TASK

1. Walk through the provided materials (official documentation, video) to understand how WDIO works and the main benefits of the tool.
2. Create an initial setup of WDIO on the local machine
3. Create WDIO config if it does not exist and familiarize
4. Create first specs using the existing BDD scenario created in Module 1
5. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
6. Execute tests in parallel using 2 instances
7. Add the option to run tests 2 times before marking it as failed
8. Push the code to remote repository and create Merge Request
