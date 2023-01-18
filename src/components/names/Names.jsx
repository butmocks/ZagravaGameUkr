import React, { Component } from 'react';
// import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';
import { Link } from 'react-router-dom';
import Header from '../menu/Header';
import './names.scss';

class Names extends Component {
  state = {
    userData: {
      guyName: 'Хлопцю',
      girlName: 'Дівчина',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };
  render() {
    const { userData } = this.state;

    return (
      <div className="login-box">
        <Header />
        <h1 className="text">
          {`Вітаю у грі Заграва, ${userData.guyName} та ${userData.girlName}`}
        </h1>
        <h2>Додайте свої імена</h2>

        <Profile userData={userData} handleChange={this.handleChange} />

        <Link className="a" to="/gameType">
          Почати гру
        </Link>
      </div>
    );
  }
}
export default Names;
