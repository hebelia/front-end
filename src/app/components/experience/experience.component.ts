import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/job.service';



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
  // method to obtain a specific id and send the information on that id to the edit modal
  viewJob(id: number) {
    this.sJob.viewJob(id).subscribe(info => {
      this.sJob.editjob = info;
    })
  }

  ngOnInit(): void {
    this.list();
  }
}
