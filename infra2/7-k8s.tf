provider "kubernetes" {
  config_path = "~/.kube/config" 
  // Asegúrate de que el archivo de configuración de Kubernetes está en la ubicación correcta
}
data "kubernetes_service" "lb_service" {
  metadata {
    name = "aws-load-balancer-controller"
    namespace = "kube-system"
  }
}

output "lb_ingress" {
  value = data.kubernetes_service.lb_service.load_balancer_ingress.0.hostname
}
