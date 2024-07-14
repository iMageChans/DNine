#!/bin/sh

# 等待数据库服务启动
echo "Waiting for postgres..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "PostgreSQL started"

# 启动 Celery worker
celery -A query_server worker --loglevel=info
