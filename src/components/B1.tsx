import { useState } from "react"

export default function B1() {
    const [name, setName] = useState<string>("Nguyễn Quang Vinh");
    const changeName = () => {
        setName(name + " " + "đây !");
    }
    return (
        <div>
            <p>Họ và tên: {name}</p>
            <button onClick={changeName}>ReName</button>
        </div>
    )
}