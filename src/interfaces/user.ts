export interface User {
  id?: string;
  username?: string;
  roles?: any;
  password?: string;
  readonly userIdentifier?: string;
  readonly salt?: string;
}
