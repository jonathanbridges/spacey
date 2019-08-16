import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Img from './assets/img';

class SpaceLaunchNews extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpaceLaunchNow();
  }

  handleClick(e) {
    const target = e.currentTarget;
    if (target.classList.length === 1) {
      target.classList.add("expanded");
      e.preventDefault();
    }
  }

  render() {
    if (!this.props.spaceLaunchNews) {
      return <div className="Timeline spacelaunchnews" />;
    }

    const { data } = this.props.spaceLaunchNews.data;
    const style = {};
    const lineStyle = {};
    const lineColor = "#72655F";
    const timeline_events = data
      .map((event, idx) => {
        const {
          date,
          description,
          feature_image,
          location,
          name,
          news_url
        } = event;

        if (!feature_image || !news_url) return null;

        const titleStyle = { fontWeight: "500" };
        const subtitleStyle = { color: "purple" };
        const contentStyle = { borderRadius: "8px", padding: "12px" };
        const bubbleStyle = { borderColor: lineColor };
        const thumbnailIcon = (
          <img
            className="Timeline--Thumbnail"
            src={feature_image}
            alt=""
          />
        );

        return (
          <TimelineEvent
            key={idx}
            title={name}
            titleStyle={titleStyle}
            subtitle={date.split("T")[0]}
            subtitleStyle={subtitleStyle}
            contentStyle={contentStyle}
            bubbleStyle={bubbleStyle}
            // createdAt={date.split("T")[0]}
            icon={thumbnailIcon}
            // container="card"
            showContent
            collapsible
          >
            <Img
              className="Timeline--Image"
              src={feature_image}
              alt=""
            />
            <a
              className="Timeline--Link"
              href={news_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <section
                className="Timeline--Body"
                onClick={this.handleClick}
              >
                <p className="Timeline--Location">{location}</p>
                <p className="Timeline--Description">{description}</p>
              </section>
            </a>
          </TimelineEvent>
        );
      })
      .filter(event => event);

    return (
      <div className="Timeline spacelaunchnews">
        <h1>Space Launch News</h1>
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

export default SpaceLaunchNews;
