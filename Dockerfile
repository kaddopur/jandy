FROM node:16-alpine

RUN echo ${AUTH_KEY_ARG}
CMD ['ls']