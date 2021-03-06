import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//pc
import { PC } from './pc/PC';
//mobile
import { Mobile } from "./mobile/Mobile";
//引入样式
import "./theme.less";

export class App extends React.Component{
    /**
     * 构造方法
     */
    constructor(props){
        super(props);
        this.state = {
            page: null
        };
    }

    /**
     * 构造前执行
     */
    componentWillMount(){
        console.log("app 渲染前");

        window.removeEventListener('resize', () => this.updateSize());
        this.updateSize();
        window.addEventListener('resize', () => this.updateSize());
        console.log("app.js resize listener is added.");
    }

    componentDidMount(){
        console.log("app 渲染后");
    }

    /**
     * 更新界面
     */
    updateSize = () => {
        if(document.body.clientWidth > 768){
            this.setState({ page: 'PC' });
        }else{
            this.setState({ page: 'Mobile' });
        }
    };
    /**
     * 构造app
     */
    render(){


        return(
            <BrowserRouter>
                <div className="bcu-body">
                    { this.state.page === 'PC' ? <PC/> : null }
                    { this.state.page === 'Mobile' ? <Mobile/> : null }
                    {/*<Route exact path="/" component={Home}/>*/}
                    {/*<Route path="/details" component={Details}/>*/}
                </div>
            </BrowserRouter>
        );
    }
}