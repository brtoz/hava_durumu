'use strict';

export const weekDayNames = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi"
];

export const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}


export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Çok İyi",
    message: "Hava kalitesi tatmin edici olarak kabul edilir ve hava kirliliği neredeyse hiçbir risk oluşturmaz."
  },
  2: {
    level: "İyi",
    message: "Hava kalitesi kabul edilebilir; ancak bazı kirleticiler için hava kirliliğine son derece hassas olan çok az sayıda insan için orta düzeyde sağlık endişesi olabilir."
  },
  3: {
    level: "Orta",
    message: "Duyarlı grup üyeleri sağlık sorunları yaşayabilir. Genel olarak halkın etkilenmesi muhtemel değildir."
  },
  4: {
    level: "Kötü",
    message: "Herkes sağlık etkilerini hissetmeye başlayabilir; duyarlı grup üyeleri daha ciddi sağlık sorunları yaşayabilir."
  },
  5: {
    level: "Çok Kötü",
    message: "Acil durum koşullarına dair sağlık uyarıları. Tüm nüfusun etkilenme olasılığı daha yüksektir."
  }
}
