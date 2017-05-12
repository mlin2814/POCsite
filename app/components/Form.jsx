var React = require('react');

var Form = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var info = this.refs.info.value;

		if (info.length > 0) {
	      this.refs.info.value = '';
	      this.props.onSearch(info);
	    }
	},
	render: function(){		
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
	        		<input type="search" ref="info" placeholder="Enter your text here"/>
	        		<button className="button expanded">Submit Your Information</button>
	      		</form>
			</div>
		);
	}
});


module.exports = Form;