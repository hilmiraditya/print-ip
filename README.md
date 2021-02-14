
# Print IP

## Docker Images

The docker images size < 100mb
![enter image description here](./docker_images.JPG)

## Result

The response contains the client ip and the counts of request
![enter image description here](./curl_result.JPG)

## Run Container Via Docker-Compose 

    docker-compose up -d
    docker-compose down 

## Run Container Via Docker CLI 

    docker run -d -p 80:3000 --name <container_name> <images_name>:<tag>
