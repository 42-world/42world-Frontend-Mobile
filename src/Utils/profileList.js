export const PROFILE_LIST = [
  { id: 0, image: '../assets/CharacterWhiteBG/bbo.png' },
  { id: 1, image: '../assets/CharacterWhiteBG/bora.png' },
  { id: 2, image: '../assets/CharacterWhiteBG/ddub.png' },
  { id: 3, image: '../assets/CharacterWhiteBG/nana.png' },
];

export const getProfileImg = id => {
  const profile = PROFILE_LIST.find(profile => profile.id === id);

  return profile ? profile.image : PROFILE_LIST[0].image;
};
