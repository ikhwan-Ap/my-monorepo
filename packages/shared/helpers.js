// =======================
// Basic Type Checks
// =======================

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
}

export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

export function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


// =======================
// String Utilities
// =======================

export function capitalize(str) {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str, maxLength = 100) {
  if (typeof str !== "string") return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
}

export function normalizeSpace(str) {
  return str.replace(/\s+/g, " ").trim();
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, "");
}

export function slugToTitle(slug) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}


// =======================
// Date & Time
// =======================

export function formatDate(date, format = "DD/MM/YYYY") {
  const d = new Date(date);
  if (isNaN(d)) return "";
  const pad = (n) => (n < 10 ? "0" + n : n);

  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());

  return format === "YYYY-MM-DD"
    ? `${year}-${month}-${day}`
    : `${day}/${month}/${year}`;
}

export function timeAgo(date) {
  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - d) / 1000);

  const intervals = [
    { label: "tahun", seconds: 31536000 },
    { label: "bulan", seconds: 2592000 },
    { label: "hari", seconds: 86400 },
    { label: "jam", seconds: 3600 },
    { label: "menit", seconds: 60 },
    { label: "detik", seconds: 1 },
  ];

  for (const i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count > 0) return `${count} ${i.label} yang lalu`;
  }

  return "Baru saja";
}

export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


// =======================
// Number & Format
// =======================

export function formatRupiah(number, prefix = "Rp") {
  if (isNaN(number)) return "";
  return (
    prefix +
    parseInt(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}

export function formatShortNumber(num) {
  const absNum = Math.abs(Number(num));
  if (absNum >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "M";
  if (absNum >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "JT";
  if (absNum >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}

export function getPercentage(part, total) {
  if (!total || isNaN(part) || isNaN(total)) return 0;
  return Math.round((part / total) * 100);
}


// =======================
//  Masking
// =======================

export function maskPhoneNumber(phone) {
  if (!phone || phone.length < 8) return phone;
  return phone.substring(0, 4) + "****" + phone.slice(-4);
}

export function maskEmail(email) {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;
  return user[0] + "***@" + domain;
}


// =======================
//  Functional
// =======================

export function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function noop() {}

export function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}


// =======================
//  Object & Array Helpers
// =======================

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function cleanObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined && v !== "")
  );
}

export function groupBy(array, key) {
  return array.reduce((result, currentItem) => {
    const groupKey = currentItem[key];
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(currentItem);
    return result;
  }, {});
}
