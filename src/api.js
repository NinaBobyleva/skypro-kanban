let token = "";

export const setToken = (newToken) => {
    token = newToken;
}


export async function getTasks() {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function Signin({ login, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response === 400) {
        throw new Error("Логин или пароль введен не верно!");
    }

    const data = await response.json();
    return data;
}

export async function Signup({ login, name, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        })
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response === 400) {
        throw new Error("Пользователь с таким логином уже сущуствует!");
    }

    const data = await response.json();
    return data;
}