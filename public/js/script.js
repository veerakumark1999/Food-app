let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let ingredientList = document.querySelector(".ingredientList");
let ingredeintDiv = document.querySelectorAll(".ingredeintDiv")[0];

addIngredientsBtn.addEventListener("click", function () {
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName("input")[0];
  input.value = "";
  ingredientList.appendChild(newIngredients);
});

functioninsertOption();
{
  const addBtn = document.querySelector("#addbtn");
  const listbox = document.querySelector("#options");
  const dropdown = document.querySelector("#txt");
  const option = new Option(dropdown.value, dropdown.value);
  listbox.add(option, undefined);
  dropdown.value = "";
  dropdown.focus();
}
