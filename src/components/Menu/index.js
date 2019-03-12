import React from 'react';
import { withRouter } from 'react-router-dom';
import { Visibility } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MobileMenu from './MobileMenu';
import FixedMenu from './FixedMenu';
import SidebarMenu from './SidebarMenu';
import MenuItems from './MenuItems';

class Menu extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({}),
  };

  static defaultProps = {
    history: { goBack: () => {} },
    location: { pathname: '/login' },
  };

  state = {
    sidebarOpen: false,
    fixed: false,
  };

  onOnScreen = () => {
    this.setState({ fixed: false });
  };

  offScreen = () => {
    this.setState({ fixed: true });
  };

  toggleSidebar = (isOpen) => {
    const sidebarOpen = !isOpen;
    this.setState({ sidebarOpen });
  };

  goBack = () => {
    const {
      history: { goBack },
    } = this.props;

    goBack();
  };

  render() {
    const { sidebarOpen, fixed } = this.state;
    const {
      location: { pathname },
    } = this.props;
    return (
      <React.Fragment>
        <MobileMenu
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          goBack={this.goBack}
          pathname={pathname}
        />
        <Visibility
          continuous
          onOnScreen={this.onOnScreen}
          onOffScreen={this.offScreen}
        >
          <div className="ui large top secondary  normal menu">
            <div className="ui container navbar">
              <MenuItems />
            </div>
          </div>
        </Visibility>
        <FixedMenu fixed={fixed} />
        <SidebarMenu sidebarOpen={sidebarOpen} />
      </React.Fragment>
    );
  }
}
export default withRouter(Menu);
