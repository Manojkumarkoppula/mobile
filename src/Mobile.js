import './Mobile.css';

function Mobile(props) {
  return (
    <div id="container">
      {/* Product Image */}
      <div id="image">
        <img src={props.productImage} alt={props.name} />
      </div>

      {/* Product Information */}
      <div id="information">
        <h3>{props.name}</h3>
        <ul>
          <li>{props.l1}</li>
          <li>{props.l2}</li>
          <li>{props.l3}</li>
          <li>{props.l4}</li>
        </ul>
      </div>

      {/* Price and Flipkart Assured Badge */}
      <div id="price">
        <p>₹ {props.price}</p>
        <img src={props.badgeImage} alt="Flipkart Assured" />
      </div>
    </div>
  );
}

export default Mobile;
