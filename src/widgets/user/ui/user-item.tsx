import "../style/user.css";

type UserItemProps = {
  name: string;
  description: string;
};

type UserItemType = (props: UserItemProps) => JSX.Element;

const UserItem: UserItemType = ({ name, description }) => {
  return (
    <div className="user-wrap">
      <div className="user-profile"></div>
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-description">{description}</div>
      </div>
    </div>
  );
};

export default UserItem;
