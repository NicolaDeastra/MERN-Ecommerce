import React, { Component } from "react";

class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/images_not_vailable.png";
    }
  }

  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        ></div>
        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="name">${props.price}</div>
          </div>
        </div>
        {props.grid ? <div className="description">lorem</div> : null}
        <div></div>
      </div>
    );
  }
}

export default Card;
