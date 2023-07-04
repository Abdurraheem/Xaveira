import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import image1 from '../../../Assets/makeShopYourHome.png';
import Description from './description';
const { Meta } = Card;

const MakeShopYourHome = () =>{


    return (
        <Card
        style={{
          width: '40%',
          padding: '10px 10px 10px'
        }}
        cover={
          <img
            alt="example"
            src={image1}
          />
        }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="We are available at your home"
          description={<Description />} 
        />
      </Card>
    )
}

export default MakeShopYourHome;