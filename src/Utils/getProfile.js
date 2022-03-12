const PROFILE_LIST = [
  { id: 0, image: '/assets/CharacterWhiteBG/bbo.png' },
  { id: 1, image: '/assets/CharacterWhiteBG/bora.png' },
  { id: 2, image: '/assets/CharacterWhiteBG/ddub.png' },
  { id: 3, image: '/assets/CharacterWhiteBG/nana.png' },
];

const findProfileById = id => {
  const profile = PROFILE_LIST.find(profile => profile.id === id);

  return profile?.image;
};

const getProfile = {
  PROFILE_LIST,
  findProfileById,
};

export default getProfile;
