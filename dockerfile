FROM node:14 as frontend

#set the working directory for the frontend
WORKDIR /app/public

#copy the frontend app's code to the working directory

COPY client/package*.json ./
RUN npm install
COPY client/ .

#Build the frontend app
RUN npm run build

# For backend

FROM node:14 as backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend app's code to the working directory
COPY server/package*.json ./
RUN npm install
COPY server/ .

# Expose the backend's port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]

# Use a multi-stage build to combine the frontend and backend
FROM node:14

# Set the working directory for the combined app
WORKDIR /app

# Copy the built frontend app from the frontend stage
COPY --from=frontend /app/public/dist ./frontend

# Copy the built backend app from the backend stage
COPY --from=backend /app/backend .

# Expose the frontend's port
EXPOSE 8080

# Start the combined app
CMD ["node", "server.js"]