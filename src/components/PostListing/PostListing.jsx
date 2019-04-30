import React from "react";
import { Link } from "gatsby";
import './PostListing.css';

class PostListing extends React.Component {
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
      <div className="post-listing__container">
        {/* Your post list here. */
        postList.map(post => {
          const style = {background: 'url(' + post.cover + ')', backgroundPosition: 'top', backgroundSize: 'cover'}
          if (post === postList[0]) {
            return (
            <Link to={post.path} key={`${post.title}_post`} className="post-card__link__hero">
              <div className="post-card__hero" style={style} key={post.title}>
              <div className="post-card__overlay">
                <p className="post-card__complementary">
                  <span className="post-card__tag">{post.tags}</span>
                </p> 
                <div className="post-card__info">
                  <h1 className="post-card__hero-title">{post.title}</h1>
                  <span className="post-card__date">{post.displayDate}</span>
                </div>
              </div>
            </div>
          </Link>
            )   
          } else if (post === postList[1] || post === postList[2]) {
            return (
              <Link to={post.path} key={`${post.title}_post`} className="post-card__link-col">
              <div className="post-card__hero__col" style={style} key={post.title}>
                <div className="post-card__overlay">
                  <p className="post-card__complementary">
                    <span className="post-card__tag">{post.tags}</span>
                  </p> 
                  <div className="post-card__info">
                    <h1 className="post-card__hero-title">{post.title}</h1>
                    <span className="post-card__date">{post.displayDate}</span>
                  </div>
                </div>
            </div>
              </Link>
            )
          }
        })}
      </div>
    );
  }
}

export default PostListing;
