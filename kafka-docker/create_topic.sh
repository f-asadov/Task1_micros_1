#!/bin/bash

set -e

# Ожидаем, пока Kafka и Zookeeper поднимутся
sleep 10

# Создаем первый топик
echo "Creating kafka topic: user_created"
kafka-topics --create --topic user_created --partitions 1 --replication-factor 1 --zookeeper zookeeper:2181

# Создаем второй топик
echo "Creating kafka topic: another_topic"
kafka-topics --create --topic user_updated --partitions 1 --replication-factor 1 --zookeeper zookeeper:2181

# Выводим список всех топиков для проверки
echo "Successfully created the following topics:"
kafka-topics --list --zookeeper zookeeper:2181
