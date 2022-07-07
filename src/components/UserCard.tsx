import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "8px 16px",
    margin: "8px"
  };
  const { user } = props;
  return (
    <div>
      <dl style={style}>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.adress}</dd>
      </dl>
    </div>
  );
};
