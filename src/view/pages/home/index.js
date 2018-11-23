import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../../components/layout';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                  <Button color="dark" className="rounded">
                    Open Wallet
                  </Button>
                  <Button color="dark" className="rounded">
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        </Layout>
      </div>
    );
  }
}
