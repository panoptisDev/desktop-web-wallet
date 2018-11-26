/* global document */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../../components/layout';
import createAccount from '../../../redux/account/action';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.createNewAccount = this.createNewAccount.bind(this);
  }

  componentDidMount() {
    const particles = document.createElement('script');
    particles.src = 'js/particles/particles.min.js';
    document.getElementById('scripts').appendChild(particles);

    const particlesApp = document.createElement('script');
    particlesApp.src = 'js/particles/app.js';
    document.getElementById('scripts').appendChild(particlesApp);

    const particlesState = document.createElement('script');
    particlesState.src = 'js/particles/lib/stats.js';
    document.getElementById('scripts').appendChild(particlesState);
  }

  goToPage(route) {
    const SELF = this;
    const { history } = SELF.props;
    history.push(route);
  }

  createNewAccount() {
    const SELF = this;
    const { createNewAccount } = SELF.props;
    const data = {
      accountName: 'accountName',
      password: 'action.password',
      passwordHint: 'action.passwordHint',
      accountIcon: 'action.accountIcon',
    };
    createNewAccount(data);
  }

  render() {
    console.log(this.props, 'this.props');
    return (
      <div id="home" className="home landing-page">
        <Layout>
          <section className="landing-banner">
            <Container>
              <Row className="main-row">
                <Col className="text-center">
                  <h2 className="title text-white text-uppercase">
                    <span>Operachain Powered Wallet</span>
                  </h2>

                  <h3 className="title text-white text-uppercase">
                    <span>Send and Recive ETH, Wan and All Compatible Tokens</span>
                  </h3>
                  <Button
                    color="dark"
                    className="rounded"
                    onClick={() => this.goToPage('/account-management')}
                  >
                    Open Wallet
                  </Button>
                  <Button color="dark" className="rounded" onClick={this.createNewAccount}>
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Container>
            <div id="particles-js" />
            <span id="scripts" />
          </section>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  createNewAccount: data => {
    dispatch(() => createAccount(data));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Home);
