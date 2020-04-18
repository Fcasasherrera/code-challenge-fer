import React from "react";
import { List, Typography, Divider, Button } from 'antd';
type Props = {

};
const data = [
    'Quickbooks Online.',
    'Record Maestro.',
    'Variety Magazine.',
];
type ListLinksType = React.FC<Props>;

export const ListLinks: ListLinksType = (props) => {
  return (
    <List
        size="small"
        dataSource={data}
        renderItem={item => 
        <List.Item>
            <a className="button-list">
                {item}
            </a>
        </List.Item>}
    />
  );
};