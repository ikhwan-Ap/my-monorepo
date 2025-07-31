// constants/index.js

// Role penting (biasanya dipakai di middleware, seeding, dsb)
export const CORE_ROLES = {
  SUPER_ADMIN: "superadmin",
  ADMIN: "admin",
  USER: "user",
};

// Status umum (untuk entitas seperti post, user, transaksi, dll)
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  BANNED: "banned",
  DELETED: "deleted",
};

// Boolean value dalam bentuk enum agar lebih readable
export const BOOLEAN = {
  TRUE: true,
  FALSE: false,
  YES: "yes",
  NO: "no",
};

// Gender (kalau aplikasi berkaitan dengan user profiling)
export const GENDER = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other",
};

// Tipe data seperti verifikasi akun, dsb
export const VERIFICATION_TYPE = {
  EMAIL: "email",
  PHONE: "phone",
  IDENTITY: "identity",
};

// Default pagination values (bisa override di service layer)
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// Default response code dan message
export const RESPONSE_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const RESPONSE_MESSAGE = {
  SUCCESS: "Berhasil",
  CREATED: "Data berhasil dibuat",
  UPDATED: "Data berhasil diperbarui",
  DELETED: "Data berhasil dihapus",
  NOT_FOUND: "Data tidak ditemukan",
  UNAUTHORIZED: "Tidak memiliki akses",
  VALIDATION_FAILED: "Validasi gagal",
  SERVER_ERROR: "Terjadi kesalahan pada server",
};

// Bahasa atau negara (jika multilingual/multiregion)
export const LOCALE = {
  ID: "id",
  EN: "en",
};

// Format file/image/video yang diizinkan
export const FILE_TYPE = {
  IMAGE: ["jpg", "jpeg", "png", "webp"],
  DOCUMENT: ["pdf", "docx"],
  VIDEO: ["mp4", "mov"],
  ALL: ["jpg", "jpeg", "png", "webp", "pdf", "docx", "mp4", "mov"],
};

// Format pengurutan data (common sorting options)
export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
};

// Format status verifikasi
export const VERIFICATION_STATUS = {
  VERIFIED: "verified",
  UNVERIFIED: "unverified",
  PENDING: "pending",
};

// Format login method
export const AUTH_METHOD = {
  LOCAL: "local",
  GOOGLE: "google",
  FACEBOOK: "facebook",
};
