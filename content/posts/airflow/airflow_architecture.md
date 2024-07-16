---
date: "2024-07-16"
title: "Airflow 기본 구조"
description: "Airflow 기본 구조에 대해서 공부한 내용을 정리하였습니다."
categories: airflow
tags: airflow architecture worker scheduler webserver
---

[Airflow Documentation](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html) 의 Airflow Architecture 를 보고 공부하고 정리해보려고 한다.  


## 개요

Airflow 는 Workflows 를 구축하고 실행할 수 있는 플랫폼이다. Workflow 는 `DAG` 를 사용해서 표현한다. 