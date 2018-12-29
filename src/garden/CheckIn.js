import React, { PureComponent, Fragment } from 'react';
import { Modal, Button, Flex } from 'antd-mobile';
import './css/style.scss';

export default class CheckIn extends PureComponent {
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
      setTimeout(() => {
        this.props.nextStep();
      }, 500);
    };
  }
  onClose(key) {
    return () => {
      this.setState({
        [key]: false
      });
    };
  }
  clickCheckIn(e) {
    e.preventDefault();
    this.props.nextStep();
    this.setState({
      modal1: false
    });
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.showModal('modal1')} className="checkin-click" />
        <Modal
          wrapClassName="checkin-wrap"
          visible={this.state.modal1}
          onClose={this.onClose('modal1')}
          transparent
          closable
          title="Title"
        >
          <Flex justify="around" className="checkin-gift">
            <Flex.Item>1</Flex.Item>
            <Flex.Item>2</Flex.Item>
            <Flex.Item>3</Flex.Item>
            <Flex.Item>4</Flex.Item>
            <Flex.Item>5</Flex.Item>
            <Flex.Item>7</Flex.Item>
          </Flex>
          <Flex justify="center">7</Flex>
          <Flex justify="center">每周连续签满七天可开惊喜宝箱</Flex>
          <Flex justify="center">宝箱礼品</Flex>
          <Flex justify="center">
            <Flex.Item>60g水</Flex.Item>
            <Flex.Item>装扮</Flex.Item>
            <Flex.Item>优惠券</Flex.Item>
            <Flex.Item>柚币</Flex.Item>
          </Flex>
          <div className="checkin-step">
            <Button type="primary" onClick={this.clickCheckIn.bind(this)}>
              签到领10g水
            </Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
