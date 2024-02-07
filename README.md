# Web_development_1
Node.js Project
This repository contains a Node.js server project created for an assignment. The project utilizes Express.js, EJS, and Express EJS layouts modules to create a simple web server with three unique routes for rendering EJS files.

Project Structure
The project consists of the following files and directories:

server.js: The main file containing the Node.js server logic.
views/: Directory containing EJS template files.
home.ejs: EJS file for the home page.
about.ejs: EJS file for the about page.
movie.ejs: EJS file for displaying a list of favorite movies.
partials/: Directory containing partial EJS files.
layout.ejs: Boilerplate layout file used on all EJS files.
header.ejs: Partial containing the navigation bar.
public/: Directory for static files (e.g., CSS, JavaScript).
node_modules/: Directory containing project dependencies (not included in submission).
Usage
Clone the repository to your local machine.

bash
Copy code
git clone https://github.com/saikumarkankatala/Web_development_1.git
Navigate to the project directory.

bash
Copy code
cd Web_development_1
Install dependencies using npm.

Copy code
npm install
Start the server using nodemon.

sql
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to view the home page.

Routes
Home Page: Route: /

Displays a paragraph about what the user would like to gain out of the class.
Displays the pawprint variable sent from the server.
About Page: Route: /about

Displays information about the user.
Displays the Name variable sent from the server.
Movie Page: Route: /movie

Displays a list of the top 10 favorite movies.
The list includes the title of the movie, the leading stars, and the director.
Movie information is generated on the server and passed to the EJS file for display.
Dependencies
express: Fast, unopinionated, minimalist web framework for Node.js.
ejs: Embedded JavaScript templating.
express-ejs-layouts: Layout support for EJS in Express.
nodemon: Automatically restarts the server when changes are detected (development dependency).
