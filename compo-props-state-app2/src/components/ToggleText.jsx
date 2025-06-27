import { useState } from "react";

function ToggleText() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} Text
            </button>
            {isVisible && <p>This is some text!</p>}
        </div>
    )
}

export default ToggleText;