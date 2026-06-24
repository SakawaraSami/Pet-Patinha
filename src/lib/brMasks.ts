// Máscaras e validadores para campos brasileiros

export const maskPhone = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 13);
  // garante prefixo 55
  let rest = d;
  if (rest.startsWith("55")) rest = rest.slice(2);
  rest = rest.slice(0, 11);
  let out = "+55";
  if (rest.length > 0) out += ` (${rest.slice(0, 2)}`;
  if (rest.length >= 2) out += ") ";
  if (rest.length > 2 && rest.length <= 7) out += rest.slice(2);
  if (rest.length > 7) out += rest.slice(2, 7) + "-" + rest.slice(7);
  return out;
};

export const maskCPF = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
};

export const maskCEP = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 8);
  return d.replace(/(\d{5})(\d)/, "$1-$2");
};

export const isValidCPF = (cpf: string) => {
  const d = cpf.replace(/\D/g, "");
  if (d.length !== 11 || /^(\d)\1+$/.test(d)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(d[i]) * (10 - i);
  let r = (sum * 10) % 11;
  if (r === 10) r = 0;
  if (r !== parseInt(d[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(d[i]) * (11 - i);
  r = (sum * 10) % 11;
  if (r === 10) r = 0;
  return r === parseInt(d[10]);
};

export const isValidPhoneBR = (phone: string) => {
  const d = phone.replace(/\D/g, "");
  // +55 + DDD(2) + 8 ou 9 dígitos
  return d.length === 12 || d.length === 13;
};

export const isValidCEP = (cep: string) => cep.replace(/\D/g, "").length === 8;

export const BR_STATES = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];
