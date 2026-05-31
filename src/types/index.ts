export type User = {
  id: number;
  firstName: string;
  email: string;
};

export type UserListProps = {
  data: User[] | null;
  isLoading: boolean;
  error: string | null;
};
