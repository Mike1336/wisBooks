import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IBook } from './../../interfaces/book';

@Component({
  selector: 'confirming-delete-modal',
  templateUrl: './confirming-delete-modal.component.html',
  styleUrls: ['./confirming-delete-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmingDeleteModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public book: IBook) { }

  public ngOnInit(): void {
  }

}
