import "../styles/cart.css";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Reviews from "../components/Reviews";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);

  if (!cart) return <p>Loading...</p>;

  if (cart.length === 0) return <p>No items in the cart</p>;

  const handleQuantityChange = (productId, quantity) => {
    localStorage.setItem(
      "e-commerce-cart",
      JSON.stringify(
        cart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: quantity,
                totalPrice: item.price * quantity,
              }
            : item
        )
      )
    );

    setCart((prev) => {
      return prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + quantity,
              totalPrice: product.price * quantity,
            }
          : product
      );
    });
  };

  const handleDelete = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);

    localStorage.setItem("e-commerce-cart", newCart);
    setCart(newCart);
  };

  return (
    <>
      <div className="cart-page-container">
        <h2>Shopping Cart</h2>

        <ul className="cart-container">
          {cart.map((item) => (
            <li key={item.id}>
              <div className="image-container">
                <img src={item.image} alt="" />
              </div>

              <section>
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Reviews product={item} />

                <h4>Price: R{item.totalPrice.toFixed(2)}</h4>

                <div>
                  <div className="quantity">
                    <label htmlFor="">Qty: </label>
                    <select
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      defaultValue={item.quantity}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>

                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </div>

      <section className="checkout-section">
        <h4>
          SubTotal({cart.length} Items): R
          {cart
            .map((product) => {
              return product.totalPrice;
            })
            .reduce((total, price) => {
              return (total += price);
            })
            .toFixed(2)}
        </h4>

        <button>Proceed to Checkout</button>
      </section>
    </>
  );
};

export default Cart;
