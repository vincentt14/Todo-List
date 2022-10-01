const getInitialData = () => ([
  {
    id: 1,
    title: "Membuat Project Pribadi",
    body: "Hari minggu habis pulang dari gereja harus lanjut project pribadi sampai fitur search selesai",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
  {
    id: 2,
    title: "GYM",
    body: "Besok pulang dari kampus jam 5 pergi ke gym",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
  {
    id: 3,
    title: "Baca Atomic Habit",
    body: "Lanjutkan progress baca buku Atomic Habis hal.154, target sampai dengan hal.200",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
  {
    id: 4,
    title: "Dicoding",
    body: "Selesai dari GYM pakai waktu minimal 3 jam untuk lanjut kelas Dicoding",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
  {
    id: 5,
    title: "Udemy",
    body: "Sediakan waktu luang buat lanjut pembelajaran di Udemy - React",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
  {
    id: 6,
    title: "Makan",
    body: "Jangan lupa makan",
    createdAt: '2022-04-14T04:27:34.572Z',
    isDone: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
