var React = require('react');

var Modal = React.createClass({
	getDefaultProps: function(){
		return{
			title: 'Form'
		}
	},
	propTypes: {
		title: React.PropTypes.string,
		form: React.PropTypes.string.isRequired
	},
	componentDidMount: function(){
		var modal = new Foundation.Reveal($('#modal'));
		modal.open();
	},
	render: function (){
		var {title, form} = this.props;
		return(
			<div id="modal" className="reveal tiny text-center" data-reveal="">
				<h3>{title}</h3>
				<p>{form}</p>
				<p>
					<button className="button hollow" data-close="">Close</button>
				</p>
			</div>
		);
	}

});

module.exports = Modal;