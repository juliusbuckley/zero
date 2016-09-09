import axios from 'axios';
import { parseData, addUrl } from '../db/utils';

//API ROUTES
const slackRoutes = (app) => {
  //////////////////////////////////////////////
  //SLACK MESSAGE DATA ROUTE
  //////////////////////////////////////////////
  app.get('/messages', (req,res) => {
    //GET request to slack API endpoint for all messages containing search query
    axios.get(`https://slack.com/api/search.messages?token=${process.env.SLACK_TOKEN}&query=http&pretty=1`)
      .then((response) => {
        response.data.messages.matches.forEach((message) => {
          for (let key in message) {
            if (key === 'attachments') {
              addUrl('urls', message[key][0].title, message[key][0].title_link);
            } else if (key === 'previous') {
                parseData(message[key]);
            } else if (key === 'previous_2') {
                parseData(message[key]);
            } else if (key === 'next') {
                parseData(message[key]);
            } else if (key === 'next_2') {
                parseData(message[key]);
            }
          }
        });
        res.send(JSON.stringify('test'));
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  });
  
};

export default slackRoutes;