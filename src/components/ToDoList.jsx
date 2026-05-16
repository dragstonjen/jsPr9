import { useState } from "react";

export default function ToDoList() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, text: "Здати практичну №8", done: true },
        { id: 2, text: "Закрити деплой на Vercel для лаби №9", done: false },
        { id: 3, text: "Піти відпочивати", done: false }
    ]);
    const [filter, setFilter] = useState("All"); // Стан для фільтра: All, Active, Done

    const addTask = () => {
        if (!text.trim()) return;
        setTasks([...tasks, { id: Date.now(), text, done: false }]);
        setText("");
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    // Логіка фільтрації задач
    const filteredTasks = tasks.filter(task => {
        if (filter === "Active") return !task.done;
        if (filter === "Done") return task.done;
        return true; // All
    });

    return (
        <div className="todo-box">
            <h2>📝 Комплексне завдання: Mini ToDo</h2>

            <div className="todo-input-block">
                <input
                    type="text"
                    placeholder="Нова задача..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn-todo-add" onClick={addTask}>Додати</button>
            </div>

            {/* Кнопки фільтрації */}
            <div className="filter-buttons">
                <button className={filter === "All" ? "active-filter" : ""} onClick={() => setFilter("All")}>Усі</button>
                <button className={filter === "Active" ? "active-filter" : ""} onClick={() => setFilter("Active")}>Активні</button>
                <button className={filter === "Done" ? "active-filter" : ""} onClick={() => setFilter("Done")}>Виконані</button>
            </div>

            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task.id} className={task.done ? "task-item done" : "task-item"}>
                        <div onClick={() => toggleTask(task.id)} className="task-clickable-area">
                            {/* Емодзі окремо (без закреслення) */}
                            <span className="task-status-emoji">{task.done ? "✅ " : "⏳ "}</span>

                            {/* Текст окремо (закреслюється, якщо виконано) */}
                            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
          {task.text}
        </span>
                        </div>
                        <button className="btn-delete" onClick={() => removeTask(task.id)}>×</button>
                    </li>
                ))}
            </ul>

            {filteredTasks.length === 0 && <p className="empty-msg">Немає задач у цій категорії</p>}
        </div>
    );
}