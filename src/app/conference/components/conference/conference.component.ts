import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../services/conference.service'
import { firstValueFrom, Observable } from 'rxjs'
import { Conference } from '../../models/conference.model'
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CustomDateParserFormatter } from '../ngbDatepicker/CustomDateParserFormatter'
import { CustomAdapter } from '../ngbDatepicker/CustomAdapter'

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class ConferenceComponent implements OnInit {
  public conferences$: Observable<Conference[]>;

  public activeConference: Conference = null!;

  constructor(
    private conferenceService: ConferenceService,
    private modalService: NgbModal,
  ) {
    this.conferences$ = this.conferenceService.findAll();
  }

  ngOnInit(): void {
  }

  showCreateModal(modal: any): void {
    this.activeConference = new Conference();

    this.modalService.open(modal).result
      .then(conference => firstValueFrom(this.conferenceService.create(conference)))
      .then(() => this.conferences$ = this.conferenceService.findAll())
  }

  showUpdateModal(modal: any, conference: Conference): void {
    this.activeConference = { ...conference };

    this.modalService.open(modal).result
      .then(conference => firstValueFrom(this.conferenceService.update(conference)))
      .then(() => this.conferences$ = this.conferenceService.findAll())
  }

  showDeleteModal(modal: any, conference: Conference): void {
    this.activeConference = { ...conference };

    this.modalService.open(modal).result
      .then(conference => firstValueFrom(this.conferenceService.delete(conference)))
      .then(() => this.conferences$ = this.conferenceService.findAll())
  }
}
