import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import LaunchIcon from './assets/launch_icon';

class SpaceLaunchNews extends React.Component {

  componentDidMount() {
    this.props.fetchSpaceLaunchNow();
  }

  render() {
    if (!this.props.spaceLaunchNews) return <div className="Timeline"></div>;

    const { data } = this.props.spaceLaunchNews.data;
    const timeline_events = data.map((event, idx) => {
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
          subtitle={date}
          subtitleStyle={subtitleStyle}
          contentStyle={contentStyle}
          // createdAt={date}
          icon={<LaunchIcon />}
          // container="card"
          collapsible
        >
          <a className="Timeline--Link" href={news_url}>
            <img className="Timeline--Image" src={feature_image} alt="" />
            <section className="Timeline--Body">
              <p className="Timeline--Location">{location}</p>
              <p className="Timeline--Description">{description}</p>
            </section>
          </a>
        </TimelineEvent>
      );
    }).filter(event => event);

    return (
      <div className="Timeline">
        <h1>Space Launch News</h1>
        <Timeline>
          {timeline_events}
        </Timeline>
      </div>
    )
  }
}

export default SpaceLaunchNews;
