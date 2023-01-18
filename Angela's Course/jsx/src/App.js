import React from "react";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          timeAgo="Today at 4:45 PM"
          comment="Nice post!"
          img={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="ALex"
          timeAgo="Today at 6:45 PM"
          comment="Good post!"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Max"
          timeAgo="Today at 9:45 PM"
          comment="Alas post!"
          img={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
