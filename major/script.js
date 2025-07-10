let hero = document.querySelector(".hero");
let meals = document.querySelector(".meals");

async function fetchBenner() {
  try {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    let data = await res.json();

    hero.innerHTML = ` <img
          src="${data.meals[0].strMealThumb}"
          alt="Featured Dish"
        />
        <div class="hero-content">
          <h2>${data.meals[0].strMeal}</h2>
        </div>`;
  } catch (error) {
    console.log(error);
  }
}

let activeCat = "Beef";
const categoriesEl = document.querySelector(".categories");
let allCategories = [];


fetchMeals("Beef")

function handleClick(category) {
  activeCat = category;
  renderCategories();
  meals.innerHTML = ""
  fetchMeals(category);
}

async function fetchCategories() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    let data = await res.json();

    allCategories = data.categories;
    renderCategories();
  } catch (error) {
    console.log(error);
  }
}

function renderCategories() {
  categoriesEl.innerHTML = ""; // Clear old content
  allCategories.forEach((cat) => {
    categoriesEl.innerHTML += `<div class="category ${
      activeCat === cat.strCategory ? "active" : ""
    }" onclick="handleClick('${cat.strCategory}')">${cat.strCategory}</div>`;
  });
}

async function fetchMeals(catgory) {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catgory}`
    );

    let data = await res.json();

    data.meals.forEach(function (meal) {
      meals.innerHTML += `
         <div class="meal fade-in">
          <div class="meal-image">
            <img
              src="${meal.strMealThumb}"
              alt="Creamy Alfredo Pasta"
            />
            <div class="meal-badge">Popular</div>
          </div>
          <div class="meal-content">
            <h2>${meal.strMeal}</h2>
            <div class="meal-footer">
              <div class="meal-rating">⭐⭐⭐⭐⭐ <span>4.8</span></div>
              <button>View Recipe</button>
            </div>
          </div>
        </div>`;
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchBenner();
fetchCategories();
