export interface VolumeInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail: string;
  };
  infoLink?: string;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}