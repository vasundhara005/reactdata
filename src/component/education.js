import React ,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
	render(){
		return(
			<Grid>
			  <Cell col={3}>
                
                <p>{this.props.yearofpassing}</p>
			  </Cell>
			  <Cell col={9}>
			      <h3 style={{marginTop: '0px'}}>{this.props.schoolName}</h3>
			      <h5>{this.props.description}</h5>
			  </Cell>
			</Grid>
			)
	}
}
export default Education;