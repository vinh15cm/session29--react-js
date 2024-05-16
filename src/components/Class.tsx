import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
    age: number,
}
export default class Class extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "minh thư",
            age: 25,
        }
    }
    handleClick = () => {
        // khi muốn cập nhật state
        this.setState({
            age: 26
        })
    }
    render() {
        return (
            <div>
                Class
                {/**
               * trong class để quản lí state
               */}
                {this.state.name} năm nay {this.state.name} tuổi
                {/**
                 * cập nhật state đối với class
                 */}
                <button onClick={this.handleClick}></button>
            </div>
        )
    }

}
/**
 * state dùng để quản lí dữ liệu trong component
 * - phạm vi : bên trong component
 */
