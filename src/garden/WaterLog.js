import React, { PureComponent, Fragment } from 'react';
import { Modal, Button, WhiteSpace, WingBlank, Steps, Flex } from 'antd-mobile';
import './css/style.scss';
const Step = Steps.Step;
export default class WaterLog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false
    };
  }
  showModal(key) {
    return e => {
      e.preventDefault(); // 修复 Android 上点击穿透
      this.setState({
        [key]: true
      });
    };
  }
  onClose(key) {
    return () => {
      this.setState({
        [key]: false
      });
    };
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.showModal('modal1')} className="water-log-click" />
        <Modal
          wrapClassName="water-log"
          visible={this.state.modal1}
          onClose={this.onClose('modal1')}
          transparent
          closable
          title="Title"
        >
          <Flex justify="around">
            <img
              src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"
              className="user-ava"
            />
            <Flex direction="column">
              <h1>周杰伦</h1>
              <span>中级园丁</span>
            </Flex>
            <img
              src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"
              className="user-lv-img"
            />
          </Flex>
          <Steps size="small" current={1}>
            <Step
              title="9月2日"
              description="周杰伦的柚子树长成树苗啦~ 在多给我点营养，我就变成参天大树。"
            />
            <Step
              title="9月1日"
              description="周杰伦种下了一颗柚子树幼苗，小幼苗长大的秘诀，浇灌满满的爱~"
            />
            <Step
              title="8月5日"
              description="周杰伦种下了一颗柚子树幼苗，小幼苗长大的秘诀，浇灌满满的爱~"
            />
          </Steps>
        </Modal>
      </Fragment>
    );
  }
}
