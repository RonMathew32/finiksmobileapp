export const sortByKey = (array, key, order) => {
  const compare = (a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    } else if (order === 'desc') {
      return a[key] < b[key] ? 1 : -1;
    } else {
      return 0;
    }
  };

  return [...array].sort(compare);
};

export const toCamelCase = str => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

export const extractTagIdAndName = array => {
  return array
  .filter(obj => obj.tagId || obj._id)
  .map(({ tagId, _id, tagName }) => ({ tagId: tagId || _id, tagName }));
};

export const filteredSurveyIds = array => {
  return array
  .filter(item => item.voterAnswer?.answer !== undefined && item.voterAnswer.answer.trim() !== '')
  .map(item => ({ surveyId: item.surveyId }));
}

export const filteredSurveyAnswerByVoter = array => {
  return array.map(item => ({
    surveyId: item.surveyId,
    surveyQuestion: item.surveyQuestion,
    surveyName: item.surveyName,
    surveyPreview: item.surveyPreview,
    answer: item.voterAnswer?.answer,
    voterId: item.voterAnswer?.voterId,
    voterName: item.voterAnswer?.voterName,
    date: item.voterAnswer?.date,
    time: item.voterAnswer?.time,
  })).filter(item => item.answer !== undefined && item.answer.trim() !== '');
  
}
