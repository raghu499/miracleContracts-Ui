import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { documentInformation } from '../../model/document.model';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Subject } from 'rxjs/Subject'
@Component({
  selector: 'app-upload-control',
  templateUrl: './upload-control.component.html',
  styleUrls: ['./upload-control.component.css']
})
export class UploadControlComponent implements OnInit {
  @Output() fileAdded = new EventEmitter();
  documentInfo: documentInformation = new documentInformation();
  errorMsg: boolean = false;
  notvalidDocumentSize: Boolean = false;
  onChangeFileName: string;
  onChangeFileCategory: string;
  public files: UploadFile[] = [];
  @Input('fileName') fileName: string;
  @Input('fileCategory') fileCategory: string;
  refresh: Subject<any> = new Subject();
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.onChangeFileName = this.fileName;
    this.onChangeFileCategory = this.fileCategory;
  }

  onFileChange(event) {
    const reader = new FileReader();
    const formInput: FormData = new FormData();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.onChangeFileName = file.name;
      this.files = [];
      var extName = file.name.split('.').pop();
      var ext = extName.toLowerCase()
      if (ext == "docx" || ext == "pdf" || ext == "doc" || ext == "png" || ext == "jpg" || ext == "xls" || ext == "xlsx") {
        formInput.append('file', file, file.name);
        this.documentInfo.fileInput = formInput;
        this.documentInfo.fileName = file.name;
        this.documentInfo.fileCategory = this.onChangeFileCategory;
        this.documentInfo.file = file;

        let sizeOfFile = this.documentInfo.file.size;
        sizeOfFile = Math.ceil(sizeOfFile / (1024 * 1024));
        const defaultsize = 26;
        if (sizeOfFile >= defaultsize) {
          this.fileAdded.emit({ fileInput: formInput, fileName: "", fileCategory: this.onChangeFileCategory });
          this.notvalidDocumentSize = true;
        } else {
          this.notvalidDocumentSize = false;
          this.fileAdded.emit(this.documentInfo);
        }
        this.errorMsg = false;
      } else {
        this.fileAdded.emit({ fileInput: formInput, fileName: "", fileCategory: this.onChangeFileCategory });
        this.errorMsg = true;
        this.notvalidDocumentSize = false;
      }
    }
  }
  public dropped(event: UploadEvent) {
    this.files = event.files;
    const formInput: FormData = new FormData();
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.onChangeFileName = droppedFile.relativePath;
          var extName = file.name.split('.').pop();
          var ext = extName.toLowerCase()
          if (ext == "docx" || ext == "pdf" || ext == "doc" || ext == "png" || ext == "jpg" || ext == "xls" || ext == "xlsx") {
            formInput.append('file', file, file.name);
            this.documentInfo.fileInput = formInput;
            this.documentInfo.fileName = file.name;
            this.documentInfo.file = file;
            this.documentInfo.fileCategory = this.onChangeFileCategory;
            let sizeOfFile = this.documentInfo.file.size;
            sizeOfFile = Math.ceil(sizeOfFile / (1024 * 1024));
            const defaultsize = 26;
            if (sizeOfFile >= defaultsize) {
              this.fileAdded.emit({ fileInput: formInput, fileName: "", fileCategory: this.onChangeFileCategory });
              this.notvalidDocumentSize = true;
            } else {
              setTimeout(() => {
                this.notvalidDocumentSize = false;
                this.ref.markForCheck();
                this.ref.detectChanges()
              }, 100);
              this.fileAdded.emit(this.documentInfo);
            }
            setTimeout(() => {
              this.errorMsg = false;
              this.ref.markForCheck();
              this.ref.detectChanges()
            }, 100);
          } else {
            this.fileAdded.emit({ fileInput: formInput, fileName: "", fileCategory: this.onChangeFileCategory });
            this.errorMsg = true;
            this.notvalidDocumentSize = false;
          }
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;;
      }
    }
  }
}

