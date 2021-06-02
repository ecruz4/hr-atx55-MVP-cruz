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
     <img align="center" alt="home-page" src="https://media.giphy.com/media/7zuWaxZMECPW6OrzBk/giphy.gif" />
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
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
     </ul>
    </li>
  </ol>
</details>

# About

The objective of the plntr. website was to make a site that allowed indoor gardeners to keep track of their pruning, fertilizing, and watering schedules for their indoor plants.  I was given two days to complete this project and it consists of a single page application that utilizes the MERN stack to store and render the user's garden and schedule on that single page.

## Home Page 

**Features:**

- _Notification_: Displays notification cards for current plant maintenance. Three Icons on the top of each card dictate which type of maintenance needs to be performed for the day (pruning - scissors, fertilizing - leaf, watering - water drop).
- _Garden_: There is a section that consists of cards that make up the user's 'garden'
- _Add Plant_: This section is used to add plants and the necessary maintenance schedule to the user's garden.


## Garden 

**Features:**

- _Garden Card_: Created using the Material UI Avatar component and also has an added Edit Icon using Material UI Badges if the user is viewing their own profile.
- _Delete Icon_: Displays the user's basic contact information and location.

![](https://media.giphy.com/media/un8jCt1i2AxIBSv0Q3/giphy.gif)

## Add Plant

**Features:**

- _Maintenance Schedule_: Here the user can fill out information regarding the plant they wish to add to their garden. There are pre-defined options for the watering, fertilizing, and pruning schedule which allow the user to choose once or twice a week or daily for watering, and once, twice, or weekly per month for the fertilizing and pruning schedules.
- _Image_: The user can choose to insert an image URL if they choose to do so which will populate the avatar image on each card with the image URL provided.

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
        <img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow

I used Agile Workflow for this project.

## Repo

`git clone https://github.com/ecruz4/plntr.git`

## Install

`npm install`

## Start Scripts

Currently uses concurrently to start the server and the client at the same time for development.

```
npm run dev
```
