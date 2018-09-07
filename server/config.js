const config = {
  mongoURL: 'mongodb://admin:admin1234@ds249092.mlab.com:49092/kanban' || process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: 49094 || process.env.PORT || 8000,
};

export default config;
