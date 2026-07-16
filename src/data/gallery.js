const oathTakingImages = Array.from({ length: 14 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    id: imageNumber,
    alt: `CLAP Oath Taking Ceremony photograph ${imageNumber}`,
    src: `/gallery/oath-taking-ceremony/${imageNumber}.jpg`,
  };
});

export const galleryFolders = [
  {
    id: 'oath-taking-ceremony',
    title: 'Oath Taking Ceremony',
    path: '/gallery/oath-taking-ceremony',
    coverImage: '/gallery/oath-taking-ceremony/12.jpg',
    coverAlt: 'CLAP Oath Taking Ceremony featured photograph',
    items: oathTakingImages,
  },
];

export const galleryItems = oathTakingImages;
