import React, { PureComponent } from 'react';
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
      <div className="tree-wrap">
        <div className="tree-bottom">
          <div
            className={classNames('tree-click', {
              'tree-clicking': treeIsClick
            })}
            onClick={this.clickTree.bind(this)}
          />
        </div>
      </div>
    );
  }
}
