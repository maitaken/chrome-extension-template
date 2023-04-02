import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const PopUp = () => {
    const [count, setCount] = useState(0)
    const h = []
    for (let i = 0; i < count; i++) {
        h.push(<div>hoge</div>)
    }
    return <div>
        {h}
        <button onClick={() => setCount(count + 1)}>push</button>
    </div>
}

console.log(document.getElementById("App"))
const root = createRoot(document.getElementById("App"))
root.render(<PopUp></PopUp>)
