import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAlertClick = () => {
        alert(`Поточне значення лічильника: ${count}`);
    };

    return (
        <div className="counter-box">
            <h2>📊 Інтерактивні події</h2>
            <h3>Лічильник: <span className="count-value">{count}</span></h3>

            <div className="button-group">
                <button className="btn-add" onClick={() => setCount(count + 1)}>+1</button>
                <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
                <button className="btn-alert" onClick={handleAlertClick}>Click me</button>
            </div>
        </div>
    );
}