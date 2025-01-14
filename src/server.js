const express = require('express');
const app = express();
const router = express.Router();
const PORT = 8081;
const cors = require('cors');

app.use(cors());

router.get('/watches', function(req, res) {
  res.json({
    data: [
      {
        name: 'Apple Watch Series 6',
        brand: 'Apple',
        price: 529
      },
      {
        name: 'Apple Watch SE',
        brand: 'Apple',
        price: 369
      },
      {
        name: 'Apple Watch Series 3',
        brand: 'Apple',
        price: 259
      }
    ],
  });
});

router.get('/iphones', function(req, res) {
  res.json({
    data: [
      {
        name: 'iPhone 12 Pro',
        brand: 'Apple',
        price: 1399 
      },
      {
        name: 'iPhone 12',
        brand: 'Apple',
        price: 979
      },
      {
        name: 'iPhone SE',
        brand: 'Apple',
        price: 599
      },
    ],
  });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`API started on port ${PORT}`);
});
