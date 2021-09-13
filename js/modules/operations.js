export default class Operation {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasFuncionamento = this.funcionamento.dataset.semana
      .split(',')
      .map(Number);
    this.horarioAtivo = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAtual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasFuncionamento.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora >= this.horarioAtivo[0]
      && this.horarioAgora < this.horarioAtivo[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAtual();
      this.ativaAberto();
    }
    return this;
  }
}
