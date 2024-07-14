# 使用官方的 Python 镜像作为基础镜像
FROM python:3.12.1

# 设置工作目录
WORKDIR /app

# 复制当前目录的内容到工作目录
COPY . /app

# 安装 Python 依赖
RUN apt-get update && apt-get install -y netcat-openbsd
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# 复制 entrypoint.sh 脚本并赋予执行权限
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 设置环境变量，确保 Python 输出不被缓存
ENV PYTHONUNBUFFERED 1

# 暴露 Django 默认的运行端口
EXPOSE 8000

# 设置入口点
ENTRYPOINT ["/entrypoint.sh"]

# 启动 Django 应用
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
