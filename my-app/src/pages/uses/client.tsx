import React from 'react'

import cx from 'classnames';

import {NewCart} from "../../components/newCart"

import cls from "./client.module.css"
const  data = {
  id : 1,
  title : 'Lorem ipsum dolor sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus.',
  name : "Murod",
  like : false,
    commet :[ {
      name : "murod",
      commetText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus."
    }
]
}
 const  Client=()=> {
  return (
    <div className={cx(cls.wrapper )}>
        
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
        <NewCart props={data}/>
    </div>
  )
}

export default Client