resource "aws_route53_zone" "my_zone" {
  name = "banco-pichincha.ervicperez.dev"
}

resource "aws_route53_record" "my_record" {
  zone_id = aws_route53_zone.my_zone.zone_id
  name    = "banco-pichincha.ervicperez.dev"
  type    = "A"
  ttl     = "300"
  records = [data.kubernetes_service.lb_service.load_balancer_ingress.0.hostname]
}