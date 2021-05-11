import React from 'react';
// import ReactDOM from 'react-dom';
import {ActionSheet} from 'antd-mobile';

let actionInstance: any;
// let ActionSheetInstance: any;

class ActionSheets extends React.Component {
  actionConfigs = {};

  dataList = [
    {url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友'},
    {url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博'},
    {url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈'},
    {url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友'},
    {url: 'SxpunpETIwdxNjcJamwB', title: 'QQ'}
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{width: 36}} />,
    title: obj.title
  }));

  getInstance() {
    const data = [
      [...this.dataList, this.dataList[2]],
      [this.dataList[3], this.dataList[4]]
    ];
    actionInstance = ActionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: 'I am description, description, description'
      },
      (buttonIndex, rowIndex) => {
        // this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
        console.log(buttonIndex, rowIndex);
      }
    );
  }
  setParams(params) {
    this.actionConfigs = params;
  }
  show() {
    console.log(this.actionConfigs);
    actionInstance = actionInstance || this.getInstance();
    return actionInstance;
  }

  hide() {
    actionInstance = null;
  }

  render() {
    return <div>我是actionsSheets</div>;
  }
}

const ActionSheetss = new ActionSheets({});
export default ActionSheetss;
