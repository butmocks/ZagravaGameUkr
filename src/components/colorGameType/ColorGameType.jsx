import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './colorGameType.scss';
import Header from '../menu/Header';

const white = `«Білий» - «найм'якіший» і в основному зводиться до розповідей, розмов та спогадів на еротичні теми.`;
const yellow = `Уявивши собі, що великий палець руки чоловіка зовсім не палець, дівчина бере його в рот і дражнить джентльмена, заводячи його своєю грою. Якщо він правильно поводитиметься і далі, він має шанс випробувати це «по-дорослому». Дівчина чесно зізнається, що треба робити для цього.`;
const pink = `М'ятний чай дуже смачна та корисна річ, особливо у грі «Фанти», та ще зі шматочками льоду на додачу! Чоловік лягає на край ліжка з розсунутими ногами, а дівчина заварює свіжий м'ятний чай і, зачекавши, коли він трохи охолоне, починає своє чаювання. Але натомість солодкого у неї не менш приємне та цікаве частування. Зробивши ковток дуже теплого чаю і не до кінця проковтуючи його, панночка бере в рот член і смокче його замість цукерки. Як тільки він почне твердіти, вона перериває свої ласки і відразу проводить по стовбуру і мошонці шматочком льоду. Головне при цьому відсунути убік чашку, адже ризик, що її відфутболять до стелі надзвичайно великий! Дівчина повторює таке кілька разів, захоплено експериментуючи з льодом, чаєм та «цукеркою». Джентльмен ухвалює рішення про перехід до наступного фанта.`;
const red = `Чоловік відносить дівчину в крісло або на стілець і кохається з нею таким чином і в таких позах, які йому самому найбільше подобаються. Урізноманітнюючи техніку сексу, змінюючи положення тіл, інтенсивність, силу і глибину любовних поштовхів, він щиро насолоджується дійством. Прислухаючись до прохань і побажань панночки, він намагається зробити їй максимальне задоволення і не кінчає без дозволу. Рішення про перехід до наступного фанта приймає дівчина.`;
// const gameTypeSelect = [white, yellow, pink, red];
const ColorGameType = () => {
  const [level, setLevel] = useState(white);
  const handleChange = event => {
    setLevel(event.target.value);
  };
  // console.log(<ColorGameType />);

  return (
    <div className="login-box">
      <Header />
      <h1 className="user-box">Виберіть режим гри</h1>
      <span className="text">{level}</span>

      {/* <h2>Рівень</h2> */}
      <form className="text">
        <div className="">
          <input type="radio" value={white} checked={level === white} onChange={handleChange} />
          {'Білий'}
        </div>
        <div className="text">
          <input type="radio" value={yellow} checked={level === yellow} onChange={handleChange} />
          {'Жовтий'}
        </div>

        <div className="text">
          <input type="radio" value={pink} checked={level === pink} onChange={handleChange} />
          {'Рожевий'}
        </div>
        <div className="text">
          <input type="radio" value={red} checked={level === red} onChange={handleChange} />
          {'Червоний'}
        </div>
      </form>

      <Link className="a" to="/texttask">
        Почнемо
      </Link>
    </div>
  );
};
export default ColorGameType;
