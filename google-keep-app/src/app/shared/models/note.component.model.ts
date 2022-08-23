export interface NoteModel {
  id?: number;
  title: string;
  text: string;
  selectedColor: string;
  backgroundImage: string;
  uploadedImage: string;
  lastUpdate: any;
  isPinned: boolean;
}
