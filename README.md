In the project directory, you can run:

```sh
minikube start
minikube ssh
sudo ip link set docker0 promisc on
minikube addons enable ingress
minikube addons enable ingress-dns
helm install --set auth.username=pguser --set auth.password=pass123 --set auth.database=health --set architecture=replication release oci://registry-1.docker.io/bitnamicharts/postgresql
kubectl apply -f deploy.yaml
kubectl apply -f k8s
minikube tunnel
```

Starts up the kubernetes cluster locally<br />
Execute `curl -X GET "http://example.local/health/check?url=http://www.google.com"` to test the service after modifying the etc/host file and mapping the url to ingress-service ip address