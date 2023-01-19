import React from 'react';
import { Link } from 'react-router-dom';

import logo from './infv2.svg';
import './start.scss';

function StartScreen() {
  return (
    <header className="App-header">
      <h1 className="text-logo">Заграва</h1>
      <img src={logo} className="logo" alt="logo" />
      <p>Ну дуже цікава гра</p>

      <Link className="a" to="/info">
        Далі
      </Link>
    </header>
  );
}

export default StartScreen;

// // import './start.scss'
// import './startScreen.scss';

// const StartScreen = () => {
//   return (
//     <div className="game-box">
//       <form>
//         <div className="start_screen">
//           <h1 className="text_logo">Заграва</h1>

//           <div className="logo"></div>

//           <h3 className="text">ну дуже цікава гра</h3>
//           <span>
//             <Link className="a" to="/info">
//               ПОЧАТИ!
//             </Link>
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default StartScreen;

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//         <meta name="description" content="Pinegrow Web Editor - Directory Bootstrap v5 Template">
//         <meta name="author" content="">
//         <title>Pinegrow | Bootstrap Blocks Template</title>
//         <!-- Bootstrap core CSS -->
//         <link href="bootstrap_theme/bootstrap.css" rel="stylesheet" type="text/css">
//         <link rel="stylesheet" href="blocks.css">
//         <!-- Custom styles for this template -->
//         <link href="style.css" rel="stylesheet">
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Unbounded&display=swap">
//     </head>

// <body class="background-center-center background-cover bg-dark bg-gradient bg-opacity-75 d-inline float-none fst-italic h-25 opacity-100 placeholder-wave position-relative shadow text-center w-25">
//   <section class="pb-5 pt-5 text-center" data-pg-collapsed>
//     <div class="background-cover container pb-5 pt-5 text-white">
//       <div class="pb-5 pt-5 row">
//         <h1 class="display-4 fw-bold mb-3 text-white">Заграва</h1>
//       </div>
//       <p class="fw-light lead mb-4 text-white">ну дуже цікава гра</p>
//       <a href="#" class="bg-secondary btn btn-primary pe-3 ps-3">
//         Далі
//       </a>
//     </div>
//   </section>
//   <div className="baner">
//     <div
//       className="baner-conteiner"
//       class="background-center-center border-light flex-column fst-italic text-capitalize text-light"
//     >
//       <div className="logo"></div>
//     </div>
//   </div>
//   <title>title</title>
//   <div class="container"></div>
// </body>;
