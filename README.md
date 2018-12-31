# Pet Demo App

This repository showcase how some of the most common technologies can be deployed in a container.

As commonly done for demo applications, this demo application with implement a pretend "Pet Shop" application.

## Implementation

This demo application is implemented using Docker Swarm.

The software stack is composed of
* A reverse proxy (NGinx)

* A single page application web frontend implemented multiple times with several technologies:
    * `pets-web-vue`: VueJS version, exposed on port 8090
    * `pets-web-react`: ReactJS version, exposed on port 8091
    * `pets-web-angular`: Angular version, exposed on port 8092

* Various API backends (each backend is implemented with a different technology)
    * `pets-cats`: NodeJs (with Express)
    * `pets-dogs`: Python (with Flask)
    * `pets-hamsters`: Java (with Springboot) 
    * `pets-rabbits`: C# (using a Windows container)
    * `pets-parrots`: PHP (with Silex)

## Requirements

You will need the following to deploy these services:
* Docker Swarm
* Docker registry

## Goal

The goal of this mini-project is to demonstrate:
* How to containerize some of the most common technologies (NodeJS, Python, Java, PHP, C#)
* How to build and deploy service on Docker Swarm
* How to use a reverse proxy to serve the frontend and backend
* How load balencing works (each backend has multiple replicas and the frontend will display from which replicas the data come from)