README
======

A short paragraph
-----------------
> EC2 (Elastic computing class) is an Amazon web 
service that provides computing resources. It 
provides instances that allow easy scaling of 
capacity according to requirements. It aids in
load balancing. As per the incoming traffic, 
the load is distributed number of EC2 instances. 
It allows easy provisioning of cloud based desktops.

> using AWS SDK of language of choice one can connect with the instance using AWS APIs
and can gain full control of the services.

> Reference: https://d36cz9buwru1tt.cloudfront.net/AWS_Overview.pdf

Screenshots of API demonstration and Output
-------------------------------------------
![Alt text][id1]
![Alt text][id2]
![Alt text][id3]
![Alt text][id4]


[id1]: instanceSnapshotAWS.png
[id2]: output_snapshot.png
[id3]: securityGroup.png
[id4]: keypairs_snapshot.png

Explanation
-----------
> I installed AWS SDK for Java and authenticated 
to the amazon web services using secret_access_key 
and access_key_Id. The simple API call made was getPasswordData
that takes in the instance ID of the instance running
