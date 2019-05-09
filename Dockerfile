FROM python:3-onbuild
COPY . /usr/src/app
RUN pip3 install numpy
CMD ["python3","coding_challenge_2.py"]


