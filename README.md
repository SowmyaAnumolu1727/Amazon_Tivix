# Amazon_Tivix

### Hi there 👋

**Steps to run the project:**


**Running through Cypress test runner:**
step 1: Open terminal in visual studio
step 2: npx cypress open
Step 3: Select the browser which we want to run through
step 4: Click on Amazon.feature file


**Running through terminal:**
Below are the commands to run the Amazon.feature file in different ways(Headed mode,headless)
**Running through chrome with headless mode:**  npx cypress run --spec "cypress\integration\Amazon.feature" --browser chrome 
**Running through chrome with headed mode:**  npx cypress run --spec "cypress\integration\Amazon.feature" --browser chrome --headed

