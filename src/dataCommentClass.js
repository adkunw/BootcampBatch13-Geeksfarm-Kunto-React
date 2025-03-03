import { faker } from "@faker-js/faker";

class DataComment {
  static generateComments(count = 5) {
    return Array.from({ length: count }, () => ({
      avatar: faker.image.avatar(), // URL gambar avatar
      name: faker.person.fullName(), // Nama lengkap
      comment: faker.lorem.sentence(), // Komentar random
      dateTime: faker.date.recent().toLocaleString(), // Format date-time
    }));
  }
}

// Contoh penggunaan
export const comments = DataComment.generateComments(10);

export default DataComment;
