// const express = require("express")
// const cors = require("cors")
// const app = express()

// app.use(cors())
const mealsEl = document.querySelector(".meals")
const fav = document.querySelector(".fav-meals")

const searchTerm = document.getElementById("search-term");
const search = document.getElementById("search")


const popUp = document.querySelector(".pop")
const popCtn = document.querySelector(".pop-ctn")
const popBtn = document.querySelector(".close-popup")
const popDetails = document.querySelector(".meal-info")


getRandomMeal();
fetchFavMeals();

async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
}

async function getMealById(id){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);

    const respData = await res.json();
    const meal = respData.meals[0];
    
    return meal;
}

async function getMealBySearch(term){
    const resp = 
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+term
    );
    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
    
}

function addMeal(mealData,random = false ){
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = 
    ` 
    <div class="meal-header">
    ${random ?
        `<span class="random">Random Recipe</span>` : ""}
        <img 
        src="${mealData.strMealThumb}" 
        alt="${mealData.strMeal}"/>
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
            <i class="material-icons">favorite</i>
        </button>
    </div>
    `
    ;

    const btn = meal.querySelector(".meal-body .fav-btn");

    btn.addEventListener("click", () => {
        if(btn.classList.contains("active")){
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        }else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }

        // clear container
        // fav.innerHTML = "";
        fetchFavMeals();
    });

    meal.addEventListener("click", () => {
        showMealInfo(mealData)
    });

    mealsEl.appendChild(meal);
}

function addMealLS (meal){

    const mealIds = getMealLS();
    
    localStorage.setItem("mealIds", JSON.stringify([...mealIds,meal]));

};

function removeMealLS(meal) {

    const mealIds = getMealLS();
    
    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== meal))
    );
}

function getMealLS (){

    const mealIds = JSON.parse(localStorage.getItem('mealIds'));

    return mealIds === null ? [] : mealIds;
    
};

async function fetchFavMeals() {

    fav.innerHTML = "";

    const mealIds = getMealLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        meal = await getMealById(mealId);

        addMealFav(meal);
    }
}
    

function addMealFav(mealData){
    const favMeal = document.createElement("li");

    favMeal.innerHTML = 
    ` 
    <img src="${mealData.strMealThumb}" 
    alt="${mealData.strMeal}"/>
    <span>${mealData.strMeal}</span>
    
    <button class="close">
    <i class="material-icons">close</i>
    </button>`

    ;

    const btn = favMeal.querySelector(".close");

    btn.addEventListener("click", () => {
        removeMealLS(mealData.idMeal);

    // clear container
    // fav.innerHTML = "";
    fetchFavMeals();
    });
    
    favMeal.addEventListener("click", () => {
        showMealInfo(mealData)
    });

    fav.appendChild(favMeal);
}

search.addEventListener("click", async() => {
    
    mealsEl.innerHTML = ""; 

    const search = searchTerm.value;

    const meals = await getMealBySearch(search);

        if(meals){
            meals.forEach((meal) => {
            addMeal(meal);
        });
            }
        
    });

function showMealInfo(meal) {
    
    //refresh details.
    popDetails.innerHTML ="";

    // update meal info
    const mealEl = document.createElement("div");

    const ingredients =[];

    for (let i = 1; i < 20; i++){
        if (meal["strIngredient" + i]) {
            ingredients.push(
                `${meal["strIngredient" + i]} - ${meal["strMeasure" + i]}`
            )}
            else {
                break;
            };
        }
        mealEl.innerHTML =
        `<h1>${meal.strMeal}</h1>
        <img
            src="${meal.strMealThumb}"
            alt="${meal.strMeal}"
        />
        <p>
        ${meal.strInstructions}
        </p>
        <h3>Ingredients:</h3>
        <ul>
            ${ingredients
                .map(
                    (ing) => `
            <li>${ing}</li>
            `
                )
                .join("")}
        </ul>
        `;

        popDetails.appendChild(mealEl);
        popCtn.classList.remove("hidden");
    }

    popBtn.addEventListener("click", () => {
        popCtn.classList.add("hidden");
    });




