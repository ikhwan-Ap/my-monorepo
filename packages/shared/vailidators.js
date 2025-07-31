// Validasi email yang valid
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Validasi nomor telepon Indonesia dasar
export function isValidPhoneNumber(phone) {
  return /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(phone);
}

// Validasi password kuat (minimal 8 karakter, ada huruf dan angka)
export function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

// Validasi angka saja
export function isNumeric(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

// Validasi nama (alfabet, spasi, minimal 2 karakter)
export function isValidName(name) {
  return /^[A-Za-z\s]{2,}$/.test(name);
}

// Validasi slug (a-z, 0-9, -, _)
export function isValidSlug(slug) {
  return /^[a-z0-9_-]+$/.test(slug);
}

// Validasi username (alfanumerik, titik, underscore, min 3 karakter)
export function isValidUsername(username) {
  return /^[a-zA-Z0-9._]{3,}$/.test(username);
}

// Validasi NIK (Indonesia)
export function isValidNIK(nik) {
  return /^\d{16}$/.test(nik);
}

// Validasi NPWP
export function isValidNPWP(npwp) {
  return /^\d{15}$/.test(npwp.replace(/\D/g, ""));
}

// Validasi tanggal valid
export function isValidDate(value) {
  const date = new Date(value);
  return !isNaN(date.getTime());
}
