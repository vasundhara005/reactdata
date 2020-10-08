import React ,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
class Resume extends Component {
	render(){
		
		return(
			<div>
			    <Grid>
			        <Cell col={4}>
			            <div style={{ textAlign:'center' }}>
			               <img 
			                 src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11814709.jpg"
			                 alt="profile"
			                 style={{height:'200px'}}

			               />
			            </div>
			            <h2 style={{ paddingTop:'2em'}}> vinay</h2>
			            <h4 style={{ color: 'grey'}}> student</h4>
			            <hr style={{borderTop: '3px solid #833fb2' , width:'50%'}}/>
			            <h5>Roll number </h5>
			            <p>17B81A04E1</p>
			            <h5>Email</h5>
			            <p>vasundhrasiriki@gmail.com</p>
			            <hr style={{borderTop: '3px solid #833fb2' , width:'50%'}}/>
			            <h5>Address</h5>
			            <p>20-125,velam pet colony ,kaikaluru,krishna district</p>

			        </Cell>
			        <Cell className="resume-right-col" col={8}>
			            <h2>Education</h2>
			            <h3>year of passing       Institute</h3>


			            <Education
			            yearofpassing={2021}
			            schoolName="sir c r reddy college of engineering"
			            description="b.tech"
			            />
			            <Education
			            yearofpassing={2017}
			            schoolName="sri chaitanya jr college"
			            description="intermediate"
			            />
			            <Education
			            yearofpassing={2015}
			            schoolName="gandhinagar mch school"
			            description="ssc"
			            />
			            <hr style={{borderTop: '3px solid #e22947'}}/>
			            <h2>skills </h2>
			            <Skills
			            skill="python" 
			            />
			            <Skills
			            skill="c" 

			            />
			            <Skills
			            skill="web design" 

			            />
			            
			             





			        </Cell>

			</Grid>

			</div>
			)
	}
}
export default Resume; 