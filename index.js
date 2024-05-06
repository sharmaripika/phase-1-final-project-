
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", fetchRecipes);
});
//create function fetchRecipe
function fetchRecipes() {
    const url = "http://localhost:3000/recipes";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data); // Pass fetched recipes directly to displayRecipes
        })
        .catch(error => {
            console.error("Error fetching recipes:", error);
        });
}
//create function to display recipe on clicking search button
function displayRecipes(recipes) {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = ""; // Clear existing menu list
//array iteration to list the recipe
    recipes.forEach(recipe => {
        const listItem = createRecipeListItem(recipe);

        // Create "Add to Favorites" button only for menuList
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Favorites";
        addButton.addEventListener("click", () => {
            addToFavorites(recipe)
                .then(data => {
                    console.log("Recipe added to favorites successfully:", data);
                    moveRecipeToFavorites(listItem, recipe); // Move to favorites list
                })
                .catch(error => {
                    console.error("Error adding recipe to favorites:", error);
                });
        });
        listItem.appendChild(addButton);

        menuList.appendChild(listItem);
    });
}

function createRecipeListItem(recipe) {
    const listItem = document.createElement("li");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = recipe.name;
    listItem.appendChild(nameHeading);

    const ingredientsParagraph = document.createElement("p");
    ingredientsParagraph.textContent = "Ingredients: " + recipe.ingredients;
    listItem.appendChild(ingredientsParagraph);

    const instructionsParagraph = document.createElement("p");
    instructionsParagraph.textContent = "Instructions: " + recipe.instructions;
    listItem.appendChild(instructionsParagraph);

    return listItem;
}

function addToFavorites(recipe) {
    const url = "http://localhost:3000/favorites";
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
    };

    return fetch(url, requestOptions)
        .then(response => { response.json();
        })
        .then(data => {
            console.log("Recipe added to favorites successfully:", data);
            return data; // Return the parsed data
        })
        .catch(error => {
            console.error("Error adding recipe to favorites:", error);
            throw error; 
        });
}

function moveRecipeToFavorites(listItem, recipe) {
    const favoriteList = document.getElementById("favoriteList");
    const listItemCopy = listItem.cloneNode(true);

    // Remove the "Add to Favorites" button from the cloned listItemCopy
    const addButton = listItemCopy.querySelector("button");
    if (addButton) {
        addButton.remove();
    }
    
    
  

    // Create "Remove" button for favoriteList
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("dblclick", () => {
        listItemCopy.remove();
    });
    listItemCopy.appendChild(removeButton);
    
   // Create Heart Button
   const heartButton = document.createElement('button');
   heartButton.textContent = '\u2661'; // Start with white heart
   heartButton.addEventListener('click', toggle);
   listItemCopy.appendChild(heartButton);

    
    
  favoriteList.appendChild(listItemCopy);

  function toggle() {
    const like = heartButton.textContent;
    if (like === '\u2661') {
        heartButton.textContent = "\u2764\ufe0f"; // Switch to red heart
    } else {
        heartButton.textContent = '\u2661'; // Switch back to white heart
    }
}
}


    



