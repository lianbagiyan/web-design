import React from 'react';
import './style.scss';
import Card from '../Card/index';
import { Typography } from 'antd';
import mainContentImg from '../../assets/content_image.jpg';
import image1 from '../../assets/pod_image_1.jpg';
import image2 from '../../assets/pod_image_2.jpg';
import image3 from '../../assets/pod_image_3.jpg';

const { Paragraph, Title } = Typography;

const BodySection = () => {
  return (
    <div className="body-block">
      <div className="body-block__main">
        <Title level={3} className="body-block__main__title">
          CONTENT MAIN TITLE
        </Title>
        <div className="body-block__main__divider"></div>
        <div className="body-block__main__content">
          <img
            src={mainContentImg}
            className="body-block__main__content__img"
            alt="mainContentImg"
          />
          <Paragraph className="body-block__main__content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue. Nullam at leo commodo nisi scelerisque
            congue. Nam et scelerisque diam. Curabitur vitar mollis est, vitae
            rhoncus ligula. Duis rutrum porta mi nec faucibus. Sed quis luctus
            ipsum, eget auctol sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue. Nullam at leo commodo nisi scelerisque
            congue. Nam et scelerisque diam. Curabitur vitar mollis est, vitae
            rhoncus ligula. Duis rutrum porta mi nec faucibus. Sed quis luctus
            ipsum, eget auctol sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue. Nullam at leo commodo nisi scelerisque
            congue. Nam et scelerisque diam. Curabitur vitar mollis est, vitae
            rhoncus ligula. Duis rutrum porta mi nec faucibus. Sed quis luctus
            ipsum, eget auctol sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue. Nullam at leo commodo nisi scelerisque
            congue. Nam et scelerisque diam. Curabitur vitar mollis est, vitae
            rhoncus ligula.
          </Paragraph>
        </div>
      </div>
      <div className="body-block__cards">
        <Card
          imgSrc={image1}
          title="TITLE 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue."
          btnText="MORE INFO"
        />
        <Card
          imgSrc={image2}
          title="TITLE 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue."
          btnText="MORE INFO"
        />
        <Card
          imgSrc={image3}
          title="TITLE 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo
            nisi scelerisque congue."
          btnText="MORE INFO"
        />
      </div>
    </div>
  );
};

export default BodySection;
