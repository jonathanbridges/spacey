import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

class SpaceLaunchNews extends React.Component {

  componentDidMount() {
    this.props.fetchSpaceLaunchNow();
  }

  render() {
    if (!this.props.spaceLaunchNews) {
      return (
        <div></div>
      );
    } else {
      const { data } = this.props.spaceLaunchNews.data;
      const timeline_events = data.map(event => {
        const { date, description, feature_image, location, name, news_url } = event;

        return (
          <TimelineEvent
            title={name}
            titleStyle={{ fontWeight: "500" }}
            subtitle={date}
            subtitleStyle={{ color: "purple" }}
            // createdAt={date}
            icon={<svg enableBackground="new 0 0 369.998 369.997" height="369.997" viewBox="0 0 369.998 369.997" width="369.998" xmlns="http://www.w3.org/2000/svg"><path d="m369.993 6.919c.022-1.846-.692-3.622-1.998-4.927-1.303-1.302-3.083-2.023-4.924-1.991-3.591.057-88.576 2.038-143.287 56.748l-69.377 69.377c-16.128-5.68-71.071-16.34-148.411 60.994-2.354 2.356-2.656 6.065-.72 8.777.221.31.461.594.728.859 2.026 2.025 5.166 2.593 7.816 1.291.524-.259 49.841-24.086 76.021-7.355l-17.168 17.167c-.417.417-.776.887-1.074 1.394-.723 1.257-17.33 31.098 22.357 70.779 39.684 39.685 69.528 23.085 70.774 22.356.516-.297.977-.658 1.396-1.075l17.168-17.167c16.732 26.181-7.093 75.494-7.349 76.023-1.304 2.65-.743 5.784 1.288 7.817.046.042.082.077.125.118 2.666 2.557 6.902 2.522 9.523-.103.132-.128.25-.263.371-.397 76.917-77.14 66.282-131.926 60.607-148.026l69.378-69.377c54.709-54.707 56.695-139.689 56.756-143.282zm-88.09 135.268c-14.941 14.938-39.155 14.937-54.089.001-14.934-14.933-14.935-39.148.003-54.087 14.933-14.934 39.15-14.934 54.086 0 14.932 14.935 14.932 39.152 0 54.086z" /><path d="m89.388 320.865c-13.427 2.338-27.286 3.275-40.898 3.05-1.157-.021-2.344-1.417-2.341-2.36-.002-2.062.049-5.066.101-7.127.076-3.013.204-6.021.364-9.033.378-6.827.937-13.676 1.943-20.44 1.753-11.837 4.423-23.442 8.838-34.591.604-1.519 1.277-3.005 1.827-4.55-12.384 5.298-22.051 15.85-28.861 27.224-6.624 11.057-10.913 23.427-13.293 36.067-1.408 7.462-2.138 15.042-2.244 22.631-.049 4.196-.316 9.271 1.142 13.295 2.066 5.717 7.382 9.51 13.398 9.925 5.402.369 10.822.298 16.233-.06 24.582-1.622 50.85-10.177 68.109-28.474 4.245-4.746 7.948-9.744 10.52-15.605-6.14 2.262-12.1 4.765-18.438 6.474-5.421 1.459-10.871 2.612-16.4 3.574z" /></svg>}
            // container="card"
            collapsible
          >
            <a href={news_url} style={{ color: "black" }}>
              <img src={feature_image} alt="" width="100" height="100"/>
              <section style={{ width: "calc(100% - 120px)", float: "right" }}>
                <p>{location}</p>
                <p>{description}</p>
              </section>
            </a>
          </TimelineEvent>
        );
      });
      return (
        <div>
          <h1>Space Launch News</h1>
          <Timeline>
            {timeline_events}
          </Timeline>
        </div>
      )
    }
  }
}

export default SpaceLaunchNews;