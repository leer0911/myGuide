import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import WaterList from './WaterList';
import CheckIn from './CheckIn';
import WaterLog from './WaterLog';
import Msg from './Msg';
import Bottle from './Bottle';
import Tree from './Tree';
import GrowProcess from './GrowProcess';
import Steps from './steps';
import 'intro.js/introjs.css';

export default class Garden extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: '.bottle-wrap',
          intro: '点击浇水，小树快快长大~',
          position: 'left'
        },
        {
          element: '.water-list-click',
          intro: '点击这里可以那水滴哦'
        },
        {
          element: '.water-list-step',
          intro: '22222222222222'
        },
        {
          element: '.checkin-click',
          intro: '每日签到有水滴和惊喜礼品哦'
        },
        {
          element: '.checkin-step',
          intro: '22222222222222'
        },
        {
          element: '.water-log-click',
          intro: '这里记录这你和小树的故事哦'
        }
      ]
    };
  }
  componentDidMount() {}
  render() {
    const { stepsEnabled, steps, initialStep } = this.state;
    return (
      <div className="graden-container">
        <Msg />
        <WaterList nextStep={this.nextStep} />
        <CheckIn nextStep={this.nextStep} />
        <WaterLog nextStep={this.nextStep} />
        <Bottle nextStep={this.nextStep} />
        <Tree />
        <GrowProcess />
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
          options={{
            showButtons: false,
            showProgress: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            showBullets: false
          }}
        />
      </div>
    );
  }
  onExit = () => {};
  nextStep = () => {
    this.setState(
      {
        stepsEnabled: false
      },
      () => {
        this.setState({
          stepsEnabled: true,
          initialStep: this.state.initialStep + 1
        });
      }
    );
  };
}
