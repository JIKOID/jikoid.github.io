import ICONS from '../constants/icons';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'linkedIn':
      icon = ICONS.LINKEDIN;
      break;
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'tistory':
      icon = ICONS.TISTORY;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;