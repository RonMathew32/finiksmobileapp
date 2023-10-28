import FiniksApi from './api';

export const GetPhoneBank = async ({campaignId, teamMemberEmail}) => {
  return await FiniksApi.post('/api/teammember/getteamphonebankrecords', {
    campaignId,
    teamMemberEmail,
  });
};
