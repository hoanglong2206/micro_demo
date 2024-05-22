FROM nginx:alpine

RUN rm /etc/nginx/nginx.conf 

COPY nginx.conf.template /etc/nginx/nginx.conf.template
CMD envsubst '\$PRODUCTS_URL \$SHOPPING_URL \$CUSTOMER_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'