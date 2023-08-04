import './App.css';
import { useState,ChangeEvent } from 'react';
import {Button,Input} from 'antd'
function App() {
const [name,setName]= useState<string>()
  function speak(){
    console.log(name);
  }
  
  function nameChange (e:ChangeEvent<HTMLInputElement>){
    setName(e.target.value);
  }
  return <div>
    名字<Input onChange={nameChange} />
    <Button type="primary" onClick={speak}>我是翁子甯</Button>
  </div>
}


export default App;
