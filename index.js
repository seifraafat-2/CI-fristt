const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;  // هنا ممكن تستخدم متغير بيئي أو رقم ثابت

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
