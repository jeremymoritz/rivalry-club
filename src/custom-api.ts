/* tslint:disable */

export type GetBasicUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    role: number;
    awsSub: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
  } | null;
};
