import React, { Component }  from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>{{a}}</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }
// 
// IndexPage.propTypes = {
// };
class Test extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
	}
	GoToTest(){
		console.log(this);
		const _this = this;
		_this.props.history.push({pathname:'/test',state:{a:4}});
	}
	render(){
		return(
			<div className={styles.normal} onClick={this.GoToTest.bind(this)}>
				<h1 className={styles.title}>{this.props.TestM.a}</h1>
			</div>
		)
	}
}
function mapStateToProps({ TestM }) {
  return {TestM};
}
export default connect(mapStateToProps)(Test);
