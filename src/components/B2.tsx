import { Component } from 'react'
interface ClassComponent {
    id: number
    name: string
    age: string
    address: string
}
export default class B2 extends Component<any, ClassComponent> {
    constructor(props: ClassComponent) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyễn Quang Vinh",
            age: "12/11//2005",
            address: "Hà Nội",
        }
    }
    render() {
        return (
            <div>
                Thông tin cá nhân
                <p>ID: {this.state.id}</p>
                <p>Họ và tên: {this.state.name}</p>
                <p>Ngày sinh: {this.state.age}</p>
                <p>Địa chỉ: {this.state.address}</p>
            </div>
        )
    }
}