import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';
import { getLandingPageData } from '../redux/actions/landingpage';

import Mast from './Mast';
import Announcements from './Announcements';
import Display from './Display';

class HomeContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props, 'this is from the home');
    this.props.getLandingPageData();
  }
  
  render() {
    return (
      <div>
        <Mast />
        <Announcements />
        <Display />       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { getLandingPageData })(HomeContent);