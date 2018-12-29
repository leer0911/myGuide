import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import './css/style.scss';

export default class Bottle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bottleIsClick: false
    };
  }
  startWatering() {
    const { bottleIsClick } = this.state;
    if (bottleIsClick) {
      return;
    }
    this.setState(
      {
        bottleIsClick: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            bottleIsClick: false
          });
          this.props.nextStep();
        }, 3000);
      }
    );
  }
  render() {
    const { bottleIsClick } = this.state;
    return (
      <div className="bottle-wrap">
        <div
          className="bottle-click"
          onClick={this.startWatering.bind(this)}
          className={classNames('bottle-click', {
            'bottle-clicking': bottleIsClick
          })}
        />
        <div className="bottle-num">10 g</div>
      </div>
    );
  }
}
