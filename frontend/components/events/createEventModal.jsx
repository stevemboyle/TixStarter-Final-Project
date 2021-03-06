var React = require('react');
var EventStore = require('../../stores/event.js');
// var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');

module.exports = React.createClass({

  getInitialState: function(){
    return({
      title: "",
      catchphrase: "",
      description: "",
      image_url: "",
      video_url: "",
      user_id: String(UserStore.user().id),
      revenue_goal: "",
      revenue_status: 0,
    });
  },

  titleChange: function(keyboardEvent){
    var newTitle = keyboardEvent.target.value;
    this.setState({ title: newTitle });
  },

  catchphraseChange: function(keyboardEvent){
    var newCatchphrase = keyboardEvent.target.value;
    this.setState({ catchphrase: newCatchphrase});
  },

  descriptionChange: function(keyboardEvent){
    var newDescription = keyboardEvent.target.value;
    this.setState({ description: newDescription});
  },

  imageUrlChange: function(keyboardEvent){
    var newImageUrl = keyboardEvent.target.value;
    this.setState({ image_url: newImageUrl});
  },

  videoUrlChange: function(keyboardEvent){
    var newVideoUrl = keyboardEvent.target.value;
    this.setState({ video_url: newVideoUrl});
  },

  revenueGoalChange: function(keyboardEvent){
    var newRevenueGoal = keyboardEvent.target.value;
    this.setState({ revenue_goal: newRevenueGoal});
  },

  handleSubmit: function(keyboardEvent){
    keyboardEvent.preventDefault();
    var eventData = {
      title: this.state.title,
      catchphrase: this.state.catchphrase,
      description: this.state.description,
      image_url: this.state.image_url,
      video_url: this.state.video_url,
      user_id: String(UserStore.user().id),
      revenue_goal: this.state.revenue_goal,
      revenue_status: 0,
    };

    ClientActions.createEvent(eventData);
  },

  render: function(){
    return(
      <div className="create-event-background">
        <form id="create-event" onSubmit={this.handleSubmit} className="form-style-8">

          <br></br>

          <label> Title:
            <input type="text"
                    value={this.state.title}
                    onChange={this.titleChange}
                    placeholder="Enter your event's title"
              />
          </label>

          <br></br>

          <label> Catchphrase:
            <input type="text"
                    value={this.state.catchphrase}
                    onChange={this.catchphraseChange}
                    placeholder="Catchphrase"
              />
          </label>

          <br></br>

          <label> Description:

            <textarea value={this.state.description}
            onChange={this.descriptionChange}
            placeholder="Description" rows="10" cols="50">Write something here</textarea>


          </label>

          <br></br>

          <label> URL for Image to Embed:
            <input type="text"
                    value={this.state.imageUrl}
                    onChange={this.imageUrlChange}
              />
          </label>

          <br></br>
          <br></br>
        <p>We can embed a video!</p>
        <p>For this, head to YouTube and find a video you like.</p>
        <p>If the URL is 'https://www.youtube.com/watch?v=JrbCFR1FsZk',</p>
        <p>Copy 'JrbCFR1FsZk' into the box below:</p>
<br></br>
          <label> URL for Video to Embed:
            <input type="text"
                    value={this.state.videoUrl}
                    onChange={this.videoUrlChange}
              />
          </label>

          <br></br>

          <label> Revenue Goal:
            <input type="text"
                    value={this.state.revenueGoal}
                    onChange={this.revenueGoalChange}
              />
          </label>

          <br></br>

        <input type="submit" value="Create Event" />

        <br></br>


        </form>

        <br></br>
      </div>
    );
  }

});
