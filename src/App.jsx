import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import "./App.css";

export default function App() {
    const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

    return (
        <div className="dashboard">
            <header className="main-header">
                <h1>ДУІКТ | Практична робота №9</h1>
                <p>Тема: Компоненти, Props, State, Події та Умовний рендеринг</p>
            </header>

            <div className="grid-container">
                {/* Блок Пропсів та Списків */}
                <div className="card-box">
                    <h2>👥 Компоненти та Props (Завдання 3, 6)</h2>
                    <div className="users-list">
                        <UserCard name="Іван" role="Student" />
                        <UserCard name="Олена" role="Teacher" />
                        <UserCard name="Влад" role="Admin" />
                    </div>

                    <h3 style={{ marginTop: "20px" }}>🍎 Рендеринг списків</h3>
                    <ul className="fruits-list">
                        {fruits.map((fruit) => (
                            <li key={fruit}>{fruit}</li>
                        ))}
                    </ul>
                </div>

                {/* Блок Лічильника та Подій */}
                <Counter />
            </div>

            {/* Комплексний ToDo List */}
            <ToDoList />
        </div>
    );
}