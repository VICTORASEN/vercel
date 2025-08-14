const formattedDates = Object.fromEntries(
  [
  ['Gregorian', 'en-US-u-ca-gregory'],
  ['Hijri', 'en-US-u-ca-islamic'],
  ['Chinese', 'zh-CN-u-ca-chinese'],
  ['Hebrew', 'he-IL-u-ca-hebrew'],
  ['Japanese', 'ja-JP-u-ca-japanese'],
  ['Buddhist', 'th-TH-u-ca-buddhist'],
  ['Persian', 'fa-IR-u-ca-persian'],
].map(([label, locale]) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date('19 FEB 2025'));
 
    return [label, formatted]; // Return a key-value pair
  })
);
 
console.log(formattedDates);
