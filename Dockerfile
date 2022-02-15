FROM node:16-alpine

RUN echo${TOKEN}
CMD ['ls']