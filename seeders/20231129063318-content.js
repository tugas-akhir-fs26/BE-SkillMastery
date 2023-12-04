"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contents", [
      {
        courseID: 13,
        section: `{
        "section_1": "Node.js adalah platform runtime JavaScript yang bersifat open-source dan cross-platform. Ini memungkinkan JavaScript dijalankan di sisi server untuk membangun aplikasi web dan jaringan. Node.js menggunakan model non-blocking dan event-driven, membuatnya efisien dan sangat cocok untuk aplikasi real-time.",
        "section_2": "Instalasi Node.js dapat dilakukan dengan mengunduh installer dari situs resmi Node.js. Setelah instalasi, Anda dapat memeriksa versi yang terinstal menggunakan perintah 'node -v' di terminal atau command prompt.",
        "section_3": "Memulai dengan Node.js bisa dimulai dengan membuat program sederhana 'Hello World'. Ini membantu Anda memastikan bahwa Node.js telah diinstal dengan benar dan berfungsi.",
        "section_4": "Asynchronous Programming adalah fitur utama di Node.js. Ini memungkinkan operasi non-blocking, sehingga aplikasi dapat menjalankan banyak operasi secara bersamaan tanpa harus menunggu satu selesai sebelum yang lain dimulai.",
        "section_5": "Express.js adalah kerangka kerja web Node.js yang populer. Ini menyediakan fitur-fitur yang diperlukan untuk membangun aplikasi web, seperti routing, middleware, dan manajemen template.",
        "section_6": "npm (Node Package Manager) adalah manajer paket untuk JavaScript. Ini memungkinkan Anda mengelola dependensi dan modul di proyek Node.js Anda. Anda dapat menginstal paket, mengelola versi, dan mengatasi masalah dependensi dengan mudah.",
        "section_7": "Mengelola paket dengan npm melibatkan perintah-perintah seperti 'npm install' untuk menginstal paket, 'npm uninstall' untuk menghapus paket, dan 'npm update' untuk memperbarui paket.",
        "section_8": "Membuat module di Node.js memungkinkan Anda memecah kode Anda menjadi bagian-bagian yang lebih kecil dan dapat digunakan kembali. Anda dapat membuat modul sendiri atau menggunakan modul yang sudah ada dari npm.",
        "section_9": "Debugging di Node.js dapat dilakukan dengan menggunakan debugger internal atau alat eksternal seperti Visual Studio Code. Ini membantu Anda melacak bug dan memahami alur eksekusi program.",
        "section_10": "Middleware dalam Express.js adalah fungsi-fungsi yang berpartisipasi dalam siklus request-response. Ini dapat digunakan untuk menangani log, otorisasi, dan fungsi-fungsi lainnya sebelum atau sesudah request mencapai handler rute."
      }`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Contents", null, {});
  },
};
