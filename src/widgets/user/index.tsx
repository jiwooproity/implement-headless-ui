import { useEffect, useState } from "react";

import "./style/main.css";
import UserItem from "./ui/user-item";
import UserData from "./data/users.json";
import UserSkeleton from "./ui/skeleton";

type UserTypes = typeof UserData;

const request: Promise<UserTypes> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(UserData);
  }, 3000);
});

const User = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserTypes>([]);

  const fetching = async () => {
    const response = await request;
    setLoading(true);
    setData(response);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="user-list">
      {loading
        ? data.map((user) => (
            <UserItem key={user.id} name={user.name} description={user.description} />
          ))
        : Array.from({ length: 6 }, (_, id) => {
            return { id };
          }).map((item) => <UserSkeleton key={item.id} />)}
    </div>
  );
};

export default User;
