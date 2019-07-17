import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import LaunchIcon from './assets/launch_icon';
import Img from './assets/img';

class SpaceLaunchNews extends React.Component {

  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    if (!this.props.tweets) return <div className="Timeline"></div>;

    // const data = this.props.tweets;
    const data = this.props.tweets.slice(0, 30);
    const timeline_events = data.map((event, idx) => {
      const {
        full_text,
        location,
        user: { name, profile_image_url_https },
        news_url,
        extended_entities,
        created_at
      } = event;

      let media_image;
      if (extended_entities) {
        const { media_url_https } = extended_entities.media[0];
        console.log(full_text);
        console.log(media_url_https);
        media_image = <img className="Timeline--Media" src={media_url_https}></img>;
      } else {
        media_image = null;
      }

      const titleStyle = { fontWeight: "500" };
      const subtitleStyle = { color: "purple" };
      const contentStyle = { padding: "12px" };

      return (
        <TimelineEvent
          key={idx}
          title={name}
          titleStyle={titleStyle}
          subtitle={created_at.slice(0, 11)}
          subtitleStyle={subtitleStyle}
          contentStyle={contentStyle}
          // createdAt={created_at.slice(0, 11)}
          icon={<LaunchIcon />}
          // container="card"
          showContent
          collapsible
        >
          <a className="Timeline--Link" href={news_url}>
            <Img
              className="Timeline--Image"
              src={profile_image_url_https}
              alt=""
            ></Img>
            <section className="Timeline--Body">
              <p className="Timeline--Location">{location}</p>
              <p className="Timeline--Description">{full_text}</p>
              {media_image}
            </section>
          </a>
        </TimelineEvent>
      );
    }).filter(event => event);

    return (
      <div className="Timeline">
        <h1>NASA Twitter Feed</h1>
        <Timeline>
          {timeline_events}
        </Timeline>
      </div>
    )
  }

}

export default SpaceLaunchNews;
