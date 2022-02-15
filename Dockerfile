FROM node:16-alpine

RUN echo ---start---
RUN echo ${AUTH_KEY_ARG}
RUN echo --- end ---
CMD ['ls']