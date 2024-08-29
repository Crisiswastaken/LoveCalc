let userName;
let partnerName;

function checkCompatibility() {
    const compatibility = Math.floor(Math.random() * 101) + "%";
    return compatibility;
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    userName = document.querySelector("#usersName").value;
    partnerName = document.querySelector("#partnersName").value;
    const compatibility = checkCompatibility();
    document.querySelector("h1").textContent = `${userName} and ${partnerName} are ${compatibility} compatible!`;
    document.querySelector(".js-text").textContent = "Enter Different Names to try again!";
    document.querySelector("#usersName").value = "";
    document.querySelector("#partnersName").value = "";
});
