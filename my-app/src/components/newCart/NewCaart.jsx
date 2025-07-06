import React from 'react'
import { Card, Button, Typography, Space } from 'antd'

import moment from 'moment'
import { useParams , useNavigate} from 'react-router-dom';

import { FcLike } from "react-icons/fc";
import { FaHeart ,FaCommentAlt} from "react-icons/fa";

import img from "../../assets/photo/defoldPhoto.jpg"

import cx from 'classnames';


import cls from './NewCart.module.css' // AntD ning reset CSSʼi
// import imgd from '../../assets/photo/defoldPhoto.jpg'

const { Text, Title } = Typography

const MoreNew = ({props}) => {

  const dateTime = props?.creatdAt
  const dateOnly = moment(dateTime).format('YYYY-MM-DD');
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleClick = () => {
    navigate(`/news/newsSingle/${props.id}`);
    // yoki bu yerda fetch, navigate, log, post qilish mumkin
  };
  console.log(props.like);
  
  
return  props && <Card
    className={cls.wrapper}
  cover={
      <img alt={"title"} className={cls.img} src={img}  />
    }
  >
    <div className={cls.cardInfo}>  
      <div className={cls.carfFuuter}>
        <div className={cls.card_left}>
          <div className={cls.card__left_avatart}>
            <img className={cls.avatart_img} src={img} alt="" />
          </div>
          <div className={cls.card__left_userName}>
              Murod M
          </div>
        </div>

        <div className={cls.card__right}>
          <FaCommentAlt className={cx(cls.pointer, cls.like)}/>
          {props.like? <FcLike className={cx(cls.pointer, cls.like)}/>: <FaHeart className={cx(cls.pointer, cls.like)}/>}
        </div>
       
      </div>

    </div>
  </Card>
}

export default MoreNew
