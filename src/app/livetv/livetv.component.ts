import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.component.html',
  styleUrls: ['./livetv.component.css']
})
export class LivetvComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  title = 'tablas';

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      processing: true,
      serverSide: true,
      ajax: {
        url: 'http://34.121.159.9/channels/datatable',
        dataSrc (response) {
          for (const channel of response.data) {
            channel.icono = `<img class="img" src="${channel.icono}" width="35">`
          }
          console.log(response.data);
          return response.data
        },
      },
      columns: [
        {
          title: 'Número',
          data: "numero",
          className: "text-center",
        },
        {
          title: 'Nombre',
          data: "nombre",
        },
        {
          title: 'EPG ID',
          data: "epgid",
          className: "text-center",
        },
        {
          title: 'Icono',
          data: "icono",
          className: "text-center",
        },
        {
          title: 'Género',
          data: "genero",
          className: "text-center",
        },
        {
          title: 'Descripción',
          data: "descripcion",
        },
        {
          title: 'Stream URL',
          data: "streamUrl",
        }
      ],
    };
  }

}
