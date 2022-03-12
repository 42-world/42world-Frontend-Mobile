import dayjs from 'dayjs';

export const getArticleTime = time =>
  dayjs(time).isSame(dayjs(), 'day')
    ? dayjs(time).format('HH:mm')
    : dayjs(time).format('MM/DD');

export const isNewArticle = time =>
  dayjs().isBefore(dayjs(time).add(12, 'hour'));

const dayjsUtils = { getArticleTime, isNewArticle };

export default dayjsUtils;
