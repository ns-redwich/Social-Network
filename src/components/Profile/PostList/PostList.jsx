import React from 'react'
import Post from './Post/Post'
import s from './PostList.module.css'

const PostList = (props) => {
    return (
        <div className={s.post_list}>
            {props.postsD.map((item) =>
                <Post avatarSrc={item.avatar} userName={item.name} text={item.text}/>
            )}
        </div>
    )
}

export default PostList