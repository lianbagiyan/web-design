import React from 'react';
import { Button, Typography } from 'antd';
import './style.scss';

type CardItems = {
  imgSrc: string;
  title: string;
  text: string;
  btnText: string;
};

const { Paragraph, Title } = Typography;

const Card = ({ imgSrc, title, text, btnText }: CardItems) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="img" className="card__img" />
      <div className="card__body">
        <Title className="card__body__title" level={3}>
          {title}
        </Title>
        <Paragraph className="card__body__text">{text}</Paragraph>
        <Button className="card__body__btn">{btnText}</Button>
      </div>
    </div>
  );
};

export default Card;
