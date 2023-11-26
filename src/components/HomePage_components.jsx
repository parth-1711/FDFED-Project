import React from 'react';
import './CSS/HomeStyles.css';
import './CSS/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


const MyComponent = () => {
  return (
    <div>
      <link rel="icon" type="image/x-icon" href="/images/logo.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

    </div>
  );
};






const Categories = () => {
  return (
    <div className = "container1">
      <div className = "catcon">
        <a className = "category_1" href="/electronics">
          <div className = "categories">
            <img
              className = "catimg"
              src="/images/electronicscat.png"
              alt="elecimg"
            />
            <h6>Electronics</h6>
          </div>
        </a>
        <a className = "category_1" href="/automobile">
          <div className = "categories">
            <img className = "catimg" src="/images/automobiles.png" alt="autoimg" />
            <h6>Automobiles</h6>
          </div>
        </a>
        <a className = "category_1" href="/electronics">
          <div className = "categories">
            <img
              className = "catimg"
              src="/images/electronicscat.png"
              alt="elecimg"
            />
            <h6>Moibles</h6>
          </div>
        </a>
        <a className = "category_1" href="/electronics">
          <div className = "categories">
            <img
              className = "catimg"
              src="/images/electronicscat.png"
              alt="elecimg"
            />
            <h6>Furniture</h6>
          </div>
        </a>
        <a className = "category_1" href="/electronics">
          <div className = "categories">
            <img
              className = "catimg"
              src="/images/electronicscat.png"
              alt="elecimg"
            />
            <h6>Fashion</h6>
          </div>
        </a>
        <a className = "category_1" href="/electronics">
          <div className = "categories">
            <img
              className = "catimg"
              src="/images/electronicscat.png"
              alt="elecimg"
            />
            <h6>Hardware</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

const Corousel = () => {
  const heightstyle = {
    height:'35rem'
  };
  return (
    <div className = "carousel">

    <div id="carouselExampleSlidesOnly" className = "carousel slide" data-bs-ride="carousel">
      <div className = "carousel-inner">
        <div className = "carousel-item active">
          <div className = "imgtitle">
            Electronics
          </div>
          <img src="/images/home-appliances.jpg" className = "d-block w-100" alt="empty cell" style={heightstyle}/>
        </div>
        <div className = "carousel-item">
          <div className = "imgtitle">
            Automobiles
          </div>
          <img src="/images/cars.jpg" className = "d-block w-100" alt="empty cell" style={heightstyle}/>
        </div>
        <div className = "carousel-item">
          <div className = "imgtitle">
            Mobile Phones
          </div>
          <img src="/images/mobile.jpg" className = "d-block w-100" alt="empty cell" style={heightstyle}/>
        </div>
        <div className = "carousel-item">
          <div className = "imgtitle">
            Furniture
          </div>
          <img src="/images/furniture1.jpeg" className = "d-block w-100" alt="..." style={heightstyle}/>
        </div>
        <div className = "carousel-item">
          <div className = "imgtitle">
            Fashion
          </div>
          <img src="/images/fashion5.jpg" className = "d-block w-100" alt="..." style={heightstyle}/>
        </div>
        <div className = "carousel-item">
          <div className = "imgtitle">
            Hardware Tools
          </div>
          <img src="/images/hardware3.jpg" className = "d-block w-100" alt="..." style={heightstyle}/>
        </div>

      </div>
    </div>
  </div>
  )
}

const Recommendations = () => {
  const productList = [
    {
      _id: '1',
      title: 'Sample Product 1',
      setprice: 100,
      address: 'Sample Address 1',
    },
    {
      _id: '2',
      title: 'Sample Product 2',
      setprice: 150,
      address: 'Sample Address 2',
    },
    {
      _id: '3',
      title: 'Sample Product 3',
      setprice: 150,
      address: 'Sample Address 2',
    },
    {
      _id: '4',
      title: 'Sample Product 4',
      setprice: 150,
      address: 'Sample Address 2',
    },
    {
      _id: '1',
      title: 'Sample Product 1',
      setprice: 100,
      address: 'Sample Address 1',
    },
    {
      _id: '2',
      title: 'Sample Product 2',
      setprice: 150,
      address: 'Sample Address 2',
    },
    {
      _id: '3',
      title: 'Sample Product 3',
      setprice: 150,
      address: 'Sample Address 2',
    },
    {
      _id: '4',
      title: 'Sample Product 4',
      setprice: 150,
      address: 'Sample Address 2',
    },
  ];
  const imagesArray = [
    'sample-image-1.jpg',
    'sample-image-2.jpg',
    'sample-image-1.jpg',
    'sample-image-2.jpg',
    'sample-image-1.jpg',
    'sample-image-2.jpg',
    'sample-image-1.jpg',
    'sample-image-2.jpg'
  
  ];
  return (
    <div>
    <div className="recom">
      <h3>Fresh Recommendations For You</h3>
    </div>
    <div className="cardscon">
      <div className="category1">
        <div className="container">
          {productList.slice(0, 16).map((product, index) => (
            <a key={index} href={`/product?param=${product._id}`}>
              <div
                className="card"
                style={{
                  width: '18rem',
                  height: '21.5rem',
                  margin: '15px',
                  float: 'left',
                  position: 'static',
                  borderRadius: '5px',
                }}
              >
                <img
                  className="card-img-top"
                  src={`/images/fsd-product/${imagesArray[index]}`}
                  style={{ objectFit: 'contain' }}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="pdttitle" style={{ overflow: 'hidden' }}>
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <div className="pdtprice">
                    <h5>₹{product.setprice}</h5>
                  </div>
                  <hr style={{ marginTop: 0 }} />
                  <div className="pdtdesc">{product.address}</div>
                  <div style={{ color: 'rgb(101, 101, 101)', fontSize: '13px', paddingLeft: '2px' }}>
                    posted 5 days ago
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export {MyComponent, Categories, Corousel, Recommendations};
