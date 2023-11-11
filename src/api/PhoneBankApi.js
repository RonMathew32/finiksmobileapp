import FiniksApi from './api';

export const GetPhoneBank = async ({campaignId, teamMemberEmail}) => {
  return await FiniksApi.post('/api/teammember/getteamphonebankrecords', {
    campaignId,
    teamMemberEmail,
  });
};

//
// getlist
// /api/teammember/getscript
// /api/teammember/gettags
// /api/teammember/getadmintags
// /api/teammember/getsurvey

export const GetVoterCheckData = async ({id, type}) => {
  return await FiniksApi.post(`/api/teammember/${type}`, {
    id: id,
  });
};

export const GetVoterCheckDataAdmin = async ({id, type}) => {
  return await FiniksApi.get(`/api/teammember/${type}`, {
    id: id,
  });
};
