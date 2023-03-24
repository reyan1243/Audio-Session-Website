# Audio-Session Website

This is a web application for hosting audio sessions, built using the MERN stack (MongoDB, Express, React, Node.js).

The application includes user authentication and OTP (one-time password) functionality for added security.

## Installation
To install and run the application locally, follow these steps:

Clone the repository: git clone https://github.com/yourusername/audio-session-website.git
Install dependencies in both the root directory and the client directory: npm install
Create a .env file in the root directory with the following variables:
makefile

![image](https://user-images.githubusercontent.com/65946237/227477181-3b40baed-3ed0-4842-823c-b24bf4e0e491.png)

Start the server: npm start
Start the client: npm start (in the client directory)
Visit http://localhost:3000 in your web browser to view the application.

![audio-session](https://user-images.githubusercontent.com/65946237/227482222-3360439a-b504-4213-a063-1aa1b331b917.gif)

##Usage

The application allows users to sign up, sign in, create audio sessions, join audio sessions, and receive OTPs for added security.

Once logged in, users can create audio sessions by clicking the "Create Session" button on the home page. They can then share the session link with others to invite them to join.

To join a session, users must enter the session code on the home page and click "Join Session". They will then be prompted to enter the OTP that they received via SMS.
