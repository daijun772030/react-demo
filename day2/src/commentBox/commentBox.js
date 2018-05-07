import React ,{Component} from 'react';
import './commentBox.css'
import ComList from '../commentList/commentList'
import ComForm from '../commentForm/commentForm'
class comBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1,author:"张三",date:"三天前",content:"马上要就业了"},
                {id:2,author:"李四",date:"三天前",content:"马上要就业了"},
                {id:3,author:"王五",date:"三天前",content:"哈哈"},
                {id:4,author:"赵六",date:"三天前",content:"救不了"},
                {id:5,author:"李鑫",date:"三天前",content:"找工作怎么办"} 
            ]
        }
    }
    // 跟新的方法
    myUpdate(obj){
        // 这里是在更该数据
        console.log(obj)
        let currentData = this.state.data
        currentData.push(obj)
        this.setState({
            data:currentData
        })
        console.log(this.state.data)
    }

    render(){
        return(
            <div className="myBox">
                <div>
                    <h1>
                       评论
                    </h1>
                </div>
                <ComForm onUpdate = {this.myUpdate.bind(this)}/>
                <ComList data= {this.state.data}/>
            </div>
        )
    }
}
export default comBox;