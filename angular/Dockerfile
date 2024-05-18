FROM httpd:2.4

# Copy dist
COPY ./dist/directus-angular-example /usr/local/apache2/htdocs/
RUN chmod 755 -R /usr/local/apache2/htdocs/

# Config Apache
RUN sed -i 's/^#ServerName www.example.com:80/ServerName GUI/'  /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/^    AllowOverride none/AllowOverride All/'  /usr/local/apache2/conf/httpd.conf  && \
    sed -i 's/^#LoadModule rewrite_module/LoadModule rewrite_module/'  /usr/local/apache2/conf/httpd.conf  && \ 
    sed -i 's/^#LoadModule proxy_module/LoadModule proxy_module/'  /usr/local/apache2/conf/httpd.conf  && \
    sed -i 's/^#LoadModule proxy_http_module/LoadModule proxy_http_module/'  /usr/local/apache2/conf/httpd.conf

# append specific conf
COPY ./gui.conf /var
RUN cat /var/gui.conf >> /usr/local/apache2/conf/httpd.conf && rm /var/gui.conf
RUN sed -i "s/Listen 80/Listen 4200/g" /usr/local/apache2/conf/httpd.conf

EXPOSE 4200
