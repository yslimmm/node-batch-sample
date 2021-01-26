# NodeBatchSample
노드 기반의 배치 서비스 샘플로 작성해보았다.

### 실행방법
```
$ npm i

# NODE_ENV: development
$ pm2 start ecosystem.config.js

# NODE_ENV: production
$ pm2 start ecosystem.config.js [--env production]
```
