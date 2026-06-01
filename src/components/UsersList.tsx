import { type User, type UserListProps } from "../types";

export const UsersList = ({ data, isLoading, error }: UserListProps) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data?.length === 0 ? (
        <p>no results</p>
      ) : (
        data?.map((user: User) => (
          <div className="userContainer" key={user.id}>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </>
  );
};
