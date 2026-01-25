// App.tsx (Stub)
import React, { useState } from 'react';

interface Props {
    title: string;
}

const Widget: React.FC<Props> = ({ title }) => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h1>{title}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
    );
}
export default Widget;
