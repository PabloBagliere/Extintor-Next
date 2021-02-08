import firebase from 'firebase';

export default interface DTOExtinguisher {
  id?: string;
  name?: string;
  brand: string;
  capacity: number;
  class: string;
  extirationDate: string | Date | firebase.firestore.Timestamp;
  hidraulico: string | Date | firebase.firestore.Timestamp;
  obvervarion?: string;
  ubication: string;
  type: string;
  photo: string | File;
  isService: boolean;
  createDate?: Date | firebase.firestore.Timestamp;
  updateDate?: Date | firebase.firestore.Timestamp;
}
