# Use the official Node.js image as the base image
FROM node:16.17.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json) files
COPY package.json package-lock.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "index.js"]
