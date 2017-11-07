#!/bin/bash
rm -rf /root/octobercms/*
cp -rf /root/octobercms_temp/* /root/octobercms
rm -rf /root/octobercms/storage/framework/cache/*
str="[program:cron]\n\
command=/bin/bash -c \"source /etc/sysconfig/crond && exec /usr/sbin/crond -n $CRONDARGS\" \n\
numprocs=1\n\
directory=/tmp\n\
umask=022\n\
priority=999\n\
autostart=true\n\
autorestart=true\n\
startsecs=10\n\
startretries=3\n\
exitcodes=0,2\n\
stopsignal=TERM\n\
stopwaitsecs=10\n\
user=root"
rm /etc/supervisor/conf.d/cron.ini
cp /root/octobercms/root_crontab /var/spool/cron/root
touch /etc/supervisor/conf.d/cron.ini
echo -e  $str > /etc/supervisor/conf.d/cron.ini
chmod 777 -R /root/octobercms
chmod 777 -R /root/octobercms/storage
rm -rf /tmp/mysql.sock
ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
chmod 777 -R /var/lib/mysql
/usr/local/bin/php /root/octobercms/artisan cache:clear
supervisord -c /etc/supervisor/supervisord.conf
