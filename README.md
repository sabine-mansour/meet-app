FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
Scenario 1: An event element is collapsed by default
Scenario 2: User can expand an event to see its details
Scenario 3: User can collapse an event to hide its details
FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number
Scenario 2: User can change the number of events they want to see
FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection
Scenario 2: Show error when user changes the settings (city, time range)
FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city


USER STORIES

Feature 2:  As a user, I would like to be able to show/hide event details so that I can see more/less information about an event. 
Feature 3: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. 
Feature 4: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online. 
Feature 5: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.




SCENARIOS USING THE GHERKIN SYNTAX

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default.

Given the user hasn’t expanded an event to see its details.
When the user opens the app.
Then the user should see a list of all the events without details.

Scenario 2: User can expand an event to see its details.

Given the main page is open.
When the user clicked on expand/more details button on a specific event.
Then the user should see the details of this specific event.

Scenario 3: User can collapse an event to hide its details

Given an event’s details is expanded.
When the user clicks on the collapse/show less button.
Then the user should no longer see the event’s details.

FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t specified any number
When the main page is open
Then the number of events will be 32 

Scenario 2: User can change the number of events they want to see
Given a list of events is showed to the user.
When the user change the number of events they want to see
Then the user should see the number of events he/she chose

FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection
Given there is no internet connection
When the user opens the app while offline
Then the app should show cached data

Scenario 2: Show error when user changes the settings (city, time range)
Given there is no internet connection
When the user change the settings
Then the app shows an error


FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city
Given the user looked for the number of events in each city
When the user opens the event chart
Then the user should see a chart with the number of upcoming events in each city
