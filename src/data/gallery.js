const oathTakingImageFiles = Array.from({ length: 14 }, (_, index) => `${index + 1}.jpg`);

const generalGalleryImageFiles = [
  ...Array.from({ length: 37 }, (_, index) => `${index + 1}.jpeg`),
  'WhatsApp Image 2026-07-21 at 5.25.14 PM.jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.54 PM.jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.54 PM (1).jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.55 PM.jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.56 PM.jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.56 PM (1).jpeg',
  'WhatsApp Image 2026-08-27 at 9.27.57 PM.jpeg',
];

function buildGalleryItems(folder, files, label) {
  return files.map((fileName, index) => ({
    id: `${folder}-${fileName}`,
    alt: `CLAP ${label} photograph ${index + 1}`,
    src: `/gallery/${folder}/${fileName}`,
  }));
}

export const galleryFolders = [
  {
    id: 'oath-taking-ceremony-2026',
    title: 'Oath Taking Ceremony 2026',
    path: '/gallery/oath-taking-ceremony-2026',
    coverImage: '/gallery/oath-taking-ceremony-2026/12.jpg',
    coverAlt: 'CLAP Oath Taking Ceremony 2026 featured photograph',
    items: buildGalleryItems('oath-taking-ceremony-2026', oathTakingImageFiles, 'Oath Taking Ceremony 2026'),
  },
  {
    id: 'gallery',
    title: 'Gallery',
    path: '/gallery/gallery',
    coverImage: '/gallery/gallery/1.jpeg',
    coverAlt: 'CLAP gallery featured photograph',
    items: buildGalleryItems('gallery', generalGalleryImageFiles, 'gallery'),
  },
];

export function getGalleryFolderById(id) {
  return galleryFolders.find((folder) => folder.id === id) ?? null;
}
