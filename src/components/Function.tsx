import React, { useState } from 'react'

export default function Function() {
    const [fullName, setFullname] = useState<string>("hoa");
    const [age, setAge] = useState<number>(13);
    const [students, setStudents] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true)
    // const fullName = hoa
    const handleChange = () => {
        setAge(14);
    }
    return (
        <div>
            function :

            /**
             * state : dùng để quản lí dữ liệu trong components
             * đối với function để quản lí dữ liệu dùng useState
             * đây là 1 hook sinh ra giúp function có thể quản lí dữ liệu
             * state có thể thay đổi giá trị đc
             */
            <p>
                {fullName} năm nay {age} tuổi
            </p>
            <button onClick={handleChange}> change age</button>

        </div >
    )
}
