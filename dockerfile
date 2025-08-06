# Use official Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

EXPOSE 3000

# Command to run app or tests
CMD ["npm", "test"]
