// document.addEventListener("DOMContentLoaded", function () {
//     const name = prompt("Ismingizni kiriting:");
    
//     if (name) {
//         const container = document.createElement("div");
//         container.style.display = "flex";
//         container.style.flexDirection = "column";
//         container.style.alignItems = "center";
//         container.style.justifyContent = "center";
//         container.style.height = "100vh";
//         container.style.backgroundColor = "#f3f4f6";

//         const message = document.createElement("div");
//         message.textContent = `Salom, ${name}!`;
//         message.style.fontSize = "24px";
//         message.style.fontWeight = "bold";
//         message.style.color = "#1e3a8a";
//         message.style.marginTop = "20px";

//         container.appendChild(message);
//         document.body.prepend(container);
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Ismingizni kiriting:");
    
    if (name) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.height = "100vh";
        container.style.backgroundColor = "#f3f4f6";

        const message = document.createElement("div");
        message.textContent = `Salom, ${name}!`;
        message.style.fontSize = "24px";
        message.style.fontWeight = "bold";
        message.style.color = "#1e3a8a";
        message.style.marginTop = "20px";

        container.appendChild(message);
        document.body.prepend(container);
    }
});