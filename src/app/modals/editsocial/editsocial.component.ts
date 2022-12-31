import { Component, OnInit } from '@angular/core';

import { SocialService } from 'src/app/services/social.service';
@Component({
  selector: 'app-editsocial',
  templateUrl: './editsocial.component.html',
  styleUrls: ['./editsocial.component.css'],
})
export class EditsocialComponent implements OnInit {
  constructor(public sSocial: SocialService) {}
  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sSocial.updateSocial(this.sSocial.editsocial).subscribe((info) => {
      this.sSocial.editsocial = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
