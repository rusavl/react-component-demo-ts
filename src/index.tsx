import React from 'react';
import ReactDOM from 'react-dom';
import ActionSheets from './components/ActionSheets';
import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {
  showActionSheet = () => {
    ActionSheets.show();
  };
  hideActionSheet = () => {
    ActionSheets.hide();
  };
  setActionSheetConfig = () => {
    ActionSheets.setParams('这是传递过来的值，保存在实例中');
  };
  render() {
    return (
      <div className="main-wrapper">
        <button onClick={this.showActionSheet}>showSheet</button>
        <button onClick={this.hideActionSheet}>hideSheet</button>
        <button onClick={this.setActionSheetConfig}>setParams</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
