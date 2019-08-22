import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	// an example of component state 
	state = {
		title : ''	
	}
	// [e.target.name] = as long as the name and value are corresponding with each other
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	onSubmit = (e) => {
		e.preventDefault();	
		this.props.addTodo(this.state.title);
		this.setState({title: ''});
	}
	render(){
		return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
				<input 
					type = "text" 
					name = "title" 
					placeholder = "Add Todo..." 
					style={{flex:'10', padding:'5px'}} 
					value = {this.state.title}
					onChange={this.onChange}
				/>
				<input type = "submit" value = "Submit" className = "btn" style={{flex:'1'}}/>
			</form>
		)
	}	
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
}
export default AddTodo;