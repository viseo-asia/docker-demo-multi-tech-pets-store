docker-compose build --no-cache
docker rm -f pets-rabbits
docker run -p 30000:5000 --name pets-rabbits -d pets-rabbits_server
