import expres from 'express';

const app = expres();

app.get('/', (req, res) => {
  res.send('This is a landing page');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
