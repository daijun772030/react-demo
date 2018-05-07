import React ,{Component} from 'react'
import ComItem from './../commenItem/commentItem'
import './commentList.css'

class commentList extends Component{
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
        console.log(this.props.tdata)
    }

    // getInitalState(){
    //     this.getData()
    // }
    // getData(){
    //     console.log("向服务器发起请求")
    // }


    state = {
        commenArr: [
            {id:1,autor:"张三",date:"三天前",content:"马上就要就业了"},
            {id:2,autor:"张三",date:"三天前",content:"马上就要就业了"},
            {id:3,autor:"张三",date:"三天前",content:"马上就要就业了"},
            {id:4,autor:"张三",date:"三天前",content:"马上就要就业了"}
        ]
    }

    itemClick(item, index) {
        // console.log(item,index)
        const { autor } = item;
        let newAutor = autor + Math.ceil(Math.random()*100);
        let { commenArr } = this.state;
        // let newCommenArr = JSON.parse(JS ON.stringify(commenArr));
        // commenArr.splice(index, 1, { ...item, autor: newAutor });
        commenArr[index].autor = newAutor;
        // 这里是修改内部的state方法，这是重点
        this.setState({
            commenArr
        });
    }

    render(){
        const { commenArr } = this.state;
        return(
            <div className="myList">
                <p>
                    这是儿子辈
                </p>
                {commenArr.map((item, index) => {
                    // console.log(item,index)
                    return (<ComItem key={item.id} index={index} data={item} onClick={this.itemClick}/>);
                })}
                
            </div>
        )
    }
}

export default commentList