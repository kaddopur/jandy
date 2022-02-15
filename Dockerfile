FROM node:16-alpine

ENV BAR=asdf
RUN echo ${BAR}
RUN echo ${TOKEN}

CMD ['ls']