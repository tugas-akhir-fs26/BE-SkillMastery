"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Courses", [
      {
        title: "Belajar NodeJS",
        price: "Rp200.000",
        description:
          'Belajar Node.js dirancang untuk memberikan pemahaman mendalam tentang platform JavaScript runtime yang sangat populer, Node.js. Dalam kursus ini, peserta akan mempelajari dasar-dasar Node.js, termasuk cara membangun aplikasi web yang efisien dan skalabel. Materi kursus mencakup konsep dasar Node.js, pengelolaan paket menggunakan npm, penggunaan ekosistem modul, dan bagaimana Node.js berinteraksi dengan server. Peserta juga akan mendapatkan keterampilan praktis dalam mengembangkan aplikasi real-time menggunakan teknologi Node.js. Kursus ini cocok untuk pemula yang ingin memahami dasar-dasar Node.js dan pengembang yang ingin meningkatkan keterampilan pengembangan web mereka dengan memanfaatkan kekuatan Node.js',
        short_desc : "Belajar NodeJS dari pemula hingga mahir",
        notes : "",
        duration : "2 jam",
        image : "https://res.cloudinary.com/dzajixld0/image/upload/v1701184049/web_qywjfy.jpg",
        category : 1,
        mentorID : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
