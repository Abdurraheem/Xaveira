import { Card } from 'antd';
import { useState } from 'react';
import MakeShopYourHome from './Shop/MakeShopYourHome';

const tabListNoTitle = [
  {
    key: 'makeShopYourHome',
    label: 'Make Shop Your Home',
  },
  {
    key: 'shopOnline',
    label: 'Shop OnLine',
  },
  {
    key: 'shopAtStore',
    label: 'Shop At Store',
  },
];
const contentListNoTitle = {
  makeShopYourHome: <MakeShopYourHome />,
  shopOnline: <p>app content</p>,
  shopAtStore: <p>project content</p>,
};




const Dashboard = () =>{
   const [activeTabKey2, setActiveTabKey2] = useState('shopOnline');
  
    const onTab2Change = (key) => {
      setActiveTabKey2(key);
    };
    return (
        <>
  
        <br />
        <br />
        <Card
          style={{
            width: '100%',
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={onTab2Change}
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </>
    )
}


export default Dashboard;