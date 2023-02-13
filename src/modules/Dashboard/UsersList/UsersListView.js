import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import UserDetailView from "./UserDetailView";
import { StyledUserList } from "./UserList.styled";

const UsersListView = ({
  onDeleteClick,
  handleUpdateUserSubmit,
  control,
  errors,
}) => {
  const { data: users } = useSelector(
    (state) => state.applicationReducer?.userList,
    shallowEqual
  );

  const renderUserList = () => {
    return (
      <StyledUserList>
        {users?.map(({ firstName, lastName, age, phoneNumber, _id }) => {
          return (
            <UserDetailView
              onUpdateUserSubmit={handleUpdateUserSubmit}
              onDeleteClick={onDeleteClick}
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
              age={age}
              _id={_id}
              control={control}
              errors={errors}
            />
          );
        })}
      </StyledUserList>
    );
  };

  return <div>{renderUserList()}</div>;
};

export default UsersListView;
