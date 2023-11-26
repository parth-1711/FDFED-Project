
// require help.css

import React, { useState } from 'react';

const HelpPage = () => {
  const [queryValue, setQueryValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your AJAX request or any other form submission logic here
    console.log('Form submitted successfully!');
    setQueryValue('');
    alert('Form submitted');
  };

  return (
    <div style={{ }} >
      <head >
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        
        <link rel="icon" type="image/x-icon" href="logo.png" />
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
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <link rel="stylesheet" href="/CSS/navbar.css" />
        <link rel="stylesheet" href="/CSS/help.css" />
      </head>

      {/* Navbar */}
      
        <div className="container" style={{ borderRadius: '20px', marginLeft: '16%',marginTop:'10%',  backgroundColor: 'rgb(246, 248, 248)'}}>
          <div className="help-header" style={{ width: '100%' }}>
            <h2 style={{ color: 'rgb(79, 79, 79)', paddingTop: '40px' }}>HI, WE ARE HERE TO HELP YOU !</h2>
          </div>

          <div className='category-container' style={{ width:'100%'}}>
            {/* Category Blocks */}
            <div className="category-block1">
              <a href="/FAQ">
                <i className="fa fa-user" style={{ fontSize: '60px', color: 'rgb(107, 19, 189)' }}></i>
              </a>
              <div className="category-title" style={{ paddingTop: '20px' }}>
                SELLER FAQS
              </div>
            </div>
            <div className="category-block2">
              <a href="/FAQ">
                <i className="fa fa-user" style={{ fontSize: '60px', color: 'rgb(107, 19, 189)' }}></i>
              </a>
              <div className="category-title" style={{ paddingTop: '20px' }}>
                BUYER FAQS
              </div>
            </div>

            {/* General Queries */}
            <div className="category-block3">
              <a href="/FAQ">
                <i className="fa fa-question-circle" style={{ fontSize: '60px', color: 'rgb(107, 19, 189)' }}></i>
              </a>
              <div className="category-title" style={{ paddingTop: '20px' }}>
                GENERAL QUERIES
              </div>
            </div>
            {/* Legal Information */}
            <div className="category-block4">
              <a href="/FAQ">
                <i className="fa fa-info-circle" style={{ fontSize: '60px', color: 'rgb(107, 19, 189)' }}></i>
              </a>
              <div className="category-title" style={{ paddingTop: '20px' }}>
                LEGAL INFORMATION
              </div>
            </div>
          </div>
          <hr style={{ marginTop: '40px' }} />
          <div className="query-box" style={{ backgroundColor: '#e1e6f3' }}>
            <br />
            <div className="help-header" style={{ width: '70%' }}>
              <h2 style={{ color: 'black', fontSize: '23px' }}>Couldn't find what you are looking for?</h2>
            </div>
            <form id="help-form" action="/help" method="post" onSubmit={handleSubmit}>
              <label htmlFor="query" style={{ color: 'rgb(53, 53, 53)', fontSize: '18px', marginLeft: '10px' }}>
                Contact us
              </label>
              <br />
              <div className="text-back">
                <textarea
                  name="query"
                  id="query"
                  cols="30"
                  rows="10"
                  className="query"
                  placeholder="Enter your concern here.."
                  style={{ backgroundColor: 'rgb(255, 253, 253)' }}
                  value={queryValue}
                  onChange={(e) => setQueryValue(e.target.value)}
                ></textarea>
                <img src="\images\fsd-product\help.jpg" className="help-img" width="" alt="imdfhft" />
              </div>
              <br />
              <button type="submit" className="sbtbtnq" style={{ marginLeft: '10px', marginBottom: '40px', marginTop: '10px' }}>
                Submit
              </button>
            </form>
          </div>
          <br />
        </div>

        <script>
          {/* Your jQuery script */}
        </script>
    
    </div>
  );
};

const Navbar = () => {
  // Assume Navbar component implementation here
  return <div>Navbar Component</div>;
};

export default HelpPage;
