import React from "react";

export default React.memo(function Counter(props) {
    const { increcment } = props;

    return (
        <div>
            <button onClick={increcment}>{props ? 0 : "Click me to increase the number"}</button>
        </div>
    )
})