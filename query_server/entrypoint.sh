#!/bin/sh

# 等待数据库服务启动
echo "Waiting for postgres..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "PostgreSQL started"

# 运行数据库迁移
python manage.py migrate

# 启动Django服务器
exec "$@"
