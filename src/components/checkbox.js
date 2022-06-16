import { Checkbox } from 'antd';
import './checkbox.css'
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const checkbox = () => <Checkbox className='checkbox' onChange={onChange}>Remember Password</Checkbox>;

export default checkbox;