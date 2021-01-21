@End2End
Feature: Validate TechFios Login Page Functionality

Background: 
Given User is on the TechFios Login Page

@Scenario1 
Scenario: User should be able to Login with valid credentials
When User logs in with valid credentials
And User click on Login button
Then User should be able to land on DashBoard Page    

    