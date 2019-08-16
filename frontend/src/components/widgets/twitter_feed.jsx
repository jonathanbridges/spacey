import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Img from './assets/img';

class SpaceLaunchNews extends React.Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  toggleContent() {
    return e => e.target.closest('div').nextSibling.childNodes[1].click();
  }

  render() {
    if (!this.props.tweets) {
      return <div className="Timeline twitterfeed" />;
    }

    // const data = this.props.tweets;
    const data = this.props.tweets.slice(0, 30);
    const style = { overflow: "scroll" };
    const lineStyle = {};
    const lineColor = "#72655F";
    const timelineEvents = data
      .map((event, idx) => {
        const {
          id_str,
          full_text,
          location,
          user: { name, screen_name, profile_image_url_https },
          extended_entities,
          created_at
        } = event;
        const url = `https://twitter.com/${screen_name}/status/${id_str}`;
        let media_image;

        if (extended_entities) {
          const { media_url_https } = extended_entities.media[0];
          media_image = (
            <Img
              className="Timeline--Media"
              src={media_url_https}
              alt=""
              modalOn={this.props.modalOn}
            />
          );
        } else {
          media_image = null;
        }

        const titleStyle = { fontWeight: "500" };
        const subtitleStyle = { color: "purple" };
        const contentStyle = { borderRadius: "8px", padding: "12px" };
        const profileIcon = (
          <img
            className="Timeline--Profile"
            src={profile_image_url_https}
            alt={name}
            onClick={this.toggleContent()}
          />
        );

        return (
          <TimelineEvent
            key={idx}
            title={name}
            titleStyle={titleStyle}
            subtitle={created_at.slice(0, 16)}
            subtitleStyle={subtitleStyle}
            contentStyle={contentStyle}
            // createdAt={created_at.slice(0, 16)}
            icon={profileIcon}
            // container="card"
            showContent
            collapsible
          >
            <a
              className="Timeline--Link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <section className="Timeline--Body">
                <p className="Timeline--Location">{location}</p>
                <p className="Timeline--Description">{full_text}</p>
                {media_image}
              </section>
            </a>
          </TimelineEvent>
        );
      })
      .filter(event => event);

    return (
      <div className="Timeline twitterfeed">
        <h1>Space Tweets</h1>
        <Timeline
          style={style}
          lineStyle={lineStyle}
          lineColor={lineColor}
        >
          {timelineEvents}
        </Timeline>
      </div>
    );
  }
}

export default SpaceLaunchNews;
