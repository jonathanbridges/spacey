import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Img from './assets/img';

class HubbleNews extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchHubbleNews();
  }

  handleClick(e) {
    const target = e.currentTarget;
    if (target.classList.length === 1) {
      target.classList.add('expanded');
      e.preventDefault();
    }
  }

  render() {
    if (!this.props.hubbleNews) {
      return <div className="Timeline hubblenews" />;
    }

    const { data } = this.props.hubbleNews.data;
    const style = {};
    const lineStyle = {};
    const lineColor = "#72655F";
    const timeline_events = data
      .slice(0, 20)
      .map((event, idx) => {
        const { pub_date, title, description, thumbnail, link } = event;

        const titleStyle = { fontWeight: "500" };
        const subtitleStyle = { color: "purple" };
        const contentStyle = { borderRadius: "8px", padding: "12px" };
        const bubbleStyle = { borderColor: lineColor };
        const thumbnailIcon = (
          <img
            className="Timeline--Thumbnail"
            src={thumbnail}
            alt=""
          />
        );

        return (
          <TimelineEvent
            key={idx}
            title={title}
            titleStyle={titleStyle}
            subtitle={pub_date.split("T")[0]}
            subtitleStyle={subtitleStyle}
            contentStyle={contentStyle}
            bubbleStyle={bubbleStyle}
            // createdAt={pub_date.split("T")[0]}
            icon={thumbnailIcon}
            // container="card"
            // showContent
            collapsible
          >
            <a
              className="Timeline--Link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img className="Timeline--Image" src={thumbnail} alt="" />
              <section
                className="Timeline--Body"
                onClick={this.handleClick}
              >
                <p className="Timeline--Description">{description}</p>
              </section>
            </a>
          </TimelineEvent>
        );
      })
      .filter(event => event);

    return (
      <div className="Timeline hubblenews">
        <h1>Hubble News</h1>
        <Timeline
          style={style}
          lineStyle={lineStyle}
          lineColor={lineColor}
        >
          {timeline_events}
        </Timeline>
      </div>
    );
  }
}

export default HubbleNews;
