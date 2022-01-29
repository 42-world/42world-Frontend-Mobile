export const PROFILE_LIST = [
  { id: 0, image: '../assets/CharacterNoBG/bbo.png' },
  { id: 1, image: '../assets/CharacterNoBG/bora.png' },
  { id: 2, image: '../assets/CharacterNoBG/ddub.png' },
  { id: 3, image: '../assets/CharacterNoBG/nana.png' },
];

export const getProfileImg = id => {
  const profile = PROFILE_LIST.find(profile => profile.id === id);

  return profile ? profile.image : PROFILE_LIST[0].image;
};
