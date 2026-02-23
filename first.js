let total = 0;

function showMessage() {
    alert("Welcome to NutriTrack! Start tracking your food now.");
}

function addFood() {

    let food = document.getElementById("foodName").value;
    let calories = parseInt(document.getElementById("calories").value);

    if (food === "" || isNaN(calories)) {
        alert("Please enter valid details!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = food + " - " + calories + " kcal";

    document.getElementById("foodList").appendChild(li);

    total += calories;
    document.getElementById("totalCalories").textContent = total;

    document.getElementById("foodName").value = "";
    document.getElementById("calories").value = "";

    alert(food + " added successfully!");
}
