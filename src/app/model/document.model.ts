export class documentInformation {
  fileInput : FormData;
  fileName : string;
  fileExtention : string;
  file : File;
  fileCategory: string;
}

export class documentInformationList {
  fileInput : FormData [] = [];
  fileName : string [] = [];
  file : File [] = [];
}
