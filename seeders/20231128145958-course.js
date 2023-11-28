// @ts-nocheck
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Courses", [
      {
        title: "Belajar NodeJS",
        price: "Rp200.000",
        description:
          "Belajar Node.js dirancang untuk memberikan pemahaman mendalam tentang platform JavaScript runtime yang sangat populer, Node.js. Dalam kursus ini, peserta akan mempelajari dasar-dasar Node.js, termasuk cara membangun aplikasi web yang efisien dan skalabel. Materi kursus mencakup konsep dasar Node.js, pengelolaan paket menggunakan npm, penggunaan ekosistem modul, dan bagaimana Node.js berinteraksi dengan server. Peserta juga akan mendapatkan keterampilan praktis dalam mengembangkan aplikasi real-time menggunakan teknologi Node.js. Kursus ini cocok untuk pemula yang ingin memahami dasar-dasar Node.js dan pengembang yang ingin meningkatkan keterampilan pengembangan web mereka dengan memanfaatkan kekuatan Node.js",
        short_desc: "Belajar NodeJS dari pemula hingga mahir",
        notes: "",
        duration: "2 jam",
        image:
          "https://res.cloudinary.com/dzajixld0/image/upload/v1701184049/web_qywjfy.jpg",
        category: 1,
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Belajar Figma",
        price: "Rp150.000",
        description:
          'Kursus "Belajar Figma" adalah panduan komprehensif untuk menguasai salah satu alat desain kolaboratif terkemuka di dunia, Figma. Dalam kursus ini, peserta akan diajak untuk memahami antarmuka pengguna Figma, belajar teknik desain grafis, dan mendapatkan pemahaman mendalam tentang kolaborasi tim dalam proyek desain. Materi kursus mencakup dasar-dasar Figma, seperti pembuatan desain UI/UX, pembagian prototipe interaktif, serta pengelolaan komponen dan gaya. Peserta akan mendapatkan keterampilan praktis dalam merancang tata letak, ikon, dan elemen desain lainnya menggunakan Figma. Kursus ini sangat cocok untuk desainer grafis, pengembang web, dan siapa pun yang tertarik untuk meningkatkan keterampilan desain digital mereka dengan menggunakan alat terkini seperti Figma',
        short_desc: "Belajar Figma dari pemula hingga mahir",
        notes: "",
        duration: "2 jam",
        image:
          "https://res.cloudinary.com/dzajixld0/image/upload/v1701184049/figma_c2zvap.jpg",
        category: 1,
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mobile Development",
        price: "Rp150.000",
        description:
          "Kursus ini menyajikan perjalanan mendalam ke dunia pengembangan aplikasi mobile. Mulai dari dasar-dasar pemrograman mobile hingga praktik terbaik dalam pengembangan aplikasi Android dan iOS. Peserta akan mempelajari bahasa pemrograman seperti Kotlin dan Swift, merancang antarmuka pengguna yang responsif, dan mengintegrasikan fitur-fitur canggih seperti notifikasi push. Kursus ini cocok untuk pemula dan pengembang yang ingin menguasai keterampilan esensial dalam menciptakan aplikasi mobile yang inovatif dan dapat bersaing di pasar yang berkembang pesat.",
        short_desc: "Belajar Flutter dari pemula hingga mahir",
        notes: "",
        duration: "3 jam",
        image:
          "https://res.cloudinary.com/dzajixld0/image/upload/v1701184048/mobile_yx7o9x.jpg",
        category: 1,
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Belajar Fotografi",
        price: "Rp150.000",
        description:
          "Kursus ini mengajak peserta untuk menjelajahi seni fotografi melalui lensa kreatif. Dari teknik dasar hingga konsep lanjutan, kursus ini mencakup pemahaman mendalam tentang pengaturan kamera, pencahayaan, dan komposisi visual. Peserta akan belajar mengambil gambar yang menarik, mengedit foto dengan perangkat lunak profesional, dan mengembangkan gaya fotografi pribadi. Kursus ini cocok untuk pemula dan hobiis fotografi yang ingin mengasah keterampilan teknis mereka dan mengembangkan bakat artistik dalam dunia fotografi.",
        short_desc: "Belajar penggunaan kamera dari pemula hingga mahir",
        notes: "",
        duration: "3 jam",
        image:
          "https://res.cloudinary.com/dzajixld0/image/upload/v1701184050/photographer_lygdey.jpg",
        category: 1,
        mentorID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {});
  },
};
