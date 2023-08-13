# ecs-demo
demo deploy nodejs app using aws ecs with custom vpc


# Network
- Custome VPC
- Has 3 layer with 2 subnets for each layer (1 subnet for 1 AZ)
    + Layer Load Balancer (public subnet)
    + Layer container (using ecs, private subnet)
    + Layber database (private subnet)
- Has Internet Gateway
- Has Router Table
- Has NACL 
- Has Security Group

# Container
- Simple express with logging
- ECS

