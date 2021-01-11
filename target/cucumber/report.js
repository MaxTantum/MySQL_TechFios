$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/TechFios_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate TechFios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User enter \"\u003cusername\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to land on DashBoard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 21,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7026443400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userIsOnTheTechFiosLoginPage()"
});
formatter.result({
  "duration": 4027483900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User enter \"demo@techfios.com\" and  \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to land on DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 258252300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1527191900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_DashBoard_Page()"
});
formatter.result({
  "duration": 9664400,
  "status": "passed"
});
formatter.after({
  "duration": 646428200,
  "status": "passed"
});
});