# ziphq-qa-challenge

Take home Challenge Example Walk Through
Problem Statements
Test company - https://qa.ziphq.com/admin/company/9ca76a80-b7a0-4b0d-aea7-ac4d8de3698b 

Login Steps
You can log in through http://qa.ziphq.com/. And here’s the test account created for you:
Username: enborodin+qatesting@gmail.com 
Password: click on forgot password and set up the password
Once you logged in, go to Request page 
https://qa.ziphq.com/request/067a2567-a48c-72a0-8000-1276ee4224d9 

Employees request purchase for the entire team, we need to go through a series of approvals in order. 
Workflow diagram
The approval diagram shows the workflow, from Manager approval, legal, finance and department head approval.
Each approval is assigned to a POC with a SLA date
Once per node is approved, move seq to next approval node
Request details
Shows all the related attributes on request, the request info section attributes is required
Purchase Details
We will focus on agreement details and price breakdown. Requesters can add detailed price breakdown and they shall sum up equal to the overall agreement details section.

Testing Scope
The objective of testing this request page is to validate the functionality and ensure the usability. 
Test only the first three tabs “Overview”, “Details” and “Purchase”. No need to test Documents, Surveys and Vendor tabs.
There is no need to add/remove nodes in the workflow.
Clicking the Overview tab of the request detail page takes you to the Overview section of the page. This section displays the request's review chain. You should be able to re-assign the task and perform the approval by clicking “Approve” in the approval step’s card. Each card in the review chain represents a separate approval step. The card for each approval step contains several key details. You can make any changes by clicking on the edit button.
Clicking the Request details tab of the request detail page takes you to the Request details section of the page. Users should be able to edit the “Requester Info” section. All actions are logged in the audit trail.
Clicking the Purchase Details tab of the request detail page takes you to the Purchase details section of the page. Here, you can find details regarding the agreement that has optionally been created following full approval for the request, as well as price breakdowns and savings for the request.
Conditionality
Approval nodes can be triggered based on condition. In this workflow, we have 2 conditions 
price > 100 USD -> triggers budget approval
price > 500 USD ->  triggers manager approval
To reset the request, simply create a new one and choose the “Take Home Challenge” workflow.
Challenge 
[Part 1 Take Home Challenge] For each section - overview, request details, purchase details in google doc format
What are the testing strategy and focus areas?
How would you implement the testing strategy? E.g. what can be api testing, automated testing, manual testing. 
API/GraphQL testing
Give 3 examples, describing input/output. We would like to see some code that’s specific to Zip.
Automated testing
Any test automation framework, cypress, playwright, selenium - provide 2-3 pseudo code examples. The pseudo-code does not need to be complete, but it needs to be realistic and specific to Zip.
Manual testing 
Give 5 examples.

[Part 2 Walk Through] Discussion on test plan and test cases
Rubric
Test strategy to articulate coverage and focus area. We expect you to demonstrate how you would structure your testing.
Comprehensive test coverage. 
We expect you to demonstrate how you would enumerate edge cases that need testing.
We expect you to look under the hood and understand how our frontend interacts with the backend.
Understand different test mechanisms, API testing, automated testing and manual test.
We expect you to look under the hood.
We expect you to demonstrate the different tools you would use to explore the internals of our app, how you would set up authentication, what endpoints/operations it’s using under the hood, and debug test failures.
Articulate how different test mechanisms can be used in the take home challenge.
Manual test cases are easy to understand and execute, they are accurate and concise.
We expect you to demonstrate how you would delegate and collaborate with offshore QA teams through your manual test cases.


Contacts
If you have any questions for environment, email me at james.lim@ziphq.com 