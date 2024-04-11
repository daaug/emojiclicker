import React from 'react';
import * as ricon from 'react-icons/rx';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <IconColumn />
      <ProgressColumn />
      <UpgradesColumn />
    </div>
  );
}
export default App;

function IconColumn(){
  return (
    <div className='column'>
      <img src={logo} alt=""/>
    </div>
  );
}

function ProgressColumn(){
  return (
    <div className='column'>
      <img src={logo} alt=""/>
    </div>
  );
}

function UpgradesColumn(){
  return (
    <div className='column'>
      <UpgradeItem icon={ricon.RxCursorArrow} name={"cursor"} cost={1} />
    </div>
  );
}

function UpgradeItem( props: {
  icon: React.ComponentType<{}>, name:string, cost:number
}){
  return (
    <div className='upgradeItem'>
      <p>{ props.name }</p>
      <p>{ props.cost }</p>
    </div>
  );
}
