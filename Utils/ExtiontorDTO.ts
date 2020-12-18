export default interface ExtintorDTO {
  id?: string;
  name?: string;
  brand: string;
  capacity: number;
  class: string;
  extirationDate: Date | string;
  hidraulico: Date | string;
  obvervarion?: string;
  ubication: string;
  type: string;
  photo: File | undefined;
  isService: boolean;
  createDate?: Date;
  updateDate?: Date;
}
