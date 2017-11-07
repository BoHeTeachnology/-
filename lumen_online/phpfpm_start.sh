#!/bin/bash
rm -rf /root/worker_lumen/*
cp -rf /root/code_temp/* /root/worker_lumen
cp /root/code_temp/.env /root/worker_lumen
chmod 777 -R /root/worker_lumen
chmod 777 -R /root/worker_lumen/storage
supervisord -c /etc/supervisor/supervisord.conf
