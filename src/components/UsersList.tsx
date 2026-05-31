import { type User, type UserListProps } from "../types";

export const UsersList = ({ data, isLoading, error }: UserListProps) => {
  return (
    <>
      <section>
        {isLoading ?? <p>Loading...</p>}
        {error ?? <p>{error}</p>}
        {data?.map((user: User) => (
          <div className="userContainer" key={user.id}>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </section>
    </>
  );
};
