import React, { PureComponent } from 'react';
import './css/style.scss';

export default class Msg extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msgData: [
        {
          id: 1,
          info: '111111111111'
        },
        {
          id: 2,
          info: '222222222222'
        },
        {
          id: 3,
          info: '333333333333'
        },
        {
          id: 4,
          info: '444444444444'
        },
        {
          id: 5,
          info: '555555555555'
        },
        {
          id: 6,
          info: '111111111111'
        }
      ]
    };
    this.msgWrap = React.createRef();
    this.msgContainer = React.createRef();
  }
  componentDidMount() {
    this.msgSwiper();
  }
  msgSwiper() {
    const { msgData } = this.state;
    const { height } = this.msgContainer.current.getBoundingClientRect();
    let sumHeight = 0;
    let speed = 0.7;
    let index = 0;
    setInterval(() => {
      const msgWrap = this.msgWrap.current;
      var timer;
      if (index === msgData.length - 1) {
        index = 0;
        msgWrap.style.top = 0;
      }
      timer = requestAnimationFrame(function fn() {
        if (parseInt(sumHeight) <= height) {
          msgWrap.style.top = `${-parseInt(sumHeight + index * height)}px`;
          sumHeight += speed;
          timer = requestAnimationFrame(fn);
        } else {
          index++;
          sumHeight = 0;
          cancelAnimationFrame(timer);
        }
      });
    }, 2000);
  }
  render() {
    const item = data => {
      return data.map(item => {
        return (
          <li className="top-msg-item" key={item.id}>
            {item.info}
          </li>
        );
      });
    };
    return (
      <div className="top-msg">
        <div className="top-msg-box" ref={this.msgContainer}>
          <ul className="top-msg-wrap" ref={this.msgWrap}>
            {item(this.state.msgData)}
          </ul>
        </div>
      </div>
    );
  }
}
