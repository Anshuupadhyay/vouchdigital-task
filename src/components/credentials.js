import { Button } from 'antd'
import { Input } from 'antd';
import './credentials.css';
import Checkbox from './checkbox';
import axios from 'axios';
import { useState } from 'react';
const Credentials = () => {

const [showToken, setshowToken]=useState('');
const  [showErrorEmail,setshowErrorEmail]=useState(false);
const [showError,setshowError]=useState(false);
const [showSuccess, setshowSuccess]=useState(false);
const [oldemail, setemail]=useState('');
const [oldpassword, setpassword]=useState('');
const onChangehandleremail=(event)=>{
setemail(event.target.value);

}
const onChangehandlerpassword=(event)=>{
  setpassword(event.target.value);
 setshowError(false);
  }

  const submithandler=()=>{
    if(oldpassword==='')
    {
      setshowError(true);
      setshowSuccess(false);
  }
  let response=null;
  (async ()=>{
  try{
  response = await axios.post("https://reqres.in/api/login",{ "email": oldemail,
  "password": oldpassword
});
console.log(response.data);
setshowToken(response.data);
setshowErrorEmail(false);
setshowSuccess(true);
}
catch(e){
  if(oldpassword!=='')
  setshowErrorEmail(true);
  console.log(e);
  setshowSuccess(false);
  console.log(showSuccess);
}

})()

  }
  
  return (<>
  <h2 className='txt'>Welcome Back</h2>
  <p className='subtitle'>Sub-title text goes here</p>
    <Input onChange={onChangehandleremail} type={'email'} size="large" placeholder="Email Address *" style={{height:'2em',width:'18em',display:'flex',justifyContent:'center',}} />
    {showErrorEmail&&<h1 className='emailerror'>wrong email</h1>}
    <br />
    <Input onChange={onChangehandlerpassword} type={'password'} placeholder="Password *" style={{height:'2em',width:'18em',display:'flex',justifyContent:'center'}}  />
    {showError&&<h1 className='error'>Missing Password</h1>}
    
    <br />
    <Button onClick={submithandler} className='btn3' type="link">Login </Button>
    {showSuccess&&(<h1 className='success'>{"login successfull"}</h1>)}
     {showSuccess&&<h1 className='token'>{"Token:( "+showToken.token+" )"}</h1>}
    <div className='fgtcredentials'>
      <div className='chkbx'>
    <Checkbox />
    </div>
    <div className='fgtpass'>
    <span className='fgtpass'> Forgot Password?</span>
    </div>
    </div>
  </>)
};


export default Credentials;