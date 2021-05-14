import { Dropdown, Tab } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import "./postTab.css"

export default function PostsTab(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.posts);
    }, [props.posts]);

    const postsCards = posts.map(post =>
        <div class="ui card custom-width">
            <div class="content">
                <p className="right floated"><i class="user icon"></i>{post.author.login}</p>
                <div class="header">{post.title}</div>
                <div class="description">
                    <p className="word-break">{post.description}</p>
                </div>
            </div>
            <div class="extra content">
                <span class="left floated like"><i class="comment icon"></i>{post.totalComments}</span>
                <span class="right floated star"><i class="calendar icon"></i>{new Date(post.createdAt).toLocaleString()}</span>
            </div>
        </div>
    )
    if (posts.length === 0) {
        return (
            <div className="postTab">
                <div className="null-posts">
                <svg className="homepage-logo" width="200" height="219" viewBox="0 0 200 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.5023 19.0173C49.4773 3.3108 38.7076 0.829246 34.0012 1.38654C42.5338 4.83804 40.9746 4.38496 45.0853 8.38112C49.196 12.3773 48.8067 19.0109 49.2166 24.3903C49.6266 29.7697 54.0006 35.8435 55.2339 36.6593C56.2205 37.3119 57.6879 36.7244 58.2982 36.3491C65.2876 30.4669 66.1922 27.9891 65.7708 27.4855C59.7392 24.1318 57.0786 20.4427 56.5023 19.0173Z" fill="white" />
                    <path d="M78.8001 19.0173C85.8251 3.3108 96.5948 0.829246 101.301 1.38654C92.7685 4.83804 94.3277 4.38496 90.2171 8.38112C86.1064 12.3773 86.4957 19.0109 86.0858 24.3903C85.6758 29.7697 81.3018 35.8435 80.0685 36.6593C79.0819 37.3119 77.6145 36.7244 77.0042 36.3491C70.0148 30.4669 69.1102 27.9891 69.5316 27.4855C75.5632 24.1318 78.2238 20.4427 78.8001 19.0173Z" fill="white" />
                    <path d="M76.7971 51.0689C69.2787 54.9541 64.9345 56.9569 62.2339 55.0171C58.8817 60.06 60.7883 63.0999 64.2851 67.516C63.9665 62.2755 64.3189 60.9917 66.2743 61.2936C68.6225 64.5172 68.2363 72.3252 66.916 78.9276C75.3357 68.7376 74.0956 62.5012 74.3715 59.9598C75.2802 60.7461 75.9363 60.9166 75.1955 66.4318C77.8301 63.7469 79.8144 57.5679 76.7971 51.0689Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 120.11C0 77.5724 26.5595 41.2382 64 26.7858V27H77V22.7677C79.6282 22.149 82.2964 21.6341 85 21.2274V27.3L84 26.5C84.1294 27.7936 84.2671 29.0203 84.398 30.1866C84.6825 32.7204 84.935 34.9688 85 36.9986V38.8752C84.875 42.2501 84 45.0001 81.5 47.5C79.2489 49.7511 78.6085 51.166 77.9526 52.6151C77.7703 53.0177 77.5869 53.423 77.3674 53.8496C49.8142 63.2585 30 89.3703 30 120.11C30 153.621 53.5482 181.632 85 188.499V218.992C36.8874 211.755 0 170.24 0 120.11ZM115 188.499C141.619 182.687 162.577 161.729 168.389 135.11H115V105.11H168.389H171H198.882C199.618 110.003 200 115.012 200 120.11C200 170.24 163.113 211.755 115 218.992V188.499Z" fill="white" />
                </svg>
                <h1>У вас ещё нет постов :(</h1>
                </div>
               
                <CreatePostButton createPost={props.createPost} />
            </div>
        );
    }
    return (
        <div className="postTab">
            {postsCards}
            <CreatePostButton createPost={props.createPost} />
        </div>
    );
}

const CreatePostButton = (props) => {
    return (
        <div className="createPost">
            <Dropdown
                icon={{ name: "plus", size: "huge" }}
                className="icon"
                direction="left"
            >
                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.createPost} text="Создать пост" />
                    <Dropdown.Item text="Создать опрос" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}