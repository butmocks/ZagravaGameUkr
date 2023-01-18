import React from 'react';
import { Link } from 'react-router-dom';

import GameTask from './GameTask.jsx';
import ColorGameType from '../colorGameType/ColorGameType.jsx';

class TextTask extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchTask(this.props.task);
  }

  // taskId = (Math.floor(Math.random() * 50))

  fetchTask = () => {
    fetch(`http://localhost:2999/red/${Math.floor(Math.random() * 200)}`)
      .then(response => response.json())
      .then(taskData => {
        this.setState({
          taskData,
        });
      });
  };
  render() {
    return (
      <form className="login-box">
        <GameTask taskData={this.state.taskData} />

        {/* <button className="btn" type="refresh" onClick={() => this.setText()}>
      Далі
      </button> */}
        <div>
          <Link className="a" to="/texttask">
            Наступне
          </Link>
        </div>
        <div>
          <Link className="a" to="/texttask">
            Назад
          </Link>
        </div>

        {/* <button className="btn">
        <Link to="/" >На головну</Link>
      </button>

      <button className="btn">
         <Link to="/gametype">Вибір режиму гри</Link>
      </button> */}
      </form>
    );
  }
}

export default TextTask;
