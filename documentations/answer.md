## 3. Query & Migrations : (20 Point)
3.a Buatlah satu query yang menampilkan semua data produk yang hanya memiliki merek , memiliki harga antara 100.000 -200.000, dengan stok > 5, dan diurutkan berdasarkan harga paling rendah ke harga yang paling tinggi.

**JAWABAN**  
```sql
select *
from "Products" p 
where p."MerekId" is not null and p.stock > 5 and cast(p.price as int) between 100000 and 200000 
order by cast(price as int) asc;
```

3.b Jelaskan konsep migrasi database dan bagaimana Anda dapat menerapkannya dalam aplikasi Express.js menggunakan PostgreSQL.

**JAWABAN**  
Migrasi database adalah pembuatan table pada database. Migrasi database dapat dilakukan dengan bantuan ORM Sequelize dan sequelize-cli. Dengan sequeliz-cli dapat dilakukan dengan menuliskan seperti ini di terminal:

```
npx sequelize-cli model:create --name [PascalCase-Singular] --attributes name:string,attr:type ...
```
Kemudian dimigrasi menggunakan:
```
npx sequelize-cli db:migrate
```

## 6. Penjabaran Diri: (10 Point)

Ceritakan dengan singkat, apa kelebihanmu sehingga bisa disebut Backend Programmer ?

**JAWABAN**  
Kelebihan saya sebagai backend programmer adalah cepat beradaptasi. Sebelum bootcamp basic saya bukan programmer. Kemudian saat bootcamp materi yang diberikan adalah Node.js dan Express.js, saya bisa beradaptasi dengan baik dibuktikan dengan saya adalah top 5 lulusan terbaik. 

Kemudian saat dunia kerja, saya kerja di BNI menggunakan Java SpringBoot, dalam waktu kurang dari satu minggu saya sudah bisa mengikuti dinamika kolega lainnya. Saya juga sering belajar sendiri, saat ini saya belajar sendiri python.

## 7. Pengetahuan Skill : (10 Point)

Apa yang kamu ketahui tentang connection pool ? Jelaskan cara penerapannya sesuai dengan pengetahuan yang kamu ketahui!

**JAWABAN**  
Dahulu saya pernah diajari saat bootcamp dengan analogi yang menarik. Connection pool bagaikan kursi kosong di rumah makan. Misalnya connection pool ada 10, maka kursi kosong ada 10. Kegunaan connection pool adalah menghemat biaya dan menjaga stabilitas database.

Dari pada membuat connection pool setiap ada request, lebih baik menyediakan connection pool siap pakai. Dan kenapa hanya 10 tidak takterhingga. Karena seperti analogi restoran, jika ada kursi yang tak terhingga dapur akan kewalahan jika ada banyak pelanggan (request). Oleh karena itu connection pool sejumlah yang ideal saja. Sehingga kinerja database tetap ideal.