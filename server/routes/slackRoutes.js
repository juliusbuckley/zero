import { getMessages } from '../controllers/messagesController';

//API ROUTES
const slackRoutes = (app) => {
  //SLACK MESSAGES ROUTE
  app.get('/messages', getMessages);
};

export default slackRoutes;