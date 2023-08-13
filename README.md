# ecs-demo
Demo how to deploy app to AWS ECS with its infras

# Network
## Network requirements
- Custom VPC
- Has 3 layers with 2 subnets for each (equal 2 AZ for each layer)
    + Layer 1: Load Balancer (public subnet)
    + Layer 2: Container (using ecs, private subnet)
    + Layber 3: Database (private subnet)
- Has an Internet Gateway
- Has Router Tables
- Has NACLs 
- Has Security Groups

## Network design
TBD
# Container
- Simple express server
    + 1 endpoint that return json with hello world
    + log request's headers to console        
- TBD


# TODO
- [ ] Create infrastructure using Terrafrom
- [ ] Clean up job
- [ ] 