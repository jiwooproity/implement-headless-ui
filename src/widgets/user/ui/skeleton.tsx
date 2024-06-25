import "../style/user-skeleton.css";

const UserSkeleton = () => {
  return (
    <div className="skeleton-user-wrap">
      <div className="skeleton-user-profile skeleton-gradient"></div>
      <div className="skeleton-user-info">
        <div className="skeleton-user-name skeleton-gradient"></div>
        <div className="skeleton-user-description skeleton-gradient"></div>
      </div>
    </div>
  );
};

export default UserSkeleton;
