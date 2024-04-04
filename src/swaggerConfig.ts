import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API endpoints',
    },
    servers: [{
      url: 'http://localhost:4000/'
    }]
  },
  apis: ['C:\\Users\\user\\node\\carbon_Assessment\\src\\routes\\user.routes.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;
