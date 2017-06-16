//Here we grab the needed packages from their libraries. We need connect to connect React and Redux and make
//state flow in our app. Like Tupac and Biggie #RIP.
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//Lets also grab our actions so we can bind them to the props of our Component
import { incrementCount, decrementCount } from '../actions/countActions'
//CSS libraries rock! Lets grab Row & Col so we can style easily.
import { Row, Col } from 'react-grid-system'

//MORE CSS MAGIC :D
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Welcome extends Component {

  //We bind our incrementCount and decrementCount functions to this so that we always keep reference to
  //the scope for when the function is called.
  constructor(props) {
    super(props)
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    this.props.incrementCount();
  }

  decrementCount() {
    this.props.decrementCount();
  }

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardText>
              React-Redux Example!
            </CardText>
            <CardTitle
              title={`Welcome ${this.props.user}!`}
              subtitle={`The Count is ${this.props.count}`}
            />
            <CardActions>
              <RaisedButton
                label="Increment Count!"
                primary={true}
                onClick={this.incrementCount}
              />
              <RaisedButton
                label="Decrement Count!"
                secondary={true}
                onClick={this.decrementCount}
              />
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}


//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
function mapDispatchToProps(dispatch){
  return bindActionCreators({ incrementCount, decrementCount }, dispatch);
}

//MORE REDUX MAGIC! This function takes in all of our Application State and takes piececs of it and maps it
//to the Component's props.
function mapStateToProps(state) {
  return {
    count: state.counter.count,
    user: state.user.user
  };
}

//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
