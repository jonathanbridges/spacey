import React from 'react';
import { Link } from 'react-router-dom';
import SpaceLaunchNews from './space_launch_news_container';
import HubbleNews from './hubble_news_container';
import NasaFeed from './twitter_feed_container';

class AllNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSource: 'SpaceLaunch',
      sources: [
        'SpaceLaunch',
        'Hubble',
        'NasaFeed'
      ]
    };
    this.selectNews = this.selectNews.bind(this);
  }

  selectNews(e) {
    document.querySelector('.active').classList.remove('active');
    e.currentTarget.classList.add('active');

    const source = e.currentTarget.classList[0];
    this.setState({ activeSource: source });
  }

  render() {
    const tabsList = this.state.sources.map((source, idx) => {
      const isActive = (this.state.activeSource === source) ? ' active' : ' ';
      const className = `${source}${isActive}`;

      return (
        <li key={idx} className="News--Source">
          <Link className={className} to="#" onClick={this.selectNews}>
            {source}
          </Link>
        </li>
      )
    });

    let source;
    switch (this.state.activeSource) {
      case 'SpaceLaunch':
        source = <SpaceLaunchNews />;
        break;
      case 'Hubble':
        source = <HubbleNews />;
        break;
      case 'NasaFeed':
        source = <NasaFeed />;
        break;
      default:
        source = <SpaceLaunchNews />;
    }

    return (
      <div>
        <ul className="News--Sources">
          {tabsList}
        </ul>
        {source}
      </div>
    );
  }

}

export default AllNews;