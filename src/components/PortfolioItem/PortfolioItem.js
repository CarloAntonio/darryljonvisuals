import React from 'react';

const PortfolioItem = (props) => {
    return (
        <article className={"work-item " + props.type}>
        <div className="work-wrapper">
          <div className="work-thumbnail">
            <img src={ props.thumb } alt=""/>
          </div>
          <div className="work-caption">
            <h3 className="work-title font-alt">{props.header}</h3>
            <span className="work-category font-serif">{props.subheader}</span>
          </div>
          <a href={props.full} className={props.popup + " work-link"}></a>
        </div>
      </article>
    )
}

export default PortfolioItem;