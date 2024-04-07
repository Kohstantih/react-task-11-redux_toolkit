import { Link } from 'react-router-dom';

import { Button, Result } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

import './NotFound.css';

export default function NotFound() {
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to='/' ><Button type='primary' icon={<RollbackOutlined />}>На главную</Button></Link>}
            />
        </>
    )
}