import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/job.service';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: Job[] = [];

  constructor(private sJob: JobService) {}
  // methods -> services
  list(): void {
    this.sJob.list().subscribe((info) => {
      this.experience = info;
    });
  }

  refresh() {
    window.location.reload();
  }

  delete(id: any): void {
    if (id) {
      this.sJob.deleteJob(id).subscribe((info) => {
        alert('Datos eliminados');
        this.list();
        this.refresh();
      });
    }
  }

  ngOnInit(): void {
    this.list();
  }
}
