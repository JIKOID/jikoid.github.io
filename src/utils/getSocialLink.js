const getSocialLink = (name, contact) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'linkedIn':
      href = `https://linkedin.com/in/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'tistory':
      href = `https://${contact}.tistory.com/`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getSocialLink;