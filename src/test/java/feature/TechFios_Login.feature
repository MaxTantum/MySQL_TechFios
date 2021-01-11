Feature: Validate TechFios Login Page Functionality

Background: 
Given User is on the TechFios Login Page

@Scenario1 
Scenario: User should be able to Login with valid credentials
When User enter username as "demo@techfios.com" 
When User enter password as "abc123"
And User click on Login button
Then User should be able to land on DashBoard Page    

@Scenario2
Scenario Outline: User should be able to Login with valid credentials
When User enter "<username>" and  "<password>" 
And User click on Login button
Then User should be able to land on DashBoard Page  

Examples:
| username         | password|
| demo@techfios.com| abc123  |    