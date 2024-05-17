const kanbanURL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks(token) {
    const response = await fetch(kanbanURL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    const data = await response.json();
    return data;
}

export async function postTasks(token) {
    const response = await fetch(kanbanURL, {
        method: "POST",
        body: {
            title: "",
            topic: "",
            status: "Без статуса",
            descrition: "",
            date: new Date(),
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    const data = await response.json();
    return data;
}