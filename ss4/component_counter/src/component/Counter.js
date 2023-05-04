import {useState} from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    const handleClick1 = () => {
        const newValue = count1 + 1;
        setCount1(newValue);
    };
    return (
        <div>
            <div>
                Count1:{count}
                <div>
                    <button onClick={handleClick}>add
                    </button>
                </div>
            </div>
            <div>
                Count2:{count1}
                <div>
                    <button onClick={handleClick1}>add
                    </button>
                </div>
            </div>
        </div>

    )
}