import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brazilianCurrency'
})
export class BrazilianCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    // Formata o valor como moeda brasileira com ponto como separador de milhares e vírgula como separador de decimais
    return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
