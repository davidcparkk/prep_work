import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" time="4:00 PM" content="I like math" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" time="5:00 PM" content="I like english" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Doe" time="6:00 PM" content="I like physics" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);