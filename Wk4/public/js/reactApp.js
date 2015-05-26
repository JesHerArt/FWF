/** @jsx React.DOM */
 
 
var Title  = React.createClass({
	render: function() {
		return (
			<div className="title">
	 			<h1>{this.props.text}</h1>
                        </div>
 		);
	}
});


var Photo  = React.createClass({
	render: function() {
		return (
			<div className="col-sm-3 col-md-2">
	 			<div className="thumbnail">
					<img className="img-responsive" src={this.props.img}/>
	                        </div>
                        </div>
 		);
	}
});



var PhotoList = React.createClass({
	loadInstagram: function() {
	    $.ajax({
			url: "https://api.instagram.com/v1/media/popular?client_id=07ac1694767e4bf7b16e6e4f81576798",
			dataType: 'jsonp',
			success: function(data) {
				this.setState({data: data.data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
  	},
 
  	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function() {
    	this.loadInstagram();
    	setInterval(this.loadInstagram, 3000
    	);
  	},
 
	render : function(){
		var photoList = this.state.data.map(function(photo){
			return(
				<Photo img={photo.images.low_resolution.url} />
			)
		});
	return(
		<div>
		<div className="row">
			<div className="col-md-12">
				<Title text="Instagram photo Viewer" />
			</div>
		</div>
		<div className="row"> 
			{photoList}
		</div>
		</div>
		);
	}
});



React.render(
	<PhotoList />,
	document.getElementById('container')
);