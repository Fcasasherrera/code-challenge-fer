import React from "react";
import { Carousel, Card  } from 'antd';
import messageday from '../assets/images/messageday.png'
const { Meta } = Card;
type Props = {
    outline?: boolean;
};
const data = [
    'Quickbooks Online.',
    'Record Maestro.',
    'Variety Magazine.',
];
type CarouselType = React.FC<Props>;

export const CarouselComponent: CarouselType = (props) => {
  
  return (
    <>
        {props.outline ? 
            <Carousel dotPosition="top" autoplay>
                <div className="wrapper">
                    <div className="splash_image">
                        <img src="http://fc07.deviantart.net/fs34/f/2008/290/6/4/Large_Tree_Stock_by_HauntingVisionsStock.jpg" alt="test image" />
                        <div className="splash_title">Message of the day</div>
                        <div className="splash_title second">Where there is no vision the people perish</div>
                        <div className="splash_title third">- Proverbs 29:18</div>
                    </div>
                </div>
            </Carousel> 
        :
            <Carousel dotPosition="top" autoplay>
                <Card
                    cover={<img alt="example" className="img" src="https://images-na.ssl-images-amazon.com/images/I/817pDGib6QL._AC_SL1500_.jpg" />}
                >
                    <Meta description="Tribe Kelly Promo Code is here! Be sure to get some hight quality lucious bath products used code DLUX for 20% off" />
                </Card>
                <Card
                    cover={<img alt="example" className="img" src="https://culinaryunderground.com/web2016/wp-content/uploads/2018/11/Donuts.jpg" />}
                >
                    <Meta description="It's a National Donud Day August 30, 2019! Get ready to fire your health coach for a day. Donuts arrive at 12:00 noon!" />
                </Card>
            </Carousel> 
        }
    </>
  );
};