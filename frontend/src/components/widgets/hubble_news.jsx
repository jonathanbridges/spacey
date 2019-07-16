import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import LaunchIcon from './assets/launch_icon';

class HubbleNews extends React.Component {

  componentDidMount() {
    this.props.fetchHubbleNews();
  }

  render() {
    if (!this.props.hubbleNews) return null;

    const { data } = this.props.hubbleNews.data;
    const timeline_events = data.map((event, idx) => {
      const {
        pub_date,
        title,
        description,
        thumbnail,
        link
      } = event;

      const titleStyle = { fontWeight: "500" };
      const subtitleStyle = { color: "purple" };
      const contentStyle = { padding: "12px" };

      return (
        <TimelineEvent
          key={idx}
          title={title}
          titleStyle={titleStyle}
          subtitle={pub_date}
          subtitleStyle={subtitleStyle}
          contentStyle={contentStyle}
          // createdAt={pub_date}
          icon={<LaunchIcon />}
          // container="card"
          collapsible
        >
          <a className="Timeline--Link" href={link.slice(2)}>
            <img className="Timeline--Image" src={thumbnail} alt="" />
            <section className="Timeline--Body">
              <p className="Timeline--Description">{description}</p>
            </section>
          </a>
        </TimelineEvent>
      );
    }).filter(event => event);

    return (
      <div className="Timeline">
        <h1>Hubble News</h1>
        <Timeline>
          {timeline_events}
        </Timeline>
      </div>
    )
  }
}

export default HubbleNews;
