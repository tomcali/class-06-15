//This is our first complex, connected component. Don't panic! Its mostly harmless :-)


//We want to import a bevy of packages here: React, Component from react, connect from react-redux, bindActionCreators from redux, and finally our fetchWeather action.
//Once we have written our imports, lets go build our fetchWeather action in ../actions/index

class SearchBar extends Component {
  //lets write our constructor here: remember to 1) super, 2) assign the needed state(hint, the user's search term),
  //3) bind any functions we create to `this`(this may come later, when we write those functions)
  constructor(props) {
    //CODE GOES HERE

    //CODE GOES HERE
  }

  //Next, lets jump to the bottom of our file, below the component, and write some redux!

  //onInputChange needs to prevent the default browser form event, and also
  //set the state of our component to be the user's input
  onInputChange(event) {
    //CODE GOES HERE

    //CODE GOES HERE
  }

  //onFormSubmit needs to prevent that same default, and call our action with the proper
  //arguements. It then also needs to reset our component state to blank, so the user can enter
  //another search! Note, this does NOT handle any bad-search-term errors, but that is outside the scope of this class activity
  onFormSubmit(event) {
    //CODE GOES HERE

    //CODE GOES HERE
  }


//You'll see an almost complete form below! INSTRUCTOR PLEASE DO: Go over his form, its just standard bootstrap.
//Now, class do: brainstorm what should be happening on the empty onSubmit, value, and onChange.
//Then, INSTRUCTOR please do: go over what the correct answers are, and why.
//1) onChange: This needs to prevent the default action of a form (submission!) and also set our state to what the input currently is.
//2) value: this should equal our state for the term. Otherwise, the value of our input will not always reflect the state we are keeping.
//3) onSubmit: This should use a function we write called onFormSubmit, which will preventDefault, call our action from the props, so that we ensure a dispatch occurs!
//3.1) We also need to think about clearing the input..
//Lets jump up and write these functions! ROCK ON!
  render() {
    return (
      <form className='input-group' onSubmit={}>
        <input
          placeholder='get a five day forcast in your face city!'
          className='form-control'
          value={}
          onChange={}
        />
        <span className='input-group-button'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    );
  }
};

//Here's a MAJOR Redux lesson, that you shall never forget. This is how we dispatch with react-redux, connect, and our  action! Yep, redux can do this  FOR us. !!
//We will write a function called mapDispatchToProps, that takes dispatch as the arguement, and returns a function called bindActionCreators, that takes our action, as an object,
//and dispatch. Please keep in mind { fetchWeather } is actually syntactic sugar for {fetchWeather: fetchWeather} - bindActionCreators expects its first arguement to be a JS object
//with a key of the function name and the function as the value. It then expects the dispatch we passed into mapDispatchToProps.
//STUDENTS DO: Write your first mapDispatchToProps function! Be sure to google it and get used to documentation you find.
//Useful docs: http://redux.js.org/docs/api/bindActionCreators.html
//Also, now that we have bound fetchWeather, we must call it from the components props: this.props.fetchWeather();
//CODE GOES HERE

//CODE GOES HERE

//Now, after the INSTRUCTOR has gone over the above mapDispatchToProps solution, we need to use connect to connect this function to our component! Then, redux will know when
//our application state changes, to re-render our component, and also that we will be dispatching via the functions bound in mapDispatchToProps.
//Here are some good links to read:
// 1) https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops
//2) https://github.com/reactjs/react-redux/blob/master/docs/api.md (this goes more in depth that this Activity, but has all the good examples)
//CODE GOES HERE

//CODE GOES HERE
// Now, lets write our render and start writing the form we need to obtain the user's search term!
