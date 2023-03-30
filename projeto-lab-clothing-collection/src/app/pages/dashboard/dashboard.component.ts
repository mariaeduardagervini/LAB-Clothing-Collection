import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cards = [
    { titulo: 'Coleções', valor: 0 },
    { titulo: 'Modelos', valor: 0 },
    { titulo: 'Orçamento Médio (R$)', valor: 0 },
  ];
}
