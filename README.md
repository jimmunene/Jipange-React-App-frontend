# Cuisinier-react-recipe-app
Live link on Vercel
(https://jipange-react-app-frontend.vercel.app/)

# To run the app in the development mode.
Open (http://localhost:3000](http://localhost:3000) to view it in your browser.
# Jipange-react frontend
# project instructions
Create a new repository in a separate folder with a React app for your frontend. cd out of the backend project directory, and use create-react-appLinks to an external site. to generate the necessary code for your React frontend:

After creating the project locally, you should also create a repository on GitHubLinks to an external site. to host your repo and help collaborate, if you're working with a partner.

Fetch Example
Your React app should make fetch requests to your Sinatra backend! Here's an example:

fetch("http://localhost:9292/test")
.then((r) => r.json())
.then((data) => console.log(data));

# Project Tips
This project is intended to focus more on the backend than the front-end, so try and keep the React side of things relatively simple. Focus on working with Active Record and performing CRUD actions. What are some interesting queries you can write? What kinds of questions can you ask of your data?
Once you have a project idea, come up with a domain model and decide what relationships exist between the models in your application. Use a tool like dbdiagram.ioLinks to an external site. to help visualize your models.
Decide on your API endpoints. What data should they return? What kind of CRUD action should they perform? What data do they need from the client?
Use PostmanLinks to an external site. to test your endpoints.
Use binding.pry to debug your requests on the server. It's very helpful to use a binding.pry in your controller within a route to see what params are being sent.
Use the Network Tab in the Dev ToolsLinks to an external site. in the frontend to debug your requests.

# Instruction set and functionality

In the Jipange App a user can track events that he or she would like to do.
A user can create categories
add events to the categories
mark events complete
delete items from the list

# Access the backend link here 

(https://github.com/jimmunene/phase-3-sinatra-react-project-backend)

