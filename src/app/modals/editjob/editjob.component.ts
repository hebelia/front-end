import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css'],
})
export class EditjobComponent implements OnInit {
  constructor(public sJob: JobService) {}

  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sJob.updateJob(this.sJob.editjob).subscribe((info) => {
      this.sJob.editjob = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
