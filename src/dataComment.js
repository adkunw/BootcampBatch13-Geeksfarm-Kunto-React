import { faker } from "@faker-js/faker";

// Fungsi untuk menghasilkan data komentar
export function generateComments(count = 5) {
  return Array.from({ length: count }, () => ({
    avatar: faker.image.avatar(), // URL gambar avatar
    name: faker.person.fullName(), // Nama lengkap
    comment: faker.lorem.sentence(), // Komentar random
    dateTime: faker.date.recent().toLocaleString(), // Format date-time
  }));
}

// Contoh penggunaan
export const comments = generateComments(10);

export default comments;
