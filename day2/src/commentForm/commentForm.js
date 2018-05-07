import React,{Component} from 'react'

import './commentForm.css'

class CommentForm extends Component{

    addObj(){
        // 现在获取表单内容
        console.log("执行add函数")
        console.log(this.refs.djName.value,this.refs.conTent.value);
        // 这里需要组装我们的对象
        let newComment = {
            id:new Date().toLocaleTimeString(),
            author:this.refs.djName.value,
            content:this.refs.conTent.value,
            date:new Date().toLocaleDateString()
        }
        // 执行父元素box组件的自定义事件
        this.props.onUpdate(newComment)
    }
    render(){
        return(
            <div>
               <h2>
                   评论表单
               </h2>
               <label htmlFor=''>
                    内容
               </label>
               <textarea ref='conTent' name='' cols='30' rows='10' id=''>

               </textarea>
               <label htmlFor=''>评论人</label>
               <input ref='djName' type='text'/>
               <button onClick={this.addObj.bind(this)}>提交</button>
            </div>
        )
    }

}

export default CommentForm