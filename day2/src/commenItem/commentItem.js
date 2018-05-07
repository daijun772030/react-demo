import React ,{ Component } from 'react'
import './commentItem.css'

class commentItem extends Component{
    render(){
        console.log(this.props.data)
        const { data, onClick, index } = this.props;
        console.log(this.props)
        const { autor } = data;
        return(
            <div className="myItem" onClick={() => onClick(data, index)}>
                {autor}
                <h2>我是item</h2>
                <h3>评论人：{this.props.data.autor}</h3>
                <h4>评论时间：{this.props.data.date}</h4>
                <p>评论内容：{this.props.data.content}</p>
            </div>

        );
    }
}

export default commentItem;