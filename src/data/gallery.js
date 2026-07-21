const oathTakingImageFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
];

const generalGalleryImageFiles = [
  'WhatsApp Image 2026-07-21 at 5.25.08 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.09 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.09 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.10 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.11 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.12 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.12 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.13 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.13 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.14 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.14 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.15 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.24 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.25 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.26 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.27 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.27 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.28 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.28 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.29 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.29 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.30 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.30 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.31 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.31 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.32 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.32 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.33 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.33 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.34 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.34 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.35 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.35 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.36 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.36 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.36 PM (2).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.37 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.38 PM.jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.38 PM (1).jpeg',
  'WhatsApp Image 2026-07-21 at 5.25.39 PM.jpeg',
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
    coverImage: '/gallery/gallery/WhatsApp Image 2026-07-21 at 5.25.08 PM.jpeg',
    coverAlt: 'CLAP gallery featured photograph',
    items: buildGalleryItems('gallery', generalGalleryImageFiles, 'gallery'),
  },
];

export function getGalleryFolderById(id) {
  return galleryFolders.find((folder) => folder.id === id) ?? null;
}
