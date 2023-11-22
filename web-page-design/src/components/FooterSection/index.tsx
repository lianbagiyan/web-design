import React from 'react';
import { Menu, Typography, Row, Col } from 'antd';
import paymentLogo from '../../assets/payment_icon.png';
import licenseLogo from '../../assets/license_icon.png';
import './style.scss';

const { Title, Paragraph } = Typography;

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__about">
        {['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'].map((elem, i) => (
          <div key={i}>
            <Title level={4} className="footer-container__about__title">
              SECTION {elem}
            </Title>
            <Menu
              mode="vertical"
              items={[
                { key: '1', label: 'Footer link 1' },
                { key: '2', label: 'Footer link 2' },
                { key: '3', label: 'Footer link 3' },
                { key: '4', label: 'Footer link 4' },
                { key: '5', label: 'Footer link 5' },
              ]}
            />
          </div>
        ))}
      </div>
      <div className="footer-container__payment">
        <Title level={3} className="footer-container__payment__title">
          PAYMENT LOGOS
        </Title>
        <div className="footer-container__payment__divider"></div>
        <div className="footer-container__payment__methods">
          <Row gutter={[16, 16]} justify="center">
            {[...Array(5)].map((_, index) => (
              <Col key={index} xs={6} sm={6} md={4} lg={3}>
                <img
                  src={paymentLogo}
                  alt={`Photo ${index + 1}`}
                  className="footer-container__payment__methods__img"
                />
              </Col>
            ))}
          </Row>
          <Row gutter={[16, 16]} justify="center">
            {[...Array(4)].map((_, index) => (
              <Col key={index} xs={6} sm={6} md={4} lg={3}>
                <img
                  src={paymentLogo}
                  alt={`Photo ${index + 6}`} // Start counting from 6 for the second line
                  className="footer-container__payment__methods__img"
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="footer-container__license">
        <Paragraph className="footer-container__license__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          varius nunc rutrum risus rhoncu: vulputate. Nullam at leo commodo nisi
          scelerisque congue. Nullam at leo commodo nisi scelerisque congue. Nam
          et scelerisque diam. Curabitur vitar mollis est, vitae rhoncus ligula.
          Duis rutrum porta mi nec faucibus. Sed quis luctus ipsum, eget auctol
          sapien. Nullam at leo commodo nisi scelerisque congue. Nam et
          scelerisque diam. Curabitur vitar mollis est, vitae rhoncus ligula.
          Duis rutrum porta mi nec faucibus.
        </Paragraph>
        <img
          src={licenseLogo}
          alt="license-logo"
          className="footer-container__license__logo"
        />
      </div>
      <div className="footer-container__info">
        <span className="footer-container__info__text">
          Copyright © brand name 2022
        </span>
        <Menu
          mode="horizontal"
          className="footer-container__info__text"
          items={[...Array(6)].map((_, index) => ({
            key: index,
            label: 'Footer link',
          }))}
        />
      </div>
    </div>
  );
};

export default FooterSection;
