import React from "react";
import { List,} from 'antd';
type Props = {

};
const data = [
    {
      title: '11am Directors Meeting',
      ubication: 'LA - Conference Room; NV Conference Room',
    },
    {
      title: '12pm Security Workshop',
      ubication: 'Room 8',
    },
    {
      title: '4pm All Hands Meeting',
      ubication: 'LA - Conference Room; NV Conference Room',
    },
  ];
type ListPendingsType = React.FC<Props>;

export const ListPendings: ListPendingsType = (props) => {
  return (
    <List
        size="small"
        dataSource={data}
        renderItem={item => 
        <List.Item>
            <div className="glance-card">
                <span className="text-bold">{item.title}</span><br/>
                <span className="note">{item.ubication}</span>
            </div>
        </List.Item>}
    />
  );
};