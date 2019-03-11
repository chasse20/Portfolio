import React from "react";

export default class Button extends React.PureComponent
{
	render()
	{
		const tempStyle = this.props.style;
		
		return (
			<div className={ tempStyle.button }>
				<h3 className={ tempStyle.h3 }>{ this.props.text }</h3>
				<div className={ tempStyle.bar }>
					<div className={ tempStyle.icon }>
						<img src={ this.props.icon } alt=""/>
					</div>
					<div className={ tempStyle.right }/>
				</div>
			</div>
		);
	}
}