import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

class SpaceLaunchNews extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  handleClick(e) {
    const target = e.currentTarget;
    if (target.classList.length === 1) {
      target.classList.add("expanded");
      e.preventDefault();
    }
  }

  render() {
    if (!this.props.tweets) {
      return <div className="Timeline twitterfeed" />;
    }

    // const data = this.props.tweets;
    const data = this.props.tweets.slice(0, 30);
    const timeline_events = data
      .map((event, idx) => {
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
          media_image = (
            <img className="Timeline--Media" src={media_url_https} alt="" />
          );
        } else {
          media_image = null;
        }

        const titleStyle = { fontWeight: "500" };
        const subtitleStyle = { color: "purple" };
        const contentStyle = { padding: "12px" };
        const profile_icon = (
          <img
            className="Timeline--Profile"
            src={profile_image_url_https}
            alt={name}
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
            icon={profile_icon}
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
              <section className="Timeline--Body" onClick={this.handleClick}>
                <p className="Timeline--Location">{location}</p>
                <p className="Timeline--Description">{full_text}</p>
                {media_image}
              </section>
            </a>
          </TimelineEvent>
        );
      })
      .filter(event => event);

    const style = { overflow: "scroll", margin: "20px" };

    return (
      <div className="Timeline twitterfeed">
        <h1>Space Tweets</h1>
        <Timeline className="Timeline--Contents" style={style}>
          {timeline_events}
        </Timeline>
      </div>
    );
  }
}

export default SpaceLaunchNews;
