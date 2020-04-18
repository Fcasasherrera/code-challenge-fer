import React from "react";
import { Col, Card, Skeleton, Avatar } from 'antd';
const { Meta } = Card;
type Props = {
  title: string;
  description: string;
  loading?: boolean;
  image: string;
  className?: string;
};
type CardChatType = React.FC<Props>;

export const CardChat: CardChatType = ({
  title,
  description,
  loading = true,
  image = "",
  className = "",
}) => {
  return (
    <Col span={24}>
        <Card className={className}>
            <Skeleton loading={loading} avatar active>
                <Meta
                avatar={
                    <Avatar src={image} />
                }
                title={title}
                description={description}
                />
            </Skeleton>

            <p className="content-card">Card content</p>
        </Card>
    </Col>
  );
};