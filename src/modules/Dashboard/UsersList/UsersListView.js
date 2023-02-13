import React from "react";
import { useSelector } from "react-redux";
import UserDetailView from "./UserDetailView";
import { StyledUserList } from "./UserList.styled";

const UsersListView = () => {
  const { data: users } = useSelector(
    (state) => state.applicationReducer?.userList
  );

  return (
    <StyledUserList>
      {users?.map((user) => (
        <UserDetailView user={user} key={user._id} />
      ))}
    </StyledUserList>
  );
};

export default UsersListView;
