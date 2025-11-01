export interface InitialReduxStateProps {
  tokenInfo: {
    accessToken: string;
    refreshToken: string;
  };
  userInfo : {id: number;
  email: string;
  username: string;
  role: string;
  phone_number: string;
  address: string;
  city: string;
  pincode: string;
  profile_image: string;
  gender: string;
  first_name: string;
  last_name: string;
  maid_profile: any;
  message?: string;} | null
}
