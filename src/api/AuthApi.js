import FiniksApi from './api';

export const LoginApi = async ({email, password}) => {
  return await FiniksApi.post('/api/teammember/loginteammember', {
    email,
    password,
  });
};

export const SignUpApi = async ({
  email,
  password,
  firstName,
  lastName,
  address,
  phoneNumber,
}) => {
  return await FiniksApi.post('/api/teammember/registerteammember', {
    email,
    password,
    firstName,
    lastName,
    address,
    phoneNumber,
  });
};

export const VerifyOTP = async ({otp, email}) => {
  return await FiniksApi.post('/api/teammember/emailverify', {
    otp,
    email,
  });
};

export const JoinCampaign = async ({email, campaignCode}) => {
  return await FiniksApi.post('/api/teammember/joincampaign', {
    email,
    campaignCode,
  });
};
