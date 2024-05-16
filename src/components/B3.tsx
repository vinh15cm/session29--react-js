import { Component } from 'react';

interface ClassComponent {
    id: number;
    name: string;
    address: string;
}

export default class B3 extends Component<any, { data: ClassComponent[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Vinh",
                    address: "Hà Nội"
                },
                {
                    id: 2,
                    name: "Vinh 2",
                    address: "Bình Dương"
                },
                {
                    id: 3,
                    name: "Vinh 3",
                    address: "Cần thơ"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((item: ClassComponent, index: number) => (
                        <li key={index}>
                            <div>ID: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <div>Address: {item.address}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}