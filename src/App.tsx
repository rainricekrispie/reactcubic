import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Graph } from "./component/Graph.tsx"
import { Equation } from "./component/Equation.tsx"
import { Table } from "./component/Table.tsx"
import { History } from "./component/History.tsx"
import { Input } from "./component/Input.tsx"

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const p: number = ((3 * a * c) - (b ** 2)) / (3 * (a ** 2));
    const q: number = ((27 * a * d) - (9 * a * b * c) + (2 * (b ** 3))) / (27 * (a ** 3));
    const discriminant: number = ((q / 2) ** 2) + ((p / 3) ** 3);

    function cardanoMethod(p: number, q: number) {
        const u: number = Math.cbrt(((-q) / 2) + Math.sqrt(discriminant));
        const v: number = Math.cbrt(((-q) / 2) - Math.sqrt(discriminant));
        return (u + v) - (b / (3 * a));
    }

    function trigMethod() {
        const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-((p / 3) ** 3))));
        const r1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - (b / (3 * a));
        const r2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + ((2 * Math.PI) / 3)) - (b / (3 * a));
        const r3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + ((4 * Math.PI) / 3)) - (b / (3 * a));
        return [r1, r2, r3];
    }

        return (
            <div>
                <Equation />
                <Input />
                <Table />
                <History />
                <Graph a={1} b={1} c={1} d={1} />
            </div>
        )

    }

export default App
