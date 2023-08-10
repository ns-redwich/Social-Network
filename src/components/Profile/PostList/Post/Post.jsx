import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.user}>
        <div className={s.user_avatarFrame}>
          <img className={s.user_avatar} src={props.avatarSrc} alt="avatar" />
        </div>
        <p className={s.user_name}>{props.userName}</p>
      </div>
      <p className={s.post_p}>{props.text}</p>
    </div>
  )
}

export default Post