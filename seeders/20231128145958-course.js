// @ts-nocheck
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Courses", [
      {
        title: "Menguasai Seni Virtual Assistant",
        price: "Rp200.000",
        description:
          "Pelajari keterampilan administratif online dan manajemen waktu untuk menjadi asisten virtual yang sukses. Kursus ini membimbing Anda melalui dasar-dasar manajemen waktu, komunikasi efektif, dan penguasaan alat-alat terkini.",
        short_desc:
          "Pelajari keterampilan administratif online dan manajemen waktu untuk menjadi asisten virtual yang sukses.",
        duration: "10 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610212/va_lphkbv.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Penggalian Data: Membangun Wawasan dari Informasi Tersembunyi",
        price: "Rp350.000",
        description:
          "Pelajari teknik penggalian data dan analisis pola untuk mengoptimalkan pengambilan keputusan. Kursus ini membimbing Anda melalui aplikasi praktis untuk meningkatkan efisiensi bisnis.",
        short_desc:
          "Pelajari teknik penggalian data dan analisis pola untuk mengoptimalkan pengambilan keputusan.",
        duration: "15 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610213/da_dlmfwq.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Membangun Keterampilan Mengajar yang Efektif",
        price: "Rp250.000",
        description:
          "Membangun keterampilan mengajar yang efektif dan mengelola kelas dengan baik. Kursus ini membimbing Anda melalui teknik-teknik terbaik dalam pengajaran dan komunikasi yang efektif.",
        short_desc:
          "Membangun keterampilan mengajar yang efektif dan mengelola kelas dengan baik.",
        duration: "8 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610204/guru_fwpqzg.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Menguasai Seni Berbicara di Depan Umum",
        price: "Rp150.000",
        description:
          "Tingkatkan kepercayaan diri dan keterampilan berbicara di depan umum. Kursus ini memberikan panduan komprehensif untuk meningkatkan keterampilan presentasi Anda.",
        short_desc:
          "Tingkatkan kepercayaan diri dan keterampilan berbicara di depan umum.",
        duration: "6 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610207/ps_lex06g.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pengembangan Game dari A-Z",
        price: "Rp400.000",
        description:
          "Pelajari pengembangan game dari desain hingga uji coba. Kursus ini mencakup konsep-konsep kunci di balik industri game dan memberikan pemahaman mendalam tentang proses pengembangan game.",
        short_desc: "Pelajari pengembangan game dari desain hingga uji coba.",
        duration: "20 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610214/game_hofjld.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pengantar Kecerdasan Buatan dan Aplikasinya",
        price: "Rp300.000",
        description:
          "Pelajari dasar-dasar kecerdasan buatan dan aplikasinya dalam berbagai industri. Kursus ini menunjukkan aplikasi praktis kecerdasan buatan dalam kehidupan sehari-hari dan bisnis.",
        short_desc:
          "Pelajari dasar-dasar kecerdasan buatan dan aplikasinya dalam berbagai industri.",
        duration: "12 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610207/ai_cpbfnq.jpg",
        categoryID: 6, // machine learning
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Strategi Spesialis Media Sosial untuk Pertumbuhan Bisnis",
        price: "Rp250.000",
        description:
          "Pelajari taktik media sosial yang efektif untuk pertumbuhan bisnis. Kursus ini memberikan pemahaman mendalam dan langkah-langkah praktis dalam pemasaran media sosial.",
        short_desc:
          "Pelajari taktik media sosial yang efektif untuk pertumbuhan bisnis.",
        duration: "10 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610208/sm_bncgob.jpg",
        categoryID: 5, // business
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Menguasai Pemrograman Web dengan HTML, CSS, dan JavaScript",
        price: "Rp180.000",
        description:
          "Pelajari dasar-dasar HTML, CSS, dan JavaScript untuk pengembangan web. Kursus ini memberikan fondasi yang kuat melalui proyek-proyek praktis.",
        short_desc:
          "Pelajari dasar-dasar HTML, CSS, dan JavaScript untuk pengembangan web.",
        duration: "8 jam",
        image: "https://res.cloudinary.com/dzajixld0/image/upload/v1701610206/coding_ecsv0c.jpg",
        categoryID: 1, // coding
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Courses", null, {});
  },
};
