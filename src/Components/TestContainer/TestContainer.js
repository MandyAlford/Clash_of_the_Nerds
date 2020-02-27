import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import './TestContainer.scss';
import { addTrivia } from '../../actions';
import { connect } from 'react-redux';
let i = 0;
let currentQuestion, triviaData;
let questions;

class TestContainer extends Component {
  constructor() {
    super()
    this.state={
      currentQuestion: []
    }
  }
  changeCard = (triviaData) => {
    i++
    this.setState({ chosenAnswer: [...this.state.currentQuestion, triviaData] })
  }
   render() {
     questions = [];
     this.props.trivia.trivia.forEach(data => {
       questions.push(data)
     })
     const triviaData = <TriviaCard trivia={questions[i]} changeCard={this.changeCard} />
     return (
       <section>
         <article className='test-question'>
          <h1 className='trivia-question'>{questions[i].question}</h1>
         </article>
         <article className='test-choice'>
          <h1>{triviaData}</h1>
         </article>
         <article className='test-progress'>
          <h1></h1>
         </article>
       </section>
     )
   }
}

export const mapDispatchToProps = dispatch => ({
  loadTriviaToStore: (trivia) => { dispatch(addTrivia(trivia)) }
})

export const mapStateToProps = state => ({
  trivia: state
});

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
