document.getElementById("myForm").addEventListener("submit", function (event) {

    // Retrieve form data
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var email = document.getElementById("email").value;
    var healthReport = document.getElementById("healthReport").value;

    // Display form data
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Weight: " + weight);
    console.log("Email: " + email);
    console.log("Health Report: " + healthReport);
});