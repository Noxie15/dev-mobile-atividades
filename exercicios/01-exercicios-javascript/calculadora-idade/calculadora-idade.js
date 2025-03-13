import moment from "moment"

export function calcularIdade(year) {
    const anoAtual = moment().year()
    return anoAtual - year
}