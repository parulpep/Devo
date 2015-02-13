README
======

A short paragraph
-----------------
> EC2 (Elastic computing class) is an Amazon web 
service that provides computing resources. It 
provides instances that allow easy scaling of 
capacity according to requirements. The instances 
can be created and terminated as needed. It aids in
load balancing. As per the incoming traffic, 
the load is distributed number of EC2 instances. 
It allows easy provisioning of cloud based desktops.
It provides flexibility tot he users. They pay for 
what they use.

> Using AWS SDK of language of choice one can connect with the instance using AWS APIs
and can gain full control of the services. Here Java has been used for binding.

> Reference: https://d36cz9buwru1tt.cloudfront.net/AWS_Overview.pdf

Screenshots of API demonstration and Output
-------------------------------------------
![Alt text][id1]

![Alt text][id2]

![Alt text][id3]

![Alt text][id4]


[id1]: https://github.com/parulpep/Devo/blob/master/instanceSnapshotAWS.PNG "Running instance used for API call"

[id2]: https://github.com/parulpep/Devo/blob/master/output_snapshot.PNG "Output showing authentication and API call"

[id3]: https://github.com/parulpep/Devo/blob/master/securityGroup.PNG "Security group used in program"

[id4]: https://github.com/parulpep/Devo/blob/master/keypairs_snapshot.PNG "Key pairs used in program"

Explanation
-----------
> I installed AWS SDK for Java and authenticated 
to the Amazon web services using secret_access_key 
and access_key_Id. The simple API call made was getPasswordData
that takes in the instance ID of the instance running and outputs 
Instance ID, Timestamp and PasswordData.
