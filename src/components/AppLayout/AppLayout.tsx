import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { NavLink, Outlet } from "react-router-dom";

const menuList = [
    {
        text: 'Главная',
        link: '/'
    },
    {
        text: 'Избранное',
        link: '/favorites'
    },
  ];

export default function AppLayout() {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white', marginBottom: '30px' }} >
                <Menu
                    style={{display: 'flex', justifyContent: 'center', width: '100%'}}
                    mode="horizontal"
                    items={
                        menuList.map((item, index) =>  {
                            return { label: (<NavLink to={item.link}>{item.text}</NavLink>), key: index }
                        })
                    }
                />          
            </Header>
            <Content>                
                <Outlet />
            </Content>
        </Layout>
    )
}
