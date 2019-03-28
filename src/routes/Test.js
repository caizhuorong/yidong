import React, { Component }  from 'react';
import { connect } from 'dva';

class Tests extends Component {
	constructor(props) {
		super(props);
		this.state={
			a:3
		}
		console.log(this.props);
	}
	componentDidMount(){
		console.log(this);
	}
	Change(){
		console.log(1);
	}
	render(){
		return(
			<div onClick={this.Change.bind(this)}>
				<h1>mode数据{this.props.Test.a}</h1>
			    <span>路由参数{this.props.history.location.state.a}</span>
				<span>初始化参数{this.state.a}</span>
			</div>
		)
	}
}
function mapStateToProps({ Test }) {
  return {Test};
}
export default connect(mapStateToProps)(Tests);
