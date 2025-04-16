// import React from 'react';
// import './Home.css';
// import galaxyImage from './images/galaxy.jpg'; // Sử dụng galaxy.jpg

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>The Platinum</h1>
//       <div className="content-row">
//         <div className="text-content">
//           <p>We are an experienced team of developers from Vietnam who are passionate about beautiful and simple web solutions</p>
//           <p>We apply creative technology to meet customer needs and solve complex business challenges</p>
//           <h2>What we do</h2>
//           <ul>
//             <li>Desktop app</li>
//             <li>Web app</li>
//             <li>Mobile app</li>
//             <li>Cloud app</li>
//           </ul>
//         </div>
//         <img src={galaxyImage} alt="Galaxy" className="page-image" />
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import './Home.css';
import galaxyImage from './images/galaxy.jpg'; // Hình ảnh galaxy.jpg

function Home() {
  return (
    <div className="home-container">
      <h1>The Platinum</h1>
      <div className="hero-section">
        <img src={galaxyImage} alt="Galaxy" className="hero-image" />
        <div className="hero-text">
        <p>We are an experienced team of developers from Vietnam who are passionate about beautiful and simple web solutions</p>
        <p>We apply creative technology to meet customer needs and solve complex business challenges</p>
        </div>
      </div>
    <div className='text-content'>
      <h1>What we do</h1>
          <ul>
            <li>Desktop app</li>
            <li>Web app</li>
            <li>Mobile app</li>
            <li>Cloud app</li>
          </ul>
      </div>
    </div>
  );
}

export default Home;