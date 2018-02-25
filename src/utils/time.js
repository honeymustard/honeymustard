let pad = n => n < 10 ? `0${n}` : n;

export let formatDate = isoDate => {
  let d = new Date(isoDate);

  return [
    pad(d.getDate()),
    pad(d.getMonth()+1),
    d.getFullYear(),
  ].join('.');
}
