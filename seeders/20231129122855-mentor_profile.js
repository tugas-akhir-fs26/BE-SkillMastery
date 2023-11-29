"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Mentor_Profiles", [
      {
        userID: 1,
        mentorID: 1,
        bio: "Sebagai seorang instruktur, saya berkomitmen untuk memandu siswa dalam perjalanan mereka memahami dan menguasai dunia pengembangan web. Saya percaya bahwa keterampilan pengembangan web adalah salah satu kunci keberhasilan dalam era digital ini, dan saya bersemangat untuk membagikan pengetahuan dan pengalaman saya kepada siswa-siswa saya. Dengan pengalaman praktis dalam pengembangan web, saya telah bekerja pada berbagai proyek yang melibatkan teknologi terbaru, termasuk HTML, CSS, JavaScript, kerangka kerja (frameworks) front-end seperti React dan Angular, serta bahasa pemrograman back-end seperti Node.js, Python, atau Ruby on Rails. Saya memiliki keahlian dalam merancang dan mengembangkan aplikasi web responsif, menciptakan antarmuka pengguna yang menarik, dan memecahkan tantangan teknis yang mungkin muncul selama proses pengembangan.",
        skill: "[html,css,javascript]",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Mentor_Profiles", null, {});
  },
};
