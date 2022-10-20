## simple-express
This is a simple node-express project for testing environment on vps hosting hostinger with docker

Ini adalah proyek node-express sederhana untuk menguji lingkungan di vps hosting hostinger dengan buruh pelabuhan

## Library/Framework used (Library/Framework yang digunakan)
- Express js (4.18.1)
- Axios (0.27.2)
- Handlebars (4.7.7)
- Moment (2.29.4)

## How to install locally (Cara install di local)

```
git clone https://github.com/ussho-dev/simple-express.git
cd simple-express
npm install
```

## How to run locally (Cara menjalankan di local)

```npm start``` or ```node server.js```

Then access http://localhost:3000

## How to run with docker (Cara menjalankan dengan docker)

```
docker build . -t simple-express
docker run -p 3000:3000 simple-express
```

Then access (Kemudian aksess) => http://localhost:3000

