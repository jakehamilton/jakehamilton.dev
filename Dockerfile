FROM m4rcu5/lighttpd

LABEL maintainer="Jake Hamilton <jake@intergalactic.email>"

ADD ./src/ /var/www/localhost/htdocs/
COPY ./mime-types.conf /etc/lighttpd/mime-types.conf
