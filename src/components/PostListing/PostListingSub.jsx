import React from "react";
import { Link } from "gatsby";
import Newsletter from '../Newsletter/Newsletter';
import TradingView from '../TradingView/TradingView';

import './PostListing.css';

class PostListingSub extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        displayDate: postEdge.node.frontmatter.date,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <section className="post-listing__sub">
        <h2 className="post-listing__sub_title"><span className="block-heading">DERNIERS ARTICLES</span></h2>
        <div className="post-listing__container_sub">
            {/* Your post list here. */
            postList.map(post => {
            if (post === postList[3] || post === postList[4]) {
            return (
                <div className="post-card" key={post.title}> 
                    <Link to={post.path} key={`${post.title}_sub`}>
                        <img src={post.cover} className={'post-cover'} alt={post.title}/>
                        <p className="post-card__date-sub">{post.displayDate}</p>
                        <h2 className="post-card__title">{post.title}</h2>
                        <p className="post-card__excerpt">{post.excerpt}</p>
                    </Link>
                </div>
                )   
          }
        })}
        </div>
        <div className="post-listing__container_col">
            {/* Your post list here. */
            postList.map(post => {
            if (post !== postList[0] && post !== postList[1] && post !== postList[2] && post !== postList[3] && post !== postList[4]) {
            return (
                <div className="post-card_col" key={post.title}> 
                    <Link to={post.path} key={`${post.title}_sub`} className="post-card_col-link">
                        <img src={post.cover} className={'post-cover_col'} alt={post.title} />
                        <div className="post-card__info-col">
                          <p className="post-card__date-sub">{post.displayDate}</p>
                          <h2 className="post-card__title">{post.title}</h2>
                          <p className="post-card__excerpt">{post.excerpt}</p>
                        </div>
                    </Link>
                </div>
                )   
          }
        })}
        <Newsletter />
        <TradingView />
        </div>
      </section>
    );
  }
}

export default PostListingSub;
