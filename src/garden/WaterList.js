import React, { PureComponent, Fragment } from 'react';
import { Modal, Button, Flex } from 'antd-mobile';
import classNames from 'classnames';
import './css/style.scss';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '每日免费领水',
    des: '奖励 10g 水，每天 5 次',
    btnName: '领取'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '每日三餐开水福袋',
    des: '7-9点，12 -14点，18-21点每次可领 10g 水',
    btnName: '未开启'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '浏览资讯详情1分钟',
    des: '奖励 10g 水，每天 3 次',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '浏览商品详情1分钟',
    des: '奖励 10g 水，每天 3 次',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '参与资讯发表回复',
    des: '奖励 20g 水，每天 2次',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '她她圈发表帖子',
    des: '奖励 20g 水，每天 2次',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '柚子街参与优惠购物',
    des: '奖励 20g 水，每天 2 次',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '邀请好友一起玩美柚果园',
    des: '奖励 100g 水，次数不限，好友输入邀请码后生效',
    btnName: '去完成'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '输入邀请码',
    des: '输入邀请码，各得100g 水滴',
    btnName: '去完成'
  }
];

export default class WaterList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false
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
  itemClick = () => {
    this.props.nextStep();
    this.setState({
      listVisible: false
    });
  };
  render() {
    const ListItem = data => {
      return data.map((item, index) => {
        return (
          <Flex
            onClick={this.itemClick}
            className={classNames('water-list-wrap', {
              'water-list-step': index === 0
            })}
            key={`list${index}`}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '80px', height: '50px', overflow: 'hidden' }}
            />
            <Flex.Item direction="column" className="water-list-box">
              <div className="water-list-tit water-list-txt">{item.title}</div>
              <div className="water-list-des water-list-txt">{item.des}</div>
            </Flex.Item>
            <Button type="primary" className="water-list-btn">
              {item.btnName}
            </Button>
          </Flex>
        );
      });
    };
    return (
      <Fragment>
        <div
          onClick={this.showModal('listVisible')}
          className="water-list-click"
        />
        <Modal
          popup
          visible={this.state.listVisible}
          onClose={this.onClose('listVisible')}
          animationType="slide-up"
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          />
          <div style={{ maxHeight: '80vh', padding: '10px' }}>
            {ListItem(data)}
          </div>
        </Modal>
      </Fragment>
    );
  }
}
