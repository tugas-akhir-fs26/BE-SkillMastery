"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contents", [
      {
        courseID: 21,
        section: `[
          {
            "id": "section_1",
            "content": "Node.js adalah platform runtime JavaScript yang bersifat open-source dan cross-platform. Ini memungkinkan JavaScript dijalankan di sisi server untuk membangun aplikasi web dan jaringan. Node.js menggunakan model non-blocking dan event-driven, membuatnya efisien dan sangat cocok untuk aplikasi real-time."
          },
          {
            "id": "section_2",
            "content": "Instalasi Node.js dapat dilakukan dengan mengunduh installer dari situs resmi Node.js. Setelah instalasi, Anda dapat memeriksa versi yang terinstal menggunakan perintah 'node -v' di terminal atau command prompt."
          },
          {
            "id": "section_3",
            "content": "Memulai dengan Node.js bisa dimulai dengan membuat program sederhana 'Hello World'. Ini membantu Anda memastikan bahwa Node.js telah diinstal dengan benar dan berfungsi."
          },
          {
            "id": "section_4",
            "content": "Asynchronous Programming adalah fitur utama di Node.js. Ini memungkinkan operasi non-blocking, sehingga aplikasi dapat menjalankan banyak operasi secara bersamaan tanpa harus menunggu satu selesai sebelum yang lain dimulai."
          },
          {
            "id": "section_5",
            "content": "Express.js adalah kerangka kerja web Node.js yang populer. Ini menyediakan fitur-fitur yang diperlukan untuk membangun aplikasi web, seperti routing, middleware, dan manajemen template."
          },
          {
            "id": "section_6",
            "content": "npm (Node Package Manager) adalah manajer paket untuk JavaScript. Ini memungkinkan Anda mengelola dependensi dan modul di proyek Node.js Anda. Anda dapat menginstal paket, mengelola versi, dan mengatasi masalah dependensi dengan mudah."
          },
          {
            "id": "section_7",
            "content": "Mengelola paket dengan npm melibatkan perintah-perintah seperti 'npm install' untuk menginstal paket, 'npm uninstall' untuk menghapus paket, dan 'npm update' untuk memperbarui paket."
          },
          {
            "id": "section_8",
            "content": "Membuat module di Node.js memungkinkan Anda memecah kode Anda menjadi bagian-bagian yang lebih kecil dan dapat digunakan kembali. Anda dapat membuat modul sendiri atau menggunakan modul yang sudah ada dari npm."
          },
          {
            "id": "section_9",
            "content": "Debugging di Node.js dapat dilakukan dengan menggunakan debugger internal atau alat eksternal seperti Visual Studio Code. Ini membantu Anda melacak bug dan memahami alur eksekusi program."
          },
          {
            "id": "section_10",
            "content": "Middleware dalam Express.js adalah fungsi-fungsi yang berpartisipasi dalam siklus request-response. Ini dapat digunakan untuk menangani log, otorisasi, dan fungsi-fungsi lainnya sebelum atau sesudah request mencapai handler rute."
          }
        ]
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Contents", null, {});
  },
};
