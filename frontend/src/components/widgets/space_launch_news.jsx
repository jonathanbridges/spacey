import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import LaunchIcon from './assets/launch_icon';
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
        const contentStyle = { padding: "12px" };

        return (
          <TimelineEvent
            key={idx}
            title={name}
            titleStyle={titleStyle}
            subtitle={date.split("T")[0]}
            subtitleStyle={subtitleStyle}
            contentStyle={contentStyle}
            // createdAt={date.split("T")[0]}
            icon={<LaunchIcon />}
            // container="card"
            showContent
            collapsible
          >
            <a
              className="Timeline--Link"
              href={news_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img className="Timeline--Image" src={feature_image} alt="" />
              <section className="Timeline--Body" onClick={this.handleClick}>
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
        <Timeline>{timeline_events}</Timeline>
      </div>
    );
  }
}

export default SpaceLaunchNews;
