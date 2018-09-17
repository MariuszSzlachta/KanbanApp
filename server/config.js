const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin1234@ds249092.mlab.com:49092/kanban',
  port: process.env.PORT || 8000,
};

export default config;
