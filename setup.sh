image_version=`date +%Y%m%d%H%M`;
echo $image_version;
# cd vue2docker
git pull --rebase origin master;
docker container stop hexi-front
docker container rm hexi-front
docker image rm hexi-front:latest
docker build -t hexi-front .
docker images;
docker run -p 80:80 -d --name hexi-front hexi-front:latest;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs hexi-front;
docker rmi $(docker images -f "dangling=true" -q)