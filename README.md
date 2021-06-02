<br />
<p align="center">
  <h1 align="center">plntr.</h1>

  <p align="center">
    A full stack (MERN) application used for tracking and scheduling indoor plant care.
    <br />
    <h3 align="center">
     <strong>Contributors »</strong>
    <br />
    <br />
    <a href="https://github.com/ecruz4">Eric Cruz</a>
     </h3>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#home-page">Home Page</a></li>
    <li><a href="#garden">Garden</a></li>
    <li><a href="#add-plant">Add Plant</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
      <li><a href="#google-maps-api-key">Google Maps API Key</a></li>
     </ul>
    </li>
  </ol>
</details>

# About

The objective of the plntr. website was to make a site that allowed indoor gardeners to keep track of their pruning, fertilizing, and watering schedules for their indoor plants.  I was given two days to complete this project and it consists of a single page application that utilizes the MERN stack to store and render the user's garden and schedule on that single page.

## Home Page 

**Features:**

- _Nav Bar_
- _Charity Information_
- _Charity Feature Cards_
- _Footer_
- _Routing_


## Garden 

**Features:**

- _Profile Picture_: Created using the Material UI Avatar component and also has an added Edit Icon using Material UI Badges if the user is viewing their own profile.
- _Profile Information_: Displays the user's basic contact information and location.
- _Offer Detail Cards Display_: The Card Display/Profile Feed is a list of all the offers/requests made by that particular user.
- _Editable Information_: By clicking on the Edit Icon, a modal will appear for the user to modify any of their profile information. These changes occur real-time.

![](https://media.giphy.com/media/un8jCt1i2AxIBSv0Q3/giphy.gif)

## Add Plant

**Features:**

- _Charitable requests & donations listing_: User is able to toggle between an interface displaying all requests from organizations, sorted by urgency, and one showing all charitable donations, sorted by time to expiration. Data is paginated and fetched as needed to improve performance, and presented on animated, interactive Material-UI cards. From within each card, the user can view more details about the listing, its owner, or initiate a live chat with the associated account.
- _Search Feature_: A case-insensitive search by item name, allowing the user to quickly find relevant donations or requests on the listings page. On the "Charities" page, more criteria is available for search, including by name, city, state, and charitable theme.

![](https://media.giphy.com/media/uh406AOUkx6GsNnQzD/giphy.gif)


# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
         <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Backend Languages</th>
      <td>
        <img alt="Mongo" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
        <img alt="Node.JS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
        <img alt="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="Heroku" src=" 	https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow

Our team used Agile workflow for this sprint.

## Trello

A Trello board was used to create and track tickets. We held daily scrum meetings to discuss accomplishments, challenges, and upcoming tickets. To effectively collaborate remotely while allowing for quick communication if needed, we utilized Discord, Slack, and Zoom.

## Version Control

We implemented Git Feature Branch Workflow. All pull requests in Github were reviewed by another team member before being merged into the main branch.

# Development

## Repo

`git clone https://github.com/hratx-blue-ocean/adriatic-common-ground`

## Install

`npm install`

## Start Scripts

```
npm start
npm run build
```

## Google Maps API Key

To properly render the map in the details page, you must create a Google Maps API token and place it into config.js within the src directory.

To create an API key:

1. Go to: https://console.cloud.google.com/project/_/apiui/credential
2. On the credentials page, click Create credentials > API Key.
   The API key created dialog displays your newly created API key.
3. Click Close.
   The new API key is listed on the Credentials page under API keys.
   (Remember to restrict the API key before using it in production.)
