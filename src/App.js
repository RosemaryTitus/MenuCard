import React from 'react';
import './App.css';
import Menu from './Menu';
import Entry from './Entry';
import DisplayImage from './DisplayImage';
import Othervarient from './Othervarient';
import VarientEntry from './VarientEntry';

export default function App() {

  function MenuList(myitem)
  {
    return (<Entry
      key={myitem.id}
      name={myitem.name}
      rate={myitem.ruppee}

    />)
  }

  function OthervarientList(myvarient)
  {
    return(<VarientEntry 
      key={myvarient.id}
      name={myvarient.name}
      text={myvarient.text}
      rate={myvarient.rate}
    />)
  }
  return (
    
    <div className='mybackground'>
    <div className='myheading'>
      <h1 className='myheading1'>Ice Cream<br></br> Menu</h1>
      <h4 className='myheading4'>Get Discount 10% </h4> 
      {Menu.map(MenuList)}
       {Othervarient.map(OthervarientList)} 
      <DisplayImage/>
     
    </div>
    </div>
  );
}

 
