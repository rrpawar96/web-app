import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SystemService } from '../../../../system/system.service';

@Component({
  selector: 'mifosx-upload-creditreport-dialog',
  templateUrl: './upload-CreditReport.component.html',
  styleUrls: ['./upload-CreditReport.component.scss']
})
export class UploadCreditReportComponent {

  template: File;
  creditBureauId: any;

  bulkImport: any = {};

  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService) {

  }
  /**
   * Sets file form control value.
   * @param {any} $event file change event.
   */
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      this.template = $event.target.files[0];
    }
  }

  uploadTemplate() {
    this.creditBureauId = 1;
    this.systemService.uploadImportDocument(this.template, this.bulkImport.urlSuffix, this.creditBureauId).subscribe(() => {});
  }

}


