var subject = require('./subject.js')
var mock = require('mock-fs');
subject.inc(0,undefined);
subject.inc('-2','undefined');
subject.inc('-1','3');
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize('');
subject.normalize('(212) 234-5644');
subject.normalize('636-018-4905');
subject.format('','',false);
subject.format('590-907-4026','(###) ###-####',{normalize:true});
subject.format('590-907-4026','(###) ###-####',{normalize:false});
subject.format('590-907-4026','(###) ###-####',false);
subject.blackListNumber('');
subject.blackListNumber('(212) 234-5644');
subject.blackListNumber('458-902-6294');
