interface UserDataProps {
  className?: string;
}

const UserData: React.FC<UserDataProps> = ({ className }) => {
  return (
    <div className={`userdata-wrapper ${className}`}>
      <div className="user-data__wrapper__info">
        <p className="user-data__wrapper__title h-md">User Details</p>
        <div className="user-data__info">
          <div className="user-data__details">
            <p className="h-sm user_name">Name</p>
            <p>abhi953433gmail.com</p>
          </div>
          <div className="user-data__action">
            <button className="user-data__action-btn">Click Here</button>
          </div>
        </div>
        <div className="user-data__info">
          <div className="user-data__details">
            <p className="h-sm user_name">Name</p>
            <p>abhi953433gmail.com</p>
          </div>
          <div className="user-data__action">
            <button className="user-data__action-btn">Click Here</button>
          </div>
        </div>
        <div className="user-data__info">
          <div className="user-data__details">
            <p className="h-sm user_name">Name</p>
            <p>abhi953433gmail.com</p>
          </div>
          <div className="user-data__action">
            <button className="user-data__action-btn">Click Here</button>
          </div>
        </div>
        <div className="user-data__info">
          <div className="user-data__details">
            <p className="h-sm user_name">Name</p>
            <p>abhi953433gmail.com</p>
          </div>
          <div className="user-data__action">
            <button className="user-data__action-btn">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
