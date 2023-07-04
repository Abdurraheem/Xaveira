import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const Description = () =>{
   const navigate = useNavigate();   
   const gotoHomeShop = () =>{
      navigate('/makeHomeShop')
   } 
   return (
    <>
    <Button type="text"  onClick={gotoHomeShop}>
          Click To Know more..!
    </Button>
    </>
     
   )
}

export default Description;