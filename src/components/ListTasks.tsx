import React from "react";
import { List,} from 'antd';
type Props = {

};
const data = [
    {
      title: 'Amy Trella',
      order: '9',
    },
    {
      title: 'Billie Ellish',
      order: '3',
    },
    {
      title: 'Porter Smith',
      order: '5',
    },
    {
      title: 'Dua Lipa',
      order: '1',
    },
  ];
type ListTasksType = React.FC<Props>;

export const ListTasks: ListTasksType = (props) => {
  return (
    <List
        size="small"
        dataSource={data}
        renderItem={item => 
        <List.Item>
            <a className="button-list ">
              <span className="order-list">{item.order}</span>  
              <span className="title-list">{item.title}</span>  
            </a>
        </List.Item>}
    />
  );
};