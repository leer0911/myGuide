import React, { PureComponent } from 'react';
import { Progress } from 'antd-mobile';
import './css/style.scss';
import classNames from 'classnames';

export default class Tree extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      treeIsClick: false
    };
  }
  clickTree() {
    const { treeIsClick } = this.state;
    if (treeIsClick) {
      return;
    }
    this.setState(
      {
        treeIsClick: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            treeIsClick: false
          });
        }, 1000);
      }
    );
  }
  render() {
    const { treeIsClick } = this.state;
    return (
      <div className="grow-wrap">
        <Progress percent={40} position="fixed" appearTransition />
      </div>
    );
  }
}
