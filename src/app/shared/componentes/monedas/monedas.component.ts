import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../../monedas.service';

@Component ({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss'],
})
export class MonedasComponent implements OnInit {
  cambio: any = [];
  valor: any=0;
  seleccion = 'EUR';

  constructor(private respuesta: MonedasService) {}

  ngOnInit(): void {
    this.respuesta.getCambio().subscribe((res: any) => {
      for (const key in res.rates) {
        this.cambio.push({ name: key, value: res.rates[key] });
      }
    });
  }
  changeMoney(event: any){
   const base = (event.target as HTMLSelectElement).value
    this.respuesta.getBase(base).subscribe((res: any) => {
      this.cambio= [];
      for (const key in res.rates) {
        this.cambio.push({ name: key, value: res.rates[key] });
      }
  });
}
}
