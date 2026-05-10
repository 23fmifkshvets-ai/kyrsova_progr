function showAvatar() {
    const avatar = document.getElementById("avatar");

    const name = localStorage.getItem("userName") || "";
    const surname = localStorage.getItem("userSurname") || "";
    
     if (!name) {
        avatar.style.display = "none";
        return;
     }

    avatar.style.display = "flex";
    avatar.innerText = (name[0] + (surname[0] || "")).toUpperCase();
}

function toggleMenu(menuId) {
    const menus = document.querySelectorAll(".submenu");

    menus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove("open");
        }
    });

    const current = document.getElementById(menuId);
    current.classList.toggle("open");
}

async function loginUser() {
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const authResult = document.getElementById("authResult");

    if (login === "" || password === "") {
        authResult.innerText = "Заповніть всі поля";
        return;
    }

    const res = await fetch("https://dsathletik.com/backend-course/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, password })
    });

    const data = await res.json();

    if (data.status === "success") {
        authResult.innerText = "Успішний вхід";

        localStorage.setItem("isLogged", "true");

        localStorage.setItem("userName", login);

        updateUI();
    } else if (data.status === "wrong_password") {
        authResult.innerText = "Неправильний пароль";
    } else if (data.status === "no_user") {
        authResult.innerText = "Користувача не знайдено";
    } else {
        authResult.innerText = "Помилка";
    }
}


function openRegister() {
    const isLogged = localStorage.getItem("isLogged");


    if (isLogged === "true") {
        alert("Ви вже зареєстровані");
        return;
    }

    document.getElementById("registerModal").style.display = "flex";

    document.getElementById("regLogin").value = "";
    document.getElementById("regPassword").value = "";
    document.getElementById("regName").value = "";
    document.getElementById("regSurname").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPhone").value = "";
    document.getElementById("regCity").value = "";

    document.getElementById("regResult").innerText = "";
}

function closeRegister() {
    document.getElementById("registerModal").style.display = "none";
}

async function submitRegister() {
    const regLogin = document.getElementById("regLogin");
    const regPassword = document.getElementById("regPassword");
    const regName = document.getElementById("regName");
    const regSurname = document.getElementById("regSurname");
    const regEmail = document.getElementById("regEmail");
    const regPhone = document.getElementById("regPhone");
    const regCity = document.getElementById("regCity");
    const regResult = document.getElementById("regResult");

    if (!regLogin.value || !regPassword.value || !regName.value) {
        regResult.innerText = "Заповніть всі поля";
        return;
    }

    const data = {
        login: regLogin.value,
        password: regPassword.value,
        name: regName.value,
        surname: regSurname.value,
        email: regEmail.value,
        phone: regPhone.value,
        city: regCity.value
    };

    const res = await fetch("https://dsathletik.com/backend-course/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.status === "success") {
        regResult.innerText = "Успішно зареєстровано";

        localStorage.setItem("userName", data.name);
        localStorage.setItem("userSurname", data.surname);
        localStorage.setItem("isLogged", "true");

        updateUI();

        setTimeout(() => {
            closeRegister();
        }, 1000);

    } else if (result.status === "user_exists") {
        regResult.innerText = "Такий логін вже існує";
    } else if (result.status === "empty_fields") {
        regResult.innerText = "Заповніть всі поля";
    } else {
        regResult.innerText = "Помилка";
    }
}

/* document.addEventListener("DOMContentLoaded", function () {
    showAvatar();

    if (localStorage.getItem("isLogged") === "true") {
        hideRegisterButton();
        document.getElementById("logoutBtn").style.display = "inline-block";
    }
}); */

document.addEventListener("DOMContentLoaded", function () {
    updateUI();
});


function hideRegisterButton() {
    document.getElementById("registerBtn").style.display = "none";
}


function logoutUser() {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");

    document.getElementById("login").value = "";
    document.getElementById("password").value = "";

    document.getElementById("authResult").innerText = "";

    updateUI();
}


function updateUI() {
    const isLogged = localStorage.getItem("isLogged") === "true";

    const authBlock = document.getElementById("authBlock");
    const menu = document.getElementById("mainMenu");
    const logoutBtn = document.getElementById("logoutBtn");
    const avatar = document.getElementById("avatar");

    if (isLogged) {
        authBlock.style.display = "none";
        menu.style.display = "block";
        logoutBtn.style.display = "block";

        showAvatar(); 
    } else {
        authBlock.style.display = "flex";
        menu.style.display = "none";
        logoutBtn.style.display = "none";

        avatar.style.display = "none"; 
    }
}

function openReset() {
    document.getElementById("resetModal").style.display = "flex";
}

function closeReset() {
    document.getElementById("resetModal").style.display = "none";
}


async function resetPassword() {
    const login = document.getElementById("resetLogin").value;
    const newPassword = document.getElementById("newPassword").value;
    const result = document.getElementById("resetResult");

    if (!login || !newPassword) {
        result.innerText = "Заповніть поля";
        return;
    }

    const res = await fetch("https://dsathletik.com/backend-course/reset.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, password: newPassword })
    });

    const data = await res.json();

    if (data.status === "success") {
        result.innerText = "Пароль змінено";
    } else {
        result.innerText = "Користувача не знайдено";
    }
}
