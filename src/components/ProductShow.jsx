import React from "react";
import "../styles/styles.css"; // Adjust the path as needed

function ProductShow() {
  const promptLogin = () => {
    const userResponse = window.confirm(
      "Please log in or register to proceed with your purchase."
    );
    if (userResponse) {
      // Redirect to login page
      window.location.href = "/login"; // Update the URL as per your login page
    }
  };

  return (
    <section id="e-showroom">
      <h2>Our E-prod</h2>
      <p className="section-description">
        Explore our exclusive collection of products.
      </p>

      {/* Living Room Furniture */}
      <div className="category">
        <div className="category-header">
          <h3>Grocery Products</h3>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="/img/sofa.jpg" alt="Elegant Sofa" />
            </div>
            <div className="product-details">
              <h3>Mango</h3>
              <p className="price">$7</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/coffee-table.jpg" alt="Modern Coffee Table" />
            </div>
            <div className="product-details">
              <h3>Coffee</h3>
              <p className="price">$2</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/armchair.jpg" alt="Comfortable Armchair" />
            </div>
            <div className="product-details">
              <h3>Pine Apple</h3>
              <p className="price">$4</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Apple</h3>
              <p className="price">$5</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Orange</h3>
              <p className="price">$3</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Avocado</h3>
              <p className="price">$5</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Milk</h3>
              <p className="price">$8</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Vegetable</h3>
              <p className="price">$4</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShow;
