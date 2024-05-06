# Vegan Recipe Search and Favorites Web Application
This project is a simple web application that allows users to search for recipes and add them to a favorites list.
 The frontend is built using HTML, CSS, and  JavaScript, while a local JSON server is used to mock a backend API for recipe data.

 ##  Table of Contents
- Requirements
- Installation
- Features
- Code Explanation
- Running the application
- Additional Notes


## Requirements
- To run this application locally, you will need the following:

- Web browser (Chrome, Safari, etc.)
- Node.js (for running json-server)
- json-server package (installed globally)

## Installation
1. Clone the Repository
git clone git@github.com:sharmaripika/phase-1-final-project-.git
2. Navigate to the Project Directory:
cd **project directory
3. Install json-server globally (if not already installed)
- - npm install -g json-server
4. Start the JSON Server
- - json-server --watch db.json
5. Open the Application: Open index.html in your web browser to use the application.


## Features 	
### Search Recipes: 
- - Users can click the search button to fetch recipes from a local API (http://localhost:3000/recipes).
### Display Recipes: 
- - Fetched recipes are displayed with their recipe names, ingredients, and instructions.
![App preview](https://github.com/sharmaripika/phase-1-final-project-/issues/1#issue-2281674641)
### Add to Favorites: 
- - Each recipe in the search results can be added to a favorites list by clicking the "Add to Favorites" button.
### Remove from Favorites:
 - - Recipes in the favorites list can be removed by double-clicking the "Remove" button.
### Toggle Favorite: 
- - Recipes in the favorites list can be toggled between a white heart (not liked) and a red heart (liked).

## Code Explanation

### document.addEventListener("DOMContentLoaded", ...):
- -  This function sets up event listeners after the DOM content is loaded.

### fetchRecipes(): 
- - This function fetches recipes from the local API (http://localhost:3000/recipes) using fetch(), then calls displayRecipes() to render the fetched recipes, upon clicking the search button.

### displayRecipes(recipes): 
- - Parses the fetched recipes data and displays them in a list format.

### createRecipeListItem(recipe): 
- - Creates a list item element for each recipe with its name, ingredients, and instructions

### addToFavorites(recipe):
 - - This function adds a recipe to the favorites list by making a POST request to http://localhost:3000/favorites with the recipe data in JSON format.

###  moveRecipeToFavorites(listItem, recipe): 
- - Creates a copy of the recipe list item, removes the "Add to Favorites" button, adds a "Remove" button for managing favorites, and optionally adds a "Like" button using a heart icon.


## Running the application
- - Ensure you have a backend server set up to handle recipe data and favorites functionality.
- - Load the HTML file containing this JavaScript code in a web browser.
- - Click the search button to retrieve recipes.



## Additional Notes
- - Error handling is included for fetching recipes and adding recipes to favorites.
- - The "Like" functionality in the favorites list is a basic visual toggle and doesn't currently interact with the backend server.
