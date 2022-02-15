FROM node:16-alpine

ARG TOKEN
ENV BAR=asdf
RUN echo ${BAR}
RUN echo ${TOKEN}

CMD ['ls']